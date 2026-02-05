import {NextResponse,NextRequest} from 'next/server';


export async function GET(request: NextRequest)
{
   const url = new URL(request.url);
   const category = url.searchParams.get('category');


 const data = await fetch(`https://newsdata.io/api/1/latest? 
  apikey=pub_6efb91d69a504050a79358a3bf141ef4
  &language=sw,en
  &category=${category}
  &prioritydomain=top
  &image=1
  &removeduplicate=1
  &excludefield=ai_summary,duplicate,ai_org,ai_region,sentiment_stats,sentiment,ai_tag,language,content,pubdatetz,video_url,keywords`);
 const test = await data.json();
 console.log(typeof test.results);
 const results = test.results;
 return NextResponse.json({articles: test.results,
    test: typeof results
 });
}
/** 
 * 
 * 
 * 
 * https://newsdata.io/api/1/latest? 
  apikey=pub_6efb91d69a504050a79358a3bf141ef4
  &language=sw,en
  &category=`${category}`
  &prioritydomain=top
  &image=1
  &removeduplicate=1
  &excludefield=ai_summary,duplicate,ai_org,ai_region,sentiment_stats,sentiment,ai_tag,language,content,pubdatetz,video_url,keywords
*/
