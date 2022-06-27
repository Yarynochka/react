import {useEffect, useState} from "react";
import User from "../user/user";


export default function Users (){


let [users, setUsers]=useState([]);
let [user, setUser]= useState({});
useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value)
        });
    },[])

    const choseUser=(user) =>
        setUser(user);

    return(
        <div>

            {  user.id && <div>

                <ol>
                    <ul><b>Name:</b> {user.name} </ul>
                    <ul><b>UserName:</b> {user.username}</ul>
                    <ul><b>Address</b> {user.address.city} </ul>
                </ol>

                 </div>}
<h2>Users</h2>
            {users.map((user,index)=> <User
                key={index} user={user}
            choseUser={choseUser}

            />)}
        </div>
    );
}