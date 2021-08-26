import React, { forwardRef } from 'react'

import {Gallery} from 'components/Gallery'
import {Hero} from 'components/Hero'


export const Start = forwardRef(({onDownClick}, ref)  => {    

    return(<>
        <Hero onDownClick={onDownClick}/>
        <Gallery ref={ref}/>
        </>
    )
})