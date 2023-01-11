import React,{useState,useEffect} from 'react'
import Typography from "./../Typography/typography"
const TerminalEffect = () => {
    const [cursorOn, setCursorOn] = useState(true);
    const [values,setValues] = useState([]);
    useEffect(() => {
      const interval = setInterval(() => {
        setCursorOn(prev => !prev);
      }, 500);
  
      return () => clearInterval(interval);
    }, []);
  
    const [code, setCode ] = useState('$ type generate to get a new quote...');

    const handleChange = (e) => {
      const newValue = e.target.value;
      if (newValue.match(/^\$\s/)) {
        setCode(newValue);
      }
    };

    const checkInput = ()=>{
      console.log(code);
      switch(code){
        case '$ clear':
          setValues([]);
          break;
        default:
          break;
      }
    }
    const handleKeyDown = (e) => {
	    console.log(e);
      if (e.key === 'Enter') {
        // Enter key was pressed
        updateState(code);
        checkInput();
        setCode('$ ');
        console.log(values);
      }
    };
    const updateState = (newValue) => {
      // Shift the elements in the array down by one
      if(values.length === 5){
        const updatedValues = [...values.slice(1), newValue];
        setValues(updatedValues);
      }
      else{
        const updatedValues = [...values,newValue];
        setValues(updatedValues);
      }
    }

    return (
      <div className="bg-[#282C33] text-white p-4 rounded-lg shadow-xl border border-gray-800" >
        <pre className="font-mono text-xs leading-5">
          <>
          {values.map((line)=> <p>{line}</p>)}
          <input value={`${code}`} onChange={handleChange} className={'bg-transparent w-full outline-0'} onKeyDown={handleKeyDown}/>
          </>
        </pre>
      </div>
    );
  };

const Terminal= ({ width, borderColor, heading, children }) => {
    const className = width === 'full' ? 'w-full border-2 border-solid border-[#ABB2BF]' : 'w-1/2 border-1 border-solid border-[#ABB2BF]';
    const style = { border: `3px solid ${borderColor}` };
  
    return (
      <div className={className}>
        <Typography variant='h6' className={`border-solid border-b-2 border-[#ABB2BF] text-left text-semibold text-white p-2`}>{heading}</Typography>
        {/* <input className="border-none p-2 bg-transparent w-full text-[#ABB2BF]" /> */}
        {children}
      </div>
    );
  };

export {TerminalEffect, Terminal};
