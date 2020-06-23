import React from "react"

const Footer = () => (
  <footer className="container">
    <span className="logo">Dantes</span>
    <div className="footerContainer">
      <div className="contactFooter">
        <h2 className="contactFooter__title">Contact Us</h2>
        <span className="contactFooter__body">0131 441 7427</span>
        <span className="contactFooter__body">sandro@dantesrestaurant.co.uk</span>
        <span className="contactFooter__body">fabio@dantesrestaurant.co.uk</span>
      </div>
      <div className="hoursFooter">
        <h2 className="hoursFooter__title">Opening Hours</h2>
        <div className="table">
          <ul className="table__days">
            <li>Mon</li>
            <li>Tue-Thu</li>
            <li>Fri-Sat</li>
            <li>Sun</li>
          </ul>
          <ul className="table__hours">
            <li>Closed</li>
            <li>17:30 - 21:00</li>
            <li>12:00 - 14:00 <br/> 17:30 - 21:00</li>
            <li>12:00 - 14:00 <br/> 17:00 - 20:00</li>
          </ul>
        </div>
      </div>
    </div>
    <span><a href="https://www.dantesrestaurant.co.uk/admin/">Admin</a></span>
    <span>website by <a href="https://www.crollacreations.com/">crollacreations</a></span>
  </footer>
)

export default Footer
