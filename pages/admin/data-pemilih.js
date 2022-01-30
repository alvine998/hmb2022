import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';
import swal from 'sweetalert';

DataPemilih.title = "Data-Pemilih";

function DataPemilih(props) {
    // State
    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [collection, setCollection] = useState([]);
    const [Id, setId] = useState("");
    const [collect, setCollect] = useState([]);
    const [searching, setSearching] = useState(false);

    const handlingNama = (e) => {
        setNama(e.target.value);
    }
    const handlingUsername = (e) => {
        setUsername(e.target.value);
    }
    const handlingPass = (e) => {
        setPassword(e.target.value);
    }

    const getData = () => {
        var key = localStorage.getItem("loginKey")
        console.log(key);
        if (key == null) {
            router.push("/login")
        }
    }

    const saveData = () => {
        const data = {
            nama: nama,
            username: username,
            password: password,
        }
        console.log(data);

        axios.post(`http://localhost:4000/users`, data).then(
            res => {
                swal("Data berhasil disimpan", { icon: "success" });
                setNama(""); setPassword(""); setUsername("");
                getDataPemilih();
            }
        )
    }

    const deletePemilih = (id) => {
        axios.delete(`http://localhost:4000/users/${id}`).then(
            res => {
                swal("Data berhasil dihapus", { icon: "success" });
                getDataPemilih();
            }
        )
    }

    const updatePemilih = (id) => {
        const data = {
            nama: nama,
            username: username,
            password: password,
        }
        console.log(data);

        axios.put(`http://localhost:4000/users/${id}`, data).then(
            res => {
                swal("Data berhasil diubah", { icon: "success" });
                getDataPemilih();
            }
        )
    }

    const getDataPemilihOne = (id) => {
        axios.get(`http://localhost:4000/users/${id}`).then(
            res => {
                const collection2 = res.data;
                console.log(collection2);
                setNama(collection2.nama); setPassword(collection2.password);
                setUsername(collection2.username); setId(collection2._id)
            }
        )
    }

    const getDataPemilih = () => {
        axios.get(`http://localhost:4000/users`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection.reverse());
            }
        )
    }

    const searchUsername = (username) => {
        axios.get(`http://localhost:4000/search?username=${username}`).then(
            res => {
                const collect = res.data;
                console.log(collect);
                setCollect(collect);
            }
        )
    }

    const renderSearch = () => {
        return (
            collect.map((res, i) => (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{res.nama}</td>
                    <td>{res.username}</td>
                    <td>{res.password}</td>
                    <td>{res.status_user}</td>
                    <td>{res.keterangan}</td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModalEdit" onClick={() => { getDataPemilihOne(res._id) }}>Edit</button> <button onClick={() => deletePemilih(res._id)} className='btn btn-danger'>Hapus</button></td>
                </tr>
            ))
        )
    }

    const router = useRouter();
    useEffect(() => {
        getData();
        getDataPemilih();
    }, [])

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar pemilih />
                </div>
                <div className='col-md'>
                    <div className={'container ' + (styles.uppers)}>
                        <div className='row'>
                            <div className='col-md'>
                                {/* Modal */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Input Data Pemilih</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div>
                                                        <input required value={nama} onChange={handlingNama.bind(this)} placeholder='Nama Pemilih' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input required value={username} onChange={handlingUsername.bind(this)} placeholder='Username' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input value={password} placeholder='Password' onChange={handlingPass.bind(this)} type={"password"} className='form-control' required />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => { saveData() }}>Simpan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Edit */}
                                <div class="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Edit Data Pemilih</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div>
                                                        <input required value={nama} onChange={handlingNama.bind(this)} placeholder='Nama Pemilih' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input required value={username} onChange={handlingUsername.bind(this)} placeholder='Username' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input value={password} placeholder='Password' onChange={handlingPass.bind(this)} type={"password"} className='form-control' required />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => { updatePemilih(Id) }}>Simpan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">+ Tambah Data Pemilih</button>
                            </div>
                            <div className={'col-md-3 ' + (styles.righthere)}>
                                <input className='form-control' value={username} onChange={handlingUsername.bind(this)} type={"text"} placeholder='Cari disini' />
                            </div>
                            <div className={'col-md-2'}>
                                {
                                    searching == false ? (
                                        <button onClick={() => { setSearching(true), searchUsername(username) }} className='btn btn-outline-success w-50'>Cari</button>
                                    ) : (
                                        <button onClick={() => {setSearching(false), setUsername("")}} className='btn btn-outline-success w-50'>Hapus</button>
                                    )

                                }
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama User</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Keterangan</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searching == false ?
                                        collection.reverse().map((res, i) => (
                                            <tr key={i}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{res.nama}</td>
                                                <td>{res.username}</td>
                                                <td>{res.password}</td>
                                                <td>{res.status_user}</td>
                                                <td>{res.keterangan}</td>
                                                <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModalEdit" onClick={() => { getDataPemilihOne(res._id) }}>Edit</button> <button onClick={() => deletePemilih(res._id)} className='btn btn-danger'>Hapus</button></td>
                                            </tr>
                                        )) : renderSearch()
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataPemilih;