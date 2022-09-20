import './NavBar.scss';
import NavItem from './NavItem/NavItem';

import logo from '../../assets/branding/placeholder_logo.png';
import dashboardIcon from '../../assets/icons/dashboard.svg';
import workoutsIcon from '../../assets/icons/workouts.svg';
import exercisesIcon from '../../assets/icons/exercises.svg';
import plansIcon from '../../assets/icons/plans.svg';

function NavBar() {
  return (
    <nav className="NavBar fixed h-full w-64">
      <div className="w-full flex flex-row justify-center mt-5 mb-10">
        <img alt="Logo" src={logo} className="h-11" />
      </div>
      <div className="ItemContainer overflow-scroll custom-scrollbar w-full">
        <NavItem icon={dashboardIcon} text="Dashboard" selected />
        <NavItem icon={workoutsIcon} text="Workouts" selected={false} />
        <NavItem icon={exercisesIcon} text="Exercises database" selected={false} />
        <NavItem icon={plansIcon} text="Plans" selected={false} />
      </div>
    </nav>
  );
}

export default NavBar;
