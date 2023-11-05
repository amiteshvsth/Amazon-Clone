import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
const Header = () => {
    const [{basket},dispatch]=useStateValue();
  return (
    <div className="header">
        <Link to='/'>
        <img alt=''
        className="header_logo"src="https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png" 
        />
        </Link>
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className="header_nav">
            <Link to='/login'>
                <div className="header_option">
                    <span className="header_option1">Hello Guest</span>
                    <span className="header_option2">Sign In</span>
                </div>
            </Link>
            <div className="header_option">
                <span className="header_option1">Returns
                </span>
                <span className="header_option2">Orders
                </span>
            </div>
            <div className="header_option">
                <span className="header_option1">Your</span>
                <span className="header_option2">Prime</span>
            </div>
            <Link to='/checkout'>
            <div className="header_optionsBasket">
                <ShoppingBasketIcon/>
                <span className="header_option1 header_basketCount">{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  );
}
export default Header;