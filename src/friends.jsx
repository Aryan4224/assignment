import React from "react"

function friends(props){
    let {name ,age ,bio,image,isMinor} = props;
    let ok;
    if(!isMinor){
       let ok="&#9745";
       
    }
}
return (
    <div
    style={{
            width: "22%",
            border: "1px solid",
            margin: "15px",
            backgroundColor: isMinor ? "read" : "green",
        }}
    >
        <p className={isMInor ? "a" : "b"}>
            {name}-{age}
        </p>
        <p>{bio}</p>
    </div>
)