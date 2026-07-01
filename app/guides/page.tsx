import Link from 'next/link';

export default function Guide() {
    return (
        <div>
            <nav className="fixed bg-[#545f54] lg:h-screen lg:w-[20%] lg:block hidden">
                <li className="nav-links">
                    <ul>
                        <Link href="/">&lt;- go back</Link>
                    </ul>
                    <hr />
                    <br />
                    <ul>
                        <a href="#ht" className="navlink">set up hackatime</a>
                    </ul>
                    <ul>
                        <a href="#ls" className="navlink">set up lapse</a>
                    </ul>
                </li>
            </nav>
            <div className="absolute right-0 lg:w-[80%] flex justify-center items-center p-8">
                <div className="w-[80%] font-pirkkala">
                    <br />
                    <h2 className="font-mario text-2xl" id="ht">Setting up Hackatime</h2>
                    <br />
                    <hr />
                    <br />
                    <p>
                        hello this is a tutorial for hackatime to start using hackatime for time tracking! hackatime is an open source fork of <a className="coolink" href="https://wakatime.com/" target="_blank">wakatime</a> by hack club and its used to track time for hack club project submissions. here's <a className="coolink" href="https://hackatime.hackclub.com/docs" target="_blank">a list of editors</a> that hackatime is compatible with.
                        <br /><br />
                        if you're new to hackatime, here are the steps to sign up and install hackatime ^o^ !! first, you should go to <a className="coolink" href="https://hackatime.hackclub.com" target="_blank">hackatime.hackclub.com</a> and click the <span className="l">'start tracking'</span> button to sign up.
                        <br /><br />
                        <img src="assets/guides/hackatime-start.png" />
                        <br />
                        (put your email to signup)
                        <br /><br />
                        <img src="assets/guides/ht-signup.png" />
                        <br />
                        after clicking the 'send link' button, you should recieve an email containing the link to this page. here, you can click on the pink button to setup hackatime on your computer.
                        <br /><br />
                        <img src="assets/guides/ht-setup.png" />
                        <br />
                        the button opens this page- follow the instructions to install hackatime!
                        <br /><br />
                        <img src="assets/guides/ht-install.png" />
                    </p>
                    <br /><br />
                    <h2 className="font-mario text-2xl" id="ls">Setting up Lapse</h2>
                    <br />
                    <hr />
                    <br />
                    <p>
                        incase you want to track time for hardware or art which does not support hackatime extensions, you can use lapse! basically, lapse records your work (you'll have the option to choose between screen and camera) and you can sync your work to hackatime.
                        <br /><br />
                        before you start tracking any long projects, i recommend you to test lapse beforehand to prevent losing tracked time!! lapse also supports lookout tracking now
                        <br /><br />
                        ok enough yapping- basically you should goto <a className="coolink" href="https://lapse.hackclub.com" target="_blank">lapse.hackclub.com</a> and sign in (you'll need a hackatime account for this). after that, you should get to this page. click the <span className="y">'create'</span> button to start!
                        <br /><br />
                        <img src="assets/guides/ls-create.png" />
                        <br />
                        at here, you will be prompted to share you screen or camera- select your screen and click create!! (ps. if you're doing art on a tablet, lapse does not support mobile devices. you can video call yourself and share your screen to your laptop to lapse)
                        <br /><br />
                        <img src="assets/guides/ls-share.png" />
                        <br />
                        note: if the button does not work, you might want to try a different browser or ask for help
                        <br /><br />
                        after that you should be successfully recording your screen. controls can be accessed at the website to pause or end the recording. when you're done, you can press the end button and it will bring you here
                        <br /><br />
                        <img src="assets/guides/ls-edit.png" />
                        <br />
                        make any nessecary edits here to cut out stuff like sensitive information, and when you're done, click publish. the website will ask if your timelapse would like to be public or unlisted. after that, you can sync the time to hackatime!
                        <br /><br />
                        <img src="assets/guides/ls-sync.png" />
                        <br />
                        that's all for now here. more to come! :3
                    </p>
                </div>
            </div>
        </div>
    )
}