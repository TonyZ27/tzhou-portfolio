import { CaseStudyLayout } from '../components/case-study/CaseStudyLayout';
import { HeroSection } from '../components/case-study/HeroSection';
import { OutlineCard } from '../components/case-study/OutlineCard';
import { TextBlock } from '../components/case-study/TextBlock';
import { Divider } from '../components/case-study/Divider';
import type { TocItem } from '../components/case-study/CaseStudySidebar';
import { vibeCodingPortfolioData } from '../data/vibeCodingPortfolioData';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  en: {
    role: 'ROLE',
    team: 'TEAM',
    time: 'TIME',
    stack: 'STACK',
  },
  zh: {
    role: '角色',
    team: '团队',
    time: '时间',
    stack: '技术栈',
  },
};

const tocItems: TocItem[] = [
  { id: 'overview', label: { en: 'Overview', zh: '概述' } },
  { id: 'digital-team', label: { en: 'Tool Stack', zh: '组件团队' } },
  { id: 'workflow', label: { en: 'Workflow', zh: '工作流' } },
  { id: 'reality', label: { en: 'Learnings', zh: '经验分享' } },
  { id: 'takeaways', label: { en: 'Takeaways', zh: '总结' } },
];

export function VibeCodingPortfolioPage() {
  const { hero, metadata, whyAbandon, digitalTeam, workflow, reality, takeaways } =
    vibeCodingPortfolioData;
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const project = projects.find(p => p.id === 'my-portfolio');
  const tags = project?.tags || [];

  const metadataItems = [
    { label: t.role, value: metadata.role[currentLanguage] },
    { label: t.team, value: metadata.team.map(item => item[currentLanguage]) },
    { label: t.time, value: metadata.time },
    { label: t.stack, value: metadata.stack[currentLanguage] },
  ];

  return (
    <CaseStudyLayout activeTab="works" tocItems={tocItems}>
      <div className="flex flex-col gap-[60px]">

        {/* Section: Overview / Hero */}
        <section id="overview" className="flex flex-col gap-[60px]">
          <HeroSection
            heroImage={hero.heroImage}
            title={hero.title[currentLanguage]}
            tags={tags.map(tag => tag[currentLanguage])}
            metadata={metadataItems}
            description={hero.description[currentLanguage]}
            annotation={hero.annotation[currentLanguage]}
          />
        </section>

        <Divider />

        {/* Section: Why Abandon */}
        <section id="why-abandon">
          <TextBlock
            title={whyAbandon.title[currentLanguage]}
            content={whyAbandon.content[currentLanguage]}
          />
        </section>

        <Divider />

        {/* Section: Digital Team */}
        <section id="digital-team">
          <TextBlock
            title={digitalTeam.title[currentLanguage]}
            content={
              <div className="flex flex-col gap-2">
                <p className="mb-4">{digitalTeam.intro[currentLanguage]}</p>
                <ul className="flex flex-col gap-4 list-disc pl-5">
                  {digitalTeam.items.map((item, index) => (
                    <li key={index}>
                      <span className="font-medium">{item.title[currentLanguage]}</span>
                      {' — '}
                      {item.description[currentLanguage]}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </section>

        <Divider />

        {/* Section: Workflow */}
        <section id="workflow">
          <TextBlock
            title={workflow.title[currentLanguage]}
            content={workflow.content[currentLanguage]}
          />
        </section>

        <Divider />

        {/* Section: Reality */}
        <section id="reality">
          <TextBlock
            title={reality.title[currentLanguage]}
            content={reality.content[currentLanguage]}
          />
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
                  <h4 className="font-sans text-lg font-medium text-foreground">
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
