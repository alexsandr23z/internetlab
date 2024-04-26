'use client';
import { useState } from "react";
import { questionsMock } from "../mock/mock";

function Questions() {
  const [openQuestions, setOpenQuestions] = useState<{ [key: number]: boolean }>({});
  
  const toggleQuestion = (id: number) => {
    setOpenQuestions((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="main__questions" id="questions">
      <h2 className="main__questions-title">Вопросы и ответы</h2>
      <div className="questions__container">
        <ul className="questions__list">
          {questionsMock.map((question) =>
            <li key={question.id} className="questions__item">
              <div className='questions__unlock questions__unlock--open'
                onClick={() => toggleQuestion(question.id)}
              >
                <h3 className="questions__title">{question.title}</h3>
                {openQuestions[question.id] ? <div className="questions__closed"></div>
                : <div className="questions__open"></div>}
              </div>
              <p className={`questions__description ${openQuestions[question.id] ? '' : 'questions__description--active'}`}>{question.description}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Questions;