import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'
import useForm from "../../hook/useForm"

export default function Login() {
    const { handleChange, values, handleSubmit} = useForm()

    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <h1>Se connecter :</h1>
            <Form action="" className="container w-50" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nom d'utilisateur</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        className="form-control"
                        value={values.username}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        className="form-control"
                        value={values.password}
                        onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Connexion
                </Button>
            </Form>
        </div>
    )
}
