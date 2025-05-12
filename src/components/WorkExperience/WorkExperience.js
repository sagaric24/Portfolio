import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import { 
  FaAmazon, 
  FaShoppingCart, 
  FaGraduationCap, 
  FaLaptopCode,
  FaMapMarkedAlt,
  FaCompass
} from "react-icons/fa";
import { SiPython, SiTableau } from "react-icons/si";

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
            {/* Map Path */}
            <div className="map-path"></div>

            {/* Map Compass */}
            <div className="map-compass">
              <FaCompass />
            </div>

            {/* Education Markers */}
            <div className="education-markers">
              <div className="education-marker" id="sbu">
                <div className="marker-icon education">
                  <FaGraduationCap />
                </div>
                <div className="marker-content">
                  <h3>Stony Brook University</h3>
                  <p>Masters of Science in Data Science</p>
                  <p className="duration">08/2023 - 05/2025</p>
                  <p className="location">Stony Brook, NY, USA</p>
                </div>
              </div>

              <div className="education-marker" id="drait">
                <div className="marker-icon education">
                  <FaGraduationCap />
                </div>
                <div className="marker-content">
                  <h3>Dr. Ambedkar Institute of Technology</h3>
                  <p>Bachelor of Engineering in Computer Science</p>
                  <p className="duration">08/2016 - 09/2020</p>
                  <p className="location">Bangalore, KA, IN</p>
                </div>
              </div>
            </div>

            {/* Experience Cards */}
            <div className="experience-markers">
              <ExperienceCard
                id="amazon-current"
                company="Amazon Grocery / Whole Foods Market"
                title="Business Intelligence Engineer (Co-op)"
                duration="08/2024 - Present"
                location="Stony Brook, NY, USA"
                icon={<FaAmazon />}
                description={[
                  "Engineered ELT/ETL pipelines using AWS Glue, Redshift, IAM, S3, and dbt to process 30M+ records weekly, enabling integrations and data ingestion with 30+ third-party media sources and improving BI efficiency.",
                  "Led a data compliance initiative certifying 1,000+ Sandbox tables under OD3 and Certificate Attestation protocols, enhancing privacy workflows across 3 departments.",
                  "Automated legacy Excel reports through SQL and Redshift Spectrum, reducing data turnaround from 2 days to a few hours and strengthening visibility into key e-commerce metrics.",
                  "Designed and deployed QuickSight dashboards to monitor fulfillment KPIs such as Inventory Not Found (INF), cutting INF rates from 3.2% to 1.7% after launching a new fulfillment center."
                ]}
              />

              <ExperienceCard
                id="amazon-intern"
                company="Amazon Grocery / Whole Foods Market"
                title="Business Intelligence Engineer Intern"
                duration="06/2024 - 08/2024"
                location="Austin, TX, USA"
                icon={<FaAmazon />}
                description={[
                  "Developed a centralized SQL Query Management System using Python, AWS Lambda, SQS, and CloudWatch to auto-update 350+ WBR queries, reducing latency by 85%.",
                  "Embedded SageMaker forecast data models into QuickSight dashboards for SKU-level assortment planning, improving stock accuracy across 500+ stores and 30+ categories."
                ]}
              />

              <ExperienceCard
                id="myntra"
                company="Myntra / Walmart"
                title="Data Scientist / Data Analyst"
                subtitle="Customer Service - Experience Team"
                duration="12/2021 - 07/2023"
                location="Bangalore, KA, IN"
                icon={<FaShoppingCart />}
                description={[
                  "Created an NLP sentiment analysis engine with BERT and AWS Comprehend, improving real-time feedback handling and lifting NPS by 3 points.",
                  "Drove experimentation using A/B testing and causal inference in an Agile environment, delivering $250K annual savings through optimized SMS strategies in collaboration with cross-functional teams across CRM, finance, and marketing.",
                  "Performed EDA and K-means clustering to segment customers, enabling personalized targeting and raising new user conversion from 4.3% to 4.5% and identifying anomalous activity patterns, which contributed to early fraud detection.",
                  "Delivered interactive Power BI dashboards tracking service KPIs, which led to a 20% drop in unresolved issues and enhanced vendor performance across the marketplace."
                ]}
              />

              <ExperienceCard
                id="rapido"
                company="Rapido"
                title="Data Analyst"
                subtitle="Customer Retention - Acquisition Team"
                duration="12/2020 - 12/2021"
                location="Bangalore, KA, IN"
                icon={<FaMapMarkedAlt />}
                description={[
                  "Built forecasting models and dynamic pricing engines using XGBoost, leading to a 5% increase in ride retention and higher customer engagement.",
                  "Developed real-time Tableau dashboards for city-level demand/supply tracking, reducing driver idle time by 10% through data-driven incentive tuning."
                ]}
              />
            </div>

            {/* Skill Islands */}
            <div className="skill-islands">
              <div className="skill-island" id="data-engineering">
                <div className="island-icon">
                  <FaLaptopCode />
                </div>
                <h4>Data Engineering</h4>
                <p>AWS, ETL/ELT, SQL</p>
              </div>
              <div className="skill-island" id="data-science">
                <div className="island-icon">
                  <SiPython />
                </div>
                <h4>Data Science</h4>
                <p>ML, NLP, Statistics</p>
              </div>
              <div className="skill-island" id="visualization">
                <div className="island-icon">
                  <SiTableau />
                </div>
                <h4>Visualization</h4>
                <p>Dashboards, Reporting</p>
              </div>
            </div>

            {/* Treasure Chest */}
            <div className="treasure-chest">
              <h3>Professional Treasures</h3>
              <ul>
                <li>BI Systems Architecture</li>
                <li>ML Model Deployment</li>
                <li>Data Compliance</li>
                <li>ETL Pipeline Design</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default WorkExperience;