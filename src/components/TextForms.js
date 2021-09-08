import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForms(props) {
    
    const [text,setText]=useState("");

    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper Case","success");
    }
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");

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
        props.showAlert(`Email Address: ${result()}`,result()==="Email not Found"?"warning":"success");
        
    }
    const handleCopyClick = ()=>{
        let text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","success")
    }
    const handleExtraClick = ()=>{
        let ntext=text.split(/[ ]+/);
        setText(ntext.join(" "));
        props.showAlert("Extra Spaces Remove","success");
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

            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleEmClick}>Find Email</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraClick}>Clear Extra Spaces</button>


        </div>

        <div className="container my3" style={{color: props.mode==="dark"? 'white':"black"}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((elements)=>{ return elements.length!==0 }).length} words, {text.length} characters.</p>
            <p>It can be read in {0.008*text.split(" ").filter((elements)=>{ return elements.length!==0 }).length} minutes.</p>
            <h2>Preview</h2>
            <p>{ text.length===0?"Enter text to see the preview.": text }</p>
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