import { VerticalNav } from '../components/layout/VerticalNav';
import { MobileHeader } from '../components/layout/MobileHeader';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';
import { GridSectionHeader, SkillItem, TimelineItem, ContactItem } from '../components/about';
import { aboutData } from '../data/aboutData';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  en: {
    whatImGoodAt: "What I'm good at",
    timeline: 'Timeline',
    findMe: 'Find me',
  },
  zh: {
    whatImGoodAt: '我的专长',
    timeline: '经历',
    findMe: '联系我',
  },
};

export function About() {
  const { hero, skills, timeline, contacts } = aboutData;
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[64px_1fr] lg:h-screen lg:overflow-hidden">
        {/* Left Column: Vertical Navigation */}
        <VerticalNav activeTab="about" />

        {/* Main Content */}
        <main className="h-full overflow-auto">
          <div className="flex flex-col gap-[120px] p-6">
            {/* Hero Section */}
            <section className="px-6 pt-6">
              <div className="flex flex-col gap-10 max-w-xl">
                {/* Greeting */}
                <div className="flex gap-2 items-center">
                  <div className="flex flex-col">
                    <div className="flex flex-col justify-center">
                      <p className="font-sans font-medium text-4xl text-foreground whitespace-nowrap leading-none">
                        {hero.greeting[currentLanguage]}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-center h-[58.6px]">
                    <div className="flex flex-col items-end pb-[0.6px]">
                      <div className="flex flex-col justify-center leading-none">
                        <p className="font-handwriting text-5xl text-foreground whitespace-nowrap leading-none">
                          {hero.name[currentLanguage]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Intro Paragraphs */}
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex flex-col items-start w-full">
                    <div className="flex flex-col justify-center w-full">
                      {hero.introParagraphs.map((paragraph, index) => (
                        <p
                          key={index}
                          className="font-sans font-normal text-[15px] text-foreground leading-normal mb-2 last:mb-0"
                        >
                          {paragraph[currentLanguage]}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Info Grid Section */}
            <section className="px-6">
              <div className="grid grid-cols-3 gap-14">
                {/* Skills Column */}
                <div className="flex flex-col gap-6">
                  <GridSectionHeader title={t.whatImGoodAt} />
                  <div className="flex flex-col gap-8">
                    {skills.map((skill, index) => (
                      <SkillItem
                        key={index}
                        title={skill.title}
                        description={skill.description}
                        colorClass={skill.colorClass}
                      />
                    ))}
                  </div>
                </div>

                {/* Timeline Column */}
                <div className="flex flex-col gap-6">
                  <GridSectionHeader title={t.timeline} />
                  <div className="flex flex-col gap-8">
                    {timeline.map((item, index) => (
                      <TimelineItem
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                      />
                    ))}
                  </div>
                </div>

                {/* Contacts Column */}
                <div className="flex flex-col gap-6">
                  <GridSectionHeader title={t.findMe} />
                  <div className="flex flex-col gap-8">
                    {contacts.map((contact, index) => (
                      <ContactItem
                        key={index}
                        label={contact.label}
                        handle={contact.handle}
                        type={contact.type}
                        target={contact.target}
                        icon={contact.icon}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Mobile Content */}
        <main className="flex-1 px-4 flex flex-col pb-24">
          {/* Hero Section */}
          <section className="pt-8 pb-12">
            <div className="flex flex-col gap-8">
              {/* Greeting */}
              <div className="flex gap-2 items-center">
                <p className="font-sans font-medium text-3xl text-foreground leading-none">
                  {hero.greeting[currentLanguage]}
                </p>
                <p className="font-handwriting text-4xl text-foreground leading-none">
                  {hero.name[currentLanguage]}
                </p>
              </div>

              {/* Intro Paragraphs */}
              <div className="flex flex-col">
                {hero.introParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-sans font-normal text-[15px] text-foreground leading-normal mb-3 last:mb-0"
                  >
                    {paragraph[currentLanguage]}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Info Grid Section - Stacked on Mobile */}
          <section className="flex flex-col gap-12">
            {/* Skills */}
            <div className="flex flex-col gap-6">
              <GridSectionHeader title={t.whatImGoodAt} />
              <div className="flex flex-col gap-6">
                {skills.map((skill, index) => (
                  <SkillItem
                    key={index}
                    title={skill.title}
                    description={skill.description}
                    colorClass={skill.colorClass}
                  />
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-6">
              <GridSectionHeader title={t.timeline} />
              <div className="flex flex-col gap-5">
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div className="flex flex-col gap-6">
              <GridSectionHeader title={t.findMe} />
              <div className="flex flex-col gap-6">
                {contacts.map((contact, index) => (
                  <ContactItem
                    key={index}
                    label={contact.label}
                    handle={contact.handle}
                    type={contact.type}
                    target={contact.target}
                    icon={contact.icon}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav activeTab="about" />
      </div>
    </div>
  );
}
