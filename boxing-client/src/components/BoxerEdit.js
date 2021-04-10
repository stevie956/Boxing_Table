import { useEffect, useState } from "react";
import { useParams } from "react-router"

export const BoxerEdit = (props) => {
    const [boxing, setBoxing] = useState({
        id: null,
        name: "",
        weight_id: null,
        country: ""
    })
    const params = useParams();
    console.log('params:', params);
    useEffect(() => {
        fetch(`/boxing/${params.id}`)
          .then(response => response.json())
          .then(data => setBoxing(data))
      }, [params.id])


    const handleChange = (e) => {
        const newBoxer = {...boxing };
        newBoxer[e.target.name] =e.target.value;
        setBoxing(newBoxer);
    };

    const handleSubmit = (e) => {
        props.submit(boxing);
    };

    return <div>
        <h1>Entry Edit</h1>
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
            </label>
            <button type="submit">Edit Entry</button>
        </form>
    </div>
}