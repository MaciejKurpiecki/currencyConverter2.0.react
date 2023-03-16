import { StyledForm, StyledFieldset, StyledLegend, StyledInputField, StyledStatusMessage, FlexBreak } from './styled';
import { useState } from 'react';
import { CalculateButton } from '../Buttons/CalculateButton';
import Clock from '../Clock';
import { ResetButton } from '../Buttons/ResetButton';
import { useRatesData } from '../useRatesData';
import { Spinner } from './Spinner';

const Form = ({ footer }) => {
    const [inCurrency, setInCurrency] = useState("EUR");
    const [outCurrency, setOutCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");
    const [outCurrencyShort, setOutCurrencyShort] = useState("");
    const {
        rates,
        status,
    } = useRatesData();

    const calculate = () => {
        setResult((rates[outCurrency] / rates[inCurrency] * amount))
    };
    // --------------------------old code------------------------------
    // const calculate = () => {
    //     setResult(amount * currencies.find(currency => currency.short === inCurrency).rate
    //         /
    //         currencies.find(currency => currency.short === outCurrency).rate)
    // };

    const displayOutCurrencyShort = () => {
        setOutCurrencyShort(
            [outCurrency]
        );
    };

    const bindButton = () => {
        calculate();
        displayOutCurrencyShort();
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        bindButton();
    };

    const displayResult = result > 0 ? `${result.toFixed(2)} ${[outCurrencyShort]}` : "N/A";

    const resetForm = () => {
        setAmount("");
        setResult("");
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}
        >
            <Clock />
            {status === "loading" ? (
                <StyledStatusMessage>
                    Loading
                    <FlexBreak />
                    <Spinner />
                </StyledStatusMessage>
            ) : status === "error" ? (
                <StyledStatusMessage>
                    Something went wrong. Please try again later.
                </StyledStatusMessage>
            ) : (
                <>
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
                                    {Object.keys(rates).map(currency => (
                                        <option
                                            value={currency}
                                            key={currency}
                                        >
                                            {currency}
                                        </option>
                                    ))}
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
                                    {Object.keys(rates).map(currency => (
                                        <option
                                            value={currency}
                                            key={currency}
                                        >
                                            {currency}
                                        </option>
                                    ))}
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
                        onClick={resetForm}
                    />
                </>
            )
            }
            {footer}
        </StyledForm >
    )
}

export default Form;