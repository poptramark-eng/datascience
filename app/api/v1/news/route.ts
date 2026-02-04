import {NextResponse} from 'next/server';


export async function GET()
{
 const data = await fetch(`https://newsdata.io/api/1/latest? 
  apikey=pub_6efb91d69a504050a79358a3bf141ef4
  &language=en,sw
  &timezone=africa/nairobi
  &prioritydomain=top
  &removeduplicate=1`);
 const test = await data.json();
 console.log(typeof test.results);
 const results = test.results;
 return NextResponse.json({articles: test.results,
    test: typeof results
 });
}