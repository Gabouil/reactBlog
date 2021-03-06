import react, {useState} from 'react'
import {Button, Form} from "react-bootstrap";

export default function NewPost({userId}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const submit = async(e) => {
        e.preventDefault()
        const data = {
            titleData: title,
            contentData: content,
            userIdData: userId
        }
        console.log(JSON.stringify(data))
        await fetch("http://localhost:5555/createPost.php", {
            // crossDomain: true,
            method: 'POST',headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(responseJSON => console.log(responseJSON))
    }

    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <h1>Nouveau post :</h1>
            <Form action="" className="container w-50">
                <Form.Group className="mb-3" controlId="PostTitre">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={(e) => {setTitle(e.target.value)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="PostContent">
                    <Form.Label>Contenue</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={5}
                        className="form-control"
                        onChange={(e) => {setContent(e.target.value)}} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => submit(e)}>
                    Publier
                </Button>
            </Form>
        </div>

    )
}
