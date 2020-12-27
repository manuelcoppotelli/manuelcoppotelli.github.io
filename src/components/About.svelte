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

    <Header />

    <Skills />

    <Contacts />

  </div>

</Card>
