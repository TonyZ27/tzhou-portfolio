import { CaseStudyLayout } from '../components/case-study/CaseStudyLayout';
import { HeroSection } from '../components/case-study/HeroSection';
import { OutlineCard } from '../components/case-study/OutlineCard';
import { TextBlock } from '../components/case-study/TextBlock';
import { MediaSplitText } from '../components/case-study/MediaSplitText';
import { TextBlockStackedMedia } from '../components/case-study/TextBlockStackedMedia';
import { SolutionSplitMedia } from '../components/case-study/SolutionSplitMedia';
import { MediaRenderer } from '../components/case-study/MediaRenderer';
import { Divider } from '../components/case-study/Divider';
import { aiVoiceAssistantData } from '../data/aiVoiceAssistantData';
import { projects } from '../data/projects';

export function AIVoiceAssistantPage() {
  const { hero, metadata, oneMinuteOverview, problem, mentalModel, architecture, solutions, takeaways } =
    aiVoiceAssistantData;

  // Get tags from projects data
  const project = projects.find(p => p.id === 'ai-voice-assistant');
  const tags = project?.tags || [];

  const metadataItems = [
    { label: 'ROLE', value: metadata.role },
    { label: 'TEAM', value: metadata.team },
    { label: 'IMPACT', value: metadata.impact },
    { label: 'TIME', value: '2025-2026' },
  ];

  return (
    <CaseStudyLayout activeTab="works">
      <div className="flex flex-col gap-[60px]">
        {/* Section: Overview */}
        <section id="overview" className="flex flex-col gap-[60px]">
          <HeroSection
            heroImage={hero.heroImage}
            title={hero.title}
            logoImage={hero.logoImage}
            tags={tags}
            metadata={metadataItems}
            description={hero.description}
            annotation={hero.annotation}
          />

          <Divider />

          <OutlineCard title="One-Minute Overview">
            <div className="flex flex-col gap-10">
              {/* Problem */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  Problem
                </h4>
                <p className="font-sans text-base text-foreground leading-normal">
                  {oneMinuteOverview.problem}
                </p>
              </div>

              {/* Challenges */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  Challenges & Realizations
                </h4>
                <p className="font-sans text-base text-foreground leading-normal">
                  {oneMinuteOverview.challenges}
                </p>
              </div>

              {/* Solutions */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  Solutions
                </h4>
                <div className="font-sans text-base text-foreground leading-normal">
                  <p className="mb-2">{oneMinuteOverview.solutions.intro}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {oneMinuteOverview.solutions.items.map((item, index) => (
                      <li key={index}>
                        <span className="font-medium">{item.title}</span>
                        <span>{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  Impact
                </h4>
                <ul className="list-disc pl-5 font-sans text-base text-foreground leading-normal">
                  <li>{oneMinuteOverview.impact}</li>
                </ul>
              </div>
            </div>
          </OutlineCard>
        </section>

        <Divider />

        {/* Section: Problem */}
        <section id="problem">
          <MediaSplitText
            textBlock={{
              title: problem.title,
              content: (
                <>
                  <p className="mb-4">{problem.content[0]}</p>
                  <p>{problem.content[1]}</p>
                </>
              ),
            }}
            media={{
              src: problem.media,
              alt: 'Problem diagram',
              aspectRatio: '480/295',
            }}
          />
        </section>

        <Divider />

        {/* Section: Mental Model */}
        <section id="mental-model">
          <TextBlockStackedMedia
            textBlock={{
              title: mentalModel.title,
              content: mentalModel.content,
            }}
            media={{
              src: mentalModel.diagram,
              alt: 'Mental model diagram',
            }}
          />
        </section>

        <Divider />

        {/* Section: Architecture */}
        <section id="architecture" className="flex flex-col gap-10">
          <TextBlock
            title={architecture.title}
            content={architecture.content}
          />
          <MediaRenderer
            src={architecture.diagram}
            alt="Architecture diagram"
            objectFit="contain"
          />
        </section>

        <Divider />

        {/* Section: Solution */}
        <section id="solution" className="flex flex-col gap-10">
          <TextBlock
            title="Solution: Interaction Breakdown"
            content="To optimize driving safety, scalability was a core principle. While the content within VUI panels can shift and evolve, the underlying system is built to support growth, accommodating new features, and third party skills interaction without breaking the HMI structure."
          />
          <div className="flex flex-col gap-[200px]">
            {solutions.map((solution, index) => (
              <SolutionSplitMedia
                key={index}
                title={solution.title}
                subtitle={solution.subtitle}
                description={solution.description}
                media={{
                  src: solution.media,
                  alt: solution.title,
                }}
                isMultiPart={solution.isMultiPart}
                additionalContent={solution.additionalContent}
                additionalMedia={solution.additionalMedia}
              />
            ))}
          </div>
        </section>

        <Divider />

        {/* Section: Takeaways */}
        <section id="takeaways">
          <OutlineCard title={takeaways.title}>
            <div className="flex flex-col gap-10">
              <p className="font-sans text-base text-foreground leading-normal">
                {takeaways.intro}
              </p>
              {takeaways.items.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="font-sans text-lg text-foreground">
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
      </div>
    </CaseStudyLayout>
  );
}
