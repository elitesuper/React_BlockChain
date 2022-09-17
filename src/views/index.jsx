import React from 'react'
import AppHome from './AppHome'
import AppProfile from './AppProfile'

const routes = [
    {path:'/', component: <AppHome />},
    {path:'/profile', component: <AppProfile />}
]

export default routes