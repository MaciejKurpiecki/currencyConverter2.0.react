import { useCurrentDate } from './UseCurrentDate';
import { StyledClock } from './styled';

const Clock = () => {
    const {
        date,
        formatClock
    } = useCurrentDate()

    return (
        <StyledClock>Today: {formatClock(date)}</StyledClock>
    )
}
export default Clock;