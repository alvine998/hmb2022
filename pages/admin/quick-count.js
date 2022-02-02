import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';

QuickCount.title = "Kotak-Suara";

function QuickCount(props) {

    const [collect, setCollect] = useState([]);

    const router = useRouter();
    const getData = () => {
        var key = localStorage.getItem("loginKey")
        console.log(key);

        if (key == null) {
            router.push("/login")
        } else if (key !== 'admin') {
            router.push("/login")
        }
    }

    const getDataSuara = () => {
        axios.get(`http://evotinghmb.herokuapp.com/kandidats`).then(
            res => {
                const collect = res.data;
                console.log(collect);
                setCollect(collect);
            }
        )
    }

    useEffect(() => {
        getData();
        getDataSuara();
    }, [])
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar quick />
                </div>
                <div className='col-md'>
                    <div className={'container ' + (styles.uppers)}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No Urut</th>
                                    <th scope="col">Nama Kandidat</th>
                                    <th scope="col">Foto Kandidat</th>
                                    <th scope="col">Jumlah Suara</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    collect.map((res, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i+1}</th>
                                            <td>{res.nama}</td>
                                            <td><img src={`http://evotinghmb.herokuapp.com/resources/uploads/${res.foto}`} width={250}  height={300} /></td>
                                            <td>{res.jumlah_suara}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickCount;