import { useEffect, useState } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                setUsers(users);
            });
    }, []);

    return (
        <div className="Users">
            <ul className="users-list">
                {users.map((user) => {
                    return <li key={user.id}>{user.name}</li>;
                })}
            </ul>
        </div>
    );
}

export default Users;
