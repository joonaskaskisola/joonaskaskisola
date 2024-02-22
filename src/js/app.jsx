import React from 'react';
import ReactDOM from 'react-dom';
import Name from './components/name';
import '../css/styles.scss';
import {GitHub, Linkedin, Mail} from 'react-feather';

let NAME = 'Joonas Kaskisola';
let TITLE = 'full stack developer';

let GITHUB_URL = 'https://github.com/joonaskaskisola';
let LINKEDIN_URL = 'https://www.linkedin.com/in/joonas-kaskisola-b1015080';
let EMAI_ADDRESS = 'joonas.kaskisola@gmail.com';

const App = () => (
	<div style={{marginBottom: '2rem'}}>
		<div className="text text--centered glass-effect mergin-medium--desktop">
			<Name name={NAME}/>
		</div>

		<div className={"text glass-effect mergin-medium--desktop"}>
			<h3>My core strengths:</h3>
			I am a highly motivated and versatile full-stack engineer with a passion for crafting elegant and
			efficient software solutions. With strong expertise in both front-end and back-end development, I thrive
			in challenging environments and possess a proven track record of delivering high-quality applications on
			time and within budget.
			<ul>
				<li>
					<strong>Strong Back-End</strong>: Adept at server-side development using robust technologies
					like PHP, building RESTful APIs, and working with relational databases like MySQL to ensure data
					integrity and security. Proficient in PHP testing frameworks like PHPUnit to write unit and
					integration tests for code quality and stability.
				</li>
				<li>
					<strong>Versatile Front-End</strong>: Deep understanding of modern JavaScript frameworks like
					Angular, AngularJS, and TypeScript, coupled with strong design principles, to create interactive
					and user-friendly interfaces. Adept at crafting reusable components, implementing responsive
					layouts, and optimizing performance for a seamless user experience.
				</li>
				<li>
					<strong>Cloud Savvy</strong>: Experienced in leveraging AWS services like CloudFormation to
					build scalable and highly available applications. Skilled in containerization with Docker to
					facilitate efficient deployments and manage microservices architectures.
				</li>
				<li>
					<strong>Linux Enthusiast</strong>: Comfortable navigating and administering Linux servers
					(Debian, Ubuntu) for efficient resource management and application deployments. Strong
					understanding of system administration tasks, including security configurations and
					troubleshooting.
				</li>
			</ul>

			<h3>Beyond Technical Skills:</h3>
			<ul>
				<li>
					<strong>Collaborative Spirit</strong>: I believe in effective communication and collaboration to
					achieve shared goals. I am a team player who actively engages with stakeholders, designers, and
					colleagues to understand project requirements and deliver optimal solutions.
				</li>
				<li>
					<strong>Lifelong Learner</strong>: Passionate about staying ahead of the curve in the
					ever-evolving tech landscape. Proactively seek out new technologies and learning opportunities
					to enhance my skillset and contribute value to projects.
				</li>
				<li>
					<strong>Problem-Solver</strong>: Possess a strong analytical mind and enjoy tackling complex
					technical challenges. I utilize my analytical and problem-solving skills to efficiently debug
					issues, optimize performance, and deliver robust solutions.
				</li>
			</ul>

			<div className="icons">
				<GitHub size={50} onClick={() => window.location.assign(GITHUB_URL)}/>
				<Linkedin size={50} onClick={() => window.location.assign(LINKEDIN_URL)}/>
				<Mail size={50} onClick={() => window.location.assign('mailto:' + EMAI_ADDRESS)}/>
			</div>

			<div style={{fontSize: '0.3rem'}}>Yes, it was written by ChatGPT.</div>
		</div>
	</div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
