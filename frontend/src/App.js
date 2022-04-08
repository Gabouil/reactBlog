import logo from './logo.svg';
import './App.css';
import Register from "./components/form/register";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap";
import {useState} from "react";
import Login from "./components/form/login";

export default function App() {
    const [connexion, setConnexion] = useState(false)
    return (
      <div className="App">
          <Button variant="primary" type="submit" onClick={() => setConnexion(false)}>
              inscription
          </Button>
          <Button variant="primary" type="submit" onClick={() => setConnexion(true)}>
              connexion
          </Button>
          <div className={connexion ? 'd-none' : 'd-block'}>
              <Register />
          </div>
          <div className={connexion ? 'd-block' : 'd-none'}>
              <Login />
          </div>
      </div>
    )
}
