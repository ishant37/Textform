import React, { useState, useEffect } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const onhandleclick = () => {
    console.log("Button clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const onsecondclick = () => {
    console.log("Button clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const onclear = () => {
    console.log("Clear text");
    let newText = '';
    setText(newText);
  };

  const oncopy = (event) => {
    console.log("Copied");
  
    // Ensure clipboardData is available
    if (event.clipboardData) {
      // Get the selected text (what the user has copied)
      let copiedText = window.getSelection().toString();
      console.log("Copied Text: ", copiedText);
  
      // Optionally, modify the copied content (e.g., add a custom message)
      let newText = `${copiedText}\n\n-- Copied from my website --`;
  
      // Modify the copied text by setting it into the clipboard
      event.clipboardData.setData('text/plain', newText);
  
      // Prevent the default action (the default copying behavior)
      event.preventDefault();
    } else {
      console.error('ClipboardData is not available.');
    }
  };
   // This ensures the effect is only applied when 'text' changes

  return (
    <>
      <div>
        <h2 style={{ color: props.mode === 'light' ? 'dark' : 'light' }}>{props.heading}</h2>
        <textarea
          className='form-control'
          id='myBox'
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={onhandleclick}>Upper case</button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={oncopy}
          disabled={text === ''}  // Disable the button if text is empty
        >
          Copy
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={onsecondclick}>Lower case</button>
        <button className="btn btn-primary my-2 mx-2" onClick={onclear}>Clear text</button>
      </div>
      <h1>Your Preview</h1>
      <p>{text}</p>
    </>
  );
}
