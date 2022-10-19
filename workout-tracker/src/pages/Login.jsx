import './Login.scss';
import backgroundImage from '../assets/backgrounds/login_background.jpg';
import logo from '../assets/branding/logo.png';

function Login() {
  return (
    <div className="w-screen">

      <div className="login-card overflow-hidden">

        {/* Background image */}
        <div className="background-side float-left h-full">
          <img className="background-image inline-block" alt="Background" src={backgroundImage} />
        </div>

        {/* Login form */}
        <div className="login-side float-right h-full">
          <img alt="Logo" src={logo} />
        </div>

      </div>
    </div>
  );
}

export default Login;
