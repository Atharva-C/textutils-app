import React, { useState } from 'react'


export default function TextForm(props) {

  const handleonChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  }

  // here, on change event is an important even which needs to be listened and handled because when the user will give
  // his/her desired text as input then the on change event will occur and the text needs to be converted to uppercase.

  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success", " Converted to upper case")
  }

  const handlelowClick = () => {
    console.log("lower case was clicked");
    let newerText = text.toLowerCase();
    setText(newerText);
    props.showAlert("success", " Converted to lower case")
  }

  const handleclearClick = () => {
    console.log("Text Cleared");
    let newerText = "";
    setText(newerText);
  }

  const [text, setText] = useState('');
  // text ="new text"; // wrong way to change the state
  // setText("new Text"); // correct way to change the text by using the function
  return (
    <>
      <div className="container">
        <label htmlFor="TextForm" className="form-label" >
          <h1 className='display-3'style={{backgroundColor: props.mode === 'dark'? '#343a40': 'white' , color: props.mode === 'dark'?'white':'black'}}>{props.heading} </h1>
        </label>
        <div className="mb-3">
        <textarea id="mybox" rows="10" className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'? '#343a40': 'white' , color: props.mode === 'dark'?'white':'black'}} onChange={handleonChange}></textarea>
        </div>
        {/* in above line if we pass the variable normally inside the tag, its state will not be changed */}
        <button type="button" className="btn btn-info mt-3" onClick={handleUpClick}>Convert to upper case</button>
        <button type="button" className="btn btn-info mt-3 mx-2" onClick={handlelowClick}>Convert to lower case</button>
        <button type="button" className="btn btn-info mt-3 mx-2" onClick={handleclearClick}>Clear</button>
      </div>
      <div className="container mt-2 ">
        <h2 className='display-5'style={{backgroundColor: props.mode === 'dark' ? '#343a40':'white', color: props.mode === 'dark' ? 'white' : 'black'}}>Your Text Summary</h2>
        <p  style={{backgroundColor: props.mode === 'dark' ? '#343a40':'white', color: props.mode === 'dark' ? 'white' : 'black'}}>{text.split(" ").length} and words  and {text.length} characters</p>
        {/* split(" ") tells us where there is a white space between characters so that they can be considered as 2 different words */}
      </div>
    </>
  )
}
