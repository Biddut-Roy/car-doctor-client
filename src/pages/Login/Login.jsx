import { Link, useLocation, useNavigate } from 'react-router-dom';
import log from '../../assets/images/login/login.svg'
import UseAuth from '../../Hooks/useAuth';

// import { useContext } from 'react';
// import { GlobalContext } from '../../Authprovider/AuthContext';
// import axios from 'axios';

const Login = () => {
  // const { login } = useContext(GlobalContext)
  const { login } = UseAuth()
  const location = useLocation();
  const navigate = useNavigate();


  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        alert("Log in successfully")
        navigate(location?.state ? location?.state : "/")
        console.log(userCredential.user);
        // const user = { email }
        // axios.post("https://car-doctor-biddut-roys-projects.vercel.app/jwt", user, { withCredentials: true })
        //   .then((res) => {
        //     if (res.data.success) {
        //       navigate(location?.state ? location?.state : "/")
        //     }
        //   })


      })
      .catch((error) => {
        alert(error.message)
        // ..
      });


  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2">
          <img src={log} alt="img" />
        </div>
        <div className="card  w-1/2  shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login</h1>
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className=' mb-3 ml-5'>do not have your account , please <Link to={"/signUp"}><button>Register?</button></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;