import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
    const optionsCounter = (event) => {
        return updateFeedback(event.target.textContent.toLowerCase());
    };

    return (
        <div className={css.btnContainer}>
            <button type="button" onClick={optionsCounter}>
                Good
            </button>
            <button type="button" onClick={optionsCounter}>
                Neutral
            </button>
            <button type="button" onClick={optionsCounter}>
                Bad
            </button>

            {totalFeedback ? (
                <button type="button" onClick={resetFeedback}>
                    Reset
                </button>
            ) : null}
        </div>
    );
};

export default Options;
