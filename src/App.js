import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import UserFilter from './components/UserFilter';
import userContext from './store/user-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

function App() {
  
  const userConext = {
    users: DUMMY_USERS
  }
  return (
    <userContext.Provider value={userConext}>
     <UserFilter></UserFilter>
    </userContext.Provider>
  );
}

export default App;
