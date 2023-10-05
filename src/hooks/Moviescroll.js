
import React ,{useState,useEffect} from 'react';

import { popular } from './data1';
import Navbar from '../Navbar';
export default function Moviescroll() {

  const [totalitem,totalitemfun]=useState([]);
  const [search,seachfun]=useState('');

function seacrhfunction(list1){
   
const searchlist=list1.filter((e)=>{
    const {name}=e;
     const actualname=name.match(search);
    
     return actualname; 
});

    return(totalitemfun(searchlist));
}


useEffect(()=>{
    const popular1=popular;
    totalitemfun(popular1);
    seacrhfunction(popular1);
},[search]);
if(totalitem.length==0)
{
    return(<div className='moviepage'>
      <Navbar/>
    <h2 style={{position:'absolute',top:'20%',left:'40%',overflow:'hidden',color:'white'}}>no such movie's are found</h2>
    </div>)
}
  return (
    <div className='moviepage'> 
    <Navbar/>
<div style={{width:'100%',display:'block'}}><h3 style={{color:'white',textAlign:'left',textShadow:'2px 2px 10px black',margin:'10px'}}>Popular movies</h3></div>
      
<div className='popularmovie'>
  {
        totalitem.map((ed,index)=>{
            const {img,name}=ed;
           var movietype='';
            if(index>15){
              movietype='popularmovie';
            }
            else if(index<15 && index>31)
            {
                movietype='popularmovie';
            }
            return(
              <div className='card'  key={index}>
              <a href='#'><img src={img} className='card-img-top'></img></a>
               <h4 style={{color:'white',maxWidth:'fitContent'}}>{name}</h4>
           </div>            
           )
        })
    }
</div>
</div>

  )
}