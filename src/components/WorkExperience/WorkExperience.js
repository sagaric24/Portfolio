import React from "react";
import { Container } from "react-bootstrap";
import { FaMapPin, FaCompass, FaLock } from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
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
import wiseInstructorLogo from "../../Assets/stonybrook-logo.png"; // Reusing Stony Brook logo for WISE
import mapBackgroundImage from "../../Assets/map-background.png";

function WorkExperience() {
  const normalFontStyle = {
    fontFamily: "'IM Fell English SC', serif",
    fontSize: "0.95rem"
  };

  return (
    <Container fluid className="experience-section wanted-poster">
      <Particle />
      <Container>
        <h1 className="bounty-name">
          Journey Map 📜
        </h1>
        <p className="experience-description normal-font" style={normalFontStyle}>
          Chart of my professional voyage through the high seas of data science, tracking the treasures
          I've discovered and skills I've mastered along the way.
        </p>

        <div className="treasure-map-container">
          {/* Treasure Map Background - Apply background image directly to this element */}
          <div 
            className="treasure-map"
            style={{
              backgroundImage: `url(${mapBackgroundImage}), url("https://www.transparenttextures.com/patterns/old-paper.png")`
            }}
          >
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
                <p className="normal-font" style={normalFontStyle}>The adventure continues! Ready to conquer new data challenges and unlock achievements in the next chapter of my journey.</p>
              </div>
            </div>
            
            {/* 8. Hackathon Win (Left) */}
            <div className="journey-marker achievement-marker hackathon">
              <div className="marker-icon">
                <img src={divHacksLogo} alt="Div Hacks" className="icon-image" />
              </div>
              <div className="marker-content achievement-content">
                <h3>First Place at Div Hacks 2024</h3>
                <p className="normal-font" style={normalFontStyle}>Won first place at Columbia University's competitive 24-hour hackathon with an innovative AR stroke rehabilitation solution.</p>
                <p className="normal-font" style={normalFontStyle}>Created interactive AR games using Snap Spectacles that transform stroke rehabilitation therapy, making it engaging and effective for patients.</p>
                <p className="normal-font" style={normalFontStyle}>Awards: Best Overall Hack (1st), Best Health Project (1st), Best Use of Snap AR (3rd), Best Use of Google NotebookLM (5th).</p>
                <p className="normal-font" style={normalFontStyle}>Addressed patient engagement challenges in rehabilitation through immersive technology, demonstrating how AR can improve healthcare outcomes.</p>
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
                    <p className="normal-font" style={normalFontStyle}><strong>Overview:</strong> Within Amazon's Whole Foods Market/Amazon Grocery division, the business intelligence team supports data-driven decision making for marketing, operations, and strategic planning. The team focuses on building scalable data infrastructure and analytics solutions to leverage Amazon's vast data ecosystem.</p>
                    <p className="normal-font" style={normalFontStyle}><strong>My Role:</strong> As Business Intelligence Engineer Intern, I design and implement data pipelines, compliance frameworks, and automated reporting systems. I collaborate with cross-functional teams to transform business requirements into technical solutions and ensure data quality and governance.</p>
                    <p className="normal-font" style={normalFontStyle}><strong>Skills:</strong> Data pipeline architecture (ETL/ELT), AWS services (Glue, IAM, S3, Redshift, Lambda, SQS, CloudWatch), Data modeling and SQL optimization, Data transformation tools (dbt), Python development for automation, Data compliance and governance frameworks</p>
                    <p className="normal-font" style={normalFontStyle}><strong>Impacts:</strong> Built AWS ETL pipelines ingesting 30M+ weekly records from 30+ media sources and optimized 1000+ Sandbox tables under Amazon's compliance protocols. Automated SQL-based data marts, reducing reporting time from days to hours, and created a Python system to detect and fix deprecated elements across 350+ queries.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* New position: WISE Project Instructor at Stony Brook */}
            <div className="journey-marker experience-marker wise-instructor">
              <div className="marker-icon">
                <img src={wiseInstructorLogo} alt="WISE Instructor" className="icon-image" />
              </div>
              <div className="marker-content">
                <div className="card-header">
                  <h3>Women in Science and Engineering (WISE)</h3>
                  <h4>Project Instructor</h4>
                </div>
                <div className="card-body">
                  <div className="card-metadata">
                    <p className="duration">
                      <strong>09/2023 - 11/2023</strong>
                    </p>
                    <p className="location">
                      <FaMapPin /> Stony Brook, NY, USA
                    </p>
                  </div>
                  <div className="experience-details">
                    <p className="normal-font" style={normalFontStyle}>Led a team of undergraduates in a machine learning-focused mini-project for course WSE380, mentoring on algorithm application and project execution.</p>
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
                  <p className="normal-font" style={normalFontStyle}><strong>Relevant Courses:</strong> Big Data Analytics, Probability & Statistics, SAS and R Programming, Statistical Learning, Data Visualization, Machine Learning, Natural Language Processing, Deep Learning, Data Mining, Database Systems, Cloud Computing</p>
                </div>
              </div>
            </div>
            
            {/* 5. Guest Lecturer Achievement (Right) - Updated with more detail */}
            <div className="journey-marker achievement-marker lecturer">
              <div className="marker-icon">
                <img src={lecturerLogo} alt="Guest Lecturer" className="icon-image" />
              </div>
              <div className="marker-content achievement-content">
                <h3>Guest Lecturer</h3>
                <p className="normal-font" style={normalFontStyle}>Served as a Guest Lecturer at One Week National Level Faculty Development Program (FDP) on "Data Analysis And Artificial Intelligence For Mechanical Engineers" conducted by Nitte Meenakshi Institute of Technology, Bangalore, in June 2021.</p>
                <p className="normal-font" style={normalFontStyle}>Shared data science knowledge and industry insights, focusing on real-world applications of machine learning and data visualization techniques.</p>
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
                    <p className="normal-font" style={normalFontStyle}><strong>Overview:</strong> Myntra is India's leading fashion e-commerce platform and subsidiary of Flipkart (owned by Walmart). The Customer Experience team was responsible for driving improvements across the customer journey, focusing on issue resolution, communication optimization, and customer satisfaction metrics.</p>
                    <p className="normal-font" style={normalFontStyle}><strong>My Role:</strong> As Data Analyst/Data Scientist on the Customer Experience team, I led analytical projects to understand customer sentiment and improve issue resolution processes. I developed ML models to categorize customer issues, predict satisfaction, and optimize communication strategies.</p>
                    <p className="normal-font" style={normalFontStyle}><strong>Skills:</strong> Natural language processing (BERT, Transformers), Cloud services (AWS Comprehend, S3, Lambda), Clustering and segmentation (K-means, DBSCAN), Causal inference and A/B testing frameworks, Reporting automation (Power BI, SQL), Python (Pandas, NumPy, Scikit-learn, PyTorch)</p>
                    <p className="normal-font" style={normalFontStyle}><strong>Impacts:</strong> Built an NLP engine with BERT that improved NPS by 3 points, while implementing A/B testing frameworks that saved $250K annually. Applied K-means clustering techniques that increased conversion rates from 4.3% to 4.5%, and created Power BI dashboards that reduced unresolved customer issues by 20%.</p>
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
                    <p className="normal-font" style={normalFontStyle}><strong>Overview:</strong> Rapido is India's largest bike taxi platform providing affordable, convenient short-distance mobility solutions. As the company scaled operations across 100+ cities, the customer retention team focused on maximizing customer lifetime value through data-driven strategies.</p>
                    <p className="normal-font" style={normalFontStyle}><strong>My Role:</strong> As Associate Data Analyst on the Customer Retention Team, I developed analytical models to identify ride patterns and predict customer churn. I collaborated with product and operations teams to translate insights into actionable strategies for improving rider retention rates.</p>
                    <p className="normal-font" style={normalFontStyle}><strong>Skills:</strong> Time-series forecasting (ARIMA, Prophet), Predictive modeling (XGBoost, Random Forest), Dashboard development (Tableau, SQL), Python (Pandas, Scikit-learn, Statsmodels), Pricing optimization algorithms, A/B testing and experiment design</p>
                    <p className="normal-font" style={normalFontStyle}><strong>Impacts:</strong> Developed XGBoost pricing models that increased ride retention by 5% and created Tableau dashboards that reduced driver idle time by 10%. Implemented customer segmentation models improving targeting precision by 15%, while building churn prediction models that achieved 78% accuracy in identifying at-risk users.</p>
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
                <div className="education-details">
                  <p className="normal-font" style={normalFontStyle}><strong>Relevant Courses:</strong> Data Structures and Algorithms, Computer Networks, Operating Systems, Web Development, Programming Languages (Java, C++, Python), Computer Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default WorkExperience;