"use client"

import React, {Component} from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends Component{

    constructor(props) {
        super(props);

        this.state = {
            array : [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 370; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <>
            <div className ="banner">
                <button className="newArray" onClick={() => this.resetArray()}>New Array</button>
            </div>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}></div>
                ))}
            </div>
            </>
        );
    }

}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}