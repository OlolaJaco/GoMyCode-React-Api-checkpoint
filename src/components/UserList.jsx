import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const UserList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function fetchData() {
            
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setData(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error.message)
            }

        }
        fetchData()
    }, [])

    return (
        <div className='flex flex-wrap justify-center'>
            {data.map(user => (
                <div className='bg-slate-200 shadow p-4 rounded-md m-2 w-96'>

                    <h1 className='font-bold text-3xl'>Fullname: {user.firstname} {user.last}</h1>
                    <h2 className='font-semibold text-2xl mb-2'>Email: {user.email}</h2>
                    <h2 className='font-semibold text-2xl mb-2'>Phone:{user.phone} </h2>
                    <h2 className='font-semibold text-2xl mb-2'>Website: {user.website}</h2>
                    <h2 className='font-semibold text-2xl mb-2'>Company: {user.company.name}</h2>
                </div>
            ))}
        </div>





    )
}

export default UserList;
