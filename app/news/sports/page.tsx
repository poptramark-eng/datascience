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
    source_name: string
    source_url: string,
    source_icon: string

}[]>([]);
useEffect(()=>{
    async function news(){
        const news_data = await fetch('/api/v1/news/category?category=sports');
        const data = await news_data.json();
        setArticles(data.articles);
        
    }
    news();
},[]);
   


    
    return(
<div>
     <header className='newshead'>
        <h1>POPTRA WORLD NEWS</h1>
     </header>
     <nav>
     <ul className='categories'>
   <li><Link href='/news/top'>TOP</Link></li>
   <li><Link href='/news/politics'>POLITICS</Link></li>
   <li><Link href='/news/sports'>SPORTS</Link></li>
   <li><Link href='/news/technology'>TECHNOLOGY</Link></li>
    <li><Link href='/news/entertainment'>ENTERTAINEMENT</Link></li>
   <li><Link href='/news/world'>WORLD</Link></li>
      <li><Link href='/news/education'>EDUCATION</Link></li>
   
   
     </ul>
     </nav>
            <ul className='top'>
            {articles.map((article)=>{
                if(article.image_url && article.title && article.description &&article.link&&article.source_name&&article.source_name&&article.source_url){
                    
                    
                    const dater = new Date(article.pubDate).toLocaleDateString("en-US", {weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric'});
               
                    return(
                
                <li key={article.article_id}>

                <h1>{article.title.toUpperCase()}</h1>
                
                <div>
                    <Image 
                    src={article.image_url} 
                    alt="Image" 
                     width={912} 
                     height={500}
                     />
                   
                    <article className='message'>
                        {article.description}
                        <div>
                            <b><h2>
                                <Link className='read' href={article.link} target='_blank'>READ MORE</Link>
                                </h2>
                                 
                                     <Link href={article.source_url} target='_blank'>
                                <div>
                                    <Image
                                     src={article.source_icon} 
                                     alt={article.source_name} 
                                     width={30} 
                                     height={30} 
                                     style={{objectFit:"contain"}}/>
                                <b>
                                    <em>{article.source_name.toUpperCase()}</em>
                                    </b>
                                </div>
                                
                                
                                </Link>
    
                                    
                                </b>
                                       <br />                    
                            <i className='author'>{article.creator?article.creator[0].charAt(0).toUpperCase():'unknown' }.{dater}</i>
                        </div>
                    </article>
                    <br />
                    <br />
                </div>
            </li>);
                }
                
                
                

            }
        )}
        </ul>
</div>
    );
}