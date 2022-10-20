import './Login.scss';
import backgroundImage from '../assets/backgrounds/login_background.jpg';
import logo from '../assets/branding/logo.png';

function Login() {
  return (
    <div className="login-page w-screen h-screen flex flex-col justify-center items-center">

      <div className="login-card overflow-hidden">

        {/* Background image */}
        <div className="background-side float-left h-full">
          <img className="background-image inline-block" alt="Background" src={backgroundImage} />
        </div>

        {/* Login form */}
        <div className="login-side float-right h-full overflow-x-hidden overflow-y-scroll">

          {/* Logo */}
          <div className="flex flex-row justify-center">
            <img className="logo" alt="Logo" src={logo} />
          </div>

          {/* Welcome message */}
          <div className="flex flex-row justify-center">
            <span className="font-semibold">Welcome to the Workout Tracker!</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
