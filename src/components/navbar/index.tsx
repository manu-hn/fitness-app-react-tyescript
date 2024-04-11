import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo2 from "@/assets/Logo2.png";
import Link from '../assets/Link';
import { SelectedPage } from "@/utils/types";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { useState } from "react";
import BecomeMember from "@/components/assets/buttons/ActionButton";



type Props = {

    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage : boolean
}

const NavBar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const customFlex = `flex items-center justify-between`;
    const isAboveMediumScreen = useMediaQuery('(min-width : 1060px)');
    const navBarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

    return (
        <nav>
            <div className={`${navBarBackground} ${customFlex} fixed top-0 py-4 w-full z-30`}>
                <div className={`${customFlex} w-5/6 mx-auto`}>
                    <div className={`${customFlex} w-full gap-16 `}>
                        {/* Left Side For Logo */}
                        <img src={Logo2} alt="Logo" className='w-24 h-8 md:w-32 md:h-12' />
                        {isAboveMediumScreen ? (<div className={`${customFlex} w-full`}>
                            {/* Inner Left Nav Buttons */}
                            <div className={`${customFlex}  text-sm`}>
                                <ul className={`${customFlex} gap-12 list-none text-sm`}>
                                    <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    
                                    <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                </ul>
                            </div>

                            {/*Inner Right Member and Sign In */}
                            <div className={`${customFlex} gap-6`} >
                                <button>
                                    Sign In
                                </button>
                                <BecomeMember setSelectedPage={setSelectedPage}>
                                    Become a Member
                                </BecomeMember>
                            </div>
                        </div>) : (

                            <button className="rounded-full bg-secondary-500 p-2 border-none" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* Navbar for Mobile  Views */}
            {
                !isAboveMediumScreen && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full z-40 w-[40%] bg-primary-100 drop-shadow-xl">
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)} className="border-none bg-transparent">
                                <XMarkIcon className="h-6 w-6 text-slate-600" />
                            </button>
                        </div>
                        {/* Mobile Menu */}

                        <div className={` w-full flex justify-center `}>
                            <ul className={`flex flex-col border  gap-4 text-pink-800 text-xs sm:text-sm list-none`}>
                                <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='About' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page='Contact Us' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </ul>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default NavBar