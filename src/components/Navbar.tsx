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
            <div className="max-[894px]:flex justify-between select-none hidden text-primary font-[Inter] mx-5 min-[724px]:mx-7 my-2">
                    <div className="flex z-10 py-2 text-lg font-bold h-fit my-auto space-x-1">
                        <svg className="my-auto" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1L13.012 6.23109C13.294 6.96432 13.435 7.33093 13.6542 7.63931C13.8486 7.91262 14.0874 8.15141 14.3607 8.34575C14.6691 8.56503 15.0357 8.70603 15.7689 8.98804L21 11L15.7689 13.012C15.0357 13.294 14.6691 13.435 14.3607 13.6542C14.0874 13.8486 13.8486 14.0874 13.6542 14.3607C13.435 14.6691 13.294 15.0357 13.012 15.7689L11 21L8.98804 15.7689C8.70603 15.0357 8.56503 14.6691 8.34575 14.3607C8.15141 14.0874 7.91262 13.8486 7.63931 13.6542C7.33093 13.435 6.96432 13.294 6.23109 13.012L1 11L6.23108 8.98804C6.96431 8.70603 7.33093 8.56503 7.63931 8.34575C7.91262 8.15141 8.15141 7.91262 8.34575 7.63931C8.56503 7.33093 8.70603 6.96431 8.98804 6.23108L11 1Z" fill="black" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h1 className="my-auto">Untitled UI</h1>
                    </div>

                    <div className="flex z-10 my-auto space-x-1">
                        <Button variant="ghost">
                            <Equal className="mr-2" strokeWidth={2.3} />Menu
                        </Button>

                    </div>
            </div>

            <div className="absolute opacity-60 bottom-0 left-0 right-0 top-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:radial-gradient(ellipse_40%_50%_at_50%_10%,#000_70%,transparent_110%)]"></div>

        </>
    )
}