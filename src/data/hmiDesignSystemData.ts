export interface HMIDesignSystemData {
  hero: {
    heroImage: string;
    title: string;
    logoImage: string;
    description: string;
    annotation?: string;
    relatedProjects: Array<{
      name: string;
      description: string;
      iconUrl?: string;
      href: string;
    }>;
  };
  metadata: {
    role: string;
    team: string;
    impact: string;
    time: string;
  };
  oneMinuteOverview: {
    problem: string;
    solutionAndResults: {
      intro: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    impact: string;
  };
  problem: {
    title: string;
    subtitle?: string;
    content: string;
    media: string;
    caption: string;
  };
  pitch: {
    title: string;
    content: string;
    media: string;
    caption: string;
  };
  solution: {
    architecture: {
      title: string;
      intro: string;
      sections: Array<{
        subtitle: string;
        content: string;
        media: string;
        ref?: string;
      }>;
    };
    slotComponents: {
      subtitle: string;
      content: string;
      mediaColumns: Array<{
        media: string;
        caption: string;
      }>;
    };
    automatingHandoff: {
      title: string;
      intro1: string;
      intro2: string;
      beforeMedia: string;
      afterMedia: string;
      conclusion: string;
      fullWidthMedia: {
        media: string;
        caption: string;
      };
    };
  };
  adoption: {
    title: string;
    content: string;
    media: string;
  };
  finalTakeaways: {
    title: string;
    intro: string;
    items: Array<{
      title: string;
      content: string;
    }>;
  };
}

export const hmiDesignSystemData: HMIDesignSystemData = {
  hero: {
    heroImage: 'images/hmi-design-system/hero.png',
    title: 'Volvo HMI Design System',
    logoImage: 'images/volvo-logo.png',
    description: `
      <p class="mb-4">I led the consolidation of Volvo's fragmented HMI design systems into a single, scalable foundation that supports all regional platforms. This project went beyond traditional UI design—it was an opportunity to rethink our entire engineering pipeline, invent new component patterns, and invest in early-stage craft.</p>
      <p>Along the way, I vibe-coded multiple Figma plugins to eliminate manual handoffs and streamline team collaboration.</p>
    `,
    relatedProjects: [
      {
        name: 'Tokens In Page',
        description: 'A plugin to maintain scalable design systems',
        href: '#',
      },
      {
        name: 'VolvoTokens Uploader',
        description: 'A plugin to maintain scalable design systems',
        href: '#',
      },
    ],
  },
  metadata: {
    role: 'Design System Manager',
    team: 'Design System · HMI',
    impact: 'Handoff Efficiency · System Thinking',
    time: '2025',
  },
  oneMinuteOverview: {
    problem: `When Volvo China began developing a localized OS, our design infrastructure cracked under the scale. We had over <strong>200</strong> component variations, <strong>40+</strong> redundant colors, and a manual handoff process that consumed hours of engineering time. This fragmentation created massive technical debt and stakeholder resistance to new design investments.`,
    solutionAndResults: {
      intro: 'I drove the system\'s transformation from the ground up:',
      items: [
        {
          title: 'Secured Buy-in',
          description: ': Built a business case centered on aligning incentives—pitching the system not as a design library, but as a tool to remove friction and accelerate product deadlines.',
        },
        {
          title: 'Architected the Foundation',
          description: ': Introduced semantic tokens and "slot components," condensing <strong>200+</strong> chaotic variations into <strong>60</strong> flexible core elements.',
        },
        {
          title: 'Automated the Pipeline',
          description: ': Coded a custom Figma plugin with OAuth integration, connecting our design tokens directly to the CI/CD pipeline.',
        },
      ],
    },
    impact: `The system didn't just make our files cleaner; it fundamentally changed how we ship. We cut handoff times from days to minutes, saved significant quarterly costs, and established the definitive backbone for Volvo's next-generation digital experiences in China.`,
  },
  problem: {
    title: 'Problem: Uncovering the Root Causation',
    content: `
      <p class="mb-4">In 2025, our team was tasked with building a localized OS for future vehicles. A quick audit revealed a mess: a bloated library of <strong>200+</strong> component variations and <strong>40+</strong> redundant colors, with <strong>60%</strong> of developer queries looping back to design.</p>
      <p class="mb-4"><strong>But the real insight was why this happened.</strong></p>
      <p class="mb-4">Product teams exist to ship products, not maintain design systems. When deadlines loom, adopting rigid new components naturally falls to the bottom of the backlog. Because our existing system added friction and forced habit changes, designers took the path of least resistance: detaching and rebuilding from scratch.</p>
      <p><strong>This fragmentation wasn't a lack of discipline. It was a symptom of systemic friction.</strong></p>
    `,
    media: 'images/hmi-design-system/problem.png',
    caption: 'The challenges weren\'t immediately obvious on the surface. Separate libraries helped hit immediate deadlines, but created massive technical debt',
  },
  pitch: {
    title: 'The Pitch (Flipping the Frame for Leadership)',
    content: `
      <p class="mb-4">Getting executive budget meant overcoming political resistance. Leadership rarely funds internal 'housekeeping,' so pitching 'design consistency' would fail. I had to flip the frame.</p>
      <p class="mb-4">I built a business case around <strong>aligning incentives</strong>. I promised leadership we would stop forcing teams to adopt arbitrary rules and instead treat them as our primary customers. By automating the boring parts of their workflow, we would make using the design system the fastest way to hit a product deadline.</p>
      <p>Positioning the system as critical infrastructure to accelerate OS development secured the budget and executive mandate.</p>
    `,
    media: 'images/hmi-design-system/pitch.png',
    caption: 'We reinforce stakeholder confidence in the project through thorough PI Planning',
  },
  solution: {
    architecture: {
      title: 'Solution: Cleaning Up the Architecture',
      intro: `With the green light, I had to fix the bloat. But knowing what I now knew about human habits, one thing was certain: documentation alone would only preserve the chaos. We needed structural constraints that didn't feel restrictive.`,
      sections: [
        {
          subtitle: 'Semantic Tokens & Reduction',
          content: 'I created a hierarchical mapping system that reduced token redundancy by <strong>40%</strong>. This approach meant a global color change could propagate automatically through regional implementations. Through systematic reduction, I ruthlessly cut the <strong>200+</strong> variations down to <strong>60</strong> focused core components.',
          media: 'images/hmi-design-system/design-token.png',
        },
        {
          subtitle: '',
          content: 'To ensure cross-project consistency while still allowing local flexibility, I restructured the component library and held bi-weekly reviews to consolidate similar patterns and components across projects.',
          media: 'images/hmi-design-system/library-structure.png',
        },
        {
          subtitle: 'Slot Component Innovation',
          content: 'To prevent designers from feeling trapped and detaching components again, I introduced "slot components" (inspired by Material Design 3). This modular architecture allowed designers to swap content or sub-components without breaking the primary structure. It reduced their cognitive load, giving them the regional flexibility they needed while maintaining strict global governance in the background.',
          media: 'images/hmi-design-system/slot-1.png',
          ref: 'slotComponents',
        },
      ],
    },
    slotComponents: {
      subtitle: 'Slot Component Innovation',
      content: 'To prevent designers from feeling trapped and detaching components again, I introduced "slot components" (inspired by Material Design 3). This modular architecture allowed designers to swap content or sub-components without breaking the primary structure. It reduced their cognitive load, giving them the regional flexibility they needed while maintaining strict global governance in the background.',
      mediaColumns: [
        {
          media: 'images/hmi-design-system/slot-1.png',
          caption: 'Slot were integrated into compound elements as a flexible variant, helping teams identify customizable elements while preserving system consistency',
        },
        {
          media: 'images/hmi-design-system/slot-2.png',
          caption: 'The designers within each product team could then maintain local product-specific components without detaching from the main library',
        },
      ],
    },
    automatingHandoff: {
      title: 'Automating the Handoff',
      intro1: 'Removing friction meant fixing the most painful part of the job: handoff. Our traditional process required extensive documentation, screenshots, and developers manually re-entering values. It took 2-3 days and caused endless inconsistencies.',
      intro2: 'I collaborated with engineering to build a custom Figma plugin. By integrating OAuth, the plugin connects our design tokens directly to the CI/CD pipeline. When a designer updates a token, it automatically syncs to the codebase.',
      beforeMedia: 'images/hmi-design-system/workflow-1.png',
      afterMedia: 'images/hmi-design-system/workflow-2.png',
      conclusion: 'This did not just force adoption. It made contribution the path of least resistance. When teams realized they could spend less time on documentation and more time on craft, the culture shifted. The design system was no longer seen as a bottleneck but as a multiplier.',
      fullWidthMedia: {
        media: 'images/hmi-design-system/pipeline.png',
        caption: 'Design-to-development feedback cycles dropped from 2-3 days to under 30 minutes. This automation enabled unprecedented design-development collaboration, with developers gaining confidence in implementations and designers gaining production visibility.',
      },
    },
  },
  adoption: {
    title: 'Driving the Culture',
    content: `
      <p><strong>Technical excellence alone doesn't guarantee a culture shift.</strong> Instead of throwing a finished system over the wall, I embedded myself in the integration process. I ran bi-weekly review sessions that served a dual purpose: recognizing and celebrating even small component updates from the team, and collecting the harsh feedback I needed to iterate on the system itself.</p>
    `,
    media: 'images/hmi-design-system/adoption.png',
  },
  finalTakeaways: {
    title: 'Final Takeaways',
    intro: 'This project shifted our team from providing reactive design support to building proactive design infrastructure. Here is what I learned about leading system-level change:',
    items: [
      {
        title: 'Product teams are your primary customers',
        content: 'Product teams exist to ship products, not to maintain your system. If you want them to contribute, you cannot rely on goodwill. You have to integrate into their natural workflow and make contribution the path of least resistance.',
      },
      {
        title: 'Documentation cannot fix broken architecture',
        content: 'If you have 200 bloated component variations, writing a rulebook on how to use them just crystallizes the mess. True scalability requires structural constraints—like semantic tokens and slot components—that make doing the wrong thing harder than doing the right thing.',
      },
      {
        title: 'Adoption is a product feature',
        content: `A design system is only as good as its adoption rate. Building the Figma CI/CD plugin wasn't just a technical exercise; it was a deliberate strategy to eliminate the friction that makes developers hate design systems. When contribution actually helps teams hit deadlines faster, a design system stops being a bottleneck and becomes a culture.`,
      },
    ],
  },
};
