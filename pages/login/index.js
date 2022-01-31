import axios from 'axios';
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
        const data = {
            username: user,
            password: password
        }
        console.log(data)
        axios.post(`http://localhost:4000/users/login`, data).then(
            res => {
                swal("Berhasil Login", { icon: "success" })
                sendData(id);
                router.push("/")
            }
        ) .catch(err => {
            if (user == 'admin' && password == '1234') {
                alert("Selamat datang admin")
                sendData(id)
                router.push("/admin")
            } else {
                console.log(err)
                alert("Password atau email salah!")
            }
        })
    }

    return (
        <div>
            <div className={styles.inputPosition}>
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
                    <button onClick={() => onLogin(user)} className='btn btn-outline-warning w-100' >Masuk</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
Login.title = "Login Evoting";

