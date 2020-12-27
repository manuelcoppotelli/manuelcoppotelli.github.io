<script>
  import { MailDotRu, Linkedin, Twitter, Github } from '@icons-pack/svelte-simple-icons'

  import ContactLink from './ContactLink.svelte'
</script>


<div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7" >

  <div class="flex justify-between">

    <ContactLink to="mailto:manuel@manuelcoppotelli.me" tooltip="manuel@manuelcoppotelli.me" >
      <MailDotRu title="E-Mail" />
    </ContactLink>
    
    <ContactLink to="https://www.linkedin.com/in/manuelcoppotelli" tooltip="in/manuelcoppotelli">
      <Linkedin />
    </ContactLink>
    
    <ContactLink to="https://twitter.com/@manuel_coppo" tooltip="@manuel_coppo" >
      <Twitter />
    </ContactLink>
    
    <ContactLink to="https://github.com/manuelcoppotelli" tooltip="manuelcoppotelli" >
      <Github />
    </ContactLink>
    
  </div>

</div>
