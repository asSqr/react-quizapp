import React from "react";
import Button from "../../components/Button/Button";
// history.pushを使うと、SPAでも戻る・進むボタン使えるよ
const Home = ({ history }) => {
  return (
    <div>
      <h1>HOME</h1>
      <Button onClickHandler={() => history.push("/quiz")}>
        Go To Quiz Page
      </Button>
    </div>
  );
};

const dummy = "a";

export default Home;
