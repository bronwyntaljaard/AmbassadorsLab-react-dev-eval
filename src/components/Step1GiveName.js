import React, { useState } from "react";
import Card from "../UI/Card";

const Step1GiveName = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <Card>
      <h3>Step one: Give it a name </h3>
      <input
        type="text"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
    </Card>
  );
};

export default Step1GiveName;
