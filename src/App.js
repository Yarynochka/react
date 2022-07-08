import './App.css';
import Users from "./components/Users/Users";
import {getUserPost} from "./services/users.apa.services";
import {useState} from "react";
import Posts from "./components/Posts/Posts";


function App() {
  let [posts, setPosts]=useState([]);
const elevate=(id)=>{
  getUserPost(id).then(({data})=>{
setPosts([...data]);
  })
}

  return (

    <div className="App">
      <div className={'left'}>
    <Users elevate={elevate}/>

    </div>

    <div className={'right'}>
      <Posts posts={posts}/>
    </div>

    </div>);
}

export default App;
