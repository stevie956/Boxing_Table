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

    return <div>
        <h1>Entry Edit</h1>
        <form>
            <label>
                Name:
                <input value={boxing.name} />
            </label>
            <label>
                Weight_id:
                <input value={boxing.weight_id} />
            </label>
            <label>
                Country:
                <input value={boxing.country} />
            </label>
        </form>
    </div>
}