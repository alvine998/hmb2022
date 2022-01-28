import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import swal from 'sweetalert';
import { logo } from '../../assets';
import styles from '../../styles/Home.module.css'


const Login = (props) => {
    // State
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handlingUser = (e) => {
        setUser(e.target.value)
    }

    const handlingPass = (e) => {
        setPassword(e.target.value)
    }

    // function
    const router = useRouter();

    const sendData = (id) => {
        localStorage.setItem("loginKey", id);
    }

    const onLogin = (id) => {
        if (user == 'admin' && password == '1234') {
            alert("Selamat datang admin")
            sendData(id)
        } 
        else if(user == 'pemilih' && password == '12345'){
            swal("Berhasil Login", {icon:"success"})
            sendData(id)
        }
        else {
            alert("Password atau email salah!")
        }
    }
    
    return (
        <div>
            <form className={styles.inputPosition}>
                <div className={styles.sizeLogo}>
                    <Image src={logo} height={250} width={300} />
                </div>
                <h4 style={{ textAlign: 'center', paddingBottom: 10 }}>Aplikasi E-Voting HIMABO</h4>
                <div>
                    <input value={user} onChange={handlingUser.bind(this)} placeholder='Username' type={"text"} className='form-control' required />
                </div>
                <div style={{ paddingTop: 10 }}>
                    <input placeholder='Password' value={password} onChange={handlingPass.bind(this)} type={"password"} className='form-control' required />
                </div>
                <div style={{ paddingTop: 10 }}>
                    <Link href={(user == 'admin' && password == '1234') ? "/admin" : (user == 'pemilih' && password == '12345') ? "/" : "/login"}>
                        <input onClick={()=>onLogin(user)} value={"Masuk"} type={"submit"} className='btn btn-outline-warning w-100' />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
Login.title = "Login Evoting";

