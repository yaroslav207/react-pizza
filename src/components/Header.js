import React from 'react';

import Button from "./Button";
import {Link} from "react-router-dom";
import logo from '../assets/img/pizza-logo.svg';

import {useSelector} from "react-redux";


function Header() {

    const {totalPrice, totalCount} = useSelector(({cart}) => ({
        totalPrice: cart.totalPrice,
        totalCount: cart.totalCount
    }))
    return (
        <div className="header">
            <div className="container">
                <Link to={'/'} className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </Link>
                <div className="header-right">
                    <Link to="/Profile">
                        <Button className="button--profile">
                            <svg className="profile-icon" xmlns="http://www.w3.org/2000/svg" version="1.1"
                                 id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" fill="#fff">
                                <g>
                                    <g>
                                        <path d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z"/>
                                    </g>
                                </g>
                                <g>
                                    <path d="M423.966,358.195C387.006,320.667,338.009,300,286,300h-60c-52.008,0-101.006,20.667-137.966,58.195    C51.255,395.539,31,444.833,31,497c0,8.284,6.716,15,15,15h420c8.284,0,15-6.716,15-15    C481,444.833,460.745,395.539,423.966,358.195z"/>
                                </g>
                            </svg>
                        </Button>
                    </Link>
                    <Link to={'/Cart'} className="header__cart">
                    <Button className='button--cart'>
                        <span>{totalPrice} ₽</span>
                        <div className="button__delimiter"></div>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>{totalCount}</span>
                    </Button>

                </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;