import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar";

const Index = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/api/user").then((response) => {
            setUsers(response.data);
        });
    }, []);

    return (
        <>
            <NavBar />

            <h1>ユーザ一覧</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};

export default Index;
