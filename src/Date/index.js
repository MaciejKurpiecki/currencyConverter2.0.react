import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';

const DisplayDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p className="displayDate">Today: {date.toLocaleString(
            undefined,
            {
                month: "long",
                weekday: "long",
                day: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            }
        )}</p>
    )
}

export default DisplayDate;