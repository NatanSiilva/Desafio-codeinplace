import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MetaTags from 'react-meta-tags';


class Head extends React.Component {
  render() {
    return (
        <div className="wrapper">
          <MetaTags>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
            <title>Desafio - Code in Place</title>
          </MetaTags>
        </div>
      )
  }
}



ReactDOM.render(
  <React.StrictMode>
    <Head/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();


