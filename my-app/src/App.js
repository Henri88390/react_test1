import { getPosts } from "services";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "components";

function App() {
  const [data, setPosts1] = useState({
    completed: false,
    id: 0,
    title: "",
    userId: 0,
  });
  const [clicked, plusOne] = useState(0);
  function clickButton() {
    plusOne(clicked + 1);
  }

  useEffect(() => {
    if (clicked > 0) {
      getPosts(clicked).then((res) => {
        setPosts1(res.data);
      });
    }
  }, [clicked]);

  useEffect(() => {}, [data]);

  function ClickedComponent() {
    if (clicked > 0) {
      return (
        <ul>
          <div>
            <li>{data.id}</li>
            <li>{data.title}</li>
            <li>{data.userId}</li>
            <li>{data.completed}</li>
          </div>
        </ul>
      );
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button
          border="dashed"
          color="#fdffc4"
          height="200px"
          onClick={() => clickButton()}
          radius="10%"
          width="200px"
          children={<ClickedComponent></ClickedComponent>}
        />
      </header>
    </div>
  );
}

export default App;
