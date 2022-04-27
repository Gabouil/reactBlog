import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export default function useRegister() {
    return (username: string, password: string): Promise<LoginResponseInterface> => {
        return axios({
            url: 'http://localhost:2345/register.php',
            method: 'POST',
            withCredentials: true,
            data: new URLSearchParams({
                username: username,
                password: password
            })
        })
            .then(res => res.data)
            .catch(error => console.log(error));
    }
}
