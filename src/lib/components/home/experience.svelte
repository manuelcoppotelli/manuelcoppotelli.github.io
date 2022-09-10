<script>
	import Card from '$lib/components/base/card.svelte';
	import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Tag from '../base/tag.svelte';
	import Blobs from '../layout/blobs.svelte';

	const careerStart = new Date(2012, 9, 3);
	const yearsOfExperience = Math.abs(
		new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
	);
</script>

<section id="experience">
	<Section
		align="right"
		title="Work Experience"
		description="Over the past {yearsOfExperience}+ years, with a Software Engineer background, I jumped to Platform Engineering and DevOps for the extra challenge. I immensely enjoy reining in distributed systems!"
		buttonText="View Resume"
		buttonUrl="/resume"
		buttonColor="secondary"
	>
		<TwoByTwoGrid>
			<Card>
				<div slot="content">
					<div class="title">Cloud Solution Architect</div>
					<p>Serverless & Managed Services</p>
					<div class="note">AWS Professional Certification</div>
					<div class="text justify" />
				</div>
				<div slot="footer">
					<div class="tags">
						<Tag color="primary">Cloud</Tag>
						<Tag color="primary">Serverless</Tag>
						<Tag color="secondary">AWS</Tag>
						<Tag color="secondary">Azure</Tag>
						<Tag color="secondary">GCP</Tag>
					</div>
				</div>
			</Card>

			<Card>
				<div slot="content">
					<div class="title">Kubernetes Specialist</div>
					<p>Containers everywhere</p>
					<div class="note">CKA - CKS - CAD Certification</div>
					<div class="text justify" />
				</div>
				<div slot="footer">
					<div class="tags">
						<Tag color="primary">Containers</Tag>
						<Tag color="primary">MultiCloud</Tag>
						<Tag color="secondary">Distributed Systems</Tag>
					</div>
				</div>
			</Card>

			<Card>
				<div slot="content">
					<div class="title">Cloud Native Applications</div>
					<p>Design for automation</p>
					<div class="note" />
					<div class="text justify" />
				</div>
				<div slot="footer">
					<div class="tags">
						<Tag color="primary">Microservices</Tag>
						<Tag color="primary">Refactoring</Tag>
						<Tag color="secondary">CI/CD</Tag>
					</div>
				</div>
			</Card>

			<Card>
				<div slot="content">
					<div class="title">Hybrid Infrastructures</div>
					<p>On-Premises & Private Cloud</p>
					<div class="note" />
					<div class="text justify" />
				</div>
				<div slot="footer">
					<div class="tags">
						<Tag color="primary">Confidential Computing</Tag>
						<Tag color="primary">SDDC</Tag>
						<Tag color="secondary">Overlay Networks</Tag>
						<Tag color="secondary">NFV</Tag>
					</div>
				</div>
			</Card>
		</TwoByTwoGrid>
	</Section>
	<Blobs minLeft={60} maxTop={30} />
</section>
