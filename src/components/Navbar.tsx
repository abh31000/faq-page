import { Equal } from "lucide-react";
import { Button } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  

export default function Navbar():JSX.Element {
    return(
        <>
            {/*Large Navbar*/}
            <div className="flex select-none text-primary font-[Inter] justify-between mx-7 my-2 max-[894px]:hidden">
                <div className="flex z-10 space-x-7">
                    <div className="flex py-2 text-lg font-bold h-fit my-auto space-x-1.5">
                        <svg className="my-auto" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1L13.012 6.23109C13.294 6.96432 13.435 7.33093 13.6542 7.63931C13.8486 7.91262 14.0874 8.15141 14.3607 8.34575C14.6691 8.56503 15.0357 8.70603 15.7689 8.98804L21 11L15.7689 13.012C15.0357 13.294 14.6691 13.435 14.3607 13.6542C14.0874 13.8486 13.8486 14.0874 13.6542 14.3607C13.435 14.6691 13.294 15.0357 13.012 15.7689L11 21L8.98804 15.7689C8.70603 15.0357 8.56503 14.6691 8.34575 14.3607C8.15141 14.0874 7.91262 13.8486 7.63931 13.6542C7.33093 13.435 6.96432 13.294 6.23109 13.012L1 11L6.23108 8.98804C6.96431 8.70603 7.33093 8.56503 7.63931 8.34575C7.91262 8.15141 8.15141 7.91262 8.34575 7.63931C8.56503 7.33093 8.70603 6.96431 8.98804 6.23108L11 1Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h1 className="my-auto">Untitled UI</h1>
                    </div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Button variant={"ghost"}>Home</Button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="p-5 w-80 h-32">
                                        test
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button variant={"ghost"}>Pricing</Button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent">Blog</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                <div className="p-5 w-80 h-32">
                                        test
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button variant={"ghost"}>About us</Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex z-10 my-auto">
                    <div className="space-x-4 text-sm">
                        <button className="px-4 py-1.5 ring-2 bg-background hover:bg-accent ring-primary rounded-full">Log in</button>
                        <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-full">Get started</button>
                    </div>
                </div>
            </div>

            {/*Small Navbar*/}
            <div className="max-[894px]:flex justify-between select-none hidden text-primary font-[Inter] mx-7 my-2">
                    <div className="flex z-10 py-2 text-lg font-bold h-fit my-auto space-x-1">
                        <svg className="my-auto" width="22" height="22" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M91.8421 69.6284C88.3673 64.4309 82.7427 62.0358 77.2752 62.4333C73.1377 62.7327 69.0346 61.4958 66.0996 58.5609L64.3524 56.8136C59.0615 51.5227 59.0615 42.9485 64.3524 37.6577L66.0996 35.9104C69.0346 32.9754 73.1328 31.7385 77.2702 32.0379C82.7427 32.4355 88.3771 30.0355 91.8519 24.8232C95.3121 19.6305 95.3514 12.6366 91.9305 7.41938C86.1292 -1.42977 74.1291 -2.32792 67.0763 4.7298C63.5622 8.23903 62.0309 12.9752 62.4677 17.5642C62.8456 21.5642 61.4174 25.525 58.5756 28.3667L56.8185 30.1239C51.5277 35.4147 42.9534 35.4147 37.6626 30.1239L35.9153 28.3766C32.9803 25.4416 31.7435 21.3434 32.0429 17.201C32.4355 11.7335 30.0453 6.10894 24.8478 2.63407C19.66 -0.835897 12.6661 -0.884958 7.43902 2.53102C-1.42976 8.32247 -2.33282 20.3373 4.72981 27.3999C8.24395 30.914 12.9802 32.4454 17.5643 32.0086C21.5643 31.6307 25.5251 33.0589 28.3668 35.9006L30.1239 37.6625C35.4147 42.9533 35.4147 51.5276 30.1239 56.8185L28.3766 58.5658C25.4416 61.5008 21.3434 62.7376 17.2011 62.4383C11.7335 62.0407 6.11387 64.4358 2.63408 69.6334C-0.835882 74.8211 -0.884973 81.815 2.531 87.0421C8.32246 95.9108 20.3373 96.8188 27.3999 89.7513C30.9141 86.2372 32.4453 81.5059 32.0085 76.9169C31.6306 72.9169 33.0588 68.9561 35.9006 66.1143L37.6577 64.3572C42.9485 59.0664 51.5228 59.0664 56.8137 64.3572L58.5707 66.1143C61.4124 68.9561 62.8407 72.9169 62.4628 76.9169C62.0259 81.5059 63.5622 86.2372 67.0714 89.7513C74.134 96.8139 86.1489 95.9108 91.9403 87.0421C95.3514 81.815 95.3072 74.8211 91.8372 69.6334L91.8421 69.6284Z" fill="black"/>
                        </svg>
                        <h1 className="my-auto">Untitled UI</h1>
                    </div>

                    <div className="flex z-10 my-auto space-x-1">
                        <Button variant="ghost">
                            <Equal className="mr-2" strokeWidth={2.3} />Menu
                        </Button>

                    </div>
            </div>

            <div className="absolute opacity-60 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:radial-gradient(ellipse_40%_50%_at_50%_10%,#000_70%,transparent_110%)]"></div>

        </>
    )
}