import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Badge } from 'reactstrap';

function Header(props) {
    return (
        <React.Fragment>
            <header className="bg-image-header">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="cafename">San Jose Cafe</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <Nav className="nav p-1 text-center flex-column flex-md-row">
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <i className="fa fa-home" aria-hidden="true" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <i className="fa fa-bars" aria-hidden="true" /> Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/order">
                            <i className="fa fa-credit-card" aria-hidden="true" /> Order
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className="nav-link"
                            to={{
                                pathname: 'https://www.google.com/maps/place/1141+Ringwood+Ct,+San+Jose,+CA+95131/@37.3944727,-121.8700569,14z/data=!4m5!3m4!1s0x808fcc03b0824993:0x1eadae59bcdf95d7!8m2!3d37.3927107!4d-121.8941903?hl=en&authuser=0',
                            }}
                            target="_blank"
                        >
                            <i className="fa fa-map-marker" aria-hidden="true" /> Locate
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about">
                            <i className="fa fa-info-circle" aria-hidden="true" /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/cart">
                            <i className="fa fa-shopping-cart" aria-hidden="true" /> Cart {props.badge > 0 && <Badge >{props.badge}</Badge>}
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </React.Fragment>
    );
}
export default Header;
