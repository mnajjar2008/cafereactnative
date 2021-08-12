import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';
import OrderList from './OrderComponent';

const Order = props => {
    const paramsVal = props.paramsVal;
    const categoryProducts = props.products.filter(product => product.category === paramsVal);

    return (
        <div className="container">
            <Nav className="nav nav-fill p-1 text-center flex-column flex-md-row">
                <NavItem>
                    <NavLink className="nav-link" to="/order/pastries">
                        Pastries
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/order/waffles">
                        Waffles
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/order/breakfast">
                        Breakfast
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className="nav-link" to="/order/lunch">
                        Lunch
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/order/drinks">
                        Drinks
                    </NavLink>
                </NavItem>
            </Nav>
            {!!categoryProducts.length && <OrderList onAdd={props.onAdd} products={categoryProducts} />}
            {!categoryProducts.length && <OrderList onAdd={props.onAdd} products={props.products} />}
            {!categoryProducts.length && !!paramsVal && <Redirect to="/home" />}
        </div>
    );
};

export default Order;
