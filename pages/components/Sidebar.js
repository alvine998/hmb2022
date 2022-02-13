import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo } from '../../assets';
import styles from '../../styles/Home.module.css'

const Sidebar = (props) => {

    const deleteLogin = () => {
        localStorage.removeItem("loginKey");
    }
    return (
        <div>
            <div className={'container ' + styles.topper}>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className={styles.sider}>
                            <Image src={logo} height={50} width={70} />
                        </div>
                    </div>
                    <div className='col-md'>
                        <h5 className={styles.textCentering}>E-Voting HIMABO</h5>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.background}>

                <Link href={"/admin"}>
                    <div className={props.dashboard ? styles.setactive : styles.box1}>
                        <div className={styles.textbox1}>
                            <h5>Dashboard</h5>
                        </div>
                    </div>
                </Link>

                <Link href={"/admin/data-pemilih"}>
                    <div style={{ marginTop: 10 }} className={props.pemilih ? styles.setactive : styles.box1}>
                        <div className={styles.textbox1}>
                            <h5>Data Pemilih</h5>
                        </div>
                    </div>
                </Link>

                <Link href={"/admin/data-kandidat"}>
                    <div style={{ marginTop: 10 }} className={props.kandidat ? styles.setactive : styles.box1}>
                        <div className={styles.textbox1}>
                            <h5>Data Kandidat</h5>
                        </div>
                    </div>
                </Link>

                {/* <Link href={"/admin/data-admin"}>
                    <div style={{ marginTop: 10 }} className={props.admin ? styles.setactive : styles.box1}>
                        <div className={styles.textbox1}>
                            <h5>Data Admin</h5>
                        </div>
                    </div>
                </Link> */}

                <Link href={"/admin/kotak-suara"}>
                    <div style={{ marginTop: 10 }} className={props.kotak ? styles.setactive : styles.box1}>
                        <div className={styles.textbox1}>
                            <h5>Kotak Suara</h5>
                        </div>
                    </div>
                </Link>

                <Link href={"/admin/quick-count"}>
                    <div style={{ marginTop: 10 }} className={props.quick ? styles.setactive : styles.box1}>
                        <div className={styles.textbox1}>
                            <h5>Real Count</h5>
                        </div>
                    </div>
                </Link>

                <Link href={"/login"}>
                    <div onClick={()=>deleteLogin()} style={{ marginTop: 10 }} className={styles.box1}>
                        <div className={styles.textbox1}>
                            <h5>Keluar</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;
