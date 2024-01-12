"use client"

import React, {Component} from 'react';
import './SortingVisualizer.css';
import * as SortingAlgorithms from "../SortingAlgorithms/SortingAlgorithms.js";

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 310;
const PRIMARY_COLOR = 'white';
const SECONDARY_COLOR = 'red';

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
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = SortingAlgorithms.getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bars');
            const isColorChange = i % 3 !== 2;

            if (isColorChange) {
                const [barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    bogoSort() {}

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
                        className="array-bars" 
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                    }}></div>
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