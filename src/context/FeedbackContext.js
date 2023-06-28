import {createContext, useState} from "react";
import {FeedbackData} from "../data/FeedbackData";
import {v4 as uuidv4} from "uuid";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((currentFeedback) =>
                currentFeedback.id !== id));
        }
    };

    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => {
            return item.id === id ? {...item, ...updateItem} : item;
        }));
    };

    //Update item
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    };

    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}
