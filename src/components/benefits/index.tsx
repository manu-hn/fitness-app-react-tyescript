import { SelectedPage } from '@/utils/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { BenefitsType } from '@/utils/types';
import Benefit from '@/components/benefits/Benefit';
import HeadText from '@/components/assets/header tags/HeadText';
import ActionButton from '@/components/assets/buttons/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

export const benefits: Array<BenefitsType> = [
    {
        id: 1,
        icon: <HomeModernIcon className='w-6 h-6' />,
        title: "Transforming Lives Daily",
        description: "Elevate your fitness journey with FitFlex's personalized training, expert guidance, and state-of-the-art facilities, empowering you to achieve your goals with ease and confidence."
    },
    {
        id: 2,
        icon: <UserGroupIcon className='w-6 h-6' />,
        title: "Your Path to Fitness Success",
        description: "Select FitFlex for unparalleled expertise, personalized attention, and a supportive community that will motivate and guide you towards your fitness goals, ensuring sustainable progress and lasting results."
    },
    {
        id: 3,
        icon: <AcademicCapIcon className='w-6 h-6' />,
        title: "Setting a New Standard",
        description: "FitFlex sets itself apart through our dedication to innovation, personalized approach, and supportive community, ensuring every aspect of your fitness journey exceeds expectations and delivers exceptional results."
    },

];


const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id='benefits' className=' mx-auto min-h-full w-5/6 py-20'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                <motion.div className='md:w-3/5 md:my-5'
                    initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1, delay: 0.25 }}
                    variants={{
                        hidden: { opacity: 0, x: -150 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <HeadText>
                        MORE THAN JUST A GYM.
                    </HeadText>
                    <p className='my-5 text-sm md:text-lg'>
                        Join us for a fitness experience like no other, where you'll find quality equipment,
                        supportive trainers, and fun classes to help you smash your goals.
                        We're here to give every member the attention and encouragement they deserve on their journey to better health.
                    </p>
                </motion.div>
                {/* Benefits Parent Component */}
                <motion.div
                    className='mt-1  md:mt-5 flex flex-wrap md:flex-nowrap items-center justify-between gap-8'
                    initial='hidden' whileInView={'visible'} viewport={{ once: true, amount: 0.5 }} variants={container}>
                    {
                        benefits?.map((benefit: BenefitsType) => (
                            <Benefit key={benefit?.id}
                                icon={benefit?.icon} title={benefit?.title}
                                description={benefit?.description}
                                setSelectedPage={setSelectedPage} />
                        ))
                    }
                </motion.div>
                {/* Graphics and Description */}
                <div className={` mt-16 justify-between items-center gap-20  md:mt-28 md:flex sm:flex`}>
                    {/* Graphic Image */}
                    <img src={BenefitsPageGraphic} alt="Benefits Page Graphic" className='mx-auto  w-[80%] sm:w-2/4' />

                    {/* Description */}
                    <div>
                        {/* Title */}
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwave'>
                                <motion.div
                                    initial='hidden' whileInView='visible'
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1, delay: 0.1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 100 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HeadText>
                                        Countless Thriving Members Achieving  {' '}
                                        <span className='text-primary-500'>
                                            FITNESS
                                        </span>{' '}
                                        Goals.
                                    </HeadText>
                                </motion.div>

                            </div>
                        </div>

                        {/* Description */}

                        <motion.div
                            initial='hidden' whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1, delay: 0.25 }}
                            variants={{
                                hidden: { opacity: 0, x: -150 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className='text-justify my-5 text-sm md:text-lg'>
                                In the vibrant world of FitFlex, countless members are actively pursuing their fitness goals,
                                creating a dynamic community where progress is celebrated and achievements are shared.
                                With each success story, our platform thrives, fueled by the dedication and determination of our diverse members.
                                From beginners to seasoned athletes, FitFlex welcomes individuals of all levels, offering a supportive environment
                                where everyone can thrive.
                            </p>
                            <p className='text-justify mb-5 text-sm md:text-lg'>
                                Our mission is simple: to empower every member to unlock their full potential and achieve their fitness dreams.
                                Join us on this journey towards better health and happiness, where millions have found their path to a fitter, happier life.
                            </p>
                        </motion.div>

                        {/* Button */}
                        <div className='relative mt-16'>
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>

                        </div>
                        <button></button>
                    </div>

                </div>

            </motion.div>
        </section>
    )
}

export default Benefits;