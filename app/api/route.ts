import { NextResponse } from "next/server";

export async function POST(req: Request){

const {name, email} =await req.json();
return NextResponse.json({name, email},{status:200});

}