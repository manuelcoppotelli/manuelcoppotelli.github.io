<script>
	import { title } from '$lib/meta';
	import Terminal from '$lib/components/resume/terminal.svelte';
</script>

<svelte:head>
	<title>Resume - {title}</title>
	<meta property="og:title" content="Resume - {title}" />
	<meta name="twitter:title" content="Resume - {title}" />
</svelte:head>

<div class="resume-wrapper">
	<Terminal>
		<div class="mantitle">
			<pre class="manheader">MANUEL COPPOTELLI(7)</pre>
			<pre class="manheader">Resume</pre>
			<pre class="manheader">MANUEL COPPOTELLI(7)</pre>
		</div>

		<div class="heading color1">NAME</div>
		<p class="subtext"><span class="color1">Manuel Coppotelli</span> - Site Reliability Engineer</p>

		<div class="heading color1">SYNOPSIS</div>
		<p class="subtext">
			<span class="color1"><b>manuel</b></span> [<span class="color1">OPTIONS</span>]
			<span class="color2">COMMAND</span>
			[<span class="color1">ARG...</span>]
		</p>

		<div class="heading color1">DESCRIPTION</div>
		<p class="subtext">
			<span class="color1"><b>manuel</b></span> has worked in IT system operations for about 10 years,
			combining skills from SRE, systems administration, and software development to design reliable
			products at a huge scale. He's passionate about community and learning new things.
		</p>

		<div class="heading color1">OPTIONS</div>

		<p class="subtext color1">--engineer</p>
		<p class="doublesubtext">Site Reliability</p>
		<p class="triplesubtext">
			* Triage production issues and identify appropriate remediation<br />
			* Participate in on-call rotation and guide incident management<br />
			* Deep dive into complex operational challenges, automation, and system analysis<br />
			* Develop the tools (bash, python, go, and ruby) to remove toil and guarantee high reliability
			levels<br />
		</p>
		<p class="doublesubtext">Distributed Systems & Cloud Infrastructures:</p>
		<p class="triplesubtext">
			* Automated Kubernetes cluster operation on-prem and on the cloud <br />
			* Workload security, observability, service mesh, policy management, federated identities
			<br />
			* Infrastructure and workload cost and capacity breakdown, analysis, and optimization <br />
			* Development Platform: CI/CD pipelines, GitOps, deployment strategies (blue/green, canary)
			<br />
			* Serverless architectures and cloud-managed services (AWS, GCP) <br />
		</p>

		<p class="subtext color1">--learner</p>
		<p class="doublesubtext color2">Always learning new things:</p>
		<p class="triplesubtext">
			* Learn from data<br />
			* Fail fast, iterate<br />
			* Gain insight from experiences and perspectives of others<br />
		</p>

		<p class="subtext color1">--community</p>
		<p class="doublesubtext">
			Speaker at VMworld 2021: <a
				href="https://www.vmware.com/vmworld/en/video-library/video-landing.html?sessionid=1620811753703001Iuro"
				>Automate DevOps with VMware Tanzu</a
			><br />
			Co-founder and Streamer for the online podcast
			<a href="https://www.spreaker.com/show/the-pipeline-guys">The Pipeline Guys</a><br />
			Creator of the
			<a href="https://registry.terraform.io/providers/tanzuformers/tmc/latest"
				>Terraform provider for Tanzu Mission Control</a
			><br />
		</p>

		<p class="subtext color1">--honors</p>
		<p class="doublesubtext">
			VMware vExpert 2022 for Cloud Native Applications<br />
		</p>

		<p class="subtext color1">--languages</p>
		<p class="doublesubtext">
			Fluent in English, native in Italian, basic in Spanish and French.<br />
		</p>

		<p class="subtext color1">--v[v[v]]</p>
		<p class="doublesubtext color2">Open source, culture, devops, infrastructure, the cloud</p>
		<p class="triplesubtext">
			* Personal blog, <a href="https://manuelcoppotelli.me/blog">https://manuelcoppotelli.me</a><br
			/>
			* GitHub profile,
			<a href="https://github.com/manuelcoppotelli">https://github.com/manuelcoppotelli</a><br />
		</p>

		<div class="heading color1">HISTORY</div>

		<p class="subtext bottomcut">
			* <a href="https://www.pagopa.it">PagoPA</a>
		</p>
		<p class="doublesubtext">- Strategic Innovation, 2021-present</p>
		<p class="triplesubtext">
			Fostering the technologican and cultural innovation in the ICT field for Public Governments<br
			/>
		</p>

		<p class="subtext bottomcut">
			* <a href="https://www.reply.com/storm-reply">Storm Reply</a>
		</p>
		<p class="doublesubtext">- Senior Cloud Consultant, 2018–2021</p>
		<p class="triplesubtext">
			* Consulting in cloud adoption journey for big multinational companies (utility, payment,
			certification authority, defense) resulting in 30% reduction in RTO and RPO and 99.5%
			availability.<br />
			* Consulting in full-cloud strategies adoption for startups (transportation, IoT), resulting in
			one-third reduction of the time to market<br />
			* Designing and implementing custom Platform as a Service solutions, running more than 15000 micro-
			services, abstracting cloud infrastructure and operation effort; pushing the adoption of CI/CD
			and GitOps.<br />
			* Re-platforming and re-architecting legacy critical applications to leverage the pay-per-use cloud
			cost model; resulting in cost reduction up to 70%<br />
			* Managing multiple dev and devops pizza-teams; assuring high quality project delivery<br />
		</p>

		<p class="subtext bottomcut">
			* <a href="https://manuelcoppotelli.me">manuelcoppotelli.me</a>
		</p>
		<p class="doublesubtext">- Freelance System Engineer, 2012–2018</p>
		<p class="triplesubtext">
			Hardware and base software system setup and operation for three-tier (web) application
		</p>

		<div class="heading color1">FILES</div>
		<p class="subtext bottomcut c">* Formal education</p>
		<p class="doublesubtext">
			- Professional Engineer Registration Consiglio Nazionale degli Ingegneri, 2018-present<br />
			- MSc, Engineering in Computer Science from "La Sapienza" University of Rome, 2015–2017<br />
		</p>

		<p class="subtext bottomcut">* Certifications</p>
		<p class="doublesubtext">
			- Kubernetes: CKA, CKS, CKAD<br />
			- AWS: Solution Architect, Professional<br />
			- How to Manage a Remote Team - GitLab<br />
		</p>

		<div class="heading color1">AUTHOR</div>
		<p class="subtext">
			E-mail: <code>hi@</code><code>manuelcoppotelli.me</code> || Phone: +39 REDACTED || Twitter:
			<a href="https://twitter.com/manuel_coppo">@manuel_coppo</a><br />
		</p>

		<div class="heading">
			<span class="color3">(END)</span><span class="cursor color1">&#x25AE;</span>
		</div>
	</Terminal>
