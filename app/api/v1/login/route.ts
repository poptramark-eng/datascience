import {NextResponse} from 'next/server';
import {valkey} from '@/lib/valkey';
import bcrypt from 'bcrypt';

export async function POST(req: Request){
const {email, password } = await req.json();
const check = await valkey.hget(`users:${email}`, 'email');
if(typeof check !== 'string' || check !==email)
    {
    return NextResponse.json({message:'user does not exist'});
}else{
    const hash = await valkey.hmget(`users:${email}`, password);
if(typeof hash ==='string'){
        const match = await bcrypt.compare(password, hash);
    if(match){
        return NextResponse.json({message:"success"});
    }
    else{
        return NextResponse.json({message: 'wrong password'});
    }
}
}

}