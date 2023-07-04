'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import axios from 'axios';

import TableUser from '@/components/TableUser';
import Aside from '@/components/Aside';
import TopComponent from '@/components/TopComponent';

export default function User() {
    const [fetchUsers, setFetchUsers] = useState(true);
    const [users, setUsers] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (fetchUsers) {
            const getUsers = async () => {
                try {
                    const token =
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYW1hIjoiYWRtaW4iLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE2ODc5NjA0NTYsImV4cCI6MTY4ODEzMzI1Nn0.v_ktm7kT1I5q_zMQXusG5jvLkW5e9IEz6bvQIb99DH4';
                    const URL_USER = 'https://kel1airplaneapi-production.up.railway.app/api/v1/user';

                    const response = await axios.get(URL_USER, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    // console.log('RESPONSE USER', response);
                    // console.log('RESPONSE DATA USER', response.data);
                    // console.log(' DATA USER', response.data.data);
                    // console.log(' DATA USER', response.data.data.users);

                    const usersData = response.data.data.users;
                    setUsers(usersData);
                } catch (error) {
                    console.log('ERROR USER', error);
                }
            };
            getUsers();
        }
        setFetchUsers(false);
    }, [fetchUsers]);

    // console.log('====================================');
    // console.log('USERS', users);
    // console.log('====================================');
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
                                    <div className=' flex'>
                                        <h1 className=' text-[32px] font-bold text-blue-1 '>User</h1>
                                        <div className='ml-[289px]'>
                                            <TopComponent />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* TABLE */}
                            <div className='ml-[361px] mt-[120px] '>
                                <div className='flex items-center'>
                                    <h1 className='text-[21px] font-bold text-blue-1 '>Data User</h1>
                                </div>
                                <div className='mt-[24px] '>
                                    <TableUser users={users} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        );
    
     }
}
