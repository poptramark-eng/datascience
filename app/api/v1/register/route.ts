import {NextResponse} from 'next/server';
import {valkey} from '@/lib/valkey';
import bcrypt from 'bcrypt';

export async function POST(req: Request){
let {name, email, password}=await req.json();
const salt = await bcrypt.genSalt(10);
const hashed_password = await bcrypt.hash(password,salt);
password = hashed_password;

const check = await valkey.hget(`users:${email}`, 'email');
if(typeof check !== 'string' || check!==email){
await valkey.hset(`users:${email}`, {name, email, password});
return NextResponse.json({message: 'success'});
}
else{
    return NextResponse.json({message:'fail'});
}

}
