<script>
  import Card from './Card.svelte'
  import Image from './Image.svelte'
  import Header from './Header.svelte'
  import Skills from './Skills.svelte'
  import Contacts from './Contacts.svelte'
</script>


<Card>

  <Image
    class="mx-auto sm:-mt-8 bg-cover bg-center rounded-full shadow-xl h-48 w-48"
    src="/img/manuel-coppotelli.jpg"
    alt="Manuel Coppotelli"
  />

  <div class="divide-y divide-gray-800">

    <Header
      name="Manuel Coppotelli"
      role="Cloud Engineer"
      place="Roma, Italy 🇮🇹"
    />

    <Skills
      set={[
        "AWS Solution Architect Professional",
        "Certified Kubernetes Adminstrator",
        "Designing Cloud Native Applications using serverless and container paradigms",
        "Curiosity motivates me in investigation, study and new experiences",
      ]}
    />

    <Contacts
      email="hi@manuelcoppotelli.me"
      linkedin="manuelcoppotelli"
      twitter="manuel_coppo"
      github="manuelcoppotelli"
    />

  </div>

</Card>
