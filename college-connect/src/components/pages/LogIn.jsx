import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogIn=()=>{
    const navigate=useNavigate();
    return(
        <div className="container mt-5 d-flex justify-content-center">

            <div className="card  p-4 shadow" style={{ width: "400px" }}>
            <h2 className="text-center mb-4">LogIn</h2>
            <form>
                <div className="mb-3">
                    <label >Email :</label>
                    <input className="form-control"  type="email" placeholder="Enter Email" name="email" required></input>
                </div>
                <div className="mb-3">
                    <label >Password :</label>
                    <input className="form-control" type="password" placeholder="Enter password" name="password" required minLength="6"></input>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={()=>{
                    navigate("/dashboard")
                }}>Login</button>
            </form>
            <p className="text-center mt-3">
                Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
            </p>
            </div>

        </div>
    )
}
export default LogIn;