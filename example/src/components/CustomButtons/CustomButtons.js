import React from 'react'

import HeroSlider, {
  Slide
} from 'hero-slider'

const app = () => {
  const nextSlideHandler = React.useRef()
  const previousSlideHandler = React.useRef()

  return (
    <div style={{
      height: '200vh'
    }}>
      <button onClick={() => previousSlideHandler.current()}>Previous Slide</button>
      <button onClick={() => nextSlideHandler.current()}>Next Slide</button>
      <HeroSlider
        nextSlide={nextSlideHandler}
        previousSlide={previousSlideHandler}
        slidingAnimation='left_to_right'
        orientation='horizontal'
        set
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
        onChange={(nextSlide) => console.log('onChange', nextSlide)}
        onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
        style={{
          backgroundColor: '#000'
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: false,
          shouldDisplayButtons: false,
          autoplayDuration: 8000,
          height: '100vh'
        }}>
        <Slide
          navDescription='Black Widow'
          background={{
            backgroundColor: '#6D9B98',
            backgroundBlendMode: 'luminosity',
            backgroundImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/blackwidow.jpg',
            backgroundAnimation: 'fade'
          }} />

        <Slide
          navDescription='Captain America'
          background={{
            backgroundColor: '#8A8A8A',
            backgroundBlendMode: 'luminosity',
            backgroundImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/captainamerica.jpg',
            backgroundAnimation: 'fade'
          }} />

        <Slide
          navDescription='Iron Man'
          background={{
            backgroundColor: '#EA2329',
            backgroundBlendMode: 'luminosity',
            backgroundImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/ironman-alt.jpg',
            backgroundAnimation: 'fade'
          }} />

        <Slide
          navDescription='Thor'
          background={{
            backgroundColor: '#2D7791',
            backgroundBlendMode: 'luminosity',
            backgroundImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/thor.jpg',
            backgroundAnimation: 'fade'
          }} />
      </HeroSlider>
    </div>
  )
}

export default app