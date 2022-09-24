import PropTypes from 'prop-types';
import './NavItem.scss';

function NavItem({ icon, text }) {
  return (
    <div className="block mb-2.5 whitespace-nowrap">

      {/* Icon */}
      <img className="icon inline-block" alt={`${text} icon`} src={icon} />

      {/* Text */}
      <div className="item-text-container align-middle inline-block overflow-hidden">
        <span className="text-lg font-bold inline-block">
          {text}
        </span>
      </div>

    </div>
  );
}

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
