import React, { useState, useEffect } from "react";

const Home = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch the list of questions from the blockchain and update the state
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
