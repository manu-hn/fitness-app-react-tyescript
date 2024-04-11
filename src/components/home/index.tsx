import useMediaQuery from '@/utils/hooks/useMediaQuery';
import { SelectedPage } from '@/utils/types';
import HomePageText from '@/assets/HomePageText2.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import ActionButton from '@/components/assets/buttons/ActionButton.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import EvolveText from '@/assets/EvolveText.png';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery('(min-width : 1060px)');
    return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0 border border-black'>
            {/* HOme */}
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                className=' md:flex w-5/6 mx-auto items-center justify-center md:h-5/6'>
                {/*Main Header */}
                <div className='mt-32 md:basis-3/5'>
                    {/* Headings */}
                    <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -150 },
                            visible: { opacity: 1, x: 0 },

                        }}
                        className='-mt-24 md:-mt-12'>
                        <div className='relative'>
                            {/* <div className={`before:absolute before:-top-24 hidden md:block before:-left-20  before:content-evolvetext before:z-[-1]  `}> */}
                            <div className={`  `}>
                                <img src={EvolveText} alt="Home Page Text" className='w-3/4 hidden  sm:block md:w-full' />
                                <img src={HomePageText} alt="Home Page Text" className='w-full md:w-[60%] sm:w-[65%] md:-mt-8 sm:-mt-6 z-10' />
                            </div>
                        </div>
                        <p className='text-justify'>At FitFlex Gym, excellence is not just a goal; it's a commitment. Experience our unmatched training programs
                            and state-of-the-art facilities, guiding you towards your fitness aspirations and beyond.</p>
                    </motion.div>
                    {/* Action Buttons */}
                    <motion.div
                        initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, delay: 0.25 }}
                        variants={{
                            hidden: { opacity: 0, x: -150 },
                            visible: { opacity: 1, x: 0 },

                        }}
                        className='mt-8 flex items-center gap-8 md:justify-start text-xs md:text-sm'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className='text-sm text-primary-500 font-bold underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* Image */}
                <motion.div
                    className='flex basis-3/5  justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end'
                    initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, }}
                    variants={{
                        hidden: { opacity: 0, x: 180 },
                        visible: { opacity: 1, x: 0 },

                    }}
                >
                    <img src={HomePageGraphic} alt="Home Page Graphic" className='h-72 md:h-[28rem] sm:h-[25rem]' />

                </motion.div>

            </motion.div>
            {/* Sponsors */}
            {
                isAboveMediumScreen && (
                    <div className='h-24 mt-6 w-full bg-primary-100 py-10'>
                        <div className='mx-auto w-5/6 justify-center flex'>
                            <div className='flex w-3/5 items-center justify-between '>
                                <img src={SponsorRedBull} alt="Red-Bull Sponsor" />
                                <img src={SponsorForbes} alt="Forbes Sponsor" />
                                <img src={SponsorFortune} alt="Fortune Sponsor" />
                            </div>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default Home