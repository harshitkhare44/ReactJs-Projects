import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text)
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLowClick=()=>{
    // console.log("Uppercase was clicked"+text)
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleOnChange=(event)=>{
    // console.log("On change")
    setText(event.target.value)
  }
  const handleClearClick=(event)=>{
    let newText="";
    setText(newText);

  }
  const handleCopy=(event)=>{
   var text=document.getElementById("my Box");
   text.select();
   navigator.clipboard.writeText(text.value);

  }
  const handleReverseClick=(event)=>{
    let newText=ReverseString(text);
    
    
    setText(newText);


  }
  const handleExtraSpaces=()=>{
    
    let newText=text.replace(/\s+/g, ' ').trim()
    setText(newText);
    
  }
  
  function ReverseString(str) {
   let s="";
   for(var i=str.length-1;i>=0;i--){
    s+=str[i];
   }
   return s;
    }
  
  const [text, setText] = useState('');
  // text="new text";
  // setText("new Text")
  return (
    <>
    <div className='container'>
   <h1>{props.heading}</h1>
<div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <button className='btn btn-primary mx-1' onClick={handleUpClick} onChange={handleOnChange}>Convert to UpperCase</button>
  <button className='btn btn-primary mx-1' onClick={handleLowClick} onChange={handleOnChange}>Convert to LowerCase</button>
  <button className='btn btn-primary mx-1' onClick={handleClearClick} onChange={handleOnChange}>Clear Text</button>
  <button className='btn btn-primary mx-1' onClick={handleReverseClick} onChange={handleOnChange}>Reverse Text</button>
  <button className='btn btn-primary mx-1' onClick={handleCopy} onChange={handleOnChange}>Copy Text</button>
  <button className='btn btn-primary mx-1' onClick={handleExtraSpaces} onChange={handleOnChange}>Remove Extra Space</button>
</div>
    </div>
    <div className="container">
      <h2>"Your text summary</h2>
      <p>{text.split("").length} words and {text.length} characters</p>
      <p>{0.008*text.split("").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
</>
  )
}
