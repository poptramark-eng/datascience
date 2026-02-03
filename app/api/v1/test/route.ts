import {NextResponse} from 'next/server';
import {valkey} from '@/lib/valkey';
import bcrypt from 'bcrypt';
import { json } from 'stream/consumers';

export async function GET(){
    const test = await valkey.hgetall('users:poptramark@gmail.com');
    return NextResponse.json({message: test});
}