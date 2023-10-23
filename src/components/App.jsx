import React, { useState } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import css from './FeedbackOptions/FeedbackOptions.module.css';

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = rating => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [rating]: prevFeedback[rating] + 1,
    }));
  };

  const total = Object.values(feedback).reduce((acc, value) => acc + value, 0);

  const positive = Math.round((feedback.good / total) * 100);

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <Section title="Statistics">
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={total}
              positivePercentage={positive}
            />
          </Section>
        </>
      )}
    </div>
  );
}

export default App;
