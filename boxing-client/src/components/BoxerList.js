import { useEffect, useState } from "react"

export const BoxerList = () => {
    const [boxing, setBoxing] = useState([]);
useEffect(() => {
    fetch('/boxing').then(response => response.json()).then(data => setBoxing(data))
}, [])
    return <div>
        <h1>Boxing Table</h1>
        {
            boxing.map(el => <li key={el.id}>(el.name)</li>)
        }
    </div>
}