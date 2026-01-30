'use client'
import { Suspense } from "react";   

import { useState, useEffect } from "react";
export default function Table(){
    const [users, setUsers]=useState([]);
    
    useEffect(()=>{

async function fetchUsers(){
            try{
            const data  = await fetch("/api/users", {method: 'GET'});
            const results = await data.json();
            setUsers(results)
                
        
        }
        catch(error){console.log(error);}
}
fetchUsers();

    },[]);






    return(
        <div className="pop">

        <table>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>datecreate</th>
            </thead>
            <tbody>
                {users.map((trx)=><tr key={trx.id}>
                    <td>{trx.id}</td>
                    <td>{trx.name}</td>
                    <td>{trx.email}</td>
                    <td>{trx.created_at}</td>
                </tr>)}
            </tbody>
        </table>
        
 
        </div>
    );
}

