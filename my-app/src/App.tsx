import { getPosts } from "services";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "components";
import { Post } from "models";

function App() {
  const [data, setPosts1] = useState<Post>();
  const [clicked, plusOne] = useState(0);
  function clickButton() {
    plusOne(clicked + 1);
  }

  useEffect(() => {
    if (clicked > 0) {
      getPosts(clicked).then((res) => {
        console.log(res);
        setPosts1(res.data);
      });
    }
  }, [clicked]);

  useEffect(() => {}, [data]);

  const divStyle = {
    display: "flex",
    flexDirection: "column",
  };

  function ClickedComponent() {
    if (data !== undefined) {
      return (
        <div style={divStyle}>
          <div>{data.id}</div>
          <div>{data.title}</div>
          <div>{data.userId}</div>
          <div>{data.completed}</div>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <Button></Button>
      <header className="App-header">
        <Button
          border="1px solid white"
          color="#fdffc4"
          height="50px"
          onClick={() => clickButton()}
          radius="10px"
          width="200px"
          children={<div>Click me to display the next post !</div>}
        />
        <ClickedComponent></ClickedComponent>
      </header>
    </div>
  );
}

export default App;
