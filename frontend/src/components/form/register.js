import { useState } from "react"


import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import data from "bootstrap/js/src/dom/data";


export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const submit = async(e) => {
        e.preventDefault()
        const data = {
            usernameData: username,
            passwordData: password
        }
        await fetch("http://localhost:5555/createUser.php", {
            // crossDomain: true,
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa(`${data.usernameData}:${data.passwordData}`)}`
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(responseJSON => console.log(responseJSON))
    }


    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <h1>S'inscrire :</h1>
            <Form action="" className="container w-50" onSubmit={submit}>
                <Form.Group className="mb-3" controlId="RegisterName">
                    <Form.Label>Nom d'utilisateur</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={(e) => {setUsername(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="RegisterMDP">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={(e) => {setPassword(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => {submit(e)}}>
                    Inscription
                </Button>
            </Form>
        </div>

    )
}
