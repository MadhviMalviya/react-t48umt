import React,{useState} from "react";
import "./style.css";
import {useRecoilState,useRecoilValue,atom,selector,RecoilRoot,useRecoilState } from 'recoil'

export default function App() {


  return (
    <div className='App'>
      <h1>Char Counter</h1>
      <RecoilRoot>
     <CharCount  />
     <GetCharValue/>
     </RecoilRoot>
    </div> 
  );
}



// atom 
const textState=atom({
  key:'kuchbhi',
  default:'',
})

// functionality : selector

function GetCharValue(){
  const count=useRecoilValue(charValueSelector)
  return(
<div> 
 
<h3> character count: {count} </h3>
</div>
  )
}
const charValueSelector=selector({
  key:'charValueSelector',
  get:({get})=>{
    const text =get(textState)
    return text.length
  }
})


//main function
function CharCount() {
  const[text,setText]=useRecoilState(textState)
  return(
    <div>
      <input type='text'  onChange={(e)=>setText(e.target.value)}  />
      <h3> Echo: {text}</h3>
    </div>
  )
}

export default App