import './style.css';
import { useCurrentDate } from './UseCurrentDate';

const Clock = () => {
    const {
        date,
        formatClock
    } = useCurrentDate()

    return (
        <p className="displayDate">Today: {formatClock(date)}</p>
    )
}
export default Clock;