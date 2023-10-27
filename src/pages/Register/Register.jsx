import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { GlobalContext } from '../../Authprovider/AuthContext';

const Register = () => {
    const {createUser} = useContext(GlobalContext)
  const handelSignIn =(e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log( email , password);
    createUser( email , password )
    .then((userCredential) => {
        alert("working now...")
        console.log(userCredential);
    })
    .catch((error) => {
      alert (error.message)
      // ..
    });


  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2">
            <img src={login} alt="img" />
          </div>
          <div className="card  w-1/2  shadow-2xl bg-base-100">
            <form onSubmit={handelSignIn} className="card-body">
            <h1 className="text-5xl font-bold">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className=' mb-3 ml-5'>already have a account. <Link to={"/login"}><button>Login!</button></Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;