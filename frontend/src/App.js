import logo from './logo.svg';
import './App.css';
import Register from "./components/form/register";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from "react-bootstrap";

export default function App() {

  return (
    <div className="App">
        <Button variant="primary" type="submit">
            inscription
        </Button>
        <Button variant="primary" type="submit">
            connexion
        </Button>
      <Register />
    </div>
  );
}
