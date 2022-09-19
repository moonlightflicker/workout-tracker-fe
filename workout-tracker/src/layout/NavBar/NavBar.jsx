import './NavBar.scss';
import logo from '../../assets/branding/placeholder_logo.png';

function NavBar() {
  return (
    <nav className="NavBar fixed h-screen w-64">
      <div className="w-full flex flex-row justify-center">
        <img alt="Logo" src={logo} className="w-52" />
      </div>
      <ul>
        <li>Home</li>
        <li>Workouts</li>
        <li>Exercises</li>
        <li>Plans</li>
      </ul>
    </nav>
  );
}

export default NavBar;
