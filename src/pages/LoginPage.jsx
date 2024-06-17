import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();

    const [namaPengguna, setNamaPengguna] = React.useState('')
    const [kataSandi, setKataSandi] = React.useState('')

    const [terlihat, setTerlihat] = React.useState(false)

    const toggleVisibility = () => {
        setTerlihat(!terlihat);
    };

    const onLogin = () => {
        navigate('/home')
    }
    return (

        <div className="ketengah login-background mt-5">
            <div className="d-flex justify-content-center p-5 min-vh-100">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="card p-4 glass-effect" style={{ width: '20rem' }}>
                        <h3 className="card-title text-center text-primary ">Masuk</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-primary">Username</label>
                                <input
                                    type="text"
                                    className="form-control border-primary text-primary"
                                    id="email"
                                    value={namaPengguna}
                                    onChange={(e) => setNamaPengguna(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3 position-relative">
                                <label htmlFor="password" className="form-label text-primary">Password</label>
                                <input
                                    type={terlihat ? "text" : "password"}
                                    className="form-control border-primary text-primary"
                                    id="password"
                                    value={kataSandi}
                                    onChange={(e) => setKataSandi(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="btn btn-link toggle-visibility-btn"
                                    onClick={toggleVisibility}
                                    style={{ textDecoration: 'none' }}
                                >
                                    {terlihat ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 fw-bold" onClick={onLogin}>Masuk!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage