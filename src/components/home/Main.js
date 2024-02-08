import React from 'react'
import Sidemenu from './Sidemenu'
import Dashboard from './Dashboard'
import SliderMenu from './SliderMenu'
import About from './About'
import WhyStudyHall from './WhyStudyHall'
import FeatureArea from './FeatureArea'
import Category from './Category'
import ChooseUs from './ChooseUs'
import ContactUs from './ContactUs'
import BlogArea from './BlogArea'
import SocialMedia from './SocialMedia'
// import Footer from './Footer'


export default function Main() {
  return (
    <div>
        <Dashboard/>
        <Sidemenu/>
        <SliderMenu/>        
        <About/>
        <WhyStudyHall/>
        <FeatureArea/>
        <Category/>
        <ChooseUs/>
        <ContactUs/>
        <BlogArea/>
        <SocialMedia/>
        
    </div>
  )
}
