import Nav from '../components/Nav'
import { useState } from 'react'

const Profile = () => {
    const handleClick = () => {
        console.log('clicked')
    }
    const authToken = true
    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        handicap: "",
        style: "",
        preferred_course: "",
        url: "",
        about: "",
        matches: []

    })

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <>
        <Nav/>
        <div className="overlay">
        <div className="profile">
            <div className="profile__header">
                <div className="profile__header__image">
                    <img src="https://media.istockphoto.com/id/1319208308/photo/golfer-on-the-professional-golf-course-golfer-with-golf-club-hitting-the-ball-for-the-perfect.jpg?s=612x612&w=0&k=20&c=ESnz-kvyLFIeicdzspLjUonFIoCyPOrkOiEjQmMtsLk=" alt="profile"/>
                </div>
                <div className="profile__header__info">
                    <h2>First Name:</h2>
                    <p> Beau </p>
                    <h2>Handicap</h2>
                    <p> 10 </p>
                    <h2>Preferred Course</h2>
                    <p> Pebble Beach </p>
                    <h2>Style</h2>
                    <p> Casual </p>
                </div>
            </div>
            <div className="profile__body">
                <div className="profile__body__about">
                    <h2>About Me</h2>
                    <p>I love golf!</p>
                </div>
                <div className="profile__body__matches">
                    <h2>Matches</h2>
                    <div className="profile__body__matches__container">
                        <div className="profile__body__matches__container__match">
                            <h3>Match 1</h3>
                            <p>Course</p>
                            <p>Time</p>
                            <p>Location</p>
                        </div>
                        <div className="profile__body__matches__container__match">
                            <h3>Match 2</h3>
                            <p>Course</p>
                            <p>Time</p>
                            <p>Location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



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
     </div>
     </>
    )
}
export default Profile