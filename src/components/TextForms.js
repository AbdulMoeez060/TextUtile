import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForms(props) {
    
    const [text,setText]=useState("");

    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleEmClick = ()=> {
        let words= text.split(" ");
        let result= function() {
            for (let i = 0; i < words.length; i++) {
                if(words[i].includes('@')===true)
                {
                    return words[i];
                }            
            }
            return "Email not Found";
        }
        if(result()==="Email not Found")
            alert("Email not Found");
        else
            alert(`Email is ${result()}`);
    }

    const handleOnChange= (event)=>{
        setText(event.target.value);
    }



    return (
        <>
        <div className="container my-3" style={{color: props.mode==="dark"? 'white':"black"}}>
            <h1>{props.textDetails}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==="dark"? '#042743':"white", color: props.mode==="dark"? 'white':"black"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleEmClick}>Find Email</button>

        </div>

        <div className="container my3" style={{color: props.mode==="dark"? 'white':"black"}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words, {text.length} characters.</p>
            <p>It can be read in {0.008*text.split(" ").length} minutes.</p>
            <h2>Preview</h2>
            <p>{ text.length===0?"Enter text to see.": text }</p>
        </div>
        </>
    )
}
TextForms.propTypes={
    textDetails: PropTypes.string.isRequired
}

TextForms.defaultProps= {
    textDetails: "Text Area"
}