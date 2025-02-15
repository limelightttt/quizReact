import React from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLabel } from "../components/AppLabel";

const StepOne = () => {
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
              // labelValue={userName}
              // labelChange={}
            />
            <AppButton btnText="Далее" isDisabled={true} btnType="submit"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
