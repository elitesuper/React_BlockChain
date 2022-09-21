import React from 'react'
import AppHome from './AppHome'
import AppProfile from './AppProfile'
import AppDetail from './AppDetail'

const routes = [
    {path:'/', component: <AppHome />},
    {path:'/profile', component: <AppProfile />},
    {path:'/detail', component:<AppDetail />}
]

export default routes