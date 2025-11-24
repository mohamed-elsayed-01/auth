import loginPreview from "../assets/images/login-preview.jpg"
import star from "../assets/images/star.png"
import logo from "../assets/images/logo.png"
import pattern from "../assets/images/preview-pattern.png"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login-container">
            <div style={{
                backgroundImage: `url(${loginPreview})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }} className="login-preview">
                <img className="pattern" src={pattern} alt="pattern" />
                <div className="bottom-panel">
                    <img src={star} alt="star" />
                    <h1>Where Excellence is Standard</h1>
                    <p>
                        At PSI, we don’t just aim for success, we set the benchmark with trust, professionalism, and results.Recognized as Abu Dhabi’s #1 brokerage, we’re driven by dedication, passion, and client commitment.
                    </p>
                </div>
            </div>
            <div className="form">
                <div className="container">
                    <div className="header">
                        <img src={logo} alt="logo" />
                        <div className="titles">
                            <h2>PSI - HCM</h2>
                            <p>Welcome back! Please enter your details.</p>
                        </div>
                    </div>
                    <form className="l-form">
                        <div className="input-container">
                            <label htmlFor="login-email">Email</label>
                            <input id="login-email" placeholder="Enter your email" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="login-password">Password</label>
                            <input id="login-password" placeholder="Password" />
                        </div>
                        <div className="footer">
                            <button>
                                Log in
                            </button>
                            <span style={{ cursor: "pointer" }} onClick={() => navigate("/forgot-password")} >Reset Password</span>
                        </div>
                    </form>
                    <span className="rights">
                        All Rights Reserved. ©Property Shop Investment LLC.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login