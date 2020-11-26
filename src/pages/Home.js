import React, {useCallback, useEffect} from 'react';


import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";


import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from '../components'


const categoryNames = [
    'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
]
const sortItems = [
    {name: 'Популярности', type: 'popular', order: 'desc'},
    {name: 'Цене', type: 'price', order: 'asc'},
    {name: 'Алфавит', type: 'name', order: 'asc'}
]

function Home() {

    const dispatch = useDispatch();

    const items = useSelector(({pizzas}) => pizzas.items);
    const cartItems = useSelector(({cart}) => cart.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy, order} = useSelector(({filters}) => filters);

    useEffect(() => {
            dispatch(fetchPizzas(category, sortBy, order))
        }
        , [category, sortBy])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortBy = useCallback((item) => {
        console.log(item)
        dispatch(setSortBy(item))
    }, [])

    const handleAddPizzaToCart = obj =>{
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeItem={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    items={sortItems}
                    activeItem={sortBy}
                    onClickSortType={onSelectSortBy}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => <PizzaBlock key={obj.id + obj.name}
                                                     {...obj}
                                                     onClickAddPizza={handleAddPizzaToCart}
                                                     addedCount={cartItems[obj.id]&&cartItems[obj.id].length}
                    />)
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <PizzaLoadingBlock key={index}/>)
                }
            </div>
        </div>
    );
}

export default Home;
