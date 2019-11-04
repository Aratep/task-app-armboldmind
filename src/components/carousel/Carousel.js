import React from 'react';

import Arrow from "./Arrow";
import ImageSlide from "./ImageSlide";
import slLeft from "../../images/sl-left.svg"
import slRight from "../../images/sl-right.svg"
import "./styles.css"

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            images: props.images
        };
    }

    previousSlide = () => {
        const {currentImageIndex, images} = this.state;
        const lastIndex = images.length - 1;

        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide = () => {
        const {currentImageIndex, images} = this.state;
        const lastIndex = images.length - 1;

        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        const {images} = this.state;

        if (images === null || images.length <= 0 || images === undefined)
            return <div className="no-image">No Images</div>

        return (
            <div className="carousel" id="carousel">
                <Arrow direction="left" clickFunction={this.previousSlide} glyph={slLeft}/>
                <ImageSlide image={images[this.state.currentImageIndex]}/>
                <Arrow direction="right" clickFunction={this.nextSlide} glyph={slRight}/>
            </div>
        );
    }
}

export default Carousel