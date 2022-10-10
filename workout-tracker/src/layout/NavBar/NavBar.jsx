import './NavBar.scss';
import NavItem from './NavItem/NavItem';
import Socials from './Socials/Socials';

import logo from '../../assets/branding/logo.png';
import dashboardIcon from '../../assets/icons/dashboard.svg';
import workoutsIcon from '../../assets/icons/workouts.svg';
import exercisesIcon from '../../assets/icons/exercises.svg';
import plansIcon from '../../assets/icons/plans.svg';

function NavBar() {
  return (
    <nav className="navbar fixed h-full group duration-300 overflow-hidden">
      <div className="logo-container flex-row justify-center overflow-hidden">
        <img
          alt="Logo"
          src={logo}
          className="logo min-w-max"
        />
      </div>

      <div className="separator" />

      <div className="item-container overflow-y-scroll overflow-x-hidden custom-scrollbar">
        <NavItem icon={dashboardIcon} text="Dashboard" selected />
        <NavItem icon={workoutsIcon} text="Workouts" selected={false} />
        <NavItem icon={exercisesIcon} text="Exercise database" selected={false} />
        <NavItem icon={plansIcon} text="Plans" selected={false} />
      </div>

      <div className="separator" />

      <Socials className="socials-container" />
    </nav>
  );
}

export default NavBar;
