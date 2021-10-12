<script>
  import Card from '../base/card.svelte';
  import Section from '../layout/section.svelte';
  import ProjectsGrid from '$lib/components/layout/projects-grid.svelte';
  import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
  import OneByOneGrid from '$lib/components/layout/1x1-grid.svelte';
  import ExternalLinkIcon from '$lib/svg/external-link.svelte';
  import Blobs from '../layout/blobs.svelte';
  import Image from '../base/image.svelte';
  import Tag from '../base/tag.svelte';
</script>

<section id="projects">
  <Section
    align="top"
    title="Projects"
    description="I focus on modern technical approaches, be they from the ground up  or evolutionary approaches. I do most of my work on cloud, with containers and serverless."
  >
    <OneByOneGrid>
      <ProjectsGrid>
        <Card>
          <div slot="image">
            <Image path="projects" filename="terraform-rmc-provider" alt="Terraform TMC Provider" />
          </div>
          <div slot="content">
            <div class="title">
              Terraform TMC Provider
              <div class="links">
                <a
                  class="text-secondary"
                  href="https://registry.terraform.io/providers/tanzuformers/tmc"
                  target="_blank"
                  rel="noopener"
                  title="Open project on Terraform Registry"
                >
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>

            <div class="text">
              A Terraform provider that allows for the full lifecycle management of vmWare Tanzu Mission Control resources.

              <!-- <a
                class="project-post-button button secondary-light transparent"
                href="/blog/vmWorld-2021-code-hackaton"
              >
                Read blog post
              </a> -->
            </div>
          </div>
          <div slot="footer">
            <div class="tags">
              <Tag>Cloud</Tag>
              <Tag>Hackaton</Tag>
              <Tag color="secondary">Open Source</Tag>
            </div>
          </div>
        </Card>
      </ProjectsGrid>

      <ThreeByThreeGrid>
      </ThreeByThreeGrid>
    </OneByOneGrid>
  </Section>
  <Blobs maxTop={5} minLeft={50} />
</section>

<style lang="scss">
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      a {
        width: 30px;
        height: 30px;
        padding: 3px;

        &:hover {
          color: var(--primary-color);
          fill: var(--primary-color);
        }
      }
    }
  }

  // .project-post-button {
  //   width: fit-content;
  //   margin: 10px auto 0;
  //   font-weight: 500;
  // }
</style>
