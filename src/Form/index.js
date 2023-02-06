import './style.css'

const Form = ({ button, footer }) => {
    return (
        <form className="form">
            <fieldset className="form__fieldset form__input">
                <legend className="form__legend">Input currency</legend>
                <p>
                    <labe>
                        <p>
                            Select currency
                        </p>
                        <select className="form__inputField" name="inputCurrency">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>PL</option>
                        </select>
                    </labe>
                </p>
                <p>
                    <label>
                        <p>
                            Input amount
                        </p>
                        <input className="form__inputField" name="inputAmount" type="number" step="0.1" autoFocus />
                    </label>
                </p>
            </fieldset>
            <fieldset className="form__fieldset form__output">
                <legend className="form__legend">Output currency</legend>
                <p>
                    <label>
                        <p>
                            Select currency
                        </p>
                        <select className="form__inputField" name="outputCurrency">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                            <option>PL</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <p>
                            Output amount
                        </p>
                        placeholder
                    </label>
                </p>
            </fieldset>
            {button}
            {footer}
        </form>
    )
}

export default Form;