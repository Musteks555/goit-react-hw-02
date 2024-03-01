import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

import "./App.css";

import { useEffect, useState } from "react";

function App() {
    const [values, setValues] = useState(() => {
        const localStorageValues = localStorage.getItem("values");

        if (localStorageValues) {
            return JSON.parse(localStorageValues);
        } else {
            return {
                good: 0,
                neutral: 0,
                bad: 0,
            };
        }
    });

    // const [totalFeedback, setTotalFeedback] = useState(0);
    // const [positive, setPositive] = useState(0);

    const updateFeedback = (feedbackType) => {
        setValues({
            ...values,
            [feedbackType]: values[feedbackType] + 1,
        });
    };

    const resetFeedback = () => {
        setValues({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    useEffect(() => {
        localStorage.setItem("values", JSON.stringify(values));
    }, [values]);

    const totalFeedback = values.good + values.neutral + values.bad;

    const positivePercent = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
            {totalFeedback ? <Feedback values={values} totalFeedback={totalFeedback} positive={positivePercent} /> : <Notification />}
        </>
    );
}

export default App;
