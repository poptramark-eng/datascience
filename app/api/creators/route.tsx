import { pool } from '@/lib/db';
import { NextResponse } from 'next/server';
import { valkey } from '@/lib/valkey';

export async function POST(req: Request) {
  const { name, email } = await req.json();

  try {
    // Check if email exists
    const test = await pool.query(
      'SELECT email FROM users WHERE email = $1 LIMIT 1',
      [email]
    );

    if (test.rows.length > 0) {
      return NextResponse.json({ message: 'fail' }, { status: 400 });
    }

    // Insert new user
    const added = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    // Clear cache
    await valkey.del('users');

    return NextResponse.json({ message: 'success', info: added.rows[0] }, { status: 201 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: 'error', details: error.message },
      { status: 500 }
    );
  }
}
