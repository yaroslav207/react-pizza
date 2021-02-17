import React from "react"
import Button from "../Button";


const UserData = () => (
    <>
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
                <span>Дата рождения</span>
                <input type="text"/>
            </label>
            <Button className='button--form'>
                Сохранить
            </Button>
        </form>
            <div className="address">
                <h4>Адреса доставки:</h4>
                <div className="address__item">
                    <div className="address-block city-block">
                        <div className="title">Город:</div>
                        <div className="value">Харьков</div>
                    </div>
                    <div className="address-block">
                        <div className="title">Улица:</div>
                        <div className="value">Семинарская улица</div>
                    </div>
                    <div className="address-block house-block">
                        <div className="title">Дом:</div>
                        <div className="value">46</div>
                    </div>
                    <div className="address-block app-block">
                        <div className="title">Квартира:</div>
                        <div className="value">12</div>
                    </div>
                    <div className="address-block remove-block">
                        <div className="button button--outline button--circle">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                    fill="#EB5A1E"/>
                                <path
                                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                    fill="#EB5A1E"/>
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="address__item">
                    <div className="address-block city-block">
                        <div className="title">Город:</div>
                        <div className="value">Харьков</div>
                    </div>
                    <div className="address-block">
                        <div className="title">Улица:</div>
                        <div className="value">Семинарская улица</div>
                    </div>
                    <div className="address-block house-block">
                        <div className="title">Дом:</div>
                        <div className="value">46</div>
                    </div>
                    <div className="address-block app-block">
                        <div className="title">Квартира:</div>
                        <div className="value">12</div>
                    </div>
                    <div className="address-block remove-block">
                        <div className="button button--outline button--circle">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                    fill="#EB5A1E"/>
                                <path
                                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                    fill="#EB5A1E"/>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <div className="add-address-block">
                <h4>Добавить адрес</h4>
                <form className="add-address-block__form">
                    <label className="add-address-block__field profile-field city">
                        <span>Город</span>
                        <input type="text"/>
                    </label>
                    <label className="add-address-block__field profile-field street">
                        <span>Улица</span>
                        <input type="text"/>
                    </label>
                    <label className="add-address-block__field profile-field number">
                        <span>Номер дома</span>
                        <input type="text"/>
                    </label>
                    <label className="add-address-block__field profile-field number">
                        <span>Квартира</span>
                        <input type="text"/>
                    </label>
                    <Button>
                        Сохранить
                    </Button>
                </form>
            </div>
    </>
);

export default UserData