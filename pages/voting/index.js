import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import styles from '../../styles/Home.module.css'

index.title = "Voting"

function index(props) {
    const [active, setActive] = useState(false);
    const [collection, setCollection] = useState([]);
    const [ids, setIds] = useState('');

    const router = useRouter();

    const activation = () => {
        setActive(true)
    }

    const getData = () => {
        axios.get(`http://localhost:4000/kandidats`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection);
            }
        )
    }

    const getDataUsers = () => {
        var key = localStorage.getItem("loginKey");
        axios.get(`http://localhost:4000/users/usr/${key}`).then(
            res => {
                const result = res.data;
                setIds(result._id);
                console.log(result)
            }
        )
    }

    const updateStatus = () => {
        const data = {
            status_user: 0,
            keterangan: 'sudah memilih'
        }

        axios.put(`http://localhost:4000/users/${ids}`, data).then(
            res => {
                console.log(res.data, "Berhasil update status")
            }
        )
    }

    const updateSuara = (id, js) => {
        const hasil = js + 1;
        const data = {
            jumlah_suara: hasil
        }
        console.log(data)
        axios.put(`http://localhost:4000/kandidats/${id}`, data).then(
            res => {
                console.log("Suara Masuk", res.data);
            }
        )
    }

    const onChoose = (id, js) => {
        const data = {
            id_user: ids,
            id_kandidat: id,
            keterangan: 'selesai' 
        }

        swal({
            title: "Apakah kamu sudah yakin?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.post(`http://localhost:4000/votes`, data).then(
                        res => {
                            console.log(res.data);
                            swal("Terima kasih sudah memilih", {
                                icon: "success",
                            });
                            router.push("/");
                            updateSuara(id, js);
                            updateStatus();
                        }
                    )
                } else {
                    setActive(false)
                }
            });
    }

    useEffect(()=>{
        getData();
        getDataUsers();
    },[])
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.right2}>
                    <Link href={"/"}>
                        <button className='btn btn-outline-warning'>Kembali</button>
                    </Link>
                </div>
                <div className={styles.bg}></div>
                <div className={styles.bg + styles.bg2}></div>
                <div className={styles.bg + styles.bg3}></div>
                <div className={styles.content2} >
                    <h1>Voting Now</h1>
                </div>

                <div className={styles.centeringContent}>
                    <div className={styles.boxPemilihan}>
                        <div className='row'>
                            {
                                collection.map((res, i) => (
                                    <div key={i} className='col-md'>
                                        <a style={{ textDecoration: 'none', color: "black" }} href='#' onClick={() => { onChoose(res._id, res.jumlah_suara), activation() }}>
                                            <div className={styles.boxCalon}>
                                                <img src={`http://localhost:4000/resources/uploads/${res.foto}`} className={styles.sizing} />
                                                <h2>No Urut {i+1}</h2>
                                                <h2>{res.nama}</h2>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;