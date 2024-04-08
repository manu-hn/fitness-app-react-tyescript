import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Logo1 from "@/assets/Logo1.png";
import Logo2 from "@/assets/Logo2.png";

type Props = {}

const NavBar = (props: Props) => {
    const customFlex = `flex items-center justify-between`;

    return (
        <nav>
            <div className={`${customFlex} fixed top-0 py-8 w-full z-30`}>
                <div className={`${customFlex} w-5/6 mx-auto`}>
                    <div className={`${customFlex} w-full gap-16 `}>
                        {/* Left Side For Logo */}
                        <img src={Logo2} alt="Logo" className='w-32' />
                        <div className={`${customFlex} w-full`}>
                            {/* Inner Left Nav Buttons */}
                            <div className={`${customFlex}  text-sm`}>
                                <ul className={`${customFlex} gap-12  text-sm`}>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Benefits</li>
                                    <li>Our Classes</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>

                            {/*Inner Right Member and Sign In */}
                            <div className={`${customFlex} gap-6`} >
                                <button>
                                    Sign In
                                </button>
                                <button>
                                    Become a Member
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar