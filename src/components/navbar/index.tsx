import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo2 from "@/assets/Logo2.png";
import Link from '../assets/Link';
import { SelectedPage } from "@/utils/types";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { useState } from "react";
import BecomeMember from "../assets/buttons/BecomeMember";



type Props = {

    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const customFlex = `flex items-center justify-between`;
    const isAboveMediumScreen = useMediaQuery('(min-width : 1060px)');

    return (
        <nav>
            <div className={`${customFlex} fixed top-0 py-8 w-full z-30`}>
                <div className={`${customFlex} w-5/6 mx-auto`}>
                    <div className={`${customFlex} w-full gap-16 `}>
                        {/* Left Side For Logo */}
                        <img src={Logo2} alt="Logo" className='w-32 h-12' />
                        {isAboveMediumScreen ? (<div className={`${customFlex} w-full`}>
                            {/* Inner Left Nav Buttons */}
                            <div className={`${customFlex}  text-sm`}>
                                <ul className={`${customFlex} gap-12 list-none text-sm`}>
                                    <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page='About' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
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
        </nav>
    )
}

export default NavBar