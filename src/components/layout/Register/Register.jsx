
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviderContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const notify = () => toast("Successfully registered🥰🥰");

    const { createUser, handleGoogleSignIn } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        const name = form.get('name')
        console.log(email, password, name)
        // create user
        createUser(email, password)
            .then(result => {
                notify();
                <ToastContainer />
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-semibold">Register to <span className="font-mono">Flow Motion</span></h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
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
                    <p className="pb-2 text-center">Already have an account? <Link className="text-blue-600 underline" to="/login">Login</Link> </p>
                    <div className="container mx-7 mb-3">
                        <button onClick={handleGoogleSignIn} className="btn btn-neutral w-10/12 mx-auto">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;