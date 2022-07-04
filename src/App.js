import logo from './logo.svg';
import './App.css';
import Users from "./components/users/Users";
import {getUsersPosts} from "./services";
import {useState} from "react";
import Posts from "./components/posts/Posts";


function App() {
let [posts, setPosts]=useState([])
    const chosen= (id)=>{
        getUsersPosts(id).then(({data}) => {
setPosts([...data]);
        })
    }

  return (
    <div className="App">
<div className={'left'}><Users chosen={chosen}/></div>
        <div className={'right'}>
        <Posts key={posts.id} posts={posts}/>
        </div>
    </div>
  );
}

export default App;
