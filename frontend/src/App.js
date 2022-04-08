import logo from './logo.svg';
import './App.css'
import Register from "./components/form/register"
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react"
import Login from "./components/form/login"

export default function App() {
    const [connexion, setConnexion] = useState(false)
    return (
      <div className="App">
          <button className={"btn mb-4"} onClick={() => setConnexion(false)}>
              inscription
          </button>
          <button className={"btn mb-4"} onClick={() => setConnexion(true)}>
              connexion
          </button>
          <div className={connexion ? 'd-none' : 'd-block'}>
              <Register />
          </div>
          <div className={connexion ? 'd-block' : 'd-none'}>
              <Login />
          </div>
      </div>
    )
}
