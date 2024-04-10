import useMediaQuery from '@/utils/hooks/useMediaQuery';
import { SelectedPage } from '@/utils/types';
import HomePageText from '@/assets/HomePageText2.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import ActionButton from '@/components/assets/buttons/ActionButton.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery('(min-width : 1060px)');
    return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0 border border-black'>
            {/* HOme */}
            <div className=' md:flex w-5/6 mx-auto items-center justify-center md:h-5/6'>
                {/*Main Header */}
                <div className='mt-32 md:basis-3/5'>
                    {/* Headings */}
                    <div className='md:-mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20  before:content-evolvetext before:z-[-1]'>
                                <img src={HomePageText} alt="Home Page Text" className='w-full md:w-[60%] ' />
                            </div>
                        </div>
                        <p>At FitFlex Gym, excellence is not just a goal; it's a commitment. Experience our unmatched training programs
                            and state-of-the-art facilities, guiding you towards your fitness aspirations and beyond.</p>
                    </div>
                    {/* Action Buttons */}
                    <div>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className='text-sm text-primary-500 font-bold underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>

                {/* Image */}
                <div>
                    <img src={HomePageGraphic} alt="Home Page Graphic" className='h-72 md:h-[26rem]' />

                </div>

            </div>
            {/* Sponsors */}
            {
                isAboveMediumScreen && (
                    <div>
                        <div>
                            <div>
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