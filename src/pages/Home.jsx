import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Logos from '../components/Logo'
function Home() {
    return (
        <div>
            <Hero />
            <Logos />
            <Features />
            <CTA />
        </div>
    )
}

export default Home