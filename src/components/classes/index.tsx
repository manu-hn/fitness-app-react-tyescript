import { SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import Image1 from '@/assets/image1.png';
import Image2 from '@/assets/image2.png';
import Image3 from '@/assets/image3.png';
import Image4 from '@/assets/image4.png';
import Image5 from '@/assets/image5.png';
import Image6 from '@/assets/image6.png';
import HeadText from '@/components/assets/header tags/HeadText';
import { TrainingType } from '@/utils/types';
import OurClass from './OurClass';



const ourClasses: Array<TrainingType> = [
    {
        name: "Weight Training Classes",
        description: "Transform your body and boost your strength with our specialized Weight Training Classes, designed for optimal muscle growth and development.",
        image: Image1
    },
    {
        name: "Yoga Classes",
        description: "Find Balance, Flexibility, and Inner Peace in our Serene and Transformative Yoga Classes for Mind-Body Harmony.",
        image: Image2
    },
    {
        name: "Abs Core Classes",
        description: "Define Your Core Strength and Sculpt Your Abs with Intense and Targeted Ab Core Classes for Ultimate Results.",
        image: Image3
    },
    {
        name: "Adventure Classes",
        description: "Embark on Exciting Adventures and Push Your Limits with our Thrilling Adventure Classes for an Unforgettable Fitness Experience.",
        image: Image4
    },
    {
        name: "Fitness Classes",
        description: "Elevate Your Fitness with Dynamic and Engaging Fitness Classes Tailored to Your Goals and Preferences",
        image: Image5
    },
    {
        name: "Training Classes",
        description: "Level Up Your Skills and Achieve Your Goals with Specialized Training Classes Tailored to Your Fitness Journey.",
        image: Image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section className='w-full bg-primary-100 py-40' id='ourclasses'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                    className='mx-auto w-5/6'
                    initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -150 },
                        visible: { opacity: 1, x: 0 },

                    }} >

                    <div className='md:w-3/5'>
                        <HeadText>
                            OUR CLASSES
                        </HeadText>
                        <p className='py-5'>
                            Transform your workout routine with our diverse range of fitness classes, carefully curated to suit every level and goal.
                            From high-intensity cardio to soothing yoga sessions, discover the perfect class to elevate your fitness journey at FitFlex
                        </p>
                    </div>
                </motion.div>

                <div className='mt-10 h-80 w-full overflow-x-auto overflow-y-hidden no-scrollbar'>
                    <ul className='w-[175rem] whitespace-nowrap '>
                        {
                            ourClasses.map((item: TrainingType, index) => (<OurClass key={`${item?.name}-${index}`}
                                name={item.name} description={item.description} image={item.image}
                            />))
                        }

                    </ul>

                </div>

            </motion.div>

        </section>
    )
}

export default OurClasses;