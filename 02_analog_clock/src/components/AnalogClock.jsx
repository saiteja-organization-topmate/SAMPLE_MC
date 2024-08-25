import { useClockHandDegrees } from '../customHooks/useClockHandDegrees';
import ClockHand from './ClockHand';
import './AnalogClock.css';

function AnalogClock() {
  const { secondsDegrees, minsDegrees, hourDegrees } = useClockHandDegrees();

  return (
    <div className='clock'>
      <div className='clock-face'>
        <ClockHand type='hour-hand' degrees={hourDegrees} />
        <ClockHand type='min-hand' degrees={minsDegrees} />
        <ClockHand type='second-hand' degrees={secondsDegrees} />
      </div>
    </div>
  );
}

export default AnalogClock;
