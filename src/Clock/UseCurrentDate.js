import { useState, useEffect } from "react";

export const formatClock = (date) =>
    date.toLocaleString(
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
    );

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return {
        date,
    }
};