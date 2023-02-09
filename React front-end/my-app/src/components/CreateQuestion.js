import React, {useState} from "react";

const CreateQuestion = () => {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [allowAnswer, setAllowAnswer] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send a transaction to the blockchain to create the question
        fetch("/api/questions", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({question, options, allowAnswer}),
        })
            .then((res) => res.json())
            .then((data) => {
// Show a success message to the user
                alert("Question created successfully!");
            })
            .catch((error) => {
// Show an error message to the user
                alert("Failed to create question. Please try again.");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Question</h1>
            <div>
                <label htmlFor="question">Question:</label>
                <input
                    type="text"
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="options">Options:</label>
                {options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        value={option}
                        onChange={(e) =>
                            setOptions((prevOptions) => [
                                ...prevOptions.slice(0, index),
                                e.target.value,
                                ...prevOptions.slice(index + 1),
                            ])
                        }
                    />
                ))}
                <button type="button" onClick={() => setOptions([...options, ""])}>
                    Add option
                </button>
            </div>
            <div>
                <label htmlFor="allowAnswer">Allow answer:</label>
                <input
                    type="checkbox"
                    id="allowAnswer"
                    checked={allowAnswer}
                    onChange={(e) => setAllowAnswer(e.target.checked)}
                />
            </div>
            <button type="submit">Create Question</button>
        </form>
    );
};

export default CreateQuestion;
