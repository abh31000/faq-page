export default function Title():JSX.Element {
    return(
        <>
            <div className="mt-16 min-[724px]:24 font-[Inter] mx-5 min-[724px]:mx-auto text-primary">
                <svg className="mx-auto hidden min-[724px]:block" width="42" height="42" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L13.012 6.23109C13.294 6.96432 13.435 7.33093 13.6542 7.63931C13.8486 7.91262 14.0874 8.15141 14.3607 8.34575C14.6691 8.56503 15.0357 8.70603 15.7689 8.98804L21 11L15.7689 13.012C15.0357 13.294 14.6691 13.435 14.3607 13.6542C14.0874 13.8486 13.8486 14.0874 13.6542 14.3607C13.435 14.6691 13.294 15.0357 13.012 15.7689L11 21L8.98804 15.7689C8.70603 15.0357 8.56503 14.6691 8.34575 14.3607C8.15141 14.0874 7.91262 13.8486 7.63931 13.6542C7.33093 13.435 6.96432 13.294 6.23109 13.012L1 11L6.23108 8.98804C6.96431 8.70603 7.33093 8.56503 7.63931 8.34575C7.91262 8.15141 8.15141 7.91262 8.34575 7.63931C8.56503 7.33093 8.70603 6.96431 8.98804 6.23108L11 1Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h1 className="text-4xl min-[724px]:text-5xl text-start min-[724px]:text-center mt-6 font-semibold">Frequently asked questions</h1>
                <p className="text-base min-[724px]:text-base text-start min-[724px]:text-center mt-4 min-[724px]:mt-4 text-gray-600">These are the most commonly asked questions about Untitled UI and billing.<br />Can't find what you're looking for?<span className="underline decoration-2 underline-offset-1 cursor-pointer"> Chat to our friendly team!</span></p>
            </div>
        </>
    )
}