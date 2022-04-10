import {useEffect, useState} from "react"


import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import Post from "../content/post";


export default function Register({setIsLogin, setUsername, setUserId, setErrorLogin}) {
    const [inputPassword, setInputPassword] = useState(null)
    const [inputUsername, setInputUsername] = useState(null)
    const [users, setUsers] = useState(null)


    useEffect(() => {
        userList()
    }, []);

    const userList = async() => {
        fetch("http://localhost:5555/getUser.php")
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setUsers(data)
            })
            .catch(error => {
                setUsers({ errorMessage: error.toString() });
                console.error('Il y a eu une erreur', error);
            })
    }
    const login = async(e) => {
        e.preventDefault()
        setErrorLogin(false)
        users.map((user, i) => {
           if(user.username === inputUsername && user.password === inputPassword){
               setIsLogin(true)
               setUsername(user.username)
               setUserId(user.id)
           } else {
               setErrorLogin(true)
           }
        })
    }

    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <h1>Se connecter :</h1>
            <Form action="" className="container w-50">
                <Form.Group className="mb-3" controlId="LoginName">
                    <Form.Label>Nom d'utilisateur</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={(e) => {setInputUsername(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LoginMDP">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={(e) => {setInputPassword(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => {userList() && login(e)}}>
                    connection
                </Button>
            </Form></div>

    )
}