import {useState} from "react";

export const FeedbackItem = () => {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState('Example Feedback');

    const handleClick = () => {
        setRating((prevState) => {
            return ++prevState;
        });
        setText('Value modified!');
    };

    return (
        <div className='card-container'>
            <p className='card-container__number-display'>{rating}</p>
            <p className='card-container__text-display'>{text}</p>
            <button onClick={handleClick}>Increase feedback value</button>
        </div>
    )
}
