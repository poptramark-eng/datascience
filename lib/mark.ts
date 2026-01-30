import fs from 'fs';
import path from 'path';
import {Pool} from 'pg';

const connectionString = process.env.POSTGRES_URI as string;
const caPath = path.join(process.cwd(), "certs/ca.pem");
const caCert = fs.readFileSync(caPath).toString();
export const pool = new Pool({connectionString, ssl:{
    rejectUnauthorized:true,
    ca:caCert
}});