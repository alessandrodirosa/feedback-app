import PropTypes from "prop-types";
import {Card} from "./shared/Card";
import {FaEdit, FaTimes} from "react-icons/fa";
import {useContext} from "react";
import {FeedbackContext} from "../context/FeedbackContext";

export const FeedbackItem = ({item}) => {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

    return (
        <Card>
            <p className='card-container__number-display'>{item.rating}</p>
            <button onClick={() => deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <button onClick={() => editFeedback(item)} className='edit'>
                <FaEdit color='purple' />
            </button>
            <p className='card-container__text-display'>{item.text}</p>
        </Card>
    )
}

FeedbackItem.defaultProps = {
    item: {
        id: 0,
        rating: 0,
        text: 'Default feedback item'
    }
};

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}
