import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppButton } from "../components/AppButton";
import { Header } from "../components/Header";
import { AnswerItem } from "../components/AnswerItem";

const StepTwo = () => {
  const course = [
    {
      id: "variant-1",
      value: "React",
    },
    {
      id: "variant-2",
      value: "Python",
    },
    {
      id: "variant-3",
      value: "DATA Analytics",
    },
    {
      id: "variant-4",
      value: "UX/UI",
    },
  ];
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar currentStep={2} />
          <div className="question">
            <Header headerType="h2" headerText="Выберите курс:" />
            <ul className="variants">
              {course.map((elem) => (
                <AnswerItem
                  answerText={elem.value}
                  answerValue={elem.value}
                  id={elem.id}
                  key={elem.id}
                />
              ))}
            </ul>
            <AppButton
              btnText="Далее"
              isDisabled={false}
              btnType="button"
              // btnClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
