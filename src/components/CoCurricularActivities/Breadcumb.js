import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcumb() {
  return (
    <div className="breadcumb-wrapper" style={{ backgroundImage:`url(assets/img/breadcumb/breadcumb-bg.jpg)` }} >
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Co-Curricular Activities</h1>
        <p className="breadcumb-text">Montessori Is A Nurturing And Holistic Approach To Learning</p>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li ><Link to="/">Home</Link></li>
            <li>Co-Curricular Activities</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
