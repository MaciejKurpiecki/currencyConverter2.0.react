import { currencies } from '../currencies';
import './style.css'
import { useState } from 'react';
import { Button } from '../Button';

const Form = ({ footer }) => {
    const [inCurrency, setInCurrency] = useState(currencies[0].short);
    const [outCurrency, setOutCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState(+"");
    const [result, setResult] = useState(+"");
    const [outCurrencyShort, setOutCurrencyShort] = useState("");

    const calculate = () => {
        setResult(amount * currencies.find(currency => currency.short === inCurrency).rate
            /
            currencies.find(currency => currency.short === outCurrency).rate)
    };
    const displayOutCurrencyShort = () => {
        setOutCurrencyShort(
            currencies.find(currency => currency.short === outCurrency).short
        );
    }

    const bindButton = () => {
        calculate();
        displayOutCurrencyShort();
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        bindButton();
    };

    const displayResult = result > 0 ? `${result.toFixed(2)} ${outCurrencyShort}` : "N/A";
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
                            step="0.01"
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
                        <input
                            className="form__inputField"
                            readOnly
                            value={displayResult}
                        />
                    </label>
                </div>
            </fieldset>
            <Button
            // -----For function on click!-----
            // functionClick={bindButton}
            />
            {footer}
        </form>
    )
}

export default Form;