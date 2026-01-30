import {Pool} from "pg";
import fs from "fs";
import path from "path";


const connectionString=process.env.POSTGRES_URI as string;
const caCert= fs.readFileSync(path.join(process.cwd(), "certs/ca.pem")).toString();

export const pool = new Pool(
    {
    connectionString,
     ssl:{
    rejectUnauthorized:false,
    ca:caCert
    }
});
