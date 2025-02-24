import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLabel } from "../components/AppLabel";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  const [textAnswer, setTextAnswer] = useState("");
  const [errorAnswer, setErrorAnswer] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const RegexAnswer =
    /^\+?\d{1,3}?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const handleClick = () => {
    if (!RegexAnswer.test(textAnswer)) {
      setErrorAnswer(true);
    }
    if (RegexAnswer.test(textAnswer)) {
      setErrorAnswer(false);
    }
  };

  useEffect(() => {
    if (textAnswer) {
      setIsDisabledButton(false);
    } else {
      setIsDisabledButton(true);
    }
  }, [textAnswer]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={1} />
          <div className="question">
            <Header headerType="h2" headerText="1. Занимательный вопрос" />
            <AppLabel
              errorText="Введите Номер в правильном формате"
              labelId="answer"
              labelPlaceholder="Ваш ответ"
              labelValue={textAnswer}
              labelChange={setTextAnswer}
              isError={errorAnswer}
            />
            <AppButton
              btnText="Далее"
              isDisabled={isDisabledButton}
              btnType="button"
              btnClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
