import React from "react"

import LeafletMap from '../components/leafletmap'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {

  return (
  <Layout>
    <SEO title="Contact"/>
    <div className="contactPage">
    <section className="contactContainer">
      <div className="contact">
        <h2 className="contact__title">Contact Us</h2>
        <span className="contact__body">0131 441 7427</span>
        <span className="contactFooter__body">sandro@dantesrestaurant.co.uk</span>
        <span className="contactFooter__body">fabio@dantesrestaurant.co.uk</span>
      </div>
      <div className="table">
        <h2 className="table__title">Opening Hours</h2>
        <ul className="table__days">
          <li>Mon</li>
          <li>Tue-Thu</li>
          <li>Fri-Sat</li>
          <li>Sun</li>
        </ul>
        <ul className="table__hours">
          <li>Closed</li>
          <li>17:30 - 22:00</li>
          <li>12:00 - 14:00 <br/> 17:30 - 21:30</li>
          <li>12:00 - 14:00 <br/> 17:00 - 20:15</li>
        </ul>
      </div>
    </section>
    <section className="contactMap">
      {typeof window !== 'undefined' &&
        <LeafletMap/>
      }
    </section>
    </div>
  </Layout>
  )
}

export default ContactPage