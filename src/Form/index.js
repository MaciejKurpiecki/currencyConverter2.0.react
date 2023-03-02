import { currencies } from '../currencies';
import { StyledForm, StyledFieldset, StyledLegend, StyledInputField } from './styled';
import { useState } from 'react';
import { CalculateButton } from '../Buttons/Calculate button';
import Clock from '../Clock';
import { ResetButton } from '../Buttons/Reset button';

const Form = ({ footer }) => {
    const [inCurrency, setInCurrency] = useState(currencies[0].short);
    const [outCurrency, setOutCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");
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
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Clock />
            <StyledFieldset Input>
                <StyledLegend>Input currency</StyledLegend>
                <div>
                    <label>
                        <p>
                            Select currency
                        </p>
                        <StyledInputField as="select"
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
                        </StyledInputField>
                    </label>
                </div>
                <div>
                    <label>
                        <p>
                            Input amount
                        </p>
                        <StyledInputField
                            name="inputAmount"
                            type="number"
                            step="0.01"
                            autoFocus
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                        />
                    </label>
                </div>
            </StyledFieldset>
            <StyledFieldset Output>
                <StyledLegend>Output currency</StyledLegend>
                <div>
                    <label>
                        <p>
                            Select currency
                        </p>
                        <StyledInputField
                            as="select"
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
                        </StyledInputField>
                    </label>
                </div>
                <div>
                    <label>
                        <p>
                            Output amount
                        </p>
                        <StyledInputField
                            readOnly
                            value={displayResult}
                        />
                    </label>
                </div>
            </StyledFieldset>
            <CalculateButton
            // -----For function on click!-----
            // functionClick={bindButton}
            />
            <ResetButton
                setAmount={setAmount}
                setResult={setResult}
            />
            {footer}
        </StyledForm>
    )
}

export default Form;