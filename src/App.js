import {Header} from "./components/Header";
import {FeedbackList} from "./components/FeedbackList";
import {FeedbackStats} from "./components/FeedbackStats";
import {FeedbackForm} from "./components/FeedbackForm";
import {AboutUs} from "./components/pageComponents/AboutUs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AboutUsIconComponent} from "./components/AboutUsIconComponent";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header/>
                <div className='container'>
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                                <AboutUsIconComponent />
                            </>
                        }>
                        </Route>
                        <Route path="/about-us" element={
                            <AboutUs />
                        }>
                        </Route>
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;
