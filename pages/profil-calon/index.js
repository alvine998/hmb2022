import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Home.module.css'

index.title = "Profil Calon"

function index(props) {
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
                                <img src='/user2.png' className="w-100 h-100" />
                                <div>
                                    <h5>Visi :</h5>
                                    <p>
                                        LoremIpsum dansdo wjehow jsnbadiu wjikeqhon  oajksehdo9qw iashdoasd
                                    </p>
                                </div>
                                <div>
                                    <h5>Misi :</h5>
                                    <p>
                                        LoremIpsum dansdo wjehow jsnbadiu wjikeqhon  oajksehdo9qw iashdoasd
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
                            <div className='col-md'>
                                <a data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ textDecoration: 'none', color: "black" }} href='#'>
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