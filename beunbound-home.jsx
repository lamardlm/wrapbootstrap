import React from 'react'
import BeUnboundHero from './sections/heros/beUnboundHero'
import Manifesto from './sections/manifesto/manifesto'
import BeUnboundPillars from './sections/features/beUnboundPillars'
import CoachingCategories from './sections/features/coachingCategories'
import BeUnboundProcess from './sections/process/beUnboundProcess'
import BeUnboundTextAnimation from './sections/textAnimations/beUnboundTextAnimation'

const BeUnboundHome = () => {
    return (
        <div className="beunbound-home">
            <BeUnboundHero />
            <Manifesto />
            <BeUnboundTextAnimation />
            <BeUnboundPillars />
            <CoachingCategories />
            <BeUnboundProcess />
        </div>
    )
}

export default BeUnboundHome
