import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
  return (
    <div className="App">
      <Header />
      <Main>
        <p>Question one</p>
      </Main>
    </div>
  );
}
