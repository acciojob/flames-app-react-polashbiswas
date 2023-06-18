import React, { useState} from "react";
import '../styles/App.css';


let App=()=>{
    let [data,setData]=useState("")
    let [fistame,setFirstName]=useState("");
    let [secondname,setSecondName]=useState("");



    function addData(){
        if(fistame==""|| secondname==""){
            setData("Please Enter valid input")
            return;
        }

        let arrOne=fistame.split("");
        let newArr=[];
        let arrTwo=secondname.split("");

        for(let i=0;i<arrOne.length;i++){
            let flag=false;
            for(let j=0;j<arrTwo.length;j++){
                if(arrOne[i]==arrTwo[j]){
                    arrTwo.splice(j,1);
                    flag=true;
                    break;
                }
            }
        }    
        
        let str=newArr.join("")+arrTwo.join("");
        let n=(str.length)%6;
        switch(n){
            case 1:return setData('Fiends');
            case 2:return setData('Love');
            case 3:return setData('Affection');
            case 4:return setData('Marriage');
            case 5:return setData('Enemy');
            case 0:return setData('Siblings');
        }

    }

    function clear(){
        setData("");
        setFirstName("");
        setSecondName("")
    }  
    return(
    <div id="main">
        <input 
        type="text" 
        name="name1" 
        data-testid="input1" 
        onChange={(e)=>setFirstName(e.target.value)} 
        placeholder="Enter first name" 
        value={fistame}/>

        <input 
        type="text" 
        name="name2" 
        data-testid="input2" 
        onChange={(e)=>setSecondName(e.target.value)} 
        value={secondname} 
        placeholder="Enter second name"/>

        <button 
        data-testid="calculate_relationship" onClick={addData}
        >Calculate Relationship Future</button>
        <button data-testid="clear" onClick={clear}>Clear</button>
        <h3 data-testid="answer">{data}</h3>
    </div>
    )
}


export default App
