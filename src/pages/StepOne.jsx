import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLabel } from "../components/AppLabel";

const StepOne = () => {
  const [textAnswer, setTextAnswer] = useState ("");
  const [isDisabledButton, setIsDisabledButton] = useState (true);
  useEffect(() => {
    if (textAnswer) {
      setIsDisabledButton(false)
    } else {
      setIsDisabledButton(true)
    }
  },[textAnswer])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <Header headerType=""h2 headerText="1. Занимательный вопрос"/>
            <AppLabel
              errorText="Введите Имя в правильном формате"
              labelId="answer"
              labelPlaceholder="Ваш ответ"
              labelValue={textAnswer}
              labelChange={setTextAnswer}
            />
            <AppButton btnText="Далее" isDisabled={isDisabledButton} btnType="submit"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
