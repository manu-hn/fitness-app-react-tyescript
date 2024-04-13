
type Props = {
    name: string,
    description: string,
    image: string
}

const OurClass = ({ description, image, name }: Props) => {
    const overLayStyle = `p-1 md:p-5 absolute z-30 flex h-[20rem] md:h-[24rem]  
w-full flex-col items-center justify-center whitespace-normal 
bg-primary-500 text-center text-white opacity-0 transition duration-200 hover:opacity-80`;

    return (
        <li className='relative inline-block h-[22rem] w-[20rem] md:w-[28rem] mx-1 md:mx-2'>

            <div className={`${overLayStyle}`}>
                <p className="text-lg font-semibold my-4">{name}</p>
                <p className="">{description}</p>
            </div>
            <img src={image} alt={`${name}`} className="w-[18rem] md:w-[28rem]" />
        </li>
    )
}

export default OurClass