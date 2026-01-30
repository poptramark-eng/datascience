
import Redis from "ioredis";

export const valkey = new Redis(
    process.env.VALKEY_URI as string, {
        tls:{
            rejectUnauthorized: true,

        }
    }
);
valkey.on('error', (error)=>{
    console.log(error);
})