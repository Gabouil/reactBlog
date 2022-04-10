import { useState } from "react"


import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'


export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [credentials, setCredentials] = useState({
        username : '',
        password : ''
    })

    const handleConnect = (e) => {
        e.preventDefault()
        setCredentials({
            username : username,
            password: password
        })
        console.log(credentials)
        handleSubmit()
    }

    const handleSubmit = async() => {
        const data = credentials
        await fetch("http://localhost:5555/createUser.php", {
            // crossDomain: true,
            method: 'GET',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${data.username}:${data.password}`)}`
        },
            body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(responseJSON => console.log(responseJSON))
            }


            return (
            <div className="text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
                <h1>S'inscrire :</h1>
                <Form action="" className="container w-50" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="LoginName">
                        <Form.Label>Nom d'utilisateur</Form.Label>
                        <Form.Control
                            type="text"
                            name="username"
                            className="form-control"
                            onChange={(e) => {setUsername(e.target.value)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="LoginMDP">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={(e) => {setPassword(e.target.value)}} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => {handleConnect(e)}}>
                        connection
                    </Button>
                </Form>
        </div>

    )
}