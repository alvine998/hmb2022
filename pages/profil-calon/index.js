import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'

index.title = "Profil Calon"

function index(props) {
    // State
    const [collect, setCollect] = useState([]);
    const [visi, setVisi] = useState([]);
    const [misi, setMisi] = useState([]);
    const [foto, setFoto] = useState([]);

    // Function
    const getData = () => {
        axios.get(`https://evotinghmb.herokuapp.com/kandidats`).then(
            res => {
                const collect = res.data;
                console.log(collect);
                setCollect(collect);
            }
        )
    }

    const getDataOne = (id) => {
        axios.get(`https://evotinghmb.herokuapp.com/kandidats/${id}`).then(
            res => {
                console.log(res.data);
                const result = res.data;
                setVisi(result.visi); setMisi(result.misi);
                setFoto(result.foto);
            }
        )
    }

    const getLogin = () => {
        var key = localStorage.getItem("loginKey");
        console.log(key)

        if (key === null) {
            router.push("/login")
        } else if (key == 'admin') {
            router.push("/admin")
        }
    }

    useEffect(() => {
        getData();
        getLogin();
    }, [])
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
                    <h1>Profil Calon</h1>
                </div>

                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Visi Misi Calon</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={`https://evotinghmb.herokuapp.com/resources/uploads/${foto}`} className="w-100 h-100" />
                                <div>
                                    <h5>Visi :</h5>
                                    <p>
                                        {visi}
                                    </p>
                                </div>
                                <div>
                                    <h5>Misi :</h5>
                                    <p>
                                        {misi}
                                    </p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.centeringContent}>
                    <div className={styles.boxPemilihan}>
                        <div className='row'>
                            {
                                collect.map((res, i) => (
                                    <div className='col-md'>
                                        <a data-bs-toggle="modal" onClick={()=>getDataOne(res._id)} data-bs-target="#exampleModal" style={{ textDecoration: 'none', color: "black" }} href='#'>
                                            <div className={styles.boxCalon}>
                                                <img src={`https://evotinghmb.herokuapp.com/resources/uploads/${res.foto}`} className={styles.sizing} />
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