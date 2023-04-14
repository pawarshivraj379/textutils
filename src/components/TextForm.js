
import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpperOnclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('success','Converted to UpperCase');
    }
    const handleLowerOnclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('success','Converted to LowerCase');
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const handleClearOnclick = () => {
        let newText ="";
        setText(newText);
        props.showAlert('success','Cleared the Text');
      }
      const handleFirstLetterUppercase = () =>{
        function capitalize(str) {
          return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
      
        const upper = text.split(' ').map(capitalize).join(' ');
        setText(upper)
        props.showAlert('success','Converted FirstLetterUpperCase');

      }
      const WhiteSpace = () => {
        let updated_text = text.split(/[ ]+/);
        setText(updated_text.join(" "))
        props.showAlert('success','Removed WhiteSpace');

    }
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const [text,setText] = useState("");

  return (
    <>
    <div className={`container my-2 text-${props.modeStatus==='light'?'dark':'light'}`}>
        <h5>Text Summary</h5>
        <p>Words <b>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length}</b> & Characters <b>{text.length}</b></p>
        <p><b>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} </b> minutes read</p>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
    <div className={`container my-2 text-${props.modeStatus==='light'?'dark':'light'}`}>
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea id="mybox" cols="30" rows="10" style={{backgroundColor:props.modeStatus==='light'?'white':'#3B9C9C',color:props.modeStatus==='dark'?'white':'black'}} className="form-control" value={text} onChange={handleOnchange}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpperOnclick}>Convert To Upper</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleLowerOnclick}>Convert To Lower</button>
      <button disabled={text.length===0}  type="submit" onClick={speak} className="btn btn-primary mx-2 mx-2 my-2">Speak</button>
      <button disabled={text.length===0}  type="submit" onClick={handleClearOnclick} className="btn btn-danger mx-2 mx-2 my-2">Clear</button>
      <button disabled={text.length===0}  type="submit" onClick={handleFirstLetterUppercase} className="btn btn-primary mx-2 mx-2 my-2">IntialCapitalChar</button>
      <button disabled={text.length===0}  type="submit" onClick={WhiteSpace} className="btn btn-primary mx-2 mx-2 my-2">RemoveExtraWhiteSpace</button>

    </div>
    
    </>
  )
}
