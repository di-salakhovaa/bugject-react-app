import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
    const params = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, []);

    return (
        <div>
            <h2>{user.name} {user.username}</h2>
            <p>{user?.address?.city}</p>
            <p>{user.email}</p>
            <a href="#">{user.website}</a>
        </div>
    )
}

export default UserPage;