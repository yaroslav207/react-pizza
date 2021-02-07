import React from 'react';
import {Route} from "react-router-dom";

import {Header} from './components'
import {Home, Cart, Profile} from './pages'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/cart'} component={Cart}/>
                    <Route path={'/profile'} component={Profile}/>
                </div>
            </div>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return{
//         setPizzas: (items) => dispatch(setPizzasAction(items))
//     }
// }

export default App;
