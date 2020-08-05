import React from "react"

const Footer = () => (
  <footer className="container">
    <span className="logo">BlueSkyCafe</span>
    <div className="footerContainer">
      <div className="contactFooter">
        <h2 className="contactFooter__title">Contact Us</h2>
        <span className="contactFooter__body">+91-3322522958</span>
        {/* <span className="contactFooter__body">
          sandro@dantesrestaurant.co.uk
        </span>
        <span className="contactFooter__body">
          fabio@dantesrestaurant.co.uk
        </span> */}
      </div>
      <div className="hoursFooter">
        <h2 className="hoursFooter__title">Opening Hours</h2>
        <div className="table">
          <ul className="table__days">
            <li>Mon-Fri</li>
            <li>Sat-Sun</li>
          </ul>
          <ul className="table__hours">
            <li>08:00 - 22:00</li>
            <li>08:00 - 22:00</li>
          </ul>
        </div>
      </div>
    </div>
    {/* <span>
      <a href="https://theblueskycafe.in">Cafe</a>
    </span>
    <span>
      website by <a href="https://theblueskycafe.in/">Cafe</a>
    </span> */}
  </footer>
)

export default Footer
