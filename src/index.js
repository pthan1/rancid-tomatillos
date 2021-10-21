import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  const siteHeader = document.querySelector("#siteHeader");
  const headerText = document.querySelector("#siteHeaderText");
  const tomatilloImage = document.querySelector("#tomatilloImage");

  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    siteHeader.style.height = "2rem";
    headerText.style.fontSize = "2rem";
    headerText.style.marginTop = "-1.5rem";
    tomatilloImage.style.height = "4rem";
    tomatilloImage.style.marginLeft = "0rem";
  }
}

const router = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
