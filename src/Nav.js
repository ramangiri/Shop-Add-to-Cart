import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';


function Nav({ count })   {

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand">Start Bootstrap</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active" aria-current="page">Home</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">About</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><span className="dropdown-item">Action</span></li>
                                    <li><span className="dropdown-item">Another action</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item">Something else here</span></li>
                                </ul>
                            </li>

                        </ul>
         <div className="d-flex">
                        <button className="cart btn btn-light border border-dark" type="button">
                            {/* FaShoppingCart is cart icon from react, number of count from cart  */}
                            <FaShoppingCart /> Cart <span className="cart-count">{count}</span>  
                        </button>
                    </div>

                    </div>
                   
                </div>
            </nav>
        </>
    );
}
export default Nav;
