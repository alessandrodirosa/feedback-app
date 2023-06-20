import {FeedbackItem} from "./FeedbackItem";
import PropTypes from "prop-types";

export const FeedbackList = ({feedback, handleDelete}) => {
    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet!</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((currentFeedback) => {
                return <FeedbackItem
                    key={currentFeedback.id}
                    item={currentFeedback}
                    handleDelete={handleDelete}></FeedbackItem>
            })}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
                id: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired
            }
        )
    )
}
