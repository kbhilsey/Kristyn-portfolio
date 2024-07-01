// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  CssBaseline,
  Box,
  Divider
}
from '@mui/material';
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const technicalSkills = [
  {
    category: 'Test Management Tools',
    skills: ["Jira", "TestRail"]
  },
  {
    category: 'Test Automation',
    skills: ["Playwright"]
  },
 // {
  //  category: 'Performance Testing Tools',
  //  skills: ["LoadRunner, jMeter, Blazemeter, k6, Artillery"]
 // },
  {
    category: 'API Testing Tools',
    skills: ["PostMan"]
  },
  { 
    category: 'Programming Languages',
    skills: ['Typescript, Python, SQL']
  },
  {
    category: 'Other',
    skills: ['Chrome DevTools, Browserstack']
  }
]
const jobSummaries = [
  {
    Position: "Software QA Engineer",
    Date: "February 2024–Present",
    company: 'Screenia',
    Location: "Hayward, CA",
    Bullets: [
      "Performing compatibility testing on a variety of devices and platforms to ensure a quality product ",
      "Testing a mobile app applying ADB, Android Studio and Xcode tools to collect log files",
      "Enhancing bug reporting and aiding developers in bug resolution using Chrome DevTools ",
      "Analyzing project documentation, release notes and other documentation to identify test scenarios",
      "Performing smoke and regression testing to inspect critical functionalities and system reliability",
      "Logging and tracking bugs via Jira, verifying fixes, and ensuring resolution through follow-up",
      "Collaborating with product team to ensure meeting deadlines and releasing a high-quality product"
    ]
  },
  {
    Position: "Managing Quality Engineer",
    Date: "April 2018–July 2020",
    company: 'QualiTest Group',
    Location: "Bridgewater, NJ",
    Bullets: [
      "On-site, hands-on consultant at client in Richmond, VA responsible for overall delivery of full software quality assurance lifecycle services as well as performing responsibilities of a QA Lead.",
      "Participated in all phases of quality assurance operations, including developing the overall test strategy for each given project, providing estimates to leadership, writing and executing test cases (ALM/UFT), managing KPIs, leading defect triage meetings, performing ALM Site Administration, and reporting progress to key stakeholders.",
      "Developed performance testing scripts with jMeter and executed them with BlazeMeter.",
      "Functional testing projects completed: data center migration testing for a major online retailer, delivery of automated regression suites in both Selenium and UFT, extensive integration testing of mainframe enterprise resource planning system, and end-2-end testing of several web-based, customer-facing order entry systems.",

    ]
  },
  {
    Position: "Sr. Software Test Engineer",
    Date: "May 2017–March 2018",
    company: 'Fiserv',
    Location: "Parsippany, NJ",
    Bullets: [
      "Designed and executed tests for native iOS and Android mobile banking applications, web services, and web applications.",
      "Led efforts to design regression test suite for high profile applications, which included writing automated tests in SilkTest, reviewing code of junior team members, and supervising completion of projects.",
    ]
  },
  {
    Position: "SAP Test Manager & Automation Engineer",
    Date: "May 2011 – May 2017 ",
    company: 'BASF Corporation',
    Location: "Florham Park, NJ",
    Bullets: [
      "Developed and executed automated tests to validate BASF’s most critical, end-to-end, global business processes using UFT and Worksoft Certify.",
      "Coordinated User Acceptance Testing for 15 business units and 12 service functions in North and Central America during quarterly SAP updates and regional IT projects.",
      "Ensured all test systems and tools were correctly configured and accessible by UAT testers",
      "Lead training sessions on topics such as test script creation, testing tool usage, and Quality Assurance best practices.",
    ]
  },
  {
    Position: "Programmer/SDET",
    Date: "May 2007 – May 2011",
    company: 'United Parcel Service, Inc.',
    Location: "Mahwah, NJ",
    Bullets: [
      "Served as internal consultant to testing teams by assisting them with finding opportunities for test automation and providing testing tool training, technical support, POC automation, and framework setup during their automation efforts.",
      "Designed and developed Performance Testing scripts and scenarios using LoadRunner",
      "Developed proprietary testing tools using Visual Basic and C# to enable the manual testing team to capture important system configuration information during test execution.",
      "Performed manual testing of UPS hardware and software systems used in package distribution centers and aboard delivery trucks.",
    ]
  },
]
function App() {
  return (
    <>
      <CssBaseline />
      <Navbar 
        mode="light"
        navbarLinks={["Profile", "About","Experience","Projects","Contact"]}
      />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Profile
          name="Kristyn Brown"
          role="Software QA Engineer"
          githubUrl="https://github.com/kbhilsey"
        />
        <About
          certifications={[
            ' ',
            'Currently Learning Python,',
            'Playwright and Automation'
          ]}
          education={{
            educationOrganization:"Careerist.com",
            degreee:"Software Testing and Quality Assurance Training Certificate",
            date:"February 2024"
          }}
          summary={"Collaborative, flexible, and business-focused Software Quality Specialist with a strong leadership background.  Detail-oriented with the ability to thoroughly analyze systems, identify risks, and formulate testing strategies to satisfy business requirements.  Proven track record of utilizing automation and prioritizing deliverables in order to eliminate test coverage gaps and meet aggressive deadlines while meticulously exercising the application under test."}
        />
        <Experience
          technicalSkills={technicalSkills}
          jobSummaries={jobSummaries}
        />
        <Projects
          projects={[
            {
              imgUrl:"/stu-image.png",
              projectName:"STU Premium",
              projectDescription: "Get a job in less than 30 days",
              linkCta: "Join Now",
              linkUrl: "https://www.skool.com/testerjobs/about"
            },
            {
              imgUrl:"/stu-image.png",
              projectName:"STU Standard",
              projectDescription: "Join the STU Community",
              linkCta: "Join Now",
              linkUrl: "https://www.skool.com/stu/about"
            },
            {
              imgUrl:"/stu-image.png",
              projectName:"STU Lite",
              projectDescription: "Join the Free STU Community",
              linkCta: "Join Now",
              linkUrl: "https://www.skool.com/testers/about"
            }
          ]}
        />
        <Divider/>
        <Contact
          email={"kbhilsey@gmail.com"}
          linkedInUrl={"https://www.linkedin.com/in/kristyn-brown-6b38b92b0"}
        />
        
      </Box>
    </>
  )
}

export default App