</div>

<style lang="scss">
	.resume-wrapper {
		position: relative;
		padding: 10px;
	}

	a {
		color: #bbbbbb;
		line-height: 2em;
		text-decoration: underline;
	}

	.mantitle {
		display: flex;
		justify-content: space-between;
		padding-bottom: 5px;
	}

	.manheader {
		font-size: 14px;
		margin: 10px 0px 0px 0px;
	}

	.heading {
		font-size: 14px;
		font-weight: bold;
		margin: 15px 0px 0px 0px;
		line-height: 0.8em;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.subtext {
		margin-left: 40px;
	}

	.doublesubtext {
		margin-left: 50px;
	}

	.triplesubtext {
		margin-left: 70px;
	}

	.bottomcut {
		margin-bottom: 0px;
	}

	.color1 {
		color: #9cd9f0;
	}

	.color2 {
		color: #e09690;
	}

	.color3 {
		color: #cdee69;
	}

	.cursor {
		-webkit-animation: blink 1s 11.5s infinite;
		-moz-animation: blink 1s 8.5s infinite;
		-o-animation: blink 1s 8.5s infinite;
		animation: blink 1s 8.5s infinite;
	}

	@-webkit-keyframes blink {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@-moz-keyframes blink {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@-o-keyframes blink {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
