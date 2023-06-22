import PropTypes from "prop-types";
export const FeedbackStats = ({feedback}) => {
    //Calculate feedback average
    let average = (feedback.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.rating;
    },0) / feedback.length);

    average = Math.trunc(average);
    return (
        <div className='feedback-stats-container'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {average ? average : 0}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback : PropTypes.array.isRequired
}
