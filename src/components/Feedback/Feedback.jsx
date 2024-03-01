// import css from './Feedback.module.css'

const Feedback = ({ values, totalFeedback, positive }) => {
    return (
        <div>
            <p>Good: {values.good}</p>
            <p>Neutral: {values.neutral}</p>
            <p>Bad: {values.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positive} %</p>
        </div>
    );
};

export default Feedback;
