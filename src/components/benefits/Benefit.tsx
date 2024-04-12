import { SelectedPage } from '@/utils/types'
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
    hidden : {opacity : 0, scale : 0.9},
    visible : {opacity : 1, scale : 1}
}

type Props = {
    title: string;
    description: string;
    icon: JSX.Element;
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({ icon, description, title, setSelectedPage }: Props) => {
    return (
        <motion.div variants={childVariant}  className='mt-1 md:mt-5 rounded-lg bg-black bg-opacity-5 px-5 py-16 text-center w-full md:w-[45%]'>
            <div className='mb-4 flex justify-center '>
                <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                    {icon}
                </div>
            </div>
            <h4 className='font-bold'>{title}</h4>

            <p className='my-3 text-justify '>{description}</p>
            <AnchorLink className='text-sm text-primary-500 font-bold underline hover:text-secondary-500'
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
        </motion.div>
    )
}

export default Benefit