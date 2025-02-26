import React, { useRef, useState } from "react";
import { Header } from "../components/Header";
import { ProgressBar } from "../components/ProgressBar";
import { AppButton } from "../components/AppButton";
import { AnswerItem } from "../components/AnswerItem";
import { useNavigate } from "react-router-dom";

const StepThree = () => {
  const selectEmojiRef = useRef("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const handleClick = (event) => {
    selectEmojiRef.current = event.target.value;
    const userData = JSON.parse(localStorage.getItem("user")) || {};

    localStorage.setItem(
      "user",
      JSON.stringify({ ...userData, selectEmoji: selectEmojiRef.current })
    );
    setIsDisabled(!selectEmojiRef.current);
  };

  const emoji = [
    {
      id: "variant-1",
      value: "laugh",
      text: "Ваш ответ 1",
      photo: <img src="./img/laugh.png" alt="" />,
    },
    {
      id: "variant-2",
      value: "hearts",
      text: "Ваш ответ 2",
      photo: <img src="./img/hearts.png" alt="" />,
    },
    {
      id: "variant-3",
      value: "smirk",
      text: "Ваш ответ 3",
      photo: <img src="./img/smirk.png" alt="" />,
    },
    {
      id: "variant-4",
      value: "fright",
      text: "Ваш ответ 4",
      photo: <img src="./img/fright.png" alt="" />,
    },
  ];
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Header headerText="Какой у вас характер ?" headerType="h2" />
            <ul className="emoji-variants">
              {emoji.map((elem) => (
                <AnswerItem
                  answerText={elem.photo}
                  answerValue={elem.value}
                  emojiText={elem.text}
                  answerChange={handleClick}
                  id={elem.id}
                  key={elem.id}
                />
              ))}
            </ul>
            <AppButton
              isDisabled={isDisabled}
              btnClick={() => navigate("/step-four")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
