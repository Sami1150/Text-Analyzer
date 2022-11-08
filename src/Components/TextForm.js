import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("Upper Case was clicked")
        let str=text.toUpperCase()
        setText(str)
    }
    const handleLowClick=()=>{
        console.log("Lower Case was clicked")
        let str=text.toLowerCase()
        setText(str)
    }

    const handleClearClick=()=>{
        setText("")
    }
    const handleSpaceCountClick=()=>{
        let count=0;
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) === " ") {
                count=count+1;
            }
        }    
        return count;    
    }
    
    const OnChangeClick=(event)=>{
        console.log("On Change")
        let str=event.target.value;
        setText(str)
    }
    const [text, setText]=useState("Text Box value");
    return(
        <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={OnChangeClick} rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpaceCountClick}>Spaces in Text</button>


    </div>
    <div className="container">
        <h1>Your text Summary</h1>
        <p> Word {text.split(" ").length}</p>
        <p>Characters {text.length}</p>
        <p>Time to read: {0.008*text.split(" ").length}</p>
        <h3>Text Preview: </h3>
        <p>{text}</p>
        <p>Space Count: {handleSpaceCountClick()}</p>
    </div>
    </>
    )
}
