import PropTypes from 'prop-types';

function NavItem({ icon, text }) {
  return (
    <div className="flex flex-row mb-2.5">
      <div className="flex-col justify-center w-16">
        <img className="w-6" alt={`${text} icon`} src={icon} />
      </div>
      <div className="flex-col justify-start">
        <p className="text-lg font-bold hidden group-hover:block">{text}</p>
      </div>
    </div>
  );
}

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
