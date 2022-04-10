import logo from './logo.svg';
import './App.css'
import Register from "./components/form/register"
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react"
import Login from "./components/form/login"
import NewPost from "./components/form/newPost";
import Posts from "./components/content/posts";

export default function App() {
    const [connexion, setConnexion] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [username, setUsername] = useState(null)
    const [userId, setUserId] = useState(null)
    return (
      <div className="App">
          <section className={isLogin ? 'd-none' : 'd-block mb-5'}>
              <button className={connexion ? "btn mb-4" : "btn mb-4 btn-success"} onClick={() => setConnexion(false)}>
                  inscription
              </button>
              <button className={connexion ? "btn mb-4 btn-success" : "btn mb-4"} onClick={() => setConnexion(true)}>
                  connexion
              </button>
              <div className={connexion ? 'd-none' : 'd-block'}>
                  <Register />
              </div>
              <div className={connexion ? 'd-block' : 'd-none'}>
                  <Login setIsLogin={setIsLogin} setUsername={setUsername} setUserId={setUserId} />
              </div>
          </section>
          <section className={isLogin ? 'd-block mb-5' : 'd-none'}>
              <h2>Bienvenu {username} !</h2>
              <button className={'btn mb-4 btn-danger'} onClick={() => setIsLogin(false) & setUsername(null) & setUserId(null)}>déconnexion</button>
          </section>
          <div className={isLogin ? 'd-block mb-5' : 'd-none'}>
              <NewPost />
          </div>
          <div className={"mt-5"}>
              <Posts />
          </div>
      </div>
    )
}
