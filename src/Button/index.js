import './style.css';

export const Button = ({ functionClick }) => (
    <button
        type='submit'
        onClick={functionClick}
        className="button">Calculate result</button>
);
