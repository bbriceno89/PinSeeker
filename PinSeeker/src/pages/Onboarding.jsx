import Nav from '../components/Nav'
import {useState} from 'react'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const OnBoarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
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

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', {formData})
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }

    }

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
            <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            />

            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type='text'
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        
                        
                        <label>Birthday</label>
                        <div className="multiple-input-container">
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />

                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />

                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label htmlFor="style">Style</label>
                        <div className="multiple-input-container">
                            <input
                                id="style"
                                type="radio"
                                name="style"
                                value="casual"
                                required={true}
                                onChange={handleChange}
                                checked={formData.style === "casual"}

                        />
                        <label htmlFor="casual">Casual</label>
                        <input
                            id="style"
                            type="radio"
                            name="style"
                            value="competitive"
                            required={true}
                            onChange={handleChange}
                            checked={formData.style === "competitive"}
                        />
                        <label htmlFor="competitive">Competitive</label>
                        </div>

                        <label htmlFor="preferred_course">Preferred Course</label>
                        <input
                            id="preferred_course"
                            type="text"
                            name="preferred_course"
                            required={true}
                            value={formData.preferred_course}
                            onChange={handleChange}
                        />


                        <label htmlFor="handicap">Handicap</label>
                        <input
                            id="handicap"
                            type="number"
                            name="handicap"
                            required={true}
                            value={formData.handicap}
                            onChange={handleChange}
                        />

                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I love golf!"
                            value={formData.about}
                            onChange={handleChange}
                        />

                       
                    </section>

                    <section>

                        <label htmlFor="url">Profile Photo</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile pic preview"/>}
                        </div>


                    </section>

                    <input type="submit"/>

                </form>
            </div>
        </>
    )
}
export default OnBoarding