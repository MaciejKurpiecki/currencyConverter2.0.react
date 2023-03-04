import { useCurrentDate } from './useCurrentDate';
import { StyledClock } from './styled';
import { formatClock } from './useCurrentDate';

const Clock = () => {
    const {
        date,
    } = useCurrentDate()

    return (
        <StyledClock>Today: {formatClock(date)}</StyledClock>
    )
}
export default Clock;