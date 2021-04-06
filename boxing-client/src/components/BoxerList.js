import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const BoxerList = () => {
    const [boxing, setBoxing] = useState([]);
useEffect(() => {
    fetch('/boxing').then(response => response.json()).then(data => setBoxing(data))
}, [])
    return <div>
        <h1>Boxing Table</h1>
        <ul>
      {
        boxing.map(el => <li key={el.id}><Link to={`/boxing/edit/${el.id}`}>{el.name}</Link></li>)
      }
    </ul>
    </div>
}