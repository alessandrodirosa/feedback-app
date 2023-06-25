import {Card} from "./shared/Card";
import {useState} from "react";
import {Button} from "./shared/Button";
import {RatingSelect} from "./RatingSelect";

export const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState('');

    const handleTextChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
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
    };

    return (
        <Card>
            <form>
                <h2>How would you rate last Favino's movie?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review"/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div> }
            </form>
        </Card>
    )
}
