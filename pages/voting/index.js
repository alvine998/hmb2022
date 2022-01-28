import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import swal from 'sweetalert';
import styles from '../../styles/Home.module.css'

index.title = "Voting"

function index(props) {
    const [active, setActive] = useState(false);

    const router = useRouter();

    const activation = () => {
        setActive(true)
    }

    const onChoose = (id) => {
        swal({
            title: "Apakah kamu sudah yakin?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Terima kasih sudah memilih", {
                        icon: "success",
                    });
                    router.push("/")
                } else {
                    setActive(false)
                }
            });
    }
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
                            <div className='col-md'>
                                <a style={{ textDecoration: 'none', color: "black" }} href='#' onClick={() => { onChoose(), activation() }}>
                                    <div className={ active == true ? styles.attractive : styles.boxCalon}>
                                        <img src='/user2.png' className={styles.sizing} />
                                        <h2>No Urut 1</h2>
                                        <h2>Aldi & Fahmi</h2>
                                    </div>
                                </a>
                            </div>
                            <div className='col-md'>
                                <a style={{ textDecoration: 'none', color: "black" }} href='#'>
                                    <div className={styles.boxCalon}>
                                        <img src='/user2.png' className={styles.sizing} />
                                        <h2>No Urut 1</h2>
                                        <h2>Aldi & Fahmi</h2>
                                    </div>
                                </a>
                            </div>
                            <div className='col-md'>
                                <a style={{ textDecoration: 'none', color: "black" }} href='#'>
                                    <div className={styles.boxCalon}>
                                        <img src='/user2.png' className={styles.sizing} />
                                        <h2>No Urut 1</h2>
                                        <h2>Aldi & Fahmi</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;