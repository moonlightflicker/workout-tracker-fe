import PropTypes from 'prop-types';
import './NavItem.scss';

function NavItem({
  icon, text, selected,
}) {
  return (
    <div className={`nav-item-container whitespace-nowrap ${selected ? 'selected-item' : ''}`}>

      {/* Icon */}
      <img className={`icon inline-block ${selected ? 'selected-item-icon' : ''}`} alt={`${text} icon`} src={icon} />

      {/* Text */}
      <div className="nav-item-text-container align-middle inline-block overflow-hidden">
        <span className="inline-block leading-4">
          {text}
        </span>
      </div>

    </div>
  );
}

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default NavItem;
