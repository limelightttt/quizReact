import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLabel } from "../components/AppLabel";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const [textAnswer, setTextAnswer] = useState("");
  const [errorAnswer, setErrorAnswer] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(true);

  const RegexAnswer = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
  const navigate = useNavigate();

  const handleClick = () => {
    if (!RegexAnswer.test(textAnswer)) {
      setErrorAnswer(true);
    }
    if (RegexAnswer.test(textAnswer)) {
      setErrorAnswer(false);

      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...userData, answer: textAnswer })
        );
      } else {
        localStorage.setItem("user", JSON.stringify({ answer: textAnswer }));
      }
      navigate("/step-two");
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
            <Header headerType="h2" headerText="Где вы про нас узнали ?" />
            <AppLabel
              errorText="Введите текст в правильном формате"
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
              btnClick={() => handleClick()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
