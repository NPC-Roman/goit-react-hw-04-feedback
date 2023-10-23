/*import React, { useState } from 'react';
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

export default App;*/
import { useState } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import css from './FeedbackOptions/FeedbackOptions.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = rating => {
    switch (rating) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return Math.round((good / totalFeedback) * 100);
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          </Section>
        </>
      )}
    </div>
  );
};

export default App;
