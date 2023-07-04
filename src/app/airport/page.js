'use client';

//core
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
//third parties
import axios from 'axios';

//components
import TableAirport from '@/components/TabelAirport';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';
import ButtonAdd from '@/components/ButtonAdd';
// import ButtonBack from '../../public/images/back.svg';

export default function Airport() {
    //state
    const [fetchAirport, setFetchAirport] = useState(true);
    const [airports, setAirports] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // const [fetchAirport, setFetchAirport] = useState(true);

    // //setup
    // useEffect(() => {
    //     if (fetchAirport) {
    //     }
    //     setFetchAirport(false);
    // }, [fetchAirport]);

    //setup
    useEffect(() => {
        if (fetchAirport) {
            const getAirport = async () => {
                try {
                    const token =
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODc5NjA0NTYsImV4cCI6MTY4ODEzMzI1Nn0.v_ktm7kT1I5q_zMQXusG5jvLkW5e9IEz6bvQIb99DH4';
                    const URL_AIRPORT = 'https://kel1airplaneapi-production.up.railway.app/api/v1/airport';
                    // misal  perlu token
                    // const response = await axios.get(URL_AIRPORT,{
                    //         headers: {
                    //             Authorization: `Bearer ${token}`,
                    //         },
                    //     });
                    
                    const response = await axios.get(URL_AIRPORT);

                    console.log('RESPONSE AIRPORT', response);
                    console.log('RESPONSE DATA AIRPORT', response.data);
                    console.log(' DATA AIRPORT', response.data.data);
                    console.log(' AIRPORTS', response.data.data.airport);
                    const airportsData = response.data.data.airport;
                    setAirports(airportsData);
                } catch (error) {
                    console.log('ERROR AIRPORT', error);
                }
            };
            getAirport();
        }
        setFetchAirport(false);
    }, [fetchAirport]);

    console.log('====================================');
    console.log('AIRPORTR', airports);
    console.log('====================================');
    if (isMounted) {
        return (
            <section className='h-[950px] w-[1440px] bg-grey-2  '>
                <nav className=''>
                    <div className='flex '>
                        {/* SIDEBAR */}
                        <div className=' '>
                            <Aside />
                        </div>
                        <div className=''>
                            {/* NAVBAR */}
                            <div className='ml-[361px] mt-[47px]'>
                                <div>
                                    <div className='flex'>
                                        <h1 className=' text-[32px] font-bold text-blue-1 '>Airport</h1>
                                        <div className='ml-[262px]'>
                                            <TopComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TABLE */}
                            <div className='ml-[361px] mt-[120px] '>
                                <div className='flex items-center'>
                                    {/* <img className='' src={`./images/back.svg`} alt='' /> */}
                                    <h1 className='ml-[px] text-[21px] font-bold text-blue-1 '>Data Airport</h1>
                                    <div onClick={() => router.push('/airport.new')} className='ml-[670px]' alt=''>
                                        <ButtonAdd />
                                    </div>
                                </div>
                                <div className='mt-[24px]'>
                                    <TableAirport airports={airports} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        );
    
     }
}
