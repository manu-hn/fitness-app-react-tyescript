import { SelectedPage } from '@/utils/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const BecomeMember = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink className='rounded-md no-underline text-pink-800 font-semibold bg-secondary-500 px-8 py-2 hover:bg-primary-500 hover:text-white'
            href={`#${SelectedPage.ContactUs}`} onClick={() => setSelectedPage(SelectedPage.ContactUs)}>
            {children}
        </AnchorLink>
    )
}

export default BecomeMember