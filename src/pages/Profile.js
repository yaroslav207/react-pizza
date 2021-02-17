import React, {useState} from 'react';
import {Orders, UserData, Bonuses} from "../components/Profile"
import {Route, Link} from 'react-router-dom'


const profileLink = [{to:'orders', text:'Заказы'}, {to:'user-data', text:'Мои данные'}, {to:'bonuses', text: 'Бонусы'}];


function Profile() {
    const [activeItem, setActiveItem] = useState(0);
    return(
        <div className="container container--profile">
            <div className="profile">
                <div className="profile-nav">
                    <ul className="profile-nav__list">
                        {profileLink.map((item, index) => (
                            <ProfileNav
                                to={item.to}
                                active = {index === activeItem}
                                onClick = {() => setActiveItem(index)}
                            >
                                {item.text}
                            </ProfileNav>
                        ))}
                    </ul>
                </div>
                <div className="profile-body">
                    <Route exact path={'/profile/orders'} component={Orders}/>
                    <Route exact path={'/profile/user-data'} component={UserData}/>
                    <Route exact path={'/profile/bonuses'} component={Bonuses}/>
                </div>
            </div>
        </div>
    )
}

function ProfileNav({to, active, onClick, children}) {
    return (
        <li
            className={`profile-nav__item ${active?'active':''}`}
            onClick={onClick}
        >
            <Link to={`/profile/${to}`}>{children}</Link>
        </li>
    )
}

export default Profile