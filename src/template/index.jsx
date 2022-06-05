import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Navigate } from 'react-router-dom';
import { AnimatedRoutes as Routes } from 'react-animated-router';
import { TransitionGroup } from 'react-transition-group'
import { routesDefine } from './pages/_RoutesDefine';
import '../mock/promptMock';

import './styles/index.css';
import 'react-animated-router/animate.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// 浏览器使用mock数据，在浏览器先执行localStorage.debug = 1
let autoWebMode = 'prompt';
if (localStorage && localStorage.debug) {
    autoWebMode = 'promptMock';
}
AutoWeb.setMode(autoWebMode);

// 手动给AutoWeb封装一个promise方法
AutoWeb.autoPromise = function (eventname, params) {
    return new Promise((resolve, reject) => {
        AutoWeb.auto(eventname, params, result => {
            resolve(result);
        });
    });
}


const App = () => {
    return (
        <Router>
            <TransitionGroup>
                <Routes>
                    {routesDefine.map(({ path, Element }) => {
                        return (
                            <Route key={path} path={path} element={<div><Element /></div>} />
                        )
                    })}
                    <Route path="*" element={<Navigate to="/SchemeList" replace={true} />} />
                </Routes>
            </TransitionGroup>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
