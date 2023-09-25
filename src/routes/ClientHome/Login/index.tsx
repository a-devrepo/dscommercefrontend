import './styles.css';

export default function Login() {
    return (
        <main>
            <section id="login-section" className="dsc-container"></section>
            <div className="dsc-login-form-container">
                <form className="dsc-card dsc-form">
                    <h2>Login</h2>
                    <div className="dsc-form-control-container">
                        <div>
                            <input className="dsc-form-control" type="text" placeholder="Email" />

                        </div>
                        <div>
                            <input className="dsc-form-control" type="password" placeholder="Senha" />
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