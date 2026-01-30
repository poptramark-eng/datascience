import {pool} from '@/lib/db';
import {NextResponse} from 'next/server';

export async function GET(){

try{

const res = await pool.query(`INSERT INTO users (name, email) VALUES ('Alice Johnson', 'alice.johnson@example.com'), ('Bob Smith', 'bob.smith@example.com'), ('Charlie Brown', 'charlie.brown@example.com'), ('Diana Prince', 'diana.prince@example.com'), ('Ethan Hunt', 'ethan.hunt@example.com'), ('Fiona Gallagher', 'fiona.gallagher@example.com'), ('George Miller', 'george.miller@example.com'), ('Hannah Davis', 'hannah.davis@example.com'), ('Ian Wright', 'ian.wright@example.com'), ('Julia Roberts', 'julia.roberts@example.com'), ('Kevin Hart', 'kevin.hart@example.com'), ('Laura Palmer', 'laura.palmer@example.com'), ('Michael Scott', 'michael.scott@example.com'), ('Nina Simone', 'nina.simone@example.com'), ('Oscar Wilde', 'oscar.wilde@example.com'), ('Paula Abdul', 'paula.abdul@example.com'), ('Quentin Blake', 'quentin.blake@example.com'), ('Rachel Green', 'rachel.green@example.com'), ('Steve Rogers', 'steve.rogers@example.com'), ('Tina Fey', 'tina.fey@example.com');
    
`);

return NextResponse.json(res);
}
catch(error)
{return NextResponse.json(error);

}

}