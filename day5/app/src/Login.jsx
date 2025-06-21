import Img from "./apj.png"
import "./Login.css"
function Login() {
    return (
        <>
            <div className="main">
                <h1 className="Login">Login Page</h1>
                <div className='form'>
                    <div className="size">
                        <input type="text" placeholder="Enter Username" /></div>
                    <div className='size'>
                        <input type="Password" placeholder="Enter your password" /></div>
                </div>
                <button type="button" className="btn">Submit</button>
            </div>

            <img className="img" src={Img} alt="pic" />
        </>
    )
};
export default Login;