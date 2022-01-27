import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../../styles/Home.module.css'

QuickCount.title = "Kotak-Suara";

function QuickCount(props) {
    const getData = () => {
        var key = localStorage.getItem("loginKey")
        console.log(key);
    }

    useEffect(() => {
        getData();
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickCount;