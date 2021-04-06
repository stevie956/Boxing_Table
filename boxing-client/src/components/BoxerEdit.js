import { useParams } from "react-router"

export const BoxerEdit = () => {
    const params = useParams();
    console.log('params:', params);

    return <div>
        <h1>Entry Edit</h1>
    </div>
}