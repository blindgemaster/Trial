import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import QuestionsList from "./components/Home";
import CreateQuestion from "./components/CreateQuestion";
import QuestionDetail from "./components/QuestionDetail";
import StakeForm from "./components/Stake";

const App = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create">Create Question</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route exact path="/" element={QuestionsList}/>
                    <Route path="/create" element={CreateQuestion}/>
                    <Route path="/questions/:id" element={QuestionDetail}/>
                    <Route path="/options/:id/stake" element={StakeForm}/>
                </Routes>
            </main>
        </div>
    );
};

export default App;
