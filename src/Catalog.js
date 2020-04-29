import React from 'react';
import './App.css';
export default class Catalog extends React.Component {
    render() {
        return (
            <div>
                <h4 className="title">目錄</h4>
                <hr className="line" />
                <div className="catalog">
                    <h6>
                        安裝
                    </h6>
                    <h6>
                        Git版本管控
                    </h6>
                    <h6>
                        專案架構
                    </h6>
                    <h6>
                        初始畫面
                    </h6>
                    <h6>
                        實作前端頁面
                        <div className="catalog1">
                            <div>
                                >登入
                            </div>
                            <div>
                                >註冊
                            </div>
                            <div>
                                >首頁
                            </div>
                            <div>
                                >個人頁面
                            </div>
                            <div>
                                >聊天室
                            </div>
                        </div>
                    </h6>
                    <h6>
                        react-redux
                    </h6>
                    <h6>
                        資料庫-Firebase
                    </h6>
                    <h6>
                        express
                    </h6>
                    <h6>
                        資料庫-mysql
                    </h6>
                </div>
            </div>
        );
    }
}