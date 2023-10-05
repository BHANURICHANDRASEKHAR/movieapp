import React,{useState,useRef} from "react";
const url='https://thecocktaildb.com/api/json/v1/1/search.php?s=';

export default function Exp3() {
    const [data,setdata]=useState([]);
    const val=useRef('')
  const  featchdata= async(p)=>{
        const res1= await fetch(p);
        const {drinks}= await res1.json();
        setdata(drinks);
       
    }

  return (
    <div>
    <input type="text"
     placeholder="search for" 
     value={val.current.value}
     onChange={(e)=>val.current=e.target.value}/>
     <button onClick={()=>featchdata(url+val.current)}> Click </button>
     <div>
     {
        data.map((ec)=>{
            const {idDrink,strDrink,strDrinkThumb}=ec;
            return(
                <div className='card' style={{width:'17.3rem'}} key={idDrink}>
                   <a href='#'><img src={strDrinkThumb} className='card-img-top'></img></a>
                    <h4 style={{color:'white',maxWidth:'fitContent'}}>{strDrink}</h4>
                </div>
            )
        })
     }
     </div>
    </div>
  )
}
