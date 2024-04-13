import { SelectedPage } from '@/utils/types';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}


const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const lowerCaseID = page.toLowerCase().replace(/\s+/g, "-") as SelectedPage;

    return (
        <AnchorLink className={`${selectedPage === lowerCaseID ? "text-primary-500" : 'text-pink-900'} font-semibold transition duration-500 no-underline  hover:text-primary-300`}
            href={`#${lowerCaseID}`} onClick={() => setSelectedPage(lowerCaseID)}>
            {page}
        </AnchorLink>

    )
}

export default Link