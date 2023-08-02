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
        <div className="profile">
            <div className="profile__header">
                <div className="profile__header__image">
                    <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="profile"/>
                </div>
                <div className="profile__header__info">
                    <h2>First Name</h2>
                    <h3>Handicap</h3>
                    <h3>Preferred Course</h3>
                    <h3>Style</h3>
                </div>
            </div>
            <div className="profile__body">
                <div className="profile__body__about">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
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
     </>
    )
}
export default Profile