"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { router } from "better-auth/api";
//import { authClient } from '@/lib/auth-client';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Home() {
    useEffect(() => {
        import("image-map-resizer").then((module) => module.default());
    }, []);
    useGSAP(() => {
        gsap.to(".clouds", {
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "+=200",
                scrub: 1
            },
            autoAlpha: 0
        });

        let split = SplitText.create(".headline", { type: "chars" });
        split.chars.forEach((char) => {
            let hoverAnimation = gsap.to(char as HTMLElement, {
                y: -5,
                duration: 0.2,
                paused: true,
            });

            (char as HTMLElement).addEventListener("mouseenter", () => {
                hoverAnimation.timeScale(1).play();
            });
            (char as HTMLElement).addEventListener("mouseleave", () => {
                hoverAnimation.timeScale(5).reverse();
            });
        });

        gsap.to(".float", {
            x: () => gsap.utils.random([-10, 10]),
            y: () => gsap.utils.random([-10, 10]),
            ease: "sine.inOut",
            autoRound: false,
            duration: gsap.utils.random([2, 4]),
            repeat: -1,
            repeatRefresh: true,
        });

        gsap.fromTo(".float",
            {
                rotation: -5
            },
            {
                rotation: 5,
                duration: 45,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            }
        );
    })

    /*async function handleLogin() {
        await authClient.signIn.oauth2({
            providerId: "hackclub",
            callbackURL: "/dashboard",
        })
    }*/
    const router = useRouter()
    function gotoGuides() {
        router.push("/guides")
    }
    function gotoForm() {
        window.open("https://submit.hackclub.com/calculate", "_blank")
    }
    return (
        <main>
            <div className="lg:h-screen h-[50%] bg-[#303830] hero">
                <div className="relative pt-[3%]">
                    <img draggable="false" src="assets/flower1.GIF" className="absolute pixel lg:w-[calc(100vw*60/384)] mt-[22%] ml-[6%]" />
                    <img draggable="false" src="assets/flower2.GIF" className="absolute pixel lg:w-[calc(100vw*49/384)]" />
                    <div className="absolute lg:mt-[5%] mt-[15%] w-full">
                        <div className="relative">
                            <img draggable="false" src="assets/wires_left.GIF" className="pixel w-[calc(100vw*100/384)] absolute" />
                            <img draggable="false" src="assets/wires_right.GIF" className="pixel w-[calc(100vw*100/384)] absolute right-0" />
                        </div>
                    </div>
                    <div className="lg:w-[calc(100vw*184/384)] absolute inset-x-0 mx-auto w-[90%]">
                        <div className="relative">
                            <img draggable="false" src="assets/calculator.png" className="pixel w-full absolute" useMap="#image-map" />
                            <map name="image-map">
                                <area target="_blank" alt="" title="" href="https://hackclub.com/" coords="100,23,9,4" shape="rect" />
                            </map>
                            <img draggable="false" src="assets/screen.GIF" className="pixel absolute saturate-130 mt-[14.3%] ml-[9.8%] w-[80.4%]" />
                        </div>
                    </div>
                </div>
                <img draggable="false" src="assets/clouds.png" className="lg:fixed absolute w-full pixel z-[10] lg:mt-[28%] mt-[70%] clouds" />
                <h2 className="font-pirkkala lg:text-3xl lg:w-[calc(100vw*80/384)] lg:text-left lg:ml-[77%] lg:mt-[23%] md:left-0 md:right-0 block text-center mt-[98%] text-xl">make a project involving numbers, <br /> get a calculator!</h2>
            </div>
            <div className="w-full my-10">
                <fieldset className="border lg:mx-[2%] mx-[5%] mt-[20%] lg:mt-[5%]">
                    <legend className="mx-auto font-mario px-[10px] text-2xl lg:text-5xl headline select-none">the challenge</legend>
                    <p className="font-pirkkala text-xl lg:px-16 px-8 lg:pt-16 pt-8 lg:w-[60%]">Hey there! From <span className="b">June 23rd</span> till <span className="l">July 17th</span>... <br /> <br />

                        <span className="text-3xl">
                            <span className="text-[#fff4bb]">make</span> any project that involves numbers, and <br /> <span className="text-[#fff4bb]">we'll ship you</span> an <span className="y">(actual) calculator!!</span>
                        </span>

                        <br /><br />sounds good? you could make a [<span className="b">calculator app for your <span className="text-white">phone?? sprig?? fridge???</span></span>], [<span className="l">rhythm game involving math</span>], or maybe [<span className="g">the worst calculator to ever exist?????</span>], [<span className="y">physics engine??</span>] ...well...anything!! as long as you add your own unique twist to it :-)
                    </p>
                    <div className="lg:px-16 px-8">
                        <button className="otherbtn mt-[40px] lg:mb-[60px] mb-[60px] font-pirkkala text-xl" onClick={gotoForm}>Submit</button>
                        {/*<button className="coolbtn mb-[60px] font-pirkkala text-xl lg:ml-[12px]">Hardware/Art Time Tracker</button>*/}
                    </div>
                </fieldset>
                <div className="flex lg:mx-[2%] mx-[5%] mt-[20%] lg:mt-[5%] justify-between lg:flex-row flex-col h-auto">
                    <fieldset className="border lg:w-[48%] w-full">
                        <legend className="mx-auto font-mario px-[10px] text-2xl lg:text-5xl headline select-none">prizes</legend>
                        <div className="lg:p-16 p-8">
                            <p className="font-pirkkala text-xl">you can get different calculators based on <span className="b">hours spent on your project</span> and <span className="l">the quality of your project</span>!</p>
                            <div className="relative flex justify-center w-full mt-[50px] h-auto">
                                <img src="assets/prize.gif" className="pixel w-[70%] h-auto" />
                                <img src="prizes/1.png" className="absolute w-[70%]" />
                            </div>
                            <p className="text-center my-5 font-pirkkala text-xl"><span className="l">simple:</span> basic calculator :p (~3hr)</p>

                            <div className="relative flex justify-center w-full mt-[50px] h-auto">
                                <img src="assets/prize.gif" className="pixel w-[70%] h-auto" />
                                <img src="prizes/2.png" className="absolute w-[70%]" />
                            </div>
                            <p className="text-center my-5 font-pirkkala text-xl"><span className="y">medium:</span> scientific calculator (~7hr)</p>

                            <div className="relative flex justify-center w-full mt-[50px] h-auto">
                                <img src="assets/prize.gif" className="pixel w-[70%] h-auto" />
                                <img src="prizes/3.png" className="absolute w-[70%]" />
                            </div>
                            <p className="text-center my-5 font-pirkkala text-xl"><span className="b">impressive:</span> get a TI-84 plus CE! (~24hr)</p>

                            <div className="relative flex justify-center w-full mt-[50px] h-auto">
                                <img src="prizes/huh.PNG" className="w-[70%] pixel" />
                            </div>
                            <p className="text-center my-5 font-pirkkala text-xl"><span className="g">???:</span> design a calculator, get $5/hr to build a calculator!</p>
                        </div>
                    </fieldset>
                    <fieldset className="border border-dotted border-[5px] border-[#fff4bb] lg:w-[48%] w-full mt-6">
                        <div className="lg:p-16 p-8">
                            <p className="font-pirkkala text-xl">and for the !!<span className="y">best <span className="text-white">(or worst?)</span></span>!! projects- here are some extra prizes you could earn!! (you could get these regardless of hours spent.) <br /> <br /> Submit before <span className="y">July 11th</span> to qualify. winners will be decided by voting!</p>
                            <div className="relative flex justify-center w-full mt-[50px] h-auto">
                                <img src="assets/special.gif" className="pixel w-[70%] h-auto" />
                                <img src="prizes/6.png" className="absolute w-[70%]" />
                            </div>
                            <p className="text-center my-5 font-pirkkala text-xl"><span className="y">best music:</span> musical calculator!</p>

                            <div className="relative flex justify-center w-full mt-[50px] h-auto">
                                <img src="assets/special.gif" className="pixel w-[70%] h-auto" />
                                <img src="prizes/5.png" className="absolute w-[70%]" />
                            </div>
                            <p className="text-center my-5 font-pirkkala text-xl"><span className="y">worst calculator:</span> abacus</p>

                            <div className="relative flex justify-center w-full mt-[50px] h-auto">
                                <img src="assets/special.gif" className="pixel w-[70%] h-auto" />
                                <img src="prizes/4.png" className="absolute w-[70%]" />
                            </div>
                            <p className="text-center my-5 font-pirkkala text-xl"><span className="y">cutest project:</span> tamagotchi</p>
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="flex flex-col items-center w-full gap-8">
                <p className="font-pirkkala lg:text-3xl text-xl w-[90%] text-center">aside from that, you'll get this stickersheet!</p>
                <img draggable="false" src="assets/sticker.PNG" className="float lg:w-[50%] w-[80%] pixel" />
            </div>
            <div>
                <fieldset className="border lg:mx-[2%] mx-[5%] mt-[20%] lg:mt-[5%]">
                    <legend className="mx-auto font-mario px-[10px] text-2xl lg:text-5xl headline select-none">how??</legend>
                    <p className="font-pirkkala text-xl lg:px-16 px-8 lg:w-[60%] lg:pt-16 pt-8 pb-8">
                        okok... I want to do your program- but how do I start? <br /><br />
                        <span className="b">#1.</span> think of (cool!!!) ideas and allat <br />
                        + + + + + + + + + + + + + + + + + + + <br />
                        <span className="y">#2.</span> track your time with <a href="https://hackatime.hackclub.com/" className="coolink" target="_blank">hackatime</a>, its a tool for time tracking :p <br />
                        ( -&gt; please use <a href="https://lapse.hackclub.com" className="coolink" target="_blank">lapse</a> for hardware or art tracking!! )<br />
                        - - - - - - - - - - - - - - - - - - - - - - - <br />
                        <span className="l">#3.</span> ask the people in <a href="https://hackclub.enterprise.slack.com/archives/C0ARJHZPU9H" className="coolink" target="_blank">#calculate</a> for feedback! + share your project!!! <br />
                        * * * * * * * * * * * * * * * * * * * * * * * <br />
                        <span className="g">#4.</span> publish it to <a href="https://github.com" className="coolink" target="_blank">github</a> and submit it! and get prizes! yay!11!!!1!1
                    </p>
                    <div className="lg:px-16 px-8">
                        <button className="otherbtn mb-[60px] font-pirkkala text-xl" onClick={gotoGuides}>see guides</button>
                    </div>
                </fieldset>
            </div>
            <div className="w-full my-10">
                <div className="flex lg:mx-[2%] mx-[5%] mt-[20%] lg:mt-[5%] justify-between lg:flex-row flex-col h-auto">
                    <fieldset className="border lg:w-[48%] w-full">
                        <legend className="mx-auto font-mario px-[10px] text-2xl lg:text-5xl headline select-none">questions?</legend>
                        <div className="lg:p-16 p-8">
                            <p className="font-pirkkala text-xl">
                                <span className="b">can i use AI?</span><br />
                                we will not accept projects entirely made by AI, the total AI usage should be under 30%. your project should show real human effort!<br /><br />

                                <span className="y">who is eligible?</span><br />
                                anyone aged between 13 and 18 (includes 18 year olds!)<br /><br />

                                <span className="l">how much does it cost?</span><br />
                                this program is 100% free!!<br /><br />

                                <span className="g">is this legit?</span><br />
                                this is a <a href="https://hackclub.com/" className="coolink" target="_blank">hack club</a> program. hack club has also ran many programs in the past! <a href="https://hackclub.com/programs" className="coolink" target="_blank">learn more</a><br /><br />
                            </p><hr />
                            <p className="font-pirkkala text-xl">
                                <br />
                                if you have any additional questions, feel free to ask in <a href="https://hackclub.enterprise.slack.com/archives/C0ARJHZPU9H" className="coolink" target="_blank">#calculate</a> or <a href="mailto:candyisakat@gmail.com" className="coolink">email me</a>!
                            </p>
                        </div>
                    </fieldset>
                    <div className="lg:w-[48%] w-full flex items-center justify-center">
                        <p className="font-pirkkala lg:text-3xl text-xl text-center my-10">
                            made with &lt;3 by teenagers, for teenagers
                            <br />
                            <a href="https://hackclub.com/" className="coolink" target="_blank">hack club</a> | <a href="https://slack.hackclub.com/" className="coolink" target="_blank">join the slack</a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}