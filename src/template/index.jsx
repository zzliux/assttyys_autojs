import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Navigate } from 'react-router-dom';
import { AnimatedRoutes as Routes } from 'react-animated-router';
import { TransitionGroup } from 'react-transition-group'
import { routesDefine } from './pages/_RoutesDefine';
import '../mock/promptMock';

import './styles/index.css';
import 'react-animated-router/animate.css';

import { useStore } from './store/index';
import { observer } from 'mobx-react-lite';

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



window.onload = () => (async () => {
    AutoWeb.autoPromise('webloaded');


    window.routeBack = function () {
        if (window.history.state.idx === 0) {
            if (window.routeBackFlag) {
                AutoWeb.auto('exit');
            } else {
                window.routeBackFlag = true;
                AutoWeb.auto('toast', '再按一次退出程序');
                setTimeout(() => {
                    window.routeBackFlag = false;
                }, 1000)
            }
        } else {
            window.history.back();
        }
    }
})()

const App = observer(() => {
    const { statusBarHeightStore } = useStore();

    React.useEffect(() => {
        (async () => {
            statusBarHeightStore.setStatusBarHeight(await AutoWeb.autoPromise('getStatusBarHeight'));
        })();
    }, []);

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
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
