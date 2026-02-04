'use client';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

/*      "source_id": "thestar_my",
      "source_name": "The Star",
      "source_priority": 5603,
      "source_url": "https://www.thestar.com.my",
      "source_icon": "https://n.bytvi.com/thestar_my.png",**/


export default function Top(){
const [articles, setArticles]= useState<{
    article_id:string, 
    pubDate: string,
    link: string,
    creator?: string[],
    title: string, 
    image_url: string, 
    description: string,
    source_name?: string
    source_url: string,
    source_icon: string

}[]>([]);
useEffect(()=>{
    async function news(){
        const news_data = await fetch('/api/v1/news');
        const data = await news_data.json();
        setArticles(data.articles);
        console.log(articles[0].link);
    }
    news();
},[]);
   


    
    return(
        <ul>
            {articles.map((article)=>{
                if(article.image_url && article.title && article.description &&article.link){
                    const dater = new Date(article.pubDate).toLocaleDateString();
                return(
                
                <li key={article.article_id}>

                <h1>{article.title}</h1>
                <b><h2>
                    Date of publication {dater}
                    </h2></b>
                <div>
                    <Image src={article.image_url} alt="Image"  width={1024} height={640}/>
                   
                    <article>
                        {article.description}
                        <div>
                            <b><h2>
                                <Link href={article.link} target='_blank'>READ MORE</Link>
                                </h2></b>
                            <i>Author . {article.creator?article.creator[0]:'unknown' }</i>
                        </div>
                    </article>
                    <hr />
                </div>
            </li>);
                }
                
                
                

            }
        )}
        </ul>
    );
}