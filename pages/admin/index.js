import React, { useEffect } from 'react';
import styles from '../../styles/Home.module.css'
import Sidebar from '../components/Sidebar';

const Admin = (props) => {
    const getData = () => {
        var key = localStorage.getItem("loginKey")
        console.log(key);
    }

    useEffect(() => {
        getData();
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
                                        <h5>0</h5>
                                        <h5>Jumlah Kandidat</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className={styles.boxKandidat}>
                                    <div className={styles.whiteText}>
                                        <h5>0</h5>
                                        <h5>Jumlah Pemilih</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className={styles.boxSudahPilih}>
                                    <div className={styles.blackText}>
                                        <h5>0</h5>
                                        <h5>Sudah Memilih</h5>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md'>
                                <div className={styles.boxBelumPilih}>
                                    <div className={styles.whiteText}>
                                        <h5>0</h5>
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