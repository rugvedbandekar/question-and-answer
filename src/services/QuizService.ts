import {Answers} from '../models/QuestionAndAnswers';
import {API_ENDPOINT} from '../utils/constants';

async function getQuestions() {
  return fetch(`${API_ENDPOINT}/get-question/`);
}

async function postAnswers(payload: Answers) {
  return fetch(`${API_ENDPOINT}/answer-question/`, {
    method: 'POST',
    body: JSON.stringify({data: payload}),
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json; charset=UTF-8',
    },
  });
}

export {getQuestions, postAnswers};
