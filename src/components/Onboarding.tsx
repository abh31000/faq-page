export default function Onboarding():JSX.Element {
    return(
        <>
            <div className="min-[894px]:flex grid max-[894px]:space-y-16 justify-between min-[894px]:my-40 my-20 min-[894px]:mx-14 mx-auto w-fit font-[Inter] ">
                <div className="max-w-[470px] max-[894px]:mx-auto my-auto">
                    <h1 className="max-[894px]:text-center max-[724px]:text-2xl text-3xl font-semibold">Book a 1-on-1 onboarding</h1>
                    <p className="max-[894px]:text-center max-[724px]:mx-5 text-gray-600 mt-3">Get up and running as fast as possible with personalized onboarding call. We'll show you how evrything works and how you can get started with Untitled UI.</p>

                    <div className="flex text-sm space-x-4 w-fit max-[894px]:mx-auto mt-6">
                        <button className="px-4 bg-background hover:bg-accent py-1.5 ring-2 ring-primary rounded-full">Learn more</button>
                        <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-full">Book 30 minutes</button>
                    </div>
                </div>

                <div className="grid grid-rows-2 gap-3 mx-10">
                    <div className="grid grid-cols-2 gap-3 mx-auto">
                        <img width={220} src="https://res.cloudinary.com/dbiudcrba/image/upload/v1684075302/mobile-06_fcyjmu.jpg" alt="" />
                        <img width={220} src="https://res.cloudinary.com/dbiudcrba/image/upload/v1684071683/mobile-05_bnrctz.jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <img width={220} src="https://res.cloudinary.com/dbiudcrba/image/upload/v1684071665/mobile-03_bzpvts.jpg" alt="" />
                        <img width={220} src="https://res.cloudinary.com/dbiudcrba/image/upload/v1684071267/mobile-07_ukvefi.jpg" alt="" />
                        <img width={220} src="https://res.cloudinary.com/dbiudcrba/image/upload/v1664206037/samples/people/smiling-man.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}