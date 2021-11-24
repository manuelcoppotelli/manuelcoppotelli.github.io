---
slug: vmware-code-hackathon-at-vmworld-2021
title: VMware {code} Hackathon @ VMworld 2021
date: 2021-10-13
excerpt: "Imagine That! We wan to see what unique projects your creativity leads to!"
tags: [Hackathon, Events, Communities, VMware]
---

<script>
  import Image from "$lib/components/base/image.svelte";
  import MarkerHighlight from "$lib/components/style/marker-highlight.svelte";
</script>

_<MarkerHighlight>Imagine That!</MarkerHighlight> We wan to see what unique
projects your creativity leads to!_

This was the _theme_ of the [VMware code Hackathon @ VMworld 2021](https://blogs.vmware.com/code/2021/08/19/vmware-code-hackathon-vmworld-2021/),
thus practically it was an open theme to allow participants to hack on and work
on whatever they chose to!

At first I was a bit disappointed about taking part in an online-only hackaton;
I strongly believe that the most _exciting_ part of such events is spending an
evening meeting new people and staying awake overnight to contribute and make
your team reach the expected goal!

However my team mates [Lino](https://twitter.com/linotelera) and
[Scott](https://twitter.com/VRAbbi_IL), convinced me that was going to be fun
anyway, they told me about the idea they had in mind and at that point I could
not refuse to partecipate.

So the **TanzuFormers** team got ready for the battle!

## The project

Our project aimed at fully automating the infrastructure setup of a Tanzu
kubernetes cluster, deploying all the recommended addons for logging,
monitonring, etc... and having it automaticlly registered on the Tanzu Mission
Control dashboard.

The goal was to leverage Terraform to automate the whole process, thus we had to
implement several terraform modules each one in charge of deploying a different
addon to the newly provisioned cluster.

My main task goal was the interaction with Tanzu Mission Control to join the
fresh new cluster on it; thus I decided to brush again my poor GoLang coding
skills and decided to develop a custom terraform provider for TMC.

The code for all the modules and the provider is publicy available on [our team's
Github organization](https://github.com/tanzuformers)

## And the winner is...

<Image
  path="posts/{slug}"
  filename="certificate"
  alt="Certificate of Achievement Manuel Coppotelli Winner"
/>

The judges decide to prize our contribution because involved many different
VMware products and aimed at the integration towards a common goal.

In the end, I enjoyed taking part in this experience more that I expected... the
fact that it was only online did not reduce its effective value at my eyes.
On the contrary, the opportunity to keep in touch with new pepole was extremely
valualbe.

With the experience of this yeas online hackaton, I really really can't wait for
the next year hackaton that, hopefully 🤞, will take place in presence at the
next VMwolrd!
