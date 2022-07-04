import React , {useState} from 'react'


export default function TextForms(props) {
   const handleUpClick =() => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
    //alert text
    props.showAlert("Converted to uppercase","success");

   }
  
   const handleClearClick =() => {
    // console.log("Uppercase was clicked: " + text);
    let newText = '';
    setText(newText)
    props.showAlert("Clear Text","success");
   }
   const handleLoClick =() => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase","success");
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Speech available","success");
    }

    //remove all the symbols
const handletextExtract =()=>{
        const regex = /[0-9/A-Z/a-z/ /]/g;

        const letters = text.match(regex);
        const res1 = letters.join('');
        setText(res1)
        props.showAlert("Removes all symbol","success");
        };

// this function not workng properly Copy text
const handleCopy = () => {
  //console.log("I am copy");
  var text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy text","success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ] + /);
  setText(newText.join(" "));
  props.showAlert("Extra space remove","success");
}
 

const handleOnChange =(event) => {
   // console.log("On change");
    setText(event.target.value) // by this we edit and update text 
  }
 
  
  // console.log('render');
  //concept of hooks
  const [text ,setText] = useState('');
  // text = "new text";   wrong way to change the state
  // setText("new"); // correct way to change the text
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading} </h3>
      <div className="mb-3">
  <textarea className="form-control" value ={text} 
 onChange ={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white' ,color:props.mode==='dark'?'white':'#38739d'}} id ="myBox" rows ="8"></textarea>
    </div>
    <button className ="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
    {'  '}
    <button className ="btn btn-danger mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
    {'  '}
    <button className ="btn btn-secondary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    {'  '}
    <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    {'  '}
    <button type="submit" onClick={handletextExtract} className="btn btn-info mx-2 my-2">Remove Symbol</button>
    {'  '}
    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    {'  '}
    <button className="btn btn-danger mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
  <div className ="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h4>Your text summary</h4>
     <p>{text.split(" ").length} words and {text.length} characters </p>
     <p>{0.008 * text.split(" ").length}Minutes read</p>
     <h5>Preview</h5>
     <p>{text.length>0?text:"Enter something to preview it here"}</p>

  </div>
  </>
  )
}
