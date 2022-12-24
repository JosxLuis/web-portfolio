import React from 'react';
import ReactDom from 'react-dom/client';
import {Portfolio} from './Portfolio'
import {Header} from './Header'
import {Content} from './Content'

import './global-styles.scss'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Header/>
        <div className="container grid md:grid-cols-12 gap-5 mx-auto px-4">
            <Portfolio/>
            <Content/>
            
        </div>
        
        
    </React.StrictMode>
)