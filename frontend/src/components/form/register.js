import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form } from 'react-bootstrap'


import useForm from "../../hook/useForm";

export default function Register() {
    const { handleChange, values, handleSubmit} = useForm();


    return (
        <div className="text-center d-flex justify-content-center align-items-center w-100 h-100">
            <Form action="" className="container" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        className="form-control"
                        value={values.username}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        className="form-control"
                        value={values.password}
                        onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Inscription
                </Button>
            </Form>
        </div>
    );
}
