import { Link } from "react-router-dom"

const Nav = () => {
    
    return (
        <nav>
            <div className="logo-container">PINSEEKER</div>
            <div className="home_buttons">
            <Link to="/"><button>Home</button></Link>
            <Link to="/profile"><button>Profile</button></Link>
            <Link to="/courses"><button>Courses</button></Link>
            <button>Friends</button>
        <div></div>
        </div>

        </nav>
    )
}

export default Nav