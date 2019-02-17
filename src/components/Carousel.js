import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import WorkingHours from './WorkingHours';

const items = [
  {
    src: 'https://imgur.com/SxAikly.jpg',
    altText: 'Powertools',
    // caption: 'Get ready for spring projects with new powertools',
    // subtitle: 'We can show you how to use them!'
  },
  {
    src: 'https://imgur.com/oVuFQhC.jpg',
    altText: 'Wrenches and sockets',
    // caption: 'Every tool for every job',
    // subtitle: 'Give us a call for more information'
  },
  {
    src: 'https://imgur.com/7NJNs2k.jpg',
    altText: 'Roller',
    // caption: 'We repair old tools!',
    // subtitle: 'Give us a call for more information'
  },
  {
    src: 'https://imgur.com/LnDuxVR.jpg',
    altText: 'ace',
    // caption: 'We repair old tools!',
    // subtitle: 'Give us a call for more information'
  },
  {
    src: 'https://imgur.com/c2TIcv5.jpg',
    altText: 'wrenches',
    // caption: 'We repair old tools!',
    // subtitle: 'Give us a call for more information'
  }
];

class InfoPictures extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption/>
        </CarouselItem>
      );
    });

    return (
      <div className='carousel'>
         <WorkingHours/>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={10000}
        
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        <div className='missionback'>
          <div className='mission'>
              <p>"Committed to serving our customers. Both contractor and homeowner/do-it-yourselfer, has remained our top priority. We strive to stock a good selection of hard-to-find items and have a dedicated sales staff with many years of experience."</p>
          </div>
        </div>
      </div>
    );
  }
}


export default InfoPictures;