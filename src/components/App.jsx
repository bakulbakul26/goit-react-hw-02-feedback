import React, { useState } from 'react';
import FeedbackOptions from 'components/feedbackoptions/FeedbackOptions';
import Notifications from 'components/notification/Notification';
import Section from 'components/section/Section';
import Statistics from 'components/statistics/Statistics';

export const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const handleFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const { good, neutral, bad } = state;
  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Section title="Leave Feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notifications message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
