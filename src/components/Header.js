import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div>
            <Link to="/" >Home</Link> <br />
            <Link to="/first-year">First year</Link> <br />
            <Link to="/second-year">Second year</Link><br />
            <Link to="/third-year">Third year</Link>
            {/* <span> | </span> */}
            {user ? (
                 <p  onClick={logoutUser}>Logout</p>
            ): (
                <Link to="/login" >Login</Link>
            )}
           
            {user &&   <p>Hello {user.username}</p>}
           
        </div>
    )
}

export default Header
