import React, { useState } from "react";
import Card from "../UI/Card";

const Step2SelectSticker = (props) => {
  const [stickers, setSticker] = useState(props.stickers);
  //   console.log("Stickers", props.stickers);
  return (
    <Card>
      <h3>Step two: Select your sticker</h3>
      <button onClick={() => setSticker(stickers[0])}>
        <img src={stickers[0].url} />
      </button>
      <button onClick={() => setSticker(stickers[1])}>
        <img src={stickers[1].url} />
      </button>
      <button onClick={() => setSticker(stickers[2])}>
        <img src={stickers[2].url} />
      </button>
      <button onClick={() => setSticker(stickers[3])}>
        <img src={stickers[3].url} />
      </button>
      <button onClick={() => setSticker(stickers[4])}>
        <img src={stickers[4].url} />
      </button>
      <button onClick={() => setSticker(stickers[5])}>
        <img src={stickers[5].url} />
      </button>
      <button onClick={() => setSticker(stickers[6])}>
        <img src={stickers[6].url} />
      </button>{" "}
    </Card>
  );
};

export default Step2SelectSticker;
