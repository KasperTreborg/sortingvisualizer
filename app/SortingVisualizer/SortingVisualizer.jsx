"use client"

import React, {Component} from 'react';
import './SortingVisualizer.css';
import * as SortingAlgorithms from "../SortingAlgorithms/SortingAlgorithms.js";

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

    mergeSort() {
        const javaScriptSortedArray = this.state.array.slice().sort((a,b) => a - b);
        const sortedArray = SortingAlgorithms.mergeSort(this.state.array);

        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    bogoSort() {
        const array = [];
        let isSorted = false;
        while (!isSorted) {
            for (let i = 0; i < 370; i++) {
                array.push(randomIntFromInterval(5,730));
            }
            for (let i = 0; i < 370; i++) {
                if (i == 0) {
                    if (array[0] <= array[1]) continue;
                    }
                else if (i == 369) {
                    sorted = true;
                    break;
                }
                else if (array[i-1] <= array[i] && array[i] <= array[i+1]) {
                    continue;
                }
                else {
                    break;
                }
            }
        };
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <>
            <div className ="banner">
                <button className="newArray" onClick={() => this.resetArray()}>New Array</button>
                <button className="newArray" onClick={() => this.mergeSort()}>Merge Sort</button>
                <button className="newArray" onClick={() => this.quickSort()}>Quick Sort</button>
                <button className="newArray" onClick={() => this.heapSort()}>Heap Sort</button>
                <button className="newArray" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button className="newArray" onClick={() => this.bogoSort()}>Bogo Sort</button>
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

function arraysAreEqual(x, y) {

    if (x.length !== y.length) return false;

    for (let i = 0; i < x.length; i++) {
        if  (x[i] !== y[i]) return false;
    }

    return true;
}