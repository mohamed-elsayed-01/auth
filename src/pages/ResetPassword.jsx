import { useNavigate, useParams } from "react-router-dom";
import arrowLeft from "../assets/images/arrow-left.png"
import resetPasswordPreview from "../assets/images/reset-password-preview.jpg"
import pattern from "../assets/images/preview-pattern.png"
import star from "../assets/images/star.png"
import logo from "../assets/images/logo.png"

const ResetPassword = () => {
    const navigate = useNavigate();
    const { email } = useParams();

    return (
        <div className="login-container">
            <div style={{
                backgroundImage: `url(${resetPasswordPreview})`,
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
                            <p>Create a new password for your account.</p>
                        </div>
                    </div>
                    <form className="l-form">
                        <div className="input-container">
                            <label htmlFor="login-email">Your Email</label>
                            <input disabled value={email} id="login-email" placeholder="Enter your email" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="login-email">New Password</label>
                            <input id="login-email" placeholder="New Password" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="login-email">Confirm Password</label>
                            <input id="login-email" placeholder="Confirm your new password" />
                        </div>
                        <div className="footer">
                            <button>
                                Reset Password
                            </button>
                            <span className="back-to-login" onClick={() => navigate("/")} >
                                <img src={arrowLeft} alt="arrowLeft" width={20} height={20} />
                                Back to Login
                            </span>
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

export default ResetPassword