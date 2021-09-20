import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Redirect, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/" >
        <Redirect to="/welcome" />
      </Route>
      <NavBar />
    </div>
  );
}

export default App;
