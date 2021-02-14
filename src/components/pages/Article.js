import React from 'react';
import '../../App.css';
import Mydetail from '../Mydetail.js';
import Footer from '../Footer.js';
import Writing from '../Writing.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function Article() {
    return (
        <div>
           
            <Writing />
           
           <Footer />  

        </div>
    );
}

export default Article;