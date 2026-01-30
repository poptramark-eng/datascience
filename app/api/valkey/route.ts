import { NextResponse } from "next/server";
import { valkey } from "@/lib/valkey";

export async function GET() {
  const value = await valkey.get("hello");

  return NextResponse.json({ message: value }, { status: 200 });
}
