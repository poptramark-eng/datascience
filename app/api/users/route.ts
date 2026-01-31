import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { valkey } from "@/lib/valkey";

export async function GET() {
  try {
    // 1. Check cache
  const cached = await valkey.get("users");
   if (cached) {
   return NextResponse.json(JSON.parse(cached), { status: 200 });
   }

    // 2. Query Postgres
    const users = await pool.query("SELECT * FROM users");
    const result = users.rows;

    // 3. Store in cache (overwrite is fine)
   await valkey.set("users", JSON.stringify(result));
    await valkey.expire('users',10);

    // 4. Return response
    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    // 1. Parse request body
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // 2. Insert into PostgreSQL
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    const newUser = result.rows[0];

    // 3. Invalidate cache so next GET reloads fresh data
    await valkey.del("users");

    // 4. Return the newly created user
    return NextResponse.json(newUser, { status: 201 });
  } catch (err) {
    console.error("POST /api/users error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
