import React from 'react'
import AppAbout from '../components/home/AppAbout'
import AppAlpha from '../components/home/AppAlpha'
import AppCollection from '../components/home/AppCollection'
import AppFeature from '../components/home/AppFeature'
import AppGlassesMinting from '../components/home/AppGlassesMinting'
import AppHero from '../components/home/AppHero'
import AppTopCreator from '../components/home/AppTopCreator'
import AppTopnfts from '../components/home/AppTopnfts'
import AppTrending from '../components/home/AppTrending'
import AppWork from '../components/home/AppWork'
import AppSignup from '../components/home/AppSignup'

function AppHome() {
    return (
        <div className="main">
            <AppHero />
            <AppTrending/>
            <AppTopCreator/>
            <AppCollection/>
            <AppTopnfts/>
            <AppGlassesMinting/>
            <AppAlpha/>
            <AppSignup/>
        </div>
    )
}

export default AppHome
