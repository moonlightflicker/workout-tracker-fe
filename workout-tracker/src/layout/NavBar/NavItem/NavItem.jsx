import PropTypes from 'prop-types';

function NavItem({ icon, text }) {
  return (
    <div className="flex flex-row mx-2.5 mb-3">
      <div className="flex flex-col justify-center mr-2.5">
        <img className="h-6" alt={`${text} icon`} src={icon} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold">{text}</p>
      </div>
    </div>
  );
}

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
