import React from 'react';

function Profile() {
    return(
        <div className="container container--profile">
            <div className="profile">
                <div className="profile-nav">
                    <ul className="profile-nav__list">
                        <li className="profile-nav__item">Заказы</li>
                        <li className="profile-nav__item active" >Мои данные</li>
                        <li className="profile-nav__item">Бонусы</li>
                    </ul>
                </div>
                <div className="profile-body">

                    <form className="profile__form">
                        <label className="profile-field">
                            <span>Имя:</span>
                            <input type="text"/>
                        </label>
                        <label className="profile-field">
                            <span>Элекронная почта:</span>
                            <input type="text"/>
                        </label>
                        <label className="profile-field">
                            <span>Пол:</span>
                            <input type="text"/>
                        </label>
                        <label className="profile-field">
                            <span>Телефон:</span>
                            <input type="text"/>
                        </label>
                        <label className="profile-field">
                            <span>Город</span>
                            <input type="text"/>
                        </label>
                        <label className="profile-field">
                            <span>Дата рождения</span>
                            <input type="text"/>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile