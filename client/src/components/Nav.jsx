import { Link } from "react-router-dom"

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
      setShowModal(true);
      setIsSignUp(false);
    };
    return (
        <nav>
           
            <button
              className="primary-button" >
            <Link to="/">Home</Link>
            </button>
            
            <button
              className="primary-button" >
            <Link to="/profile">Profile</Link>
            </button>
         
            <button
              className="primary-button" >
            <Link to="/courses">Courses</Link>
            </button>
        
          <button
            className="primary-button" >
            <Link to="/dashboard">Dashboard</Link>
          </button>
  

        
        <button
          className="primary-button"
          onClick={handleClick}
          disabled={showModal}
        >
        Log In
        </button>

        </nav>
    )
}

export default Nav