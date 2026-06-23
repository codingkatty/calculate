import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function Dashboard() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if(!session) {
        return <div>Not authenticated</div>
    }
    return (
        <div>
            <fieldset className="border lg:mx-[2%] mx-[5%] mt-[20%] lg:mt-[5%]">
                <legend className="mx-auto font-mario px-[10px] text-2xl lg:text-5xl headline select-none">looking out</legend>
                <p className="font-pirkkala text-xl lg:p-16 p-8 lg:w-[60%]">
                    (NOT WORKING YET) this dashboard is for tracking time via Lookout specifically for <span className="g">hardware</span> or <span className="b">art</span>. if you're planning to make a software project, you should use the <a href="https://hackatime.hackclub.com/docs" className="coolink" target="_blank">hackatime extension for your editor</a>!!
                </p>
            </fieldset>
        </div>
    )
}