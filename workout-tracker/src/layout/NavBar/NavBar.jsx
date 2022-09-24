import './NavBar.scss';
import NavItem from './NavItem/NavItem';

import logo from '../../assets/branding/logo.png';
import dashboardIcon from '../../assets/icons/dashboard.svg';
import workoutsIcon from '../../assets/icons/workouts.svg';
import exercisesIcon from '../../assets/icons/exercises.svg';
import plansIcon from '../../assets/icons/plans.svg';

function NavBar() {
  return (
    <nav className="navbar fixed h-full group duration-300 overflow-hidden">
      <div className="logo-container flex-row justify-center mt-5 mb-10 h-11 overflow-hidden">
        <img
          alt="Logo"
          src={logo}
          className="logo min-w-max"
        />
      </div>
      <div className="item-container overflow-scroll custom-scrollbar">
        <NavItem icon={dashboardIcon} text="Dashboard" selected />
        <NavItem icon={workoutsIcon} text="Workouts" selected={false} />
        <NavItem icon={exercisesIcon} text="Exercise database" selected={false} />
        <NavItem icon={plansIcon} text="Plans" selected={false} />
      </div>
      {/* TODO: Implemente licensing and socials */}
    </nav>
  );
}

export default NavBar;
