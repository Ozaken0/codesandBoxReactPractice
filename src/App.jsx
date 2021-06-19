import React, { useEffect, useState } from "react";
import ColorfulMessage from "./componets/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaseShowFlag] = useState(true);

  const contentStyle = {
    color: "red",
    fontsize: "18px"
  };
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaseShowFlag(!faceShowFlag);
  };
  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaseShowFlag(true);
    } else {
      faceShowFlag && setFaseShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={contentStyle}>こんにちわ</h1>
      <ColorfulMessage color="yellow" message="お元気ですか" />
      <ColorfulMessage color="green" message="呪術" />

      <button onClick={onClickCountUp}>カウントアップボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>On/Off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};
export default App;
