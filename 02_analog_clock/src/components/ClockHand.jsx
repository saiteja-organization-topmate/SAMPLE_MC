import PropTypes from 'prop-types';

function ClockHand({ type, degrees }) {
  return (
    <div
      className={`hand ${type}`}
      style={{ transform: `rotate(${degrees}deg)` }}
    ></div>
  );
}

ClockHand.propTypes = {
  type: PropTypes.string.isRequired,
  degrees: PropTypes.number.isRequired,
};

export default ClockHand;
