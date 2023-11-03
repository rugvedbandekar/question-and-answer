import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './QTile.styles';
import QAnswer from '../QAnswer/QAnswer';
import {Answer, Question} from '../../models/QuestionAndAnswers';

export interface QTileProps {
  selectedQuestionData: Question;
  handleChangeAnswer: (ans: Answer) => void;
}
export default function QTile({
  selectedQuestionData,
  handleChangeAnswer,
}: QTileProps) {
  const [showAnswerModal, setShowAnswerModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>();

  function evaluateLogicOperation(
    op1: string | number,
    op2: string | number,
    operator: 'GTE' | 'LTE' | 'EQ' | 'GT' | 'LT',
  ) {
    switch (operator) {
      case 'GTE':
        return op1 >= op2;

      case 'LTE':
        return op1 <= op2;

      case 'EQ':
        return op1 === op2;

      case 'GT':
        return op1 > op2;

      case 'LT':
        return op1 < op2;

      default:
    }
  }
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setShowAnswerModal(true);
        }}>
        <View style={styles.body}>
          {selectedAnswer ? (
            <Image
              source={require('../../assets/checkMark.png')}
              style={styles.checkMark}
            />
          ) : (
            <View style={styles.emptyCheckMark} />
          )}

          <Text>{selectedQuestionData.title}</Text>
        </View>

        <Image
          source={require('../../assets/chevronRight.png')}
          style={styles.chevronIcon}
        />
      </TouchableOpacity>
      {selectedAnswer &&
      selectedQuestionData &&
      selectedQuestionData.nesting &&
      selectedQuestionData?.nesting?.length > 0 ? (
        selectedQuestionData.nesting?.map(nes =>
          evaluateLogicOperation(
            selectedAnswer,
            selectedQuestionData.type === 'number'
              ? Number(nes.rule.conditions[0].right_operand)
              : nes.rule.conditions[0].right_operand,
            nes.rule.conditions[0].operator,
          ) ? (
            <View key={nes.question.id}>
              <View style={styles.verticalLine} />
              <QTile
                selectedQuestionData={nes.question}
                handleChangeAnswer={handleChangeAnswer}
              />
            </View>
          ) : (
            <></>
          ),
        )
      ) : (
        <></>
      )}
      <QAnswer
        isVisible={showAnswerModal}
        selectedQuestionData={selectedQuestionData}
        submitAnswer={ans => {
          setShowAnswerModal(false);
          setSelectedAnswer(ans);
          handleChangeAnswer({
            answer_value: ans,
            question_id: selectedQuestionData.id,
            answer_time: new Date(),
          });
        }}
      />
    </>
  );
}
