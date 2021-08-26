import React, { useRef } from 'react'

import {Gallery} from 'components/Gallery'
import {Hero} from 'components/Hero'


export const Start = ()  => {
    const galleryRef = useRef()
    const handleDownClick = () => {
        galleryRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return(<>
        <Hero onDownClick={handleDownClick}/>
        <Gallery ref={galleryRef}/>
        </>
    )
}