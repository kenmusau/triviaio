import { useEffect } from "react";
import { useQuiz } from "./context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timerId);
  }, [dispatch]);
  return (
    <div className="timer">
      <p>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </p>
    </div>
  );
}

export default Timer;
