import React from "react";

export const AnswerItem = ({
  answerText,
  id,
  answerValue,
  answerChange,
  emojiText,
  // imgSrc,
}) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant-1"
        id={id}
        value={answerValue}
        onChange={answerChange}
      />
      <label htmlFor={id}>
        {answerText} 
        {/* {imgSrc && <img src={imgSrc} alt="" />} */}
        <p>{emojiText}</p>
      </label>
    </li>
  );
};
