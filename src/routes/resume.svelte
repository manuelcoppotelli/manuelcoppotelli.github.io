<script>
  import { title } from '$lib/meta';
  import Terminal from '$lib/components/resume/terminal.svelte';
</script>

<svelte:head>

  <title>Resume - {title}</title>
  <meta property="og:title" content="Resume - {title}" />
  <meta name="twitter:title" content="Resume - {title}" />
</svelte:head>

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

  .manheader {
    font-size: 14px;
    margin: 10px 0px 0px 0px;
  }

  .heading {
    font-size: 14px;
    font-weight: bold;
    margin: 15px 0px 0px 0px;
    line-height: .8em;
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
    color: #9CD9F0;
  }

  .color2 {
    color: #E09690;
  }

  .color3 {
    color: #CDEE69;
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

<div class="resume-wrapper">
  <Terminal>
    <pre class="manheader">MANUEL COPPOTELLI(7)                                                MANUEL COPPOTELLI(7)</pre>

    <div class="heading color1">NAME</div>
    <p class="subtext"><span class="color1">Manuel Coppotelli</span> - Engineer</p>


    <div class="heading color1">SYNOPSIS</div>
    <p class="subtext">
      <span class="color1"><b>manuel</b></span> [<span class="color1">OPTIONS</span>] <span class="color2">COMMAND</span> [<span class="color1">ARG...</span>]
    </p>


    <div class="heading color1">DESCRIPTION</div>
    <p class="subtext">
      <span class="color1"><b>manuel</b></span> is an advocate for other people's success, pushing boundaries, and open-source software.
      He's passionate about community, culture, and learning new things.
    </p>


    <div class="heading color1">OPTIONS</div>

    <p class="subtext color1">
      --engineer
    </p>
    <p class="doublesubtext">
      Apply engineering and scientific methods:
    </p>
    <p class="triplesubtext">
      * Observe, orient, decide, act<br>
      * Distributed systems, Kubernetes, cloud-native technologies<br>
      * Development in bash, python, go, and ruby<br>
      * Builds simple, resilient, and antifragile systems<br>
    </p>

    <p class="subtext color1">
      --student
    </p>
    <p class="doublesubtext color2">
      Always learning new things:
    </p>
    <p class="triplesubtext">
      * Learn from data<br>
      * Fail fast, iterate<br>
      * Gain insight from experiences and perspectives of others<br>
    </p>

    <p class="subtext color1">
      --teacher
    </p>
    <p class="doublesubtext color2">
      Teach when applicable and learn in all situations (see <i>--student</i>):
    </p>
    <p class="triplesubtext">
      * Give direction, promote people, and get out of the way<br>
      * Desire to put people first and understand their needs<br>
      * Seek diversity and new perspectives<br>
    </p>

    <p class="subtext color1">
      --v[v[v]]
    </p>
    <p class="doublesubtext color2">
      Open source, culture, devops, the cloud
    </p>
    <p class="triplesubtext">
      Publications:<br>
      * Personal blog,  <a href="https://manuelcoppotelli.me/blog">https://manuelcoppotelli.me</a><br>
      * GitHub profile, <a href="https://github.com/manuelcoppotelli">https://github.com/manuelcoppotelli</a><br>
    </p>


    <div class="heading color1">HISTORY</div>

    <p class="subtext bottomcut">
      * <a href="https://www.pagopa.it">PagoPA</a>
    </p>
    <p class="doublesubtext">
      - Strategic Innovation, 2021-present
    </p>
    <p class="triplesubtext">
      Fostering the technologican and cultural innovation in the ICT field for Public Governments<br>
    </p>

    <p class="subtext bottomcut">
      * <a href="https://www.reply.com/storm-reply">Storm Reply</a>
    </p>
    <p class="doublesubtext">
      - Senior Cloud Consultant, 2018–2021
    </p>
    <p class="triplesubtext">
      Consulting in legacy infrastructure and applications migrations towards the cloud<br>
      Design and Development of cloud-native applications and microservices (serverless and container-based)<br>
      Design of highly scalable cloud and cloud-hybrid infrastructures<br>
      Installation and Administration of Kubernetes clusters (on cloud and on premises)<br>
      Ran multiple training sessions for organization for best practices, technical tools, and security.<br>
    </p>

    <p class="subtext bottomcut">
      * <a href="https://manuelcoppotelli.me">Manuel Coppotelli</a>
    </p>
    <p class="doublesubtext">
      - Freelance Web Developer, 2012–2015
    </p>
    <p class="triplesubtext">
      Web site development and maintenance<br>
      Integration with Content Management Systems<br>
      Mobile-first development<br>
      S.E.O.
    </p>

    <div class="heading color1">FILES</div>
    <p class="subtext bottomcut c">
      * Formal education
    </p>
    <p class="doublesubtext">
      - MSc, Engineering in Computer Science from "La Sapienza" University of Rome, 2015–2017<br>
      - BSc, Computer and Automation Engineering from "La Sapienza" University of Rome, 2012–2015<br>
    </p>

    <p class="subtext bottomcut">
      * Certifications
    </p>
    <p class="doublesubtext">
      - Certified Kubernetes Administrator<br>
      - Certified Kubernetes Security Specialist<br>
      - Certified Kubernetes Application Developer<br>
      - AWS Solution Architect, Professional<br>
      - AWS Solution Architect, Associate<br>
    </p>


    <div class="heading color1">AUTHOR</div>
    <p class="subtext">
      E-mail: <code>hi@</code><code>manuelcoppotelli.me</code> || Phone: REDACTED || Twitter: <a href="https://twitter.com/manuel_coppo">@manuel_coppo</a><br>
    </p>

    <div class="heading"><span class="color3">(END)</span><span class="cursor color1">&#x25AE;</span></div>
  </Terminal>
</div>
