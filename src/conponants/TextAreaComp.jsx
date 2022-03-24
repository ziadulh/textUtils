import React, { useState } from 'react'

export default function TextAreaComp() {

    const [text, setText] = useState('');

    const replaceBackSlash = () => {
        setText(text.replaceAll('\\', "/"));
    }

    const convertToUpperCase = () => {
        setText(text.toUpperCase());
    }

    const convertToLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleOnchageText = (event) => {
        setText(event.target.value);
    }

    return (

        <div className='container'>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Enter Text</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleOnchageText}></textarea>
                <button className='my-2 btn btn-primary' onClick={replaceBackSlash}>Replace \</button>
                <button className='my-2 mx-2 btn btn-primary' onClick={convertToUpperCase}>ConvertToUpperCase</button>
                <button className='my-2 btn btn-primary' onClick={convertToLowerCase}>ConvertToUpperCase</button>
            </div>
        </div>
    )
}
  