import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { valkey } from "@/lib/valkey";

export async function GET() {
  try {
    // 1. Check cache
   //const cached = await valkey.get("users");
   //if (cached) {
    //  return NextResponse.json(JSON.parse(cached), { status: 200 });
   // }

    // 2. Query Postgres
    const users = await pool.query("SELECT * FROM users");
    const result = users.rows;

    // 3. Store in cache (overwrite is fine)
    //await valkey.set("users", JSON.stringify(result),  "EX",0.5);

    // 4. Return response
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
