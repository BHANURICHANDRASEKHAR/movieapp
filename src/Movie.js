import React from 'react';

import './index.css';
const data=[
    {
     img:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png',
     name:'lust stories2'
    },
    {
        img:'https://movies.streameast2.com/assets/uploads/nireekshana-2021-uts6v-telugu-movie-watch-online.webp',
        name:'nireekshana',
    },
    {
        img:'https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYdW-g0iTwAg0vAR6yDo41L-c0LLn1pIPzJkT4rt97xFo5QIkNvxQeYh8KAgUS7rZIwyZEjWw_eh2nPcO4XA7pOaGWsASnn7aTdW9rJPNMJfHbGrQkjsx3-XH80C4pGL77qTiBdFNa09LjskSp1wzRBBZGx5iou5jbYRCDSQ-z_lAyD0N1ZZKguBPLSsKB0mdY1jedP3mm1xuKGOWNb-G2bg7vWVCQcDzgCcuZeFDEkSc52l6kXeXcvskHinl-qqWhXSjKgiz-a2X8OtjzG5bv9Ip1dVwuVWG608zITBbwUyCJR1NqWageed.jpg?r=4c7',
        name:'friday night plan'
    },
    {
        img:'https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbxuQY5iUELU0E16UuqkYgCHWPdCwpb9kCNTIKK7eJMRE94S5ENQ1pNYlLA8-DX2DnDdWrzjoYm8LdJtLYW5DUEV_axQrzDrDKs.jpg?r=352',
        name:'maamannam'
    },
    {
        img:'https://resizing.flixster.com/imQ20aaw99tk1MF6VqOgmt3g3CQ=/fit-in/180x240/v2/https://resizing.flixster.com/Rj36W7XfjR7FUlGiJBCMNfLpk5k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg5NjQ4NjQxLTI5MzktNDVlMy04NTU0LTEzZGJiYTZmNzRlNi5qcGc=',
        name:'bhola shanker'
    }


];
export default function Movie() {
  return (
    <div className='header'>
        {
            data.map((hi)=>{
                const {img,name}=hi;
                return(
                    <Chandu img={img} name={name}/>
                )
            })
        }
    </div>
  )
}
const Chandu=(t)=>{
    
    return(
        <div className='card'>
            <img src={t.img} alt='movie name' />
            <h2>{t.name}</h2>
        </div>
    )
}