import { CaseStudyLayout } from '../components/case-study/CaseStudyLayout';
import { HeroSection } from '../components/case-study/HeroSection';
import { OutlineCard } from '../components/case-study/OutlineCard';
import { TextBlock } from '../components/case-study/TextBlock';
import { MediaSplitText } from '../components/case-study/MediaSplitText';
import { TextBlockStackedMedia } from '../components/case-study/TextBlockStackedMedia';
import { MediaRenderer } from '../components/case-study/MediaRenderer';
import { Divider } from '../components/case-study/Divider';
import { hmiDesignSystemData } from '../data/hmiDesignSystemData';
import { projects } from '../data/projects';

export function HMIDesignSystemPage() {
  const {
    hero,
    metadata,
    oneMinuteOverview,
    problem,
    pitch,
    solution,
    adoption,
    finalTakeaways,
  } = hmiDesignSystemData;

  const { architecture, slotComponents, automatingHandoff } = solution;

  // Get tags from projects data
  const project = projects.find((p) => p.id === 'hmi-design-system');
  const tags = project?.tags || [];

  const metadataItems = [
    { label: 'ROLE', value: metadata.role },
    { label: 'TEAM', value: metadata.team },
    { label: 'IMPACT', value: metadata.impact },
    { label: 'TIME', value: metadata.time },
  ];

  const tocItems = [
    { id: 'one-minute-overview', label: 'One Minute Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'the-pitch', label: 'The Pitch' },
    { id: 'solution', label: 'Solution' },
    { id: 'handoff', label: 'Handoff' },
    { id: 'adoption', label: 'Adoption' },
    { id: 'takeaways', label: 'Takeaways' },
  ];

  return (
    <CaseStudyLayout activeTab="works" tocItems={tocItems}>
      <div className="flex flex-col gap-[60px]">
        {/* Section 1: One Minute Overview */}
        <section id="one-minute-overview" className="flex flex-col gap-[60px]">
          <HeroSection
            heroImage={hero.heroImage}
            title={hero.title}
            logoImage={hero.logoImage}
            tags={tags}
            metadata={metadataItems}
            description={hero.description}
            relatedProjects={hero.relatedProjects}
          />

          <Divider />

          <OutlineCard title="One-Minute Overview">
            <div className="flex flex-col gap-10">
              {/* Problem */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">Problem</h4>
                <div
                  className="font-sans text-base text-foreground leading-normal"
                  dangerouslySetInnerHTML={{ __html: oneMinuteOverview.problem }}
                />
              </div>

              {/* Solution & Results */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  Solution & Results
                </h4>
                <div className="font-sans text-base text-foreground leading-normal">
                  <p className="mb-2">
                    {oneMinuteOverview.solutionAndResults.intro}
                  </p>
                  <ol className="list-decimal pl-5 space-y-1">
                    {oneMinuteOverview.solutionAndResults.items.map(
                      (item, index) => (
                        <li key={index}>
                          <span className="font-semibold">{item.title}</span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          />
                        </li>
                      )
                    )}
                  </ol>
                </div>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">Impact</h4>
                <ul className="list-disc pl-5 font-sans text-base text-foreground leading-normal">
                  <li
                    dangerouslySetInnerHTML={{
                      __html: oneMinuteOverview.impact,
                    }}
                  />
                </ul>
              </div>
            </div>
          </OutlineCard>
        </section>

        <Divider />

        {/* Section 2: Problem */}
        <section id="problem">
          <MediaSplitText
            textBlock={{
              title: problem.title,
              content: (
                <div
                  dangerouslySetInnerHTML={{ __html: problem.content }}
                />
              ),
            }}
            media={{
              src: problem.media,
              alt: 'Problem illustration',
              aspectRatio: '480/295',
            }}
          />
        </section>

        <Divider />

        {/* Section 3: The Pitch */}
        <section id="the-pitch">
          <TextBlockStackedMedia
            textBlock={{
              title: pitch.title,
              content: pitch.content,
            }}
            media={{
              src: pitch.media,
              alt: 'PI Planning',
            }}
          />
        </section>

        <Divider />

        {/* Section 4: Solution (Cleaning Up the Architecture) */}
        <section id="solution" className="flex flex-col gap-12">
          {/* Module A1: 顶部引言 */}
          <TextBlock
            title={architecture.title}
            content={architecture.intro}
            showTitle={true}
          />

          {/* Module A2: Semantic Tokens & Reduction (第一部分) */}
          <MediaSplitText
            textBlock={{
              subtitle: architecture.sections[0].subtitle,
              content: architecture.sections[0].content,
            }}
            media={{
              src: architecture.sections[0].media,
              alt: architecture.sections[0].subtitle,
              aspectRatio: '480/295',
            }}
          />

          {/* Module A3: 文件夹结构 (第二部分，无标题) */}
          <MediaSplitText
            textBlock={{
              content: architecture.sections[1].content,
            }}
            media={{
              src: architecture.sections[1].media,
              alt: 'Component library structure',
              aspectRatio: '480/295',
            }}
          />

          {/* Module A4: Slot Component Innovation (第三部分) */}
          <div id="slot-components" className="flex flex-col gap-8">
            <TextBlock
              subtitle={slotComponents.subtitle}
              content={slotComponents.content}
            />
            <div className="flex flex-col lg:flex-row gap-6">
              {slotComponents.mediaColumns.map((column, index) => (
                <div key={index} className="flex-1 flex flex-col gap-4">
                  <MediaRenderer
                    src={column.media}
                    alt={column.caption}
                    aspectRatio="3300/2560"
                    objectFit="contain"
                  />
                  <p className="font-sans text-sm text-foreground/60 leading-normal">
                    {column.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Section 6: Automating the Handoff */}
        <section id="handoff" className="flex flex-col gap-12">
          {/* 流程图拆分 1 */}
          <MediaSplitText
            textBlock={{
              title: automatingHandoff.title,
              content: automatingHandoff.intro1,
            }}
            media={{
              src: automatingHandoff.beforeMedia,
              alt: 'Handoff process before automation',
              aspectRatio: '480/295',
            }}
          />

          {/* 流程图拆分 2 */}
          <MediaSplitText
            textBlock={{
              content: automatingHandoff.intro2,
            }}
            media={{
              src: automatingHandoff.afterMedia,
              alt: 'Handoff process after automation',
              aspectRatio: '480/295',
            }}
          />

          {/* 收尾大图区 */}
          <div className="flex flex-col gap-6">
            <TextBlock content={automatingHandoff.conclusion} />
            <div className="flex flex-col gap-4">
              <MediaRenderer
                src={automatingHandoff.fullWidthMedia.media}
                alt="Design-to-development feedback cycles"
                aspectRatio="928/617"
                objectFit="contain"
              />
              <p
                className="font-sans text-sm text-foreground/60 leading-normal"
                dangerouslySetInnerHTML={{
                  __html: automatingHandoff.fullWidthMedia.caption,
                }}
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* Section 5: Adoption */}
        <section id="adoption">
          <MediaSplitText
            textBlock={{
              title: adoption.title,
              content: adoption.content,
            }}
            media={{
              src: adoption.media,
              alt: 'Team collaboration',
              aspectRatio: '480/295',
            }}
          />
        </section>

        <Divider />

        {/* Section 6: Takeaways */}
        <section id="takeaways">
          <OutlineCard title={finalTakeaways.title}>
            <div className="flex flex-col gap-10">
              <p className="font-sans text-base text-foreground leading-normal">
                {finalTakeaways.intro}
              </p>
              {finalTakeaways.items.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="font-sans text-lg text-foreground font-medium">
                    {item.title}
                  </h4>
                  <p className="font-sans text-base text-foreground leading-normal">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </OutlineCard>
        </section>

        <Divider />
      </div>
    </CaseStudyLayout>
  );
}
