export type Question = {
  id: string;
  title: string;
  type: 'text' | 'number' | 'mcq';
  nesting?: Array<Nesting>;
  options?: Array<Option>;
};

// Each option signifies an MCQ answer. So this only applies to mcq questions
type Option = {
  id: string;
  label: string;
  value: string;
};

type Nesting = {
  rule: {
    id: string;
    conditions: Array<{
      operator: 'GTE' | 'LTE' | 'EQ' | 'GT' | 'LT';
      right_operand: string | number;
    }>;
  };
  question: Question;
};

export type Answers = Array<Answer>;

export type Answer = {
  question_id: string;
  answer_value: string | number;
  answer_time: Date;
};
