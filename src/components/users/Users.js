import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import User from "../user/User";

export default function Users ({chosen}) {
    let [users,setUsers]=useState([]);
    useEffect(()=>{

        getUsers().then(({data})=>setUsers([...data]));
    },[])
    return (
        <div>

            {
users.map(value => <User item={value} key={value.id} chosen={chosen}/>)
            }
        </div> );
}