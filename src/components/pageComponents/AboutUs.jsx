import {Card} from "../shared/Card";
import {Link} from 'react-router-dom';
export const AboutUs = () => {
    return (
        <Card>
            <div className="about-us">
                <h1>About us</h1>
                <p>This is a small company for small people</p>
                <p>App version: 1.0.0</p>

                <p>
                    <Link to="/">Back to home</Link>
                </p>
            </div>
        </Card>
    )
}
