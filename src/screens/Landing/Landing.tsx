import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import QTile from '../../components/QTile/QTile';
import QButton from '../../components/QButton/QButton';
import {styles} from './Landing.styles';
import {Answer, Answers, Question} from '../../models/QuestionAndAnswers';
import {getQuestions, postAnswers} from '../../services/QuizService';

const Landing = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answers>([]);

  useEffect(() => {
    getQuestions()
      .then(res => res.json())
      .then(data => setQuestions(data.questions));
  }, []);

  const submitAnswer = (payload: Answers) => {
    postAnswers(payload).then(res =>
      console.log('Submmited. Status Code', res.status),
    );
  };

  const handleChangeAnswer = ({
    question_id,
    answer_time,
    answer_value,
  }: Answer) => {
    let temp = answers.filter(answer => answer.question_id !== question_id);
    temp.push({question_id, answer_time, answer_value});
    setAnswers(temp);
  };
  return (
    <View style={styles.container}>
      {questions.map(question => (
        <QTile
          key={question.id}
          selectedQuestionData={question}
          handleChangeAnswer={handleChangeAnswer}
        />
      ))}
      <QButton title="Submit" onClick={() => submitAnswer(answers)} />
    </View>
  );
};

export default Landing;
