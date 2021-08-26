import React, { forwardRef, useRef } from 'react'

import {Gallery} from 'components/Gallery'
import {Hero} from 'components/Hero'


export const Start = forwardRef(({onDownClick}, ref)  => {
    const galleryRef2 = useRef()
    

    return(<>
        <Hero onDownClick={onDownClick}/>
        <Gallery ref={ref}/>
        </>
    )
})