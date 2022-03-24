import React, { useState } from 'react'

export default function TextAreaComp() {

    const [text, setText] = useState('');

    const replaceBackSlash = () => {
        setText(text.replaceAll('\\', "/"));
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
            </div>
        </div>
    )
}
  