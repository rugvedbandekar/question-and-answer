import {Text, Modal, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import QButton from '../QButton/QButton';
import QOptions from '../QOptions/QOptions';
import {styles} from './QAnswer.styles';
import {Question} from '../../models/QuestionAndAnswers';

export interface QAnswerProps {
  isVisible: boolean;
  selectedQuestionData?: Question;
  submitAnswer: (answer: string | number) => void;
}
export default function QAnswer({
  isVisible,
  selectedQuestionData,
  submitAnswer,
}: QAnswerProps) {
  const [answer, setAnswer] = useState<string>('');
  if (!selectedQuestionData) {
    return;
  }
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text>{selectedQuestionData.title}</Text>
          {selectedQuestionData.options &&
          selectedQuestionData.options.length > 0 ? (
            selectedQuestionData.options.map(option => (
              <QOptions
                key={option.id}
                title={option.label}
                onClick={() => {
                  submitAnswer(option.value);
                  setAnswer(option.value);
                }}
                isSelected={answer === option.value}
              />
            ))
          ) : (
            <TextInput
              style={styles.input}
              keyboardType={
                selectedQuestionData.type === 'text' ? 'default' : 'numeric'
              }
              value={answer}
              onChangeText={text => setAnswer(text)}
            />
          )}
          <QButton
            title="Submit"
            onClick={() =>
              submitAnswer(
                selectedQuestionData.type === 'number'
                  ? parseInt(answer, 10)
                  : answer,
              )
            }
          />
        </View>
      </View>
    </Modal>
  );
}
