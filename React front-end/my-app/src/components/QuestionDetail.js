import React, {useState, useEffect} from "react";

const QuestionDetail = (props) => {
    const [question, setQuestion] = useState({});

    useEffect(() => {
// Fetch the details of the question from the blockchain and update the state
        fetch('/api/questions /${props.match.params.id}'
        )
            .then((res) => res.json())
            .then((data) => setQuestion(data));
    }, [props.match.params.id]);

    return (
        <div>
            <h1>Question Detail</h1>
            <h2>{question.title}</h2>
            <ul>
                {question.options.map((option) => (
                    <li key={option.id}>
                        {option.title}: {option.stake} arbis
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionDetail;