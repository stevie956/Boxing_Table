// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom";
import React from "react";

const BoxerList = (props) => { 
  return (
    <ul>
      {props.boxing.map((el, index) => (
        <li key={index} onClick={() => props.handleClick(index)}>
          Name:{el.name} - Weight_id:{el.weight_id} - country:{el.country}
        </li>
      ))}
    </ul>
  );

//     const [boxing, setBoxing] = useState([]);
// useEffect(() => {
//     fetch('/boxing').then(response => response.json()).then(data => setBoxing(data))
// }, [])
//     return <div>
//         <h1>Boxing Table</h1>
//         <ul>
//       {
//         boxing.map(el => <li key={el.id}><Link to={`/boxing/edit/${el.id}`}>{el.name}</Link></li>)
//       }
//     </ul>
//     </div>
};

export { BoxerList };