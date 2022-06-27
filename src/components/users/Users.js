import {useEffect, useState} from "react";
import User from "../user/user";
import UserDetails from "../userDetails/userDetails";


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

            {  user.id && <UserDetails
            user={user}
            />}
<h2>Users</h2>
            {users.map((user,index)=> <User
                key={index} user={user}
            choseUser={choseUser}

            />)}
        </div>
    );
}
