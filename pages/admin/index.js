import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import Sidebar from '../components/Sidebar';

const Admin = (props) => {
    // State
    const [collect, setCollect] = useState([]);
    const [collect2, setCollect2] = useState([]);
    const [collect3, setCollect3] = useState([]);
    const [collect4, setCollect4] = useState([]);

    const router = useRouter();
    const getData = () => {
        var key = localStorage.getItem("loginKey")
        console.log(key);

        if(key == null){
            router.push("/login")
        } else if(key !== 'admin'){
            router.push("/login")
        }
    }

    const getDatauser = () => {
        axios.get(`http://evotinghmb.herokuapp.com/users`).then(
            res => {
                const collect = res.data;
                setCollect(collect);
            }
        )
    }

    const getDataBelumPilih = () => {
        axios.get(`http://evotinghmb.herokuapp.com/users/novotes`).then(
            res => {
                const collect3 = res.data;
                setCollect3(collect3);
            }
        )
    }

    const getDataKandidat = () => {
        axios.get(`http://evotinghmb.herokuapp.com/kandidats`).then(
            res => {
                const collect2 = res.data;
                setCollect2(collect2);
            }
        )
    }

    const getDataVoting = () => {
        axios.get(`http://evotinghmb.herokuapp.com/votes`).then(
            res => {
                const collect4 = res.data;
                setCollect4(collect4);
            }
        )
    }

    useEffect(() => {
        getData();
        getDatauser();
        getDataKandidat();
        getDataBelumPilih();
        getDataVoting();
    },[])
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar dashboard />
                </div>
                <div className='col-md'>
                    <div className={'container ' + (styles.toppers)}>
                        <div className='row'>
                            <div className='col-md'>
                                <div className={styles.boxPemilih}>
                                    <div className={styles.whiteText}>
                                        <h5>{collect2.length} Orang</h5>
                                        <h5>Jumlah Kandidat</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className={styles.boxKandidat}>
                                    <div className={styles.whiteText}>
                                        <h5>{collect.length} Orang</h5>
                                        <h5>Jumlah Pemilih</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className={styles.boxSudahPilih}>
                                    <div className={styles.blackText}>
                                        <h5>{collect4.length} Orang</h5>
                                        <h5>Sudah Memilih</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className={styles.boxBelumPilih}>
                                    <div className={styles.whiteText}>
                                        <h5>{collect3.length} Orang</h5>
                                        <h5>Belum Memilih</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Admin;
Admin.title = "Dashboard";