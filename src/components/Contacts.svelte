<script>
  export let email = null
  export let facebook = null
  export let linkedin = null
  export let twitter = null
  export let github = null
  export let unsplash = null
  export let dribbble = null
  export let instagram = null
  export let youtube = null
  export let mastodon = null
  export let discord = null
  export let twitch = null
  export let telegram = null

  import { 
    MailDotRu,
    Facebook,
    Linkedin,
    Twitter,
    Github,
    Unsplash,
    Dribbble,
    Instagram,
    Youtube,
    Mastodon,
    Discord,
    Twitch,
    Telegram,
  } from '@icons-pack/svelte-simple-icons'

  import ContactLink from './ContactLink.svelte'
</script>


<div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7" >

  <div class="flex justify-between">

    {#if email }
    <ContactLink to="mailto:{ email }" tooltip="{ email }" >
      <MailDotRu title="E-Mail" />
    </ContactLink>
    {/if}


    {#if facebook }
    <ContactLink to="https://www.facebook.com/{ facebook }" tooltip="{ facebook }">
      <Facebook />
    </ContactLink>
    {/if}
    
    
    {#if linkedin }
    <ContactLink to="https://www.linkedin.com/in/{ linkedin }" tooltip="in/{ linkedin }">
      <Linkedin />
    </ContactLink>
    {/if}
    
    
    {#if twitter }
    <ContactLink to="https://twitter.com/@{ twitter }" tooltip="@{ twitter }" >
      <Twitter />
    </ContactLink>
    {/if}
    
    
    {#if github }
    <ContactLink to="https://github.com/{ github }" tooltip="{ github }" >
      <Github />
    </ContactLink>
    {/if}


    {#if unsplash }
    <ContactLink to="https://unsplash.com/@{ unsplash }" tooltip="@{ unsplash }" >
      <Unsplash />
    </ContactLink>
    {/if}


    {#if dribbble }
    <ContactLink to="https://dribbble.com/{ dribbble }" tooltip="{ dribbble }" >
      <Dribbble />
    </ContactLink>
    {/if}


    {#if instagram }
    <ContactLink to="https://www.instagram.com/{ instagram }" tooltip="{ instagram }" >
      <Instagram />
    </ContactLink>
    {/if}


    {#if youtube }
    <ContactLink to="https://youtube.com/user/{ youtube }" tooltip="{ youtube }" >
      <Youtube />
    </ContactLink>
    {/if}


    {#if mastodon }
    <ContactLink to="https://mastodon.online/@{ mastodon }" tooltip="@{ mastodon }" >
      <Mastodon />
    </ContactLink>
    {/if}


    {#if discord }
    <ContactLink to="https://discord.com/invite/{ discord }" tooltip="{ discord }" >
      <Discord />
    </ContactLink>
    {/if}


    {#if twitch }
    <ContactLink to="https://www.twitch.tv/{ twitch }" tooltip="{ twitch }" >
      <Twitch />
    </ContactLink>
    {/if}


    {#if telegram }
    <ContactLink to="https://telegram.me/{ telegram }" tooltip="{ telegram }" >
      <Telegram />
    </ContactLink>
    {/if}

    
  </div>

</div>
