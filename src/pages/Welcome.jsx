import React from "react";
import { Header } from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AppLabel } from "../components/AppLabel";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header text="Добро пожаловать в квиз от лучшего учебного центра"/>
          <form className="welcome__form">
            <AppLabel labelText="Ваше имя" labelPlaceholder="Ваш ответ" errorText="Введите номер в правильном формате например" labelId="username"/>
            {/* <label className="input-wrapper" htmlFor="username">
              Ваше имя
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="Ваш ответ"
              />
              <span id="error-message">
                Введите номер в правильном формате например
              </span>
            </label> */}
            <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label>
            <AppButton btnText="Далее" isDisabled={false} btnType="submit"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
