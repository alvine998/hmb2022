import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';
import swal from 'sweetalert';

DataKandidat.title = "Data-Kandidat";

function DataKandidat(props) {
    // State
    const [nama, setNama] = useState('');
    const [image, setImage] = useState(null);
    const [imagename, setImagename] = useState(null);
    const [keterangan, setKeterangan] = useState('');
    const [visi, setVisi] = useState('');
    const [misi, setMisi] = useState('');

    const [collection, setCollection] = useState([]);
    const [Id, setId] = useState("");
    const [collect, setCollect] = useState([]);
    const [searching, setSearching] = useState(false);

    // Handling
    const handlingNama = (e) => {
        setNama(e.target.value);
    }
    const handlingKeterangan = (e) => {
        setKeterangan(e.target.value);
    }
    const handlingVisi = (e) => {
        setVisi(e.target.value);
    }
    const handlingMisi = (e) => {
        setMisi(e.target.value);
    }
    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img); setImagename(URL.createObjectURL(img))
        }
    }

    // Function

    const getData = () => {
        var key = localStorage.getItem("loginKey")
        console.log(key);
        if (key == null) {
            router.push("/login")
        }
    }
    const router = useRouter();

    const getDataKandidat = () => {
        axios.get(`http://evotinghmb.herokuapp.com/kandidats`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection.reverse());
            }
        )
    }

    const getDataKandidatOne = (id) => {
        axios.get(`http://evotinghmb.herokuapp.com/kandidats/${id}`).then(
            res => {
                const collection2 = res.data;
                console.log(collection2);
                setNama(collection2.nama); setImage(collection2.foto);
                setKeterangan(collection2.keterangan); setVisi(collection2.visi);
                setMisi(collection2.misi); setId(collection2._id)
            }
        )
    }

    const updateKandidat = (id) => {
        const data = {
            nama: nama,
            foto: "images_" + image.name,
            keterangan: keterangan,
            visi: visi,
            misi: misi
        }
        console.log(data);

        axios.put(`http://evotinghmb.herokuapp.com/kandidats/${id}`, data).then(
            res => {
                swal("Data berhasil diubah", { icon: "success" });
                getDataKandidat();
            }
        )
    }

    const deleteKandidat = (id) => {
        axios.delete(`http://evotinghmb.herokuapp.com/kandidats/${id}`).then(
            res => {
                swal("Data berhasil dihapus", { icon: "success" });
                getDataKandidat();
            }
        )
    }

    const saveData = () => {
        const data = {
            nama: nama,
            foto: 'images_' + image.name,
            keterangan: keterangan,
            visi: visi,
            misi: misi
        }
        console.log(data);

        axios.post(`http://evotinghmb.herokuapp.com/kandidats`, data).then(
            res => {
                swal("Data berhasil disimpan", { icon: "success" });
                setNama(""); setImage(null); setKeterangan("");
                setVisi(""); setMisi("")
                getDataKandidat();
            }
        )
    }

    const uploadFoto = () => {
        let formdata = new FormData();
        formdata.append("images", image);

        axios.post(`http://evotinghmb.herokuapp.com/upload`, formdata).then(
            res => {
                console.log(res.data);
            }
        )
    }

    const deleteFoto = (foto) => {
        axios.delete(`http://evotinghmb.herokuapp.com/delete/${foto}`).then(
            res => {
                console.log("Delete image : ", res.data);
            }
        )
    }

    const searchUsername = (nama) => {
        axios.get(`http://evotinghmb.herokuapp.com/search?nama=${nama}`).then(
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
                    <td>{<img src={`http://evotinghmb.herokuapp.com/resources/uploads/${res.foto}`} className='w-100 h-100' />}</td>
                    <td>{res.visi}</td>
                    <td>{res.misi}</td>
                    <td>{res.keterangan}</td>
                    <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModalEdit" onClick={() => { getDataKandidatOne(res._id) }}>Edit</button> <button onClick={() => deleteKandidat(res._id)} className='btn btn-danger'>Hapus</button></td>
                </tr>
            ))
        )
    }

    useEffect(() => {
        getData();
        getDataKandidat();
    }, [])

    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar kandidat />
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
                                                        <input required value={nama} onChange={handlingNama.bind(this)} placeholder='Nama Kandidat' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input required value={keterangan} onChange={handlingKeterangan.bind(this)} placeholder='Keterangan' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input required value={visi} onChange={handlingVisi.bind(this)} placeholder='Visi' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <textarea required value={misi} onChange={handlingMisi.bind(this)} placeholder='Misi' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input onChange={handleImage.bind(this)} type={"file"} className='form-control' required />
                                                        <img src={imagename} className='w-100 h-100' />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => { saveData(), uploadFoto() }}>Simpan</button>
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
                                                        <input required value={nama} onChange={handlingNama.bind(this)} placeholder='Nama Kandidat' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input required value={keterangan} onChange={handlingKeterangan.bind(this)} placeholder='Keterangan' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input required value={visi} onChange={handlingVisi.bind(this)} placeholder='Visi' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <textarea required value={misi} onChange={handlingMisi.bind(this)} placeholder='Misi' type={"text"} className='form-control' />
                                                    </div>
                                                    <div style={{ paddingTop: 10 }}>
                                                        <input onChange={handleImage.bind(this)} type={"file"} className='form-control' required />
                                                        <img src={imagename} className='w-100 h-100' />
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => { updateKandidat(Id), uploadFoto() }}>Simpan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">+ Tambah Data Kandidat</button>
                            </div>
                            <div className={'col-md-3 ' + (styles.righthere)}>
                                <input className='form-control' type={"text"} placeholder='Cari disini' />
                            </div>
                            <div className={'col-md-2'}>
                                {
                                    searching == false ? (
                                        <button onClick={() => { setSearching(true), searchUsername(nama) }} className='btn btn-outline-success w-50'>Cari</button>
                                    ) : (
                                        <button onClick={() => { setSearching(false), setNama("") }} className='btn btn-outline-success w-50'>Hapus</button>
                                    )

                                }
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama Kandidat</th>
                                    <th scope="col">Foto Kandidat</th>
                                    <th scope="col">Visi</th>
                                    <th scope="col">Misi</th>
                                    <th scope="col">Keterangan</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    searching == false ?
                                        collection.map((res, i) => (
                                            <tr key={i}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{res.nama}</td>
                                                <td>{<img src={`http://evotinghmb.herokuapp.com/resources/uploads/${res.foto}`} className='w-100 h-100' />}</td>
                                                <td>{res.visi}</td>
                                                <td>{res.misi}</td>
                                                <td>{res.keterangan}</td>
                                                <td className='d-grid gap-2'><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModalEdit" onClick={() => { getDataKandidatOne(res._id) }}>Edit</button> <button onClick={() => deleteKandidat(res._id)} className='btn btn-danger'>Hapus</button></td>
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

export default DataKandidat;