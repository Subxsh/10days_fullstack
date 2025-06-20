import Welcome from '../Welcome'
import Skills from '../Skills' 

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Welcome name='Subash' country='India'/>
            <Skills skill={['React', 'JavaScript', 'CSS','Developer']} />
            <h1>Welcome to the App</h1>
        </div>
    )
}
export default Home;