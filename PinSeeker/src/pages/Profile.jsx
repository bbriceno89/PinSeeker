import Nav from '../components/Nav'

const Profile = () => {
    const handleClick = () => {
        console.log('clicked')
    }
    const authToken = true

    return (
        <>
        <Nav/>
        <div className="home">
        <button className="home_button" onClick={handleClick}>
            {authToken ? 'Logout' : 'Login'}
        </button>
        <h2>Find your next round</h2>
        <div className="home__buttons">
            <button className="home__button" onClick={handleClick}>Find a round</button>
            <button className="home__button" onClick={handleClick}>Host a round</button>
        </div>
     </div>
     </>
    )
}
export default Profile