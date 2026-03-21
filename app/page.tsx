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
          pixelSize={7}
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
        <img src="assets/rainbow-big.png" className="absolute pixel top-0 right-0" style={{
          width: "45%"
        }} />
        <Tilt
          tiltReverse={true}
          tiltMaxAngleX={4}
          tiltMaxAngleY={4}
          className="relative w-full h-full lg:w-3/5 lg:ml-[50px] -rotate-2 flex items-end">
          <div className="relative w-full">
            <img
              src="assets/calculator.png"
              className="w-full block h-auto pixel"
              draggable="false"
            />
            <div
              className="absolute inset-0 grid grid-cols-4 left-1/2 -translate-x-1/2"
              style={{
                width: '85.7%',
                height: '46.1%',
                columnGap: '5.26%',
                rowGap: '2.13%',
                top: '45%'
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
          </div>
        </Tilt>
      </div>
      <img src="assets/rainbow.png" className="pixel min-h-[80px] w-full -translate-y-10 -rotate-2 mx-auto" />
      <main className="bg-black">
        <div className="flex flex-col md:flex-row px-[10%] mt-[5%] items-center md:items-start gap-6">
          <img src="assets/question.png" draggable="false" className="pixel w-[40%] max-w-[300px] bounce-anim" />
          <div className="bg-[#272820] w-[90%] lg:ml-[80px] p-10">
            <h1 className="font-editundo text-5xl">make anything that can <span className="text-[#f92672]">c</span><span className="text-[#fd971f]">a</span><span className="text-[#e6db74]">l</span><span className="text-[#a6e22e]">c</span><span className="text-[#66d9ef]">u</span><span className="text-[#ae81ff]">l</span><span className="text-[#f92672]">a</span><span className="text-[#fd971f]">t</span><span className="text-[#e6db74]">e</span>, get a calculator!</h1>
            <br />
            <p className="font-pixel text-xl -tracking-[.1em]">ideas- a calculator with bad UI, an abacus, a game with calculators as the main game mechanic, calculator in terminal, graph stuff... anything!</p>
          </div>
        </div>
        <img src="assets/rainbow.png" className="pixel min-h-[80px] w-full rotate-2 mx-auto" />
      </main>
    </div>
  );
}
