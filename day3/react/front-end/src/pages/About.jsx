import State from "../hooks/State"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../hooks/UserContext";
import { InfoContext } from "../hooks/InfoContext"; 
import Reducer from "../hooks/Reducer";

const About = () => {

    const name= useContext(InfoContext);
    const products =useContext(UserContext);
    return (
        <div>
            <h1>About Page</h1>
            <h2>Welcome, {name}!</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
            <p>This is a simple about page.</p>
            <Link to='/state'>UserState Example</Link><br/>
            <Link to='/form'>ControlledForm</Link><br/>
            <Link to='/effect'>UseEffect Example</Link><br/>
            <Link to='/reducer'>UseReducer Example</Link>
        </div>
    )
}
export default About;