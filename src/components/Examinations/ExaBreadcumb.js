import React from 'react'
import { Link } from 'react-router-dom'

export default function ExaBreadcumb() {
  return (
    <div className="breadcumb-wrapper" style={{ backgroundImage:`url(assets/img/breadcumb/breadcumb-bg.jpg)` }} >
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Examinations</h1>
        <p className="breadcumb-text">Montessori Is A Nurturing And Holistic Approach To Learning</p>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li ><Link to="/">Home</Link></li>
            <li>Examinations</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
