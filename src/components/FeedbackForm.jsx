import {Card} from "./shared/Card";
import {useContext, useEffect, useState} from "react";
import {Button} from "./shared/Button";
import {RatingSelect} from "./RatingSelect";
import {FeedbackContext} from "../context/FeedbackContext";

export const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState('');
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }

    }, [feedbackEdit]);

    const handleTextChange = (e) => {
        if(e.target.value === ''){
            setBtnDisabled(true);
            setMessage('');
        }else if(e.target.value && e.target.value.trim().length <= 10){
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters');
        }else{
            setMessage('');
            setBtnDisabled(false);
        }
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            };

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback);
            }

            setText('');
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate last Favino's movie?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div> }
            </form>
        </Card>
    )
}
