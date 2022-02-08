import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'

index.title = "Quick-Count";
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle,
} from 'chart.js';
import axios from 'axios';
import { Bubble, Doughnut, Line, Pie, PolarArea, Scatter } from 'react-chartjs-2';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
);

function index(props) {

    const [collect, setCollect] = useState([]);
    const [nama, setNama] = useState([]);
    const [jumlah, setJumlah] = useState([]);

    const getData = () => {
        axios.get(`http://apievotinghmb.tutorialbyalvine.com/kandidats`).then(
            res => {
                const collect = res.data;
                console.log(collect);
                setCollect(collect);
                setNama(collect.map(res => res.nama))
                // setJumlah(collect.map(res => res.jumlah_suara))
                console.log(jumlah);
                setJumlah(collect.map(res=>{
                    let percent = (res.jumlah_suara / 100) * 168;
                    console.log(percent + '%');
                    return percent;
                }))

            }
        )
    }

    const getLogin = () => {
        var key = localStorage.getItem("loginKey");
        console.log(key)

        if (key === null) {
            router.push("/login")
        } else if (key == 'admin') {
            router.push("/admin")
        }
    }

    useEffect(() => {
        getData();
        getLogin();
    }, [])

    const data = {
        labels: nama,
        datasets: [{
            label: '# of Votes',
            data: jumlah,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
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
                    <h1>Quick Count</h1>
                </div>

                <div className={styles.centeringContent}>
                    <div className={styles.boxPemilihan}>
                        <Doughnut   
                            data={data}
                            width={400}
                            height={400}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;