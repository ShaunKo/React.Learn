import React from 'react';
import logo from './as.png';
import logo_WOW from './WOW.png';
import { Link } from "react-router-dom";
import Catalog from './Catalog.js';
import About from './About.js';
export default class Banner extends React.Component {
    render() {
        return (
            
                <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        {/* <img src={logo} width="80" height="60" alt="logo" /> */}
                        React.Learn
  </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/about">關於本站<span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/catalog">學習經驗分享</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    產品列表
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">
                                        <img src={logo_WOW} width="40" height="40" alt="logo" />
                                        WOW-service 驚嘆服務
          </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}