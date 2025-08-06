import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-end Developer Intern</h4>
                <h5>Shubh Electricals Engineering</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Here I developed the Frontend design for an E-Commerce site.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Leader and Database Handler</h4>
                <h5>LJ Innovation Village 2024</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            I worked as a Database Handler and also 
            managed a team of 6 developers creating
            a website named "Home Clinic".
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Leader & Full Stack Developer</h4>
                <h5>LJ Innovation Village 2025</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            I worked as a Full Stack Developer and also as 
            a team leader where we built an Online Auction Platform
            named "SkyBid".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
