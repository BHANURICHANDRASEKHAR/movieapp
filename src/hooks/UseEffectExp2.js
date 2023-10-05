import React,{useEffect,useState} from 'react';
export default function UseEffectExp2() {
    const [count,setcount]=useState(0);
    const [toggle,settoggle] =useState(window.innerWidth);
    useEffect(()=>{
      const in1 =window.addEventListener('resize',()=>
      {
        settoggle(window.innerWidth);
      });
        function fun()
        {
            settoggle(window.innerWidth);
        }
       
     console.log('hello iam from useeffect',count);
     return()=>{
        console.log('iam removeing');
        window.removeEventListener('resize',fun);
     }
    },[count,toggle]);
    const check=()=>{
     setcount(count+1);
     
    }
  return (
    <div>
    <h1>hello chandu</h1>
    <h2>{toggle}</h2>
     <div>{count}</div>
     <button onClick={check}>+</button>
    </div>
  )
}

