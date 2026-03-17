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
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  en: {
    role: 'ROLE',
    team: 'TEAM',
    impact: 'IMPACT',
    time: 'TIME',
    problem: 'Problem',
    challengesRealizations: 'Challenges & Realizations',
    solutions: 'Solutions',
    solutionInteractionBreakdown: 'Solution: Interaction Breakdown',
    solutionIntro: 'To optimize driving safety, scalability was a core principle. While the content within VUI panels can shift and evolve, the underlying system is built to support growth, accommodating new features, and third party skills interaction without breaking the HMI structure.',
    oneMinuteOverview: 'One-Minute Overview',
  },
  zh: {
    role: '角色',
    team: '团队',
    impact: '影响',
    time: '时间',
    problem: '问题',
    challengesRealizations: '挑战与洞察',
    solutions: '解决方案',
    solutionInteractionBreakdown: '解决方案：交互拆解',
    solutionIntro: '为了优化驾驶安全，可扩展性是核心原则。虽然 VUI 面板内的内容可以变化和演进，但底层系统旨在支持增长，容纳新功能和第三方技能交互，而不会破坏 HMI 结构。',
    oneMinuteOverview: '一分钟概览',
  },
};

export function AIVoiceAssistantPage() {
  const { hero, metadata, oneMinuteOverview, problem, mentalModel, architecture, solutions, takeaways } =
    aiVoiceAssistantData;
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  // Get tags from projects data
  const project = projects.find(p => p.id === 'ai-voice-assistant');
  const tags = project?.tags || [];

  const metadataItems = [
    { label: t.role, value: metadata.role[currentLanguage] },
    { label: t.team, value: metadata.team.map(item => item[currentLanguage]) },
    { label: t.impact, value: metadata.impact[currentLanguage] },
    { label: t.time, value: '2025-2026' },
  ];

  return (
    <CaseStudyLayout activeTab="works">
      <div className="flex flex-col gap-[60px]">
        {/* Section: Overview */}
        <section id="overview" className="flex flex-col gap-[60px]">
          <HeroSection
            heroImage={hero.heroImage}
            title={hero.title[currentLanguage]}
            logoImage={hero.logoImage}
            tags={tags.map(tag => tag[currentLanguage])}
            metadata={metadataItems}
            description={hero.description[currentLanguage]}
            annotation={hero.annotation[currentLanguage]}
          />

          <Divider />

          <OutlineCard title={t.oneMinuteOverview}>
            <div className="flex flex-col gap-10">
              {/* Problem */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  {t.problem}
                </h4>
                <p className="font-sans text-base text-foreground leading-normal">
                  {oneMinuteOverview.problem[currentLanguage]}
                </p>
              </div>

              {/* Challenges */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  {t.challengesRealizations}
                </h4>
                <p className="font-sans text-base text-foreground leading-normal">
                  {oneMinuteOverview.challenges[currentLanguage]}
                </p>
              </div>

              {/* Solutions */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  {t.solutions}
                </h4>
                <div className="font-sans text-base text-foreground leading-normal">
                  <p className="mb-2">{oneMinuteOverview.solutions.intro[currentLanguage]}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {oneMinuteOverview.solutions.items.map((item, index) => (
                      <li key={index}>
                        <span className="font-medium">{item.title[currentLanguage]}</span>
                        <span>{item.description[currentLanguage]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  {t.impact}
                </h4>
                <ul className="list-disc pl-5 font-sans text-base text-foreground leading-normal">
                  <li>{oneMinuteOverview.impact[currentLanguage]}</li>
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
              title: problem.title[currentLanguage],
              content: (
                <>
                  <p className="mb-4">{problem.content[0][currentLanguage]}</p>
                  <p>{problem.content[1][currentLanguage]}</p>
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
              title: mentalModel.title[currentLanguage],
              content: mentalModel.content[currentLanguage],
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
            title={architecture.title[currentLanguage]}
            content={architecture.content[currentLanguage]}
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
            title={t.solutionInteractionBreakdown}
            content={t.solutionIntro}
          />
          <div className="flex flex-col gap-[200px]">
            {solutions.map((solution, index) => (
              <SolutionSplitMedia
                key={index}
                title={solution.title[currentLanguage]}
                subtitle={solution.subtitle[currentLanguage]}
                description={solution.description[currentLanguage]}
                media={{
                  src: solution.media,
                  alt: solution.title[currentLanguage],
                }}
                isMultiPart={solution.isMultiPart}
                additionalContent={solution.additionalContent?.[currentLanguage]}
                additionalMedia={solution.additionalMedia}
              />
            ))}
          </div>
        </section>

        <Divider />

        {/* Section: Takeaways */}
        <section id="takeaways">
          <OutlineCard title={takeaways.title[currentLanguage]}>
            <div className="flex flex-col gap-10">
              <p className="font-sans text-base text-foreground leading-normal">
                {takeaways.intro[currentLanguage]}
              </p>
              {takeaways.items.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="font-sans text-lg text-foreground">
                    {item.title[currentLanguage]}
                  </h4>
                  <p className="font-sans text-base text-foreground leading-normal">
                    {item.content[currentLanguage]}
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
