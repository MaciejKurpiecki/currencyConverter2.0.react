import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ status: "loading" });

    useEffect(() => {
        const getRates = async () => {
            try {
                const currencyUrl = "https://ap2i.exchangerate.host/latest";
                const response = await axios.get(currencyUrl);

                setRatesData({
                    date: response.data.date,
                    rates: response.data.rates,
                    status: "success",
                })
            } catch (error) {
                console.error(error)

                setRatesData({
                    status: "error",
                });
            }
        };
        setTimeout(getRates, 3000);
    }, []);
    return ratesData;
};