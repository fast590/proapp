import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/pages/homepage.css'
import BrandImage from '../../assets/images/homepage/images.jpg'

function Homepage() {
    return (
        <div className = "main">
            <h2 className = "title">
                <Link to = "/products">
                New Brand Store
                </Link>
            </h2>
            <div className = "section">
                <div className = "image">
                    <img src={BrandImage} alt="home brand" width = "100%"/>
                </div>
            </div>
        </div>
    )
}

export default Homepage
