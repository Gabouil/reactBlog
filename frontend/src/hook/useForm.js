import { useState, useEffect } from "react"

export default function useForm() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return { handleChange, values, handleSubmit }
}

