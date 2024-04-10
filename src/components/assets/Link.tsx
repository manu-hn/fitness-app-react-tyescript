import { SelectedPage } from '@/utils/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}


const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const loweCaseID = page.toLowerCase().replace(/ /g, " ") as SelectedPage;
    return (
        <AnchorLink className={`${selectedPage === loweCaseID ? "text-primary-500" : 'text-pink-900'} font-semibold transition duration-500 no-underline  hover:text-primary-300`}
            href={`#${loweCaseID}`} onClick={()=>setSelectedPage(loweCaseID) }>
            {page}
        </AnchorLink>

    )
}

export default Link