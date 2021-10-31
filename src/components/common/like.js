import React, { Component } from "react";

//input: liked : boolean
//output : onClick : 
//simple dom component

//converted to stateless func comp from class comp
const Like = props => {
  let iconName = "fa fa-heart";
  if(!props.liked) iconName += "-o";
  // const liked = status ? iconName : `${iconName}-o`;
  return (  
    <i style={{cursor: "pointer"}} 
    onClick={props.onClick}
    className={iconName}>
    </i>
  );
}
 
export default Like;


