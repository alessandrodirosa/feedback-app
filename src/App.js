import {Header} from "./components/Header";
import {FeedbackData} from "./data/FeedbackData";
import {FeedbackList} from "./components/FeedbackList";
import {FeedbackStats} from "./components/FeedbackStats";
import {FeedbackForm} from "./components/FeedbackForm";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {AboutUs} from "./components/pageComponents/AboutUs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AboutUsIconComponent} from "./components/AboutUsIconComponent";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((currentFeedback) =>
                currentFeedback.id !== id));
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    return (
        <Router>
            <Header/>
            <div className='container'>
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats feedback={feedback}/>
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                            <AboutUsIconComponent />
                        </>
                    }>
                    </Route>
                    <Route path="/about-us" element={
                        <AboutUs />
                    }>
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
