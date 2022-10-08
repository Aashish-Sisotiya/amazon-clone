import React, { useState } from 'react'
import './css/Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { auth } from "../firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from '../StateProvider';

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    // const [user, setUser] = useState({});   
    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // })
    console.log(basket);

    const handleAuthentication = async () => {
        if (user) {
            auth.signOut();
        }
    }


    return (
        <div className='header'>
            <img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
            <div className='header_search'>
                <input className='header_searchInput' type='text' ></input>

                <SearchIcon className='header_searchIcon' />
            </div>

            <div className='header_nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header_option'>
                        <div className='header_optionLineOne'>Hello {!user ? "Guest" : user?.email}</div>
                        <div className='header_optionLineTwo'>{user ? "Sign Out " : "Sign In"}</div>
                    </div>
                </Link>
            </div>

            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>

            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>


            <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_basketCount">
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Header
























// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCvOkmzgn25-nxFRCfHG4AZICca9ibhInE",
//     authDomain: "clone-63626.firebaseapp.com",
//     projectId: "clone-63626",
//     storageBucket: "clone-63626.appspot.com",
//     messagingSenderId: "438523788061",
//     appId: "1:438523788061:web:2f90b05d9bf2a30c58bff4",
//     measurementId: "G-NT888WLKB3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);