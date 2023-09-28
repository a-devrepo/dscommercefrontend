import './styles.css';
import { useState } from 'react';
import * as authService from '../../../services/auth-service';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextToken } from '../../../utils/context-token';

export default function Login() {

    const { setContextTokenPayload } = useContext(ContextToken);

    const navigate = useNavigate();

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest({ username: formData.username.value, password: formData.password.value })
            .then(response => {
                if (response) {
                    authService.saveAccessToken(response.data.access_token);
                    setContextTokenPayload(authService.getAccessTokenPayload());
                    navigate("/cart");
                }
            })
            .catch(error => {
                console.log("Erro no login", error);
            });
    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;

        setFormData({ ...formData, [name]: { ...formData[name], value: value } })
    }

    return (
        <main>
            <section id="login-section" className="dsc-container"></section>
            <div className="dsc-login-form-container">
                <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="dsc-form-controls-container">
                        <div>
                            <input
                                name="username"
                                value={formData.username.value}
                                className="dsc-form-control"
                                type="text"
                                placeholder={formData.username.placeholder}
                                onChange={handleInputChange} />

                        </div>
                        <div>
                            <input
                                name="password"
                                value={formData.password.value}
                                className="dsc-form-control"
                                type="password"
                                placeholder={formData.password.placeholder}
                                onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="dsc-mt20 dsc-login-form-buttons">
                        <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                    </div>
                </form>
            </div>
        </main>
    )

}