import React from 'react';
import { useState } from 'react';
export default function Hooks() {
    const [fname,fnamef]=useState('');
    const [lname,lnamef]=useState('');
    const [mail,mailf]=useState('');
    const [password,passf]=useState('');
    function changefname(e){
        console.log(e.target.value);
        fnamef(e.target.value);
    }
    function changelname(e){
        lnamef(e.target.value);
    }
    function changemail(e){
        mailf(e.target.value);
    }
    function changepassword(e){
        passf(e.target.value);
    }
    function check(e)

{
    e.preventDefalut();
    var object1={
        firstname:fname,
        lastname:lname,
        mail:mail,

};
console.log(object1);
}
  return (
   <div>
   <from onSubmit={check}>
   <input 
   type="text"
   name='fname'
   id='fname'
   value={fname} 
   onChange={changefname}
   placeholder='enter your first name'/>
   <input 
   type="text"
   name='lname'
   id='fname'
   value={lname} 
   onChange={changelname}
   placeholder='enter your last name'/>
   <input 
   type="mail"
   name='lname'
   id='fname'
   value={mail} 
   onChange={changemail}
   placeholder='enter your last mail'/>
   <input 
   type="password"
   name='lname'
   id='fname'
   value={password} 
   onChange={changepassword}
   placeholder='enter your password'/>
   <input type='submit' />
  
   </from>
   </div>
  )
}
