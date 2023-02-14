import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';

const DisplayDate = () => {
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <p className="displayDate">Today: {dateState.toLocaleString(
            undefined,
            { month: "long", weekday: "long", day: "2-digit", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
        )}</p>
    )
}

export default DisplayDate;