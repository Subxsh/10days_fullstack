import State from "../hooks/State"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is a simple about page.</p>
            <Link to='/state'>UserState Example</Link><br/>
            <Link to='/form'>ControlledForm</Link><br/>
            <Link to='/effect'>UseEffect Example</Link>
        </div>
    )
}
export default About;