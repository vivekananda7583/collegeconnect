import { NavLink } from "react-router-dom";

const SignUp=()=>{
    return(
        <div className="container mt-5 d-flex justify-content-center">

            <div className="card  p-4 shadow" style={{ width: "400px" }}>
            <h2 className="text-center mb-4">SignUp</h2>
            <form>
                <div className="mb-3">
                    <label >Username :</label>
                    <input  className="form-control"type="text" placeholder="Enter Username" name="username" required></input>
                </div>
                <div className="mb-3">
                    <label >Email :</label>
                    <input className="form-control"  type="email" placeholder="Enter Email" name="email" required></input>
                </div>
                <div className="mb-3">
                    <label >College Name:</label>
                    <input className="form-control"  type="text" placeholder="Enter College Name" name="college" required></input>
                </div>
                <div className="mb-3">
                    <label >Password :</label>
                    <input className="form-control" type="password" placeholder="Enter password" name="password" required minLength="6"></input>
                </div>
                <button type="submit" className="btn btn-primary ">Sign Up</button>
            </form>
            <p className="text-center mt-3">
                Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
            </div>

        </div>
    )
}
export default SignUp;