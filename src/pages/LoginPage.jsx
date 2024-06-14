import React from "react"; 


const LoginPage = () => {
    return (

        <div className=" ketengah login-background">
            <div className="d-flex justify-content-center p-5 min-vh-100">
                <div className="d-flex justify-content-center  align-items-center ">
                    <div className="card p-4 glass-effect " style={{ width: '20rem' }}>
                        <h3 className="card-title text-center">Masuk</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Username</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Masuk!</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default LoginPage