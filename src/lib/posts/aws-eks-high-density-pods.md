---
slug: aws-eks-high-density-pods
title: AWS EKS high-density pods
date: 2021-11-23
excerpt: "AWS recently released a new version of the AWS-CNI that allows more Pods per node..."
tags: [Cloud, AWS, Kubernetes, CNI]
---

<script>
  import Image from "$lib/components/base/image.svelte";
  import MarkerHighlight from "$lib/components/style/marker-highlight.svelte";
</script>

AWS recently released a new version of the AWS CNI that allows more Pods to be
deployed within each EC2 instance. Having an higher pod density results in more
efficiency and a significative reduction in EC2 costs necessary to run the same
number of pods. How does the solution work under the hood? And if it's that
good, why has not been released before?

## A bit of background

In order to understand the changes that the new version brings, it is necessary
a bit of background on how intra-node networking works in Kubernetes.

<Image
  path="posts/{slug}"
  filename="intra-node-networking"
  alt="Kubernetes Intra-node Networking"
/>

Each time a new pod is created, the kubelet agent delegates:

1. Creating the container to the *Container Runtime Interface*
1. Attaching the container to the network to the *Container Network Interface*
1. Mounting volumes to the *Container Storage Interface*

But for the scope of this post, let's focus on the CNI part.

<Image
  path="posts/{slug}"
  filename="node-cni"
  alt="Kubernetes Node CNI"
/>

Each pod has its own isolated Linux network namespace and is attached to a
bridge. The CNI is in charge of creating the bridge, assigning the IP and
connecting `veth0` to the `docker0`.

## AWS is doing it differently

This is how most of the CNIs works and what happens most of the time, but
different CNIs might use other ways to connect the container to the network.

<Image
  path="posts/{slug}"
  filename="node-unordinary-cni"
  alt="Kubernetes Node Unordinary CNI"
/>

As an example, there might *not* be a `docker0` bridge; the AWS CNI is an
example of such CNI. In order to understand the reason of this choice, let's
investigate on how EC2 networking works.

<Image
  path="posts/{slug}"
  filename="aws-cni-multiple-eni"
  alt="Kubernetes AWS CNI Multiple ENI"
/>

In AWS, each EC2 instance can have multiple network interfaces (ENIs) and each
of them can be assigned a limited number of IPs. For example, an `m5.large` can
have up to 10 IPs for ENI; out of those 10 IPs one of them has to be assigned to
the network interface itself while the remaining can be assigned freely.

In the past, these extra IPs were assign to Pods but there was a big limit: the
number of assignable IP addresses for each node.

Let's have a look at an example.

An `m5.large` EC2 instance can have up to 3 ENIs with 10 IP private addresses
each. Since one IP is reserved for the ENI, remains left 9 addresses per ENI and
thus 27 in total. As a conseuences the EC2 `m5.large` could run up to 27 Pods,
not a lot actually.

## Let's enter prefixes

In August 2021 AWS [released a change](https://aws.amazon.com/it/about-aws/whats-new/2021/07/amazon-virtual-private-cloud-vpc-customers-can-assign-ip-prefixes-ec2-instances/)
to EC2 that allows _prefixes_ to be assigned to network interfaces.

<Image
  path="posts/{slug}"
  filename="aws-cni-multiple-eni-prefix"
  alt="Kubernetes AWS CNI Multiple ENI using prefixes"
/>

Prefixes?! In simple words, instead of supporting a single IP address, ENIs now
support an IP range. Thus the same EC2 instance, which had 10 private IP
addresses, now can have 10 **ranges** of IP addresses. And how big is the range?
By default, 16 IP addresses; so with 10 ranges <MarkerHighlight>you could have
up to 160 IP addresses</MarkerHighlight>.

Let's have a look at another example.

<Image
  path="posts/{slug}"
  filename="aws-cni-pods-prefix"
  alt="Kubernetes AWS CNI pods prefixes"
/>

An `m5.large` can have 3 ENIs with 10 slots each for IPs or _prefixes_; since
one IP is reserved for the ENI, you're left with 9 _prefixes_. Each prefix is 16
IPs, so `9*16=144` IPs. Since there are 3 ENIs, `144x3=432` IPs.

The same EC2 can now runs <MarkerHighlight>up to 432 Pods</MarkerHighlight>, not
only 27 as before!

## AWS CNI 1.9 and Pod-per-node limit

The [AWS CNI 1.9.0](https://aws.amazon.com/it/blogs/containers/amazon-vpc-cni-increases-pods-per-node-limits/) includes support to prefixes and
caps the max number of Pods to 110 or 250 so you won't be able to run 432 Pods
on an m5.large; the latter in comòiance with the official [Kubernetes large clusters](https://kubernetes.io/docs/setup/best-practices/cluster-large/)
guide recommendation. The CNI is also tunable and will prewarm IPs and prefixes
so that your Pods start instantly.

So... in order to answer the question at the beginning of this post, her's why
the AWS-CNI 1.9.0 release (hopefully) makes more sense now!
