import { currencies } from '../currencies';
import './style.css'
import { useState } from 'react';

const Form = ({ button, footer }) => {
    const [inCurrency, setInCurrency] = useState(currencies[0].name);
    const [outCurrency, setOutCurrency] = useState(currencies[0].name);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("N/A");

    const calculate = () => {
        setResult(((amount * currencies.find(currency => currency.short === inCurrency).rate))
            /
            currencies.find(currency => currency.short === outCurrency).rate)
    };
    const test = () => {
        console.log(result)
    }
    const onFormSubmit = (event) => {
        event.preventDefault()
        calculate();
        test();
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <fieldset className="form__fieldset form__input">
                <legend className="form__legend">Input currency</legend>
                <div>
                    <label>
                        <p>
                            Select currency
                        </p>
                        <select
                            className="form__inputField"
                            value={inCurrency}
                            onChange={({ target }) => setInCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    value={currency.short}
                                    key={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <p>
                            Input amount
                        </p>
                        <input
                            className="form__inputField"
                            name="inputAmount"
                            type="number"
                            step="0.1"
                            autoFocus
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset className="form__fieldset form__output">
                <legend className="form__legend">Output currency</legend>
                <div>
                    <label>
                        <p>
                            Select currency
                        </p>
                        <select
                            className="form__inputField"
                            value={outCurrency}
                            onChange={({ target }) => setOutCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    value={currency.short}
                                    key={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        <p>
                            Output amount
                        </p>
                        {result}
                    </label>
                </div>
            </fieldset>
            {button}
            {footer}
        </form>
    )
}

export default Form;