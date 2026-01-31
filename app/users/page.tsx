'use client'
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';

type User = { id: number; 
    name: string; 
    email: string;
     created_at: string; };
export default function Usage(){

const router = useRouter(); const [users, setUsers] = useState<User[]>([]); // 👈 typed state
useEffect(()=>{
    async function query() {
        const data = await fetch('/api/users',{method:'GET'});
        const response = await data.json();
        if(response){
            setUsers(response);
        }
        else{
            console.log(response);
        }
    }
    query();
},[])


return (
<div className='pop'>
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME </th>
                <th>EMAIL</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
        {users.map((user)=>(  
            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.created_at}</td>
        </tr>))}
        </tbody>
    </table>
</div>
);



}