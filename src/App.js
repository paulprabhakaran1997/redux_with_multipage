import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import EditUser from './components/EditUser';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiGetUsers } from './api/apiGetUsers';

function App() {

  const dispatch = useDispatch();
  useEffect(() =>{
    console.log("Project App.js Running......")
    apiGetUsers(dispatch)
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/users' element={ <UserList /> } />
          <Route path='/editUser/:id' element={ <EditUser /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
