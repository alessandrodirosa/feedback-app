import PropTypes from "prop-types";
import {Card} from "./shared/Card";
import {FaTimes} from "react-icons/fa";

export const FeedbackItem = ({item, handleDelete}) => {

    return (
        <Card>
            <p className='card-container__number-display'>{item.rating}</p>
            <button onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple'/>
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
