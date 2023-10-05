
import React ,{useState,useEffect} from 'react';

import { popular } from './data1';
export default function Exp1() {
  

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
  <nav className='fl' style={{background:'black',padding:'2px',width:'98%',borderRadius:'10px'}}>
    <h1>netflix clone</h1>
    <input type="search" style={{borderRadius:'10px',outline:'none',marginLeft:'20%',width:'300px',height:'20px',padding:'10px',marginTop:'4px'}} placeholder='searh for a movie' value={search} onChange={(e)=>seachfun(e.target.value)}></input>
  </nav>

    <h2 style={{position:'absolute',top:'20%',left:'40%',overflow:'hidden',color:'white'}}>no such movie's are found</h2>
    </div>)
}
  return (
    <div className='moviepage'> 
    <nav className='fl' style={{background:'black',padding:'2px',width:'98%',borderRadius:'10px'}}>
    <h1>netflix clone</h1>
    <input type="search" style={{borderRadius:'10px',outline:'none',marginLeft:'20%',width:'300px',height:'20px',padding:'10px',marginTop:'4px'}} placeholder='searh for a movie' value={search} onChange={(e)=>seachfun(e.target.value)}></input>
    <ul > 
        <li>
            <a href="#" className='signup' style={{marginTop:'4px'}}>Sign up</a>
        </li>
    </ul>
</nav>
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
// export const Nav1=()=>{
//   const [search,seachfun]=useState('');
//     return(
//     <nav className='fl' style={{background:'black',padding:'2px',width:'98%',borderRadius:'10px'}}>
//     <h1>netflix clone</h1>
//     <input type="search" style={{borderRadius:'10px',outline:'none',marginLeft:'20%',width:'300px',height:'20px',padding:'10px',marginTop:'4px'}} placeholder='searh for a movie' value={search} onChange={(e)=>seachfun(e.target.value)}></input>
//     <ul > 
//         <li>
//             <a href="#" className='signup' style={{marginTop:'4px'}}>Sign up</a>
//         </li>
//     </ul>
// </nav>
//     )
// }
// const Content1=()=>{
//    return(
//     <div className='moviecontent'>
//     <h2 style={{color:'white'}}>
//     Movies
//     </h2>
//     <p>Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
   
// </div>
//    )
// }
// const Popular=()=>{
//     const [popular1,fun]=useState(popular);
//     function key1()
// {
    
//   var a=document.getElementById('demo111').value;
//   const data1111=popular1.filter((filterdata)=>
    // { const {name}=filterdata;
    //     // if(filterdata.includes(a))
    //     // {
    //     //     return filterdata;
    //     // }
    //     // return filterdata.name==a;
    //     var abcc=name.includes(a);
    //     return abcc;
//     })
//      return(fun(data1111));
// }
//     return(
//         <div>
//             <h3 style={{color:'white',textAlign:'left',textShadow:'2px 2px 10px black',margin:'10px'}}>Popular movies</h3>     
//         <div className='popularmovie'>
//             {
//                 popular.map((e,index)=>{
//                     const {img,name}=e;
//                     return(
//                         <Popmovies key={index} img={img} name={name}/>
//                     )
//                 })
//             }
//         </div>
//         </div>
//     )
// }
// const  Thir=()=>{
//     return(
//         <div>
//             <h3 style={{color:'white',textAlign:'left',textShadow:'2px 2px 10px black',margin:'10px'}}>thrillar movies</h3>     
//         <div className='popularmovie'>
//             {
//                 thrillar.map((e,index)=>{
//                     const {img,name}=e;
//                     return(
//                         <Popmovies key={index} img={img} name={name}/>
//                     )
//                 })
//             }
//         </div>
//         </div>
//     )
// }
// const  Teen=()=>{
//     return(
//         <div>
//             <h3 style={{color:'white',textAlign:'left',textShadow:'2px 2px 10px black',margin:'10px'}}>harror movies</h3>     
//         <div className='popularmovie'>
//             {
//                 teen.map((e,index)=>{
//                     const {img,name}=e;
//                     return(
//                         <Popmovies  key={index} img={img} name={name}/>
//                     )
//                 })
//             }
//         </div>
//         </div>
//     )
// }
// const Popmovies=(pro)=>{
//     const {img,name}=pro;
//     return(
//         <div className='card' style={{width:'17.3rem'}}>
//            <a href='#'><img src={img} className='card-img-top'></img></a>
//             <h4 style={{color:'white',maxWidth:'fitContent'}}>{name}</h4>
//         </div>
//     )
// }
