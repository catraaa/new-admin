'use client';

import { FiTrash, FiEdit3 } from 'react-icons/fi';
import Image from 'next/image';

//id, airport_code, airport_name, airport_location
export default function TableAirport({ airports }) {
    console.log('====================================');
    console.log('INI DATA KOMPONEN BRE', airports);
    console.log('====================================');
    return (
        <nav className='flex w-[920px]  border-b border-gray-200 bg-white shadow-md sm:rounded-lg'>
            <div className=''>
                <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                    <div className='w-[920px] overflow-hidden'>
                        <table className=''>
                            <thead className='border-b bg-white'>
                                <tr className='text-center text-[14px] font-bold text-blue-1 '>
                                    <th scope='col' className='px-[30px]'>
                                        No
                                    </th>
                                    <th scope='col' className='px-[40px] py-4'>
                                        Kode Airport
                                    </th>
                                    <th scope='col' className='px-[110px] py-4'>
                                        Name Airport
                                    </th>
                                    <th scope='col' className='px-[30px] py-4'>
                                        Location
                                    </th>
                                    <th scope='col' className='py-4 pl-[70px]'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr className='border-b text-center text-[14px] font-normal text-black '>
                                    <td className='whitespace-nowrap px-6 py-4'>{id}</td>
                                    <td className='whitespace-nowrap px-6 py-4'>{airport_code}</td>
                                    <td className='whitespace-nowrap px-6 py-4'>{airport_name}</td>
                                    <td className='whitespace-nowrap px-6 py-4'>{airport_location}</td>
                                    <td className='items-center whitespace-nowrap py-4 pl-[70px] '>
                                        <div className=' flex w-[24px] space-x-[12px] whitespace-nowrap'>
                                            <Image
                                                width={24}
                                                height={24}
                                                className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                src={`./images/Pencil.svg`}
                                                alt=''
                                            />
                                            <Image
                                                width={24}
                                                height={24}
                                                className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                src={`./images/trash.svg`}
                                                alt=''
                                            />
                                        </div>
                                    </td>
                                </tr> */}

                                {airports.length ? (
                                    airports.map((airport, index) => {
                                        return (
                                            <tr key={index} className='border-b text-center text-[14px] font-normal text-black '>
                                                <td className='whitespace-nowrap px-6 py-4'>{index + 1}</td>
                                                <td className='whitespace-nowrap px-6 py-4'>{airport.airport_code}</td>
                                                <td className='whitespace-nowrap px-6 py-4'>{airport.airport_name}</td>
                                                <td className='whitespace-nowrap px-6 py-4'>{airport.airport_location}</td>
                                                <td className='items-center whitespace-nowrap py-4 pl-[70px] '>
                                                    <div className=' flex w-[24px] space-x-[12px] whitespace-nowrap'>
                                                        <Image
                                                            width={24}
                                                            height={24}
                                                            className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                            src={`./images/Pencil.svg`}
                                                            alt=''
                                                        />
                                                        <Image
                                                            width={24}
                                                            height={24}
                                                            className='cursor-pointer hover:scale-110 hover:text-blue-1 '
                                                            src={`./images/trash.svg`}
                                                            alt=''
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <h1>Loading....</h1>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </nav>
    );
}
