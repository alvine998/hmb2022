import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import styles from '../../styles/Home.module.css'

DataKandidat.title = "Data-Kandidat";

function DataKandidat(props) {
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
                    <Sidebar kandidat />
                </div>
                <div className='col-md'>
                    <div className={'container ' + (styles.uppers)}>
                        <div className='row'>
                            <div className='col-md'>
                                <button className='btn btn-outline-primary'>+ Tambah Data Kandidat</button>
                            </div>
                            <div className={'col-md-3 ' + (styles.righthere)}>
                                <input className='form-control' type={"text"} placeholder='Cari disini'/>
                            </div>
                            <div className={'col-md-2'}>
                                <button className='btn btn-outline-success w-50'>Cari</button>
                            </div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama Kandidat</th>
                                    <th scope="col">Foto Kandidat</th>
                                    <th scope="col">Keterangan</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
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

export default DataKandidat;