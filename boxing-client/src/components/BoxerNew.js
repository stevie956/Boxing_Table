import { useState } from "react";


export const BoxerNew = (props) => {
        const [boxing, setBoxing] = useState({
            id: null,
            name: "",
            weight_id: null,
            country: ""
        });

        const handleChange = (e) => {
            const newBoxer = { ...boxing};
            newBoxer[e.target.name] = e.target.value;
            setBoxing(newBoxer);
        };

        const handleSubmit = (e) => {
            // e.preventDefault();
            console.log("handleSubmit");
            props.submit(boxing.name, boxing.weight_id, boxing.country);
        };



    return <div>
        <h1>Create Entry</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input value={boxing.name}
                onChange={handleChange} />
            </label>
            <label>
                Weight_id:
                <input value={boxing.weight_id}
                onChange={handleChange} />
            </label>
            <label>
                Country:
                <input value={boxing.country}
                onChange={handleChange} />
                <button type="submit">New Entry</button>
            </label>
        </form>
    </div>
}