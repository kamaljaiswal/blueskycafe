import React from "react"

import LeafletMap from "../components/leafletmap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="contactPage">
        <section className="contactContainer">
          <div className="contact">
            <h2 className="contact__title">Contact Us</h2>
            <span className="contact__body">+91-3322522958</span>
            {/* <span className="contactFooter__body">
              sandro@dantesrestaurant.co.uk
            </span>
            <span className="contactFooter__body">
              fabio@dantesrestaurant.co.uk
            </span> */}
          </div>
          <div className="table">
            <h2 className="table__title">Opening Hours</h2>
            <ul className="table__days">
              <li>Mon-Fri</li>
              <li>Sat-Sun</li>
            </ul>
            <ul className="table__hours">
              <li>08:00 - 22:00</li>
              <li>08:00 - 22:00</li>
            </ul>
          </div>
        </section>
        <section className="contactMap">
          {typeof window !== "undefined" && <LeafletMap />}
        </section>
      </div>
    </Layout>
  )
}

export default ContactPage
