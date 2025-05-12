import React from "react";
import { Container } from "react-bootstrap";
import { FaMapPin, FaCompass, FaLock, FaArrowUp } from "react-icons/fa";
import Particle from "../Particle";

// Import images - you'll need to add these to your Assets folder
import drAmbedkarLogo from "../../Assets/dr-ambedkar-logo.png";
import iitGuwahatiLogo from "../../Assets/iit-guwahati-logo.png";
import rapidoLogo from "../../Assets/rapido-logo.png";
import myntraLogo from "../../Assets/myntra-logo.png";
import stonyBrookLogo from "../../Assets/stonybrook-logo.png";
import amazonLogo from "../../Assets/amazon-logo.png";
import divHacksLogo from "../../Assets/divhacks-logo.png";
import lecturerLogo from "../../Assets/lecturer-logo.png";

function WorkExperience() {
  return (
    <Container fluid className="experience-section wanted-poster">
      <Particle />
      <Container>
        <h1 className="bounty-name">
          <span className="first-bracket">{"{"}</span>
          Journey Map
          <span className="last-bracket">{"}"}</span>
        </h1>
        <p className="experience-description normal-font">
          Chart of my professional voyage through the high seas of data science, tracking the treasures
          I've discovered and skills I've mastered along the way.
        </p>

        <div className="treasure-map-container">
          {/* Treasure Map Background */}
          <div className="treasure-map">
            {/* Scroll Indicator (at top) */}
            <div className="scroll-indicator">
              <span>Begin the Journey</span>
              <FaArrowUp className="scroll-arrow" />
            </div>
            
            {/* Treasure Chest at top */}
            

            {/* S-Shaped Map Path */}
            <div className="map-path"></div>
            
            {/* Map Compass */}
            <div className="map-compass">
              <FaCompass />
            </div>

            {/* Journey Points in REVERSED Order with Icons ON the S-curve line */}
            
            {/* 9. What's Next - FUTURE (Top) */}
            <div className="journey-marker achievement-marker future">
              <div className="marker-icon">
                <FaLock />
              </div>
              <div className="marker-content achievement-content">
                <h3>Unlocking Next Level Soon</h3>
                <p className="normal-font">The adventure continues! Ready to conquer new data challenges and unlock achievements in the next chapter of my journey.</p>
              </div>
            </div>
            
            {/* 8. Hackathon Win (Left) */}
            <div className="journey-marker achievement-marker hackathon">
              <div className="marker-icon">
                <img src={divHacksLogo} alt="Div Hacks" className="icon-image" />
              </div>
              <div className="marker-content achievement-content">
                <h3>First Place in Div Hacks</h3>
                <p className="normal-font">Won first place in the Division Hacks competition with an innovative data solution that leveraged machine learning to predict customer behavior patterns.</p>
              </div>
            </div>
            
            {/* 7. Amazon (Right) */}
            <div className="journey-marker experience-marker amazon">
              <div className="marker-icon">
                <img src={amazonLogo} alt="Amazon" className="icon-image" />
              </div>
              <div className="marker-content">
                <div className="card-header">
                  <h3>Whole Foods Market / Amazon Grocery</h3>
                  <h4>Business Intelligence Engineer Intern</h4>
                </div>
                <div className="card-body">
                  <div className="card-metadata">
                    <p className="duration">
                      <strong>06/2024 - Present</strong>
                    </p>
                    <p className="location">
                      <FaMapPin /> New York, NY, USA
                    </p>
                  </div>
                  <div className="experience-details">
                    <ul>
                      <li className="normal-font">Built scalable ELT/ETL pipelines using AWS Glue, IAM, S3, Redshift, and dbt to ingest over 30M records weekly, enabling marketing team to aggregate data from 30+ third-party media sources.</li>
                      <li className="normal-font">Spearheaded a data compliance initiative to optimize and certify 1000+ Sandbox tables containing customer-sensitive information under Amazon's Certificate Attestation and OD3 deletion protocols.</li>
                      <li className="normal-font">Replaced Excel-based reporting with automated Redshift and SQL-based data marts, accelerating time-to-insight from 2 business days to a few hours.</li>
                      <li className="normal-font">Built a centralized SQL Query Management System using Python, AWS Lambda, SQS, and CloudWatch to automatically detect and remediate deprecated schema elements across 350+ queries.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 6. Stony Brook (Left) */}
            <div className="journey-marker education-marker stony">
              <div className="marker-icon">
                <img src={stonyBrookLogo} alt="Stony Brook University" className="icon-image" />
              </div>
              <div className="marker-content">
                <h3>Stony Brook University</h3>
                <p>Masters of Science in Data Science</p>
                <p className="duration">08/2023 - 05/2025</p>
                <p className="location">
                  <FaMapPin /> Stony Brook, NY, USA
                </p>
                <div className="education-details">
                  <p className="normal-font">Relevant Coursework: Big Data Analytics, Probability & Statistics, SAS and R Programming, Statistical Learning, Data Visualization, Machine Learning</p>
                </div>
              </div>
            </div>
            
            {/* 5. Guest Lecturer Achievement (Right) */}
            <div className="journey-marker achievement-marker lecturer">
              <div className="marker-icon">
                <img src={lecturerLogo} alt="Guest Lecturer" className="icon-image" />
              </div>
              <div className="marker-content achievement-content">
                <h3>Guest Lecturer</h3>
                <p className="normal-font">Invited as a guest lecturer to share data science knowledge and industry insights with students at local bootcamps, focusing on real-world applications of machine learning and data visualization techniques.</p>
              </div>
            </div>
            
            {/* 4. Myntra (Left) */}
            <div className="journey-marker experience-marker myntra">
              <div className="marker-icon">
                <img src={myntraLogo} alt="Myntra" className="icon-image" />
              </div>
              <div className="marker-content">
                <div className="card-header">
                  <h3>Myntra / Flipkart</h3>
                  <h4>Data Analyst / Data Scientist</h4>
                  <h5>Customer Experience Team</h5>
                </div>
                <div className="card-body">
                  <div className="card-metadata">
                    <p className="duration">
                      <strong>12/2021 - 07/2023</strong>
                    </p>
                    <p className="location">
                      <FaMapPin /> Bangalore, KA, IN
                    </p>
                  </div>
                  <div className="experience-details">
                    <ul>
                      <li className="normal-font">Created an NLP engine using BERT and AWS Comprehend to extract sentiment from customer support tickets, contributing to a 3-point uplift in Net Promoter Score (NPS).</li>
                      <li className="normal-font">Designed experimentation frameworks using A/B testing and causal inference to optimize communication strategies, resulting in $250K annual cost savings.</li>
                      <li className="normal-font">Led EDA and customer segmentation using K-means clustering to identify high-risk and high-value cohorts, helping increase new user conversion rates from 4.3% to 4.5%.</li>
                      <li className="normal-font">Built real-time service dashboards in Power BI to track KPIs, contributing to a 20% drop in unresolved issues and driving quality improvements.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 3. Rapido (Right) */}
            <div className="journey-marker experience-marker rapido">
              <div className="marker-icon">
                <img src={rapidoLogo} alt="Rapido" className="icon-image" />
              </div>
              <div className="marker-content">
                <div className="card-header">
                  <h3>Rapido</h3>
                  <h4>Associate Data Analyst</h4>
                  <h5>Customer Retention Team</h5>
                </div>
                <div className="card-body">
                  <div className="card-metadata">
                    <p className="duration">
                      <strong>12/2020 - 12/2021</strong>
                    </p>
                    <p className="location">
                      <FaMapPin /> Bangalore, KA, IN
                    </p>
                  </div>
                  <div className="experience-details">
                    <ul>
                      <li className="normal-font">Designed time-series forecasting models and implemented dynamic pricing strategies using XGBoost to improve customer engagement, resulting in a 5% increase in ride retention and higher per-user revenue.</li>
                      <li className="normal-font">Developed real-time Tableau dashboards for monitoring city-level supply-demand dynamics, enabling the operations team to proactively manage driver availability and reduce idle time by 10% through data-informed incentives.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2. IIT Guwahati Certificate (Left) */}
            <div className="journey-marker education-marker cert">
              <div className="marker-icon">
                <img src={iitGuwahatiLogo} alt="IIT Guwahati" className="icon-image" />
              </div>
              <div className="marker-content">
                <h3>IIT Guwahati</h3>
                <p>PG Certificate in Data Science</p>
                <p className="duration">2020</p>
                <p className="location">
                  <FaMapPin /> Guwahati, IN
                </p>
              </div>
            </div>
            
            {/* 1. Dr. Ambedkar Institute (Bottom) */}
            <div className="journey-marker education-marker start">
              <div className="marker-icon">
                <img src={drAmbedkarLogo} alt="Dr. Ambedkar Institute" className="icon-image" />
              </div>
              <div className="marker-content">
                <h3>Dr. Ambedkar Institute of Technology</h3>
                <p>Bachelor of Engineering in Computer Science</p>
                <p className="duration">08/2016 - 09/2020</p>
                <p className="location">
                  <FaMapPin /> Bangalore, KA, IN
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default WorkExperience;