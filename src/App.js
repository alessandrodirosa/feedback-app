import {Header} from "./components/Header";
import {FeedbackData} from "./data/FeedbackData";
import {FeedbackList} from "./components/FeedbackList";
import {useState} from "react";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((currentFeedback) =>
                currentFeedback.id !== id));
        }
    };

    return (
        <>
            <Header/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </>
    )
}

export default App;
