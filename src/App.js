import logo from './logo.svg';
import './App.css';
import Users from "./components/users/Users";



// https://jsonplaceholder.typicode.com/users

// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js
// ви покажете детальну інфомацію про користувача(довільно обрану інформацію)


function App() {
  return (
    <div className="wrap">
      <header className="App-header">
        <h1>Home work 2.1</h1>
      </header>

        <Users
        />
    </div>
  );
}

export default App;
