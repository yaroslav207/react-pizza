import React from "react";
import PropTypes from "prop-types";


const Categories = React.memo(function Categories({activeItem, items, onClickCategory}) {

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    Все
                </li>
                {items && items.map((item, index) => <li
                    className={activeItem === index ? 'active' : ''}
                    onClick={() => onClickCategory(index)} key={`${item}+${index}`}>
                    {item}
                </li>)}
            </ul>
        </div>
    )
})


Categories.propTypes = {
    activeItem: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
}

Categories.defaultProps = {
    activeItem: null,
    items: []
}

export default Categories