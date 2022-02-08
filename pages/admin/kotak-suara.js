import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';

KotakSuara.title = "Kotak-Suara";

function KotakSuara(props) {
    const [collection, setCollection] = useState([]);
    const [namak, setNamak] = useState('');
    const [ids, setIds] = useState('');
    const [username, setUsername] = useState('');

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

    const getDataVote = () => {
        axios.get(`https://evotinghmb.herokuapp.com/votes`).then(
            res => {
                const collection = res.data;
                console.log(collection);
                setCollection(collection.reverse());
            }
        )
    }

    useEffect(() => {
        getData();
        getDataVote();
    }, [])
    return (
        <div style={{ overflow: 'hidden' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar kotak />
                </div>
                <div className='col-md'>
                    <div className={'container ' + (styles.uppers)}>
                        <div className='row'>
                            <div className={'col-md-3 ' + (styles.righthere)}>
                                <input className='form-control' type={"text"} placeholder='Cari disini' />
                            </div>
                            <div className={'col-md-2'}>
                                <button className='btn btn-outline-success w-50'>Cari</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Kandidat</th>
                                    <th scope="col">Pemilih</th>
                                    <th scope="col">Waktu Memilih</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    collection.map((res, i) => (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{res.id_kandidat}</td>
                                            <td>{res.id_user}</td>
                                            <td>{res.createdAt.substr(0, 19)}</td>
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

export default KotakSuara;