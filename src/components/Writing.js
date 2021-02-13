import React from 'react';
import '../App.css';
import './Writing.css';

//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function Writing() {
    return (
        <div className='writing'>
            <div className ='write__container'>
                <div className='write__wrappper'>

                <div className='write__detail'>
            <h1>My articles</h1>
            <p className="detail">I was a web contents writer in Sydney in Aunstralia and Cebu in Philippines.I was working for a education company which is Japanese company in Australia before. My some articles are come up top page of google. I hope you enjoy with mine. and let me know if you are interested in study abroad, I know a good study abroad agency company.</p>
            </div>

               <div className="write__Items">

                   <div className="write__item__info">

                   <a className= "auLink" href = " https://tabiken.com/au/author/yuiotaka1"><p className="write__title">AUSTALIA</p></a><img  className="ausPic" src="https://yuiotaka.github.io/yue/images/img-16.JPG" />
                <h5 className='write__item__text'>Writing about how much good to study in Philippines
                </h5>
                </div>
            </div>

           

                   <div className="write__item__info">

                <a className= "phLink" href = " https://tabiken.com/au/author/yuiotaka1"><p className="write__title">PHILIPPINES</p></a><img  className="ausPic" src="https://yuiotaka.github.io/yue/images/IMG_8320.JPG" />
                <h5 className='write__item__text'>Writing about how much good to study in Philippines
                </h5>
            </div>
            
                        

                </div>
            </div>
            
        </div>
    );
}

export default Writing