import React from 'react'

export default function Benefit() {
    const benefits = [
        "Efficient job matching for faster hiring decisions.",
        "Access to a diverse pool of candidates.",
        "User-friendly interface for a smooth experience."
    ]
    return (
        <section>
            <p className='text-center font-medium mt-20'>Benefits</p>
            <div className='grid grid-cols-1 md:grid-cols-2 px-10'>
                <div className='lg:p-10 p-5' >
                    <p className='md:text-2xl font-semibold lg:text-3xl text-xl'>Unlock New Opportunities: Discover the Benefits of Our Job Portal App</p>
                    <p className='text-sm mt-4'>
                        Our Job Portal App streamlines the hiring process for recruiters while empowering candidates to find their ideal jobs. Experience a seamless connection between talent and opportunity, tailored to meet your needs.
                    </p>
                    <ul>
                        {benefits.map((benefit, index) => (
                            <li key={index} className='mt-4 text-sm flex flex-row items-center gap-2' >
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.2981 5.24048L14.2048 5.07381C14.0844 4.87227 13.9146 4.70477 13.7115 4.58715L9.23815 2.00715C9.03561 1.88965 8.80568 1.82756 8.57148 1.82715H8.37815C8.14395 1.82756 7.91401 1.88965 7.71148 2.00715L3.23815 4.59381C3.03613 4.71065 2.86832 4.87846 2.75148 5.08048L2.65815 5.24715C2.54065 5.44971 2.47856 5.67964 2.47815 5.91381V11.0805C2.47856 11.3147 2.54065 11.5446 2.65815 11.7471L2.75148 11.9138C2.87134 12.1135 3.03848 12.2806 3.23815 12.4005L7.71815 14.9805C7.91968 15.1004 8.15028 15.1627 8.38481 15.1605H8.57148C8.80568 15.1601 9.03561 15.098 9.23815 14.9805L13.7115 12.3938C13.9155 12.2796 14.0839 12.1111 14.1981 11.9071L14.2981 11.7405C14.4142 11.5373 14.4762 11.3078 14.4781 11.0738V5.90715C14.4777 5.67297 14.4157 5.44304 14.2981 5.24048ZM8.37815 3.16048H8.57148L12.4781 5.41381L8.47815 7.72048L4.47815 5.41381L8.37815 3.16048ZM9.14481 13.4938L13.0448 11.2405L13.1448 11.0738V6.56715L9.14481 8.88048V13.4938Z" fill="black" />
                                </svg>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
