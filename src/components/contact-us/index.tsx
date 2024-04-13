import { SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HeadText from '@/components/assets/header tags/HeadText.tsx';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const ContactUs = ({ setSelectedPage }: Props) => {
    const {
        register,
        

        trigger,
        formState: { errors }, } = useForm();

    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white outline-none border-none`

    const onSubmitHandler = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }

    }
    return (
        <section id='contact-us' className='w-5/6 mx-auto pt-24 pb-32'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>

                <motion.div className='md:w-3/5 '
                    initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -150 },
                        visible: { opacity: 1, x: 0 },

                    }}
                >
                    <HeadText>
                        <span className='text-primary-500'>JOIN NOW</span> TO GET IN SHAPE
                    </HeadText>
                    <p className='my-5'>
                        Join our community and start your journey towards a healthier, fitter you.
                        Our expert trainers are here to support you every step of the way.
                        Get in touch today to discover the FitFlex difference.
                    </p>

                </motion.div>
                {/* FORM HANDLING FOR EMAIL */}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },

                        }}
                    >
                        <form className='flex flex-col items-center' method='POST' action={`https://formsubmit.co/${import.meta.env.VITE_MY_EMAIL}`}
                            target='_black' onSubmit={onSubmitHandler}>

                            <input id='name' type="text"
                                placeholder='John Doe' className={`${inputStyles} `} {...register('name', { required: true, maxLength: 30, })} />
                            {errors.name && (<p className='mb-1 text-red-500 text-xs'>
                                {errors?.name.type === 'required' && 'Name is Required'}
                                {errors?.name.type === 'maxLength' && 'Maximum Length is 30 Characters'}
                            </p>)}

                            <input id='email' type="text"
                                placeholder='example@gmail.com' className={`${inputStyles} `} {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
                            {errors.email && (<p className='mb-1 text-red-500 text-xs'>
                                {errors?.email.type === 'required' && 'Email is Required'}
                                {errors?.email.type === 'pattern' && 'Not A Valid Email'}
                            </p>)}

                            <textarea id='message' rows={5} cols={50}
                                placeholder='YOUR MESSAGE HERE' className={`${inputStyles} `} {...register('message', { required: true, maxLength: 1000, })} />
                            {errors.message && (<p className='mb-1 text-red-500 text-xs'>
                                {errors?.message.type === 'required' && 'Name is Required'}
                                {errors?.message.type === 'maxLength' && 'Maximum Length is 1000 Characters'}
                            </p>)}

                            <button type='submit' className=' mt-5 border-none text-sm md:text-[1rem] font-semibold rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>
                                Submit
                            </button>
                        </form>

                    </motion.div>


                    <motion.div className='relative mt-16 basis-2/5 md:mt-0'
                        initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.75 }}
                        variants={{
                            hidden: { opacity: 0, x: -150 },
                            visible: { opacity: 1, x: 0 },

                        }}
                    >
                        <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] flex justify-center'>
                            <img src={ContactUsPageGraphic} alt="Contact Us Page Graphic" className='w-5/6 h-96' />
                        </div>

                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs;