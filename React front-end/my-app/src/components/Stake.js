import React, {useState, useEffect} from "react";

const StakeForm = (props) => {
    const [stake, setStake] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
// Place the stake on the blockchain
        fetch("/api/options/" + props.match.params.id + "/stake", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({stake}),
        })
            .then((res) => res.json())
            .then((data) => {
                // Show a success message to the user
                alert("Stake placed successfully!");
            })
            .catch((error) => {
                // Show an error message to the user
                alert("Failed to place stake. Please try again.");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Place Stake</h1>
            <div>
                <label htmlFor="stake">Stake:</label>
                <input
                    type="number"
                    id="stake"
                    value={stake}
                    onChange={(e) => setStake(e.target.value)}
                />
            </div>
            <button type="submit">Place Stake</button>
        </form>
    );
};

export default StakeForm;