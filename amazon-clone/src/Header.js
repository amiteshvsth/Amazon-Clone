import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Header = () => {
  return (
    <div className="header">
        <img alt=''
        className="header_logo"src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        />
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className="header_nav">
            <div className="header_option">
                <span className="header_option1">Hello Guest</span>
                <span className="header_option2">Sign In</span>
            </div>
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
            <div className="header_optionsBasket">
                <ShoppingBasketIcon/>
                <span className="header_option1 header_basketCount">0</span>
            </div>
        </div>
    </div>
  )
}
export default Header