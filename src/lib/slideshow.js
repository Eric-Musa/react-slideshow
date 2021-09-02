import React, { useState, useEffect, useRef } from "react";
import "./styling/slideshow.css";
import useWindowDimensions from "./windowDimension";

import flowers1 from "./sample_images/flowers1.jpg"
import flowers2 from "./sample_images/flowers2.jpg"
import flowers3 from "./sample_images/flowers3.jpg"
import flowers4 from "./sample_images/flowers4.jpg"
import goose from "./sample_images/goose.jpg"
import peaches from "./sample_images/peaches.jpg"
import prairiedogs from "./sample_images/prairiedogs.jpg"


function getDefaultSlideshowProps () {
    
    const slideshowImNamesAndAltTexts = [
        [flowers1, "Pretty pink and purple flowers."],
        [flowers2, "Pretty orange flowers."],
        [flowers3, "Pretty red flowers."],
        [flowers4, "A pretty pink flower with a butterfly on it."],
        [goose, "A goose spotted along a rocky bank."],
        [peaches, "Some peaches growing on a tree."],
        [prairiedogs, "Two prairie dogs popping out of their burrow."],
    ];

    return {
        imNamesAndAltTexts: slideshowImNamesAndAltTexts,
        interval: 4000,
        aspectRatio: 16/9,
        heightPercent: "85%",
        maxHeight: 720,
        maxWidth: 1600,
        margin: 20,
        transitionTime: 1.25,
        clickFactor: 1.5,
        initIndex: 'random'
    }
}

/**
 * Slideshow component
 * 
 */
function Slideshow ({ props }) {
    const {imNamesAndAltTexts, interval, heightPercent, aspectRatio, 
        maxHeight, maxWidth, margin, transitionTime, clickFactor, initIndex} = props
    const nPics = imNamesAndAltTexts.length

    const [index, setIndex] = useState((initIndex === 'random') ? Math.floor(Math.random() * imNamesAndAltTexts.length) : initIndex);
    const { height, width } = useWindowDimensions();
    const timer = useRef({intervalID: null, timeoutID: null})

    
    function setSlideshowInterval () {
        timer.current.intervalID = setInterval(() => setIndex(prevIndex => (prevIndex+1) % 6), interval)
    }
    
    function clicked (event) {  // if an image is clicked...
        setIndex(event.target.value);  // the index is changed
        timer.current.intervalID = clearInterval(timer.current.intervalID)  // clear current interval
        clearTimeout(timer.current.timeoutID)  // clear any existing timer from a previous click
        timer.current.timeoutID = setTimeout(setSlideshowInterval, interval * clickFactor)  // set timer to start interval
    }
    
    function getSlideType (i) {
        const valDiff = i - index;
        if (valDiff === -2 || valDiff - nPics === -2) {
            return "farLeftSlide";
        } else if (valDiff === -1 || valDiff - nPics === -1) {
            return "nearLeftSlide";
        } else if (valDiff === 0) {
            return "centerSlide";
        } else if (valDiff === 1 || valDiff + nPics === 1) {
            return "nearRightSlide";
        } else if (valDiff === 2 || valDiff + nPics === 2) {
            return "farRightSlide";
        } else {
            return "hiddenSlide";
        }
    }
    
    function getSlideshowHeight () {
        return Math.min(width / aspectRatio, maxHeight) + "px"  // width < (slideshowHeight * aspectRatio) ? (width / aspectRatio) + "px" : slideshowHeight + "px"
    }
    
    function getSlideshowWidth (px=true) {
        return Math.min(width, maxWidth)
    }
    
    useEffect(() => {setSlideshowInterval()
        return () => (timer.current.intervalID = clearInterval(timer.current.intervalID))
    }, []);
    
    return (
        <div className="slideshow-container" 
            style={{
                "height": getSlideshowHeight(),
                // "position": "absolute",            
                // "left": 0,
                // "right": 0,
                // "top": "100px",
                // "bottom": 0,
                }}>
            {/* ^^ responsive to screen width */}

            <div className="slideshow" 
                onChange={clicked}
                >
                {imNamesAndAltTexts.map(([imgName, altText], i) => (
                    <label className={"slide " + getSlideType(i)} // << this styles each slide by className according to SCSS styling
                        id={"slide-" + i}
                        style={{
                            "width": ((getSlideshowWidth()-2*margin)/2),
                            "height": heightPercent,
                            "transition": `transform ${transitionTime}s ease`,
                            }}>

                        <input type="radio"
                            className="slideshow-radio"
                            value={i}
                            checked={index === i}/>
                        <img src={imgName} alt={altText}/>
                    </label>
                ))}
            </div>
        </div>
    );
    
}

export { Slideshow, getDefaultSlideshowProps }
