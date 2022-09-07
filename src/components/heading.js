import React,{Component} from "react";
import {paragraph} from '../components/paragraph'
import {image} from '../components/image'
import {link} from '../components/image'
import '../components/style.css'

export class heading extends Component {
    render(){
        return(
            <header className="App-header">
                <image/>
                <paragraph/>
                <link/>
            </header>
        )
    }
}


