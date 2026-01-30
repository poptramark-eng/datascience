import {Pool} from "pg";
//import fs from "fs";
//import path from "path";


const connectionString=process.env.POSTGRES_URI as string;
//const caCert= fs.readFileSync(path.join(process.cwd(), "certs/ca.pem")).toString();
const caCert = process.env.CA_CERT;
export const pool = new Pool(
    {
    connectionString,
     ssl:{
    rejectUnauthorized:true,
    ca:caCert
    }
});
