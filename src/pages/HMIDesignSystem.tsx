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
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  en: {
    role: 'ROLE',
    team: 'TEAM',
    impact: 'IMPACT',
    time: 'TIME',
    problem: 'Problem',
    solutionResults: 'Solution & Results',
    oneMinuteOverview: 'One-Minute Overview',
  },
  zh: {
    role: '角色',
    team: '团队',
    impact: '影响',
    time: '时间',
    problem: '问题',
    solutionResults: '解决方案与成果',
    oneMinuteOverview: '一分钟概览',
  },
};

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
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  // Get tags from projects data
  const project = projects.find((p) => p.id === 'hmi-design-system');
  const tags = project?.tags || [];

  const metadataItems = [
    { label: t.role, value: metadata.role[currentLanguage] },
    { label: t.team, value: metadata.team[currentLanguage] },
    { label: t.impact, value: metadata.impact[currentLanguage] },
    { label: t.time, value: metadata.time[currentLanguage] },
  ];

  const tocItems = [
    { id: 'one-minute-overview', label: { en: 'One Minute Overview', zh: '一分钟速览' } },
    { id: 'problem', label: { en: 'Problem', zh: 'Problem' } },
    { id: 'the-pitch', label: { en: 'The Pitch', zh: ' The Pitch' } },
    { id: 'solution', label: { en: 'Solution', zh: 'Solution' } },
    { id: 'handoff', label: { en: 'Handoff', zh: 'Handoff' } },
    { id: 'adoption', label: { en: 'Adoption', zh: 'Adoption' } },
    { id: 'takeaways', label: { en: 'Takeaways', zh: 'Takeaways' } },
  ];

  return (
    <CaseStudyLayout activeTab="works" tocItems={tocItems}>
      <div className="flex flex-col gap-[60px]">
        {/* Section 1: One Minute Overview */}
        <section className="flex flex-col gap-[60px]">
          <HeroSection
            heroImage={hero.heroImage}
            title={hero.title[currentLanguage]}
            logoImage={hero.logoImage}
            tags={tags.map(tag => tag[currentLanguage])}
            metadata={metadataItems}
            description={hero.description[currentLanguage]}
          //   relatedProjects={hero.relatedProjects.map(rp => ({
          //     name: rp.name[currentLanguage],
          //     description: rp.description[currentLanguage],
          //     href: rp.href,
          //   }
          // )
          // )  
          // }
          />

          <Divider />

          <OutlineCard title={t.oneMinuteOverview}>
            <div  id="one-minute-overview"  className="flex flex-col gap-10">
              {/* Problem */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">{t.problem}</h4>
                <div
                  className="font-sans text-base text-foreground leading-normal"
                  dangerouslySetInnerHTML={{ __html: oneMinuteOverview.problem[currentLanguage] }}
                />
              </div>

              {/* Solution & Results */}
              <div className="flex flex-col gap-2">
                <h4 className="font-sans text-lg text-foreground">
                  {t.solutionResults}
                </h4>
                <div className="font-sans text-base text-foreground leading-normal">
                  <p className="mb-2">
                    {oneMinuteOverview.solutionAndResults.intro[currentLanguage]}
                  </p>
                  <ol className="list-decimal pl-5 space-y-1">
                    {oneMinuteOverview.solutionAndResults.items.map(
                      (item, index) => (
                        <li key={index}>
                          <span className="font-semibold">{item.title[currentLanguage]}</span>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.description[currentLanguage],
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
                <h4 className="font-sans text-lg text-foreground">{t.impact}</h4>
                <ul className="list-disc pl-5 font-sans text-base text-foreground leading-normal">
                  <li
                    dangerouslySetInnerHTML={{
                      __html: oneMinuteOverview.impact[currentLanguage],
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
              title: problem.title[currentLanguage],
              content: (
                <div
                  dangerouslySetInnerHTML={{ __html: problem.content[currentLanguage] }}
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
              title: pitch.title[currentLanguage],
              content: pitch.content[currentLanguage],
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
            title={architecture.title[currentLanguage]}
            content={architecture.intro[currentLanguage]}
            showTitle={true}
          />

          {/* Module A2: Semantic Tokens & Reduction (第一部分) */}
          <MediaSplitText
            textBlock={{
              subtitle: architecture.sections[0].subtitle[currentLanguage],
              content: architecture.sections[0].content[currentLanguage],
            }}
            media={{
              src: architecture.sections[0].media,
              alt: architecture.sections[0].subtitle[currentLanguage],
              aspectRatio: '480/295',
            }}
          />

          {/* Module A3: 文件夹结构 (第二部分，无标题) */}
          <MediaSplitText
            textBlock={{
              content: architecture.sections[1].content[currentLanguage],
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
              subtitle={slotComponents.subtitle[currentLanguage]}
              content={slotComponents.content[currentLanguage]}
            />
            <div className="flex flex-col lg:flex-row gap-6">
              {slotComponents.mediaColumns.map((column, index) => (
                <div key={index} className="flex-1 flex flex-col gap-4">
                  <MediaRenderer
                    src={column.media}
                    alt={column.caption[currentLanguage]}
                    aspectRatio="3300/2560"
                    objectFit="contain"
                  />
                  <p className="font-sans text-sm text-foreground/60 leading-normal">
                    {column.caption[currentLanguage]}
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
              title: automatingHandoff.title[currentLanguage],
              content: automatingHandoff.intro1[currentLanguage],
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
              content: automatingHandoff.intro2[currentLanguage],
            }}
            media={{
              src: automatingHandoff.afterMedia,
              alt: 'Handoff process after automation',
              aspectRatio: '480/295',
            }}
          />

          {/* 收尾大图区 */}
          <div className="flex flex-col gap-6">
            <TextBlock content={automatingHandoff.conclusion[currentLanguage]} />
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
                  __html: automatingHandoff.fullWidthMedia.caption[currentLanguage],
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
              title: adoption.title[currentLanguage],
              content: adoption.content[currentLanguage],
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
          <OutlineCard title={finalTakeaways.title[currentLanguage]}>
            <div className="flex flex-col gap-10">
              <p className="font-sans text-base text-foreground leading-normal">
                {finalTakeaways.intro[currentLanguage]}
              </p>
              {finalTakeaways.items.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="font-sans text-lg text-foreground font-medium">
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

        <Divider />
      </div>
    </CaseStudyLayout>
  );
}
