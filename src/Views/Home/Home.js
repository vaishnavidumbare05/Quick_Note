import React from 'react'
import "./Home.css"
import imgSecure from "./secure.png"
import imgHeart from "./heart.png"
import imgBrain from "./brain.png"
import FeatureCard from '../../Components/Feature Card/FeatureCard'
import {Link} from "react-router-dom"

const Features = [
    {
      featureImg:imgSecure,
      featureText:"Notes will be saved securely in your browser's local storage."
    },
    {
       featureImg:imgHeart,
      featureText:"Loved by 100+ users. Feedback are always welcome!"
    },
    {
        featureImg:imgBrain,
        featureText:" Use your brain for thinking not for remembering things."
       
    }
]

function Home() {
  return (
    <div>
        <h1 className='text-center  text-primary app-title' >📓Quick Note</h1>
        <p className='text-center text-grey'> Your Pocket friendly note taking app.
            {" "}<del>Never forget anything again</del>{" "}
           <span className='text-black highlight tagline-highlight'>Remember everything!🧠</span>

        </p>
        <div>
            <h2 className='text-center feature-title' >Why you should use quick Note?</h2>
        <div className='feature-container'>

            {
                Features.map((feature)=>{
                    const {featureImg,featureText}=feature;
                    return(
                        <FeatureCard
                        featureImg={featureImg}
                        featureText={featureText}
                        />
                    );
                })
            }
            {/* <FeatureCard
            featureImg={imgSecure}
            featureText="Notes will be saved securely in your browser's local storage."
            />

            <FeatureCard
            featureImg={imgHeart}
            featureText="Use your brain for thinking not for remembering things."
            />

            <FeatureCard
            featureImg={imgBrain}
            featureText="Loved by 100+ users. Feedback are always welcome!"
            /> */}
            </div>
        </div>
        <div className='btn-container'>
            <Link to= "/add">
            <button className='btn btn-primary'>📝Add Notes</button>
            </Link>
            <Link to= "/show">
            <button className='btn btn-secondary'>📖Show Notes</button>
            </Link>
        </div>
    </div>
  )
}

export default Home