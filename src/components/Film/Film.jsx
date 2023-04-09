import React from 'react'

export default function Film(props) {
  return (
    <>
      <span className="w-full h-30 px-4" style={{marginLeft: "20px", marginRight: "20px", marginTop: "20px", display: "inline-block"}}>
          <img 
            className="w-full h-full rounded-xl" style={{width: "225px", height:"300px"}} 
            src={props.src} 
            alt="entertinment image" 
          />
          <div>
            {props.name}
          </div>
      </span>
    </>
  );
}
