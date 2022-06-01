import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { routesDefine } from './pages/_RoutesDefine';
import FooterNav from './components/FooterNav';
import '../mock/promptMock';

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
    const rtsEles = routesDefine.map((item, index) => {
        return <Route key={index} path={item.path} element={item.element} />
    });
    return (
        <>
            <Router>
                <Routes>
                    {rtsEles}
                    <Route path="*" element={<Navigate to="/Home" replace={true} />} />
                </Routes>
                <FooterNav />
            </Router>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
