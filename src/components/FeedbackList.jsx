import {FeedbackItem} from "./FeedbackItem";
import {useContext} from "react";
import {FeedbackContext} from "../context/FeedbackContext";

export const FeedbackList = () => {
    const {feedback} = useContext(FeedbackContext);
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet!</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((currentFeedback) => {
                return <FeedbackItem
                    key={currentFeedback.id}
                    item={currentFeedback}></FeedbackItem>
            })}
        </div>
    )
}
