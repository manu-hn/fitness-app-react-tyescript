import Logo from '@/assets/Logo2.png'

type Props = {}

const Footer = (props: Props) => {
    const styles = `mt-3 cursor-pointer hover:text-red-500`

    return (
        <footer className='bg-primary-100 py-16'>
            <div className='justify-center mx-auto w-5/6 gap-16 md:flex'>
                <div className='mt-12 basis-1/3 md:mt-0'>
                    <img src={Logo} alt="Footer Logo" className='w-28' />
                    <p className='my-5 text-sm sm:text-[0.95rem] text-justify '>Elevate your fitness journey with FitFlex's comprehensive range of classes,
                        personalized training programs, and state-of-the-art facilities. Join us today and experience the difference.</p>

                </div>
                <div className='mt-12 basis-1/5 md:mt-0 text-sm sm:text-[0.95rem] '>

                    <p className={`${styles}`} >FitFlex for Business</p>
                    <p className={`${styles}`} >FitFlex Franchise</p>
                    <p className={`${styles}`} >FitFlex Partnerships</p>
                    <p className={`${styles}`} >FitFlex Cloths</p>

                </div>
                <div className='mt-12 basis-1/5 md:mt-0 text-sm sm:text-[0.95rem] '>

                    <p className={`${styles}`} >Visit Our Blog</p>
                    <p className={`${styles}`} >Gallery</p>
                    <p className={`${styles}`} >Careers</p>
                    <p className={`${styles}`} >Security</p>

                </div>
                <div className='mt-12 basis-1/5 md:mt-0 text-sm sm:text-[0.95rem] '>

                    <p className={`${styles}`} >Contact Us</p>
                    <p className={`${styles}`} >Partner With Us</p>
                    <p className={`${styles}`} >Privacy Policy</p>
                    <p className={`${styles}`} >Terms & Conditions</p>

                </div>

            </div>
            <div className='w-full flex justify-center mt-8'>
                <p className='text-sm sm:text-[0.95rem] flex items-center '>
                    <span className='text-lg mr-2'>&copy;</span> FitFlex All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer