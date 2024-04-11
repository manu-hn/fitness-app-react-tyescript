import React from 'react'

type Props = {
    children: React.ReactNode;
}

const HeadText = ({ children }: Props) => {
    return (
        <div>
            <h1 className='basis-3/5 font-monsterrat text-lg md:text-3xl sm:text-2xl font-bold'>
                {children}
            </h1>
        </div>
    )
}

export default HeadText