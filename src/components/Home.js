import React from "react";

function Intro() {
  return (
    <div>
        <h1>Ryan Megli</h1>
        <p>Husband, Father, Software Developer, FinTech Enthusiast. 
            Experience in several programming languages including: PHP, JavaScript, C#, React, HTML, SQL, and more. </p>
    </div>
  );
}

function About() {
    return (
      <div>
          <h2>About Me</h2>
          <h3>Nerd</h3>
          <ul>
              <li>I love messing around with technology, fixing computer issues, finding ways to utilize all phone capabilities, coding, etc</li>
              <li>Math was always my favorite subject in school</li>
              <li>I continue learning everyday, using tools like Pluralsight and freecodecamp to improve my skills</li>
          </ul>
          <h3>Puzzle Enthusiast</h3>
          <ul>
              <li>I've been solving all sorts of Rubik's cubes since 8th grade. Varying in shape, color and sizes. Give me a new cube and I'll work at it until I figure it out!</li>
              <li>Brainteasers and riddles are a favorite of mine</li>
              <li>Even good old fashioned jigsaw puzzles are great to pass the time</li>
          </ul>
          <h3>Athlete</h3>
          <ul>
              <li>Extremely competitive and will play any sport especially basketball and volleyball</li>
              <li>Running, working out, and other games like cornhole or Kubb</li>
          </ul>
          <h3>Outdoorsman</h3>
          <ul>
              <li>If I have the choice, I will always choose being outside over watching tv</li>
              <li>Camping, fishing and backpacking with the family</li>
          </ul>
      </div>
    );
  }

  function Skills() {
    return (
      <div>
            <h2>Programming Expertise</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Beginner</td>
                        <td>Intermediate</td>
                        <td>Strong</td>
                    </tr>
                    <tr>
                        <td>MVC</td>
                        <td>React</td>
                        <td>JavaScript</td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>C#</td>
                        <td>PHP</td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>C#</td>
                        <td>PHP</td>
                    </tr>
                    <tr>
                        <td>Kotlin</td>
                        <td>AWS</td>
                        <td>PHP</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>SQL</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Strong</td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
  }

  function Experience() {
    return (
      <div>
          <h2>Experience</h2>
          <h3>Nexio</h3>
          <ul>
              <li>JavaScript, React, Redux, Rest APIs, AWS, Test Driven Development programming</li>
              <li>Build onto existing payment service hub for managing payments</li>
              <li>Work in a team to fix software bugs that come up daily</li>
              <li>Work in a Scrum team using Agile methods to build new features for payment hub</li>
          </ul>
          <h3>Torro</h3>
          <ul>
              <li>PHP, MVC, AWS, and Twig Templating</li>
              <li>Build onto existing payment service hub for managing payments</li>
              <li>Develop Torro website for helping businesses obtain loans</li>
              <li>Work in a team of two developers to manager Torro website and create new features to provide a simple process of obtaining a loan</li>
          </ul>
          <h3>BMA Banking Systems</h3>
          <ul>
              <li>PHP, RPG, SQL, MVC, IBM I Series development</li>
              <li>Work closely with other developers and Account Executives to build new or enhance exisitng features for banking software</li>
              <li>Work on updating exisiting RPG code and move towards an all PHP codebase</li>
          </ul>
      </div>
    );
  }

  function Education() {
    return (
      <div>
          <h2>Education and Certificates</h2>
          <h3>Utah Valley University Orem, Utah</h3>
          <ul>
              <li>Bachelor of Science – Information Systems, Application Development	Received August 2021</li>
              <li>Associate’s in Applied Science – Information Systems	Received May 2021</li>
              <li>Associate’s Degree in Science	Received May 2020</li>
          </ul>
      </div>
    );
  }

  function Projects() {
    return (
      <div>
          <h2>Projects</h2>
          <h3>AWS Serverless Stack Notes App</h3>
          <ul>
              <li>Using Amazon Web Services to store users and data</li>
              <li>Set up a web app for users to sign up or login to existing notes app</li>
              <li>Notes app where users can create new notes, edit existing or delete existing</li>
              <li>Tutorial of how to use services within AWS (S3 Buckets, Lambdas, Cognito Users, 3DS)</li>
          </ul>
          <h3>MMHS Baseball website</h3>
          <ul>
              <li>MMHS requested a website to use for their baseball team to track player’s stats, videos of players, livestream their game, put up a schedule, roster, player forms and more</li>
              <li>Coded website from scratch in PHP HTML and PHPMYADMIN database</li>
              <li>Set up a place for players and coaches to login and see their videos and additional information not available to the public</li>
              <li>Worked in small team to develop entire website</li>
              <li>Responsive website that looks great on all devices</li>
              <li>Link to code: <a href="https://github.com/megliryan/uvu-baseball" target="_blank">MMHS Baseball</a> (website currently not being hosted by school district)</li>
          </ul>
      </div>
    );
  }

export default function Home() {
  return (
    <div>
        <Intro />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
    </div>
  );
}
