"use client"

import PixelBlast from './PixelBlast';
import CalcButton from './CalcButton'
import Tilt from 'react-parallax-tilt'

export default function Home() {
  return (
    <div>
      <div className="h-[50vh] lg:h-screen bg-black relative">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#272820"
          patternScale={3}
          patternDensity={1.3}
          enableRipples={false}
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.6}
          transparent
          edgeFade={0}
          style={{ position: 'absolute' }}
        />
        <Tilt 
          tiltReverse={true}
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          className="relative w-full h-full lg:w-3/5 lg:ml-[50px] -rotate-2">
          <img
            src="assets/calculator.png"
            className="w-full block h-auto pixel bottom-0 absolute"
          />
          <div
            className="absolute inset-0 grid grid-cols-4 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '85.7%',
              height: '46.1%',
              columnGap: '5.26%',
              rowGap: '2.13%',
              top: '75%'
            }}
          >
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
            <CalcButton />
          </div>
        </Tilt>
      </div>
      <img src="assets/rainbow.png" className="pixel h-auto w-full -translate-y-10 -rotate-2" />
    </div >
  );
}
