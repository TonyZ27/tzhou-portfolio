import type { LocalizedText } from '../types/project';

export interface HMIDesignSystemData {
  hero: {
    heroImage: string;
    title: LocalizedText;
    logoImage: string;
    description: LocalizedText;
    annotation?: LocalizedText;
    relatedProjects: Array<{
      name: LocalizedText;
      description: LocalizedText;
      iconUrl?: string;
      href: string;
    }>;
  };
  metadata: {
    role: LocalizedText;
    team: LocalizedText;
    impact: LocalizedText;
    time: LocalizedText;
  };
  oneMinuteOverview: {
    problem: LocalizedText;
    solutionAndResults: {
      intro: LocalizedText;
      items: Array<{
        title: LocalizedText;
        description: LocalizedText;
      }>;
    };
    impact: LocalizedText;
  };
  problem: {
    title: LocalizedText;
    subtitle?: LocalizedText;
    content: LocalizedText;
    media: string;
    caption: LocalizedText;
  };
  pitch: {
    title: LocalizedText;
    content: LocalizedText;
    media: string;
    caption: LocalizedText;
  };
  solution: {
    architecture: {
      title: LocalizedText;
      intro: LocalizedText;
      sections: Array<{
        subtitle: LocalizedText;
        content: LocalizedText;
        media: string;
        ref?: string;
      }>;
    };
    slotComponents: {
      subtitle: LocalizedText;
      content: LocalizedText;
      mediaColumns: Array<{
        media: string;
        caption: LocalizedText;
      }>;
    };
    automatingHandoff: {
      title: LocalizedText;
      intro1: LocalizedText;
      intro2: LocalizedText;
      beforeMedia: string;
      afterMedia: string;
      conclusion: LocalizedText;
      fullWidthMedia: {
        media: string;
        caption: LocalizedText;
      };
    };
  };
  adoption: {
    title: LocalizedText;
    content: LocalizedText;
    media: string;
  };
  finalTakeaways: {
    title: LocalizedText;
    intro: LocalizedText;
    items: Array<{
      title: LocalizedText;
      content: LocalizedText;
    }>;
  };
}

export const hmiDesignSystemData: HMIDesignSystemData = {
  hero: {
    heroImage: 'images/hmi-design-system/hero.png',
    title: {
      en: 'Volvo HMI Design System',
      zh: 'Volvo HMI 设计系统',
    },
    logoImage: 'images/volvo-logo.png',
    description: {
      en: `
        <p class="mb-4">I led the consolidation of Volvo's fragmented HMI design systems into a single, scalable foundation that supports all regional platforms. This project went beyond traditional UI design—it was an opportunity to rethink our entire engineering pipeline, invent new component patterns, and invest in early-stage craft.</p>
        <p>Along the way, I vibe-coded multiple Figma plugins to eliminate manual handoffs and streamline team collaboration.</p>
      `,
      zh: `
        <p class="mb-4">我主导了沃尔沃零散 HMI 设计系统的整合，为所有区域平台搭建了一个统一、高可扩展性的底层架构。这个项目远不止于传统的 UI 规范整理——它是一次重塑整个交付Workflow、开发新组件模式、并投资早期设计基建的机会。</p>
        <p>在此期间，我独立开发了多个 Figma 插件，搭建了自动化交接流程，显著优化了团队协同效率。</p>
      `,
    },
    relatedProjects: [
      {
        name: {
          en: 'Tokens In Page',
          zh: 'Tokens In Page',
        },
        description: {
          en: 'A plugin to maintain scalable design systems',
          zh: 'A plugin to maintain scalable design systems',
        },
        href: '#',
      },
      {
        name: {
          en: 'VolvoTokens Uploader',
          zh: 'VolvoTokens Uploader',
        },
        description: {
          en: 'A plugin to maintain scalable design systems',
          zh: 'A plugin to maintain scalable design systems',
        },
        href: '#',
      },
    ],
  },
  metadata: {
    role: {
      en: 'Design System Manager',
      zh: '设计系统负责人',
    },
    team: {
      en: 'Design System · HMI',
      zh: '系统设计 · 人机交互',
    },
    impact: {
      en: 'Handoff Efficiency · System Thinking',
      zh: '交付效率跨越式提升 · 建立系统化工程思维',
    },
    time: {
      en: '2025',
      zh: '2025',
    },
  },
  oneMinuteOverview: {
    problem: {
      en: `When Volvo China began developing a localized OS, our design infrastructure cracked under the scale. We had over <strong>200</strong> component variations, <strong>40+</strong> redundant tokens, and a manual handoff process that consumed hours of engineering time. This fragmentation created massive technical debt and stakeholder resistance to new design investments.`,
      zh: '当沃尔沃中国开始研发本土化 OS 时，原有的设计基建在应对规模化扩展时暴露出严重的瓶颈。系统内堆积了 200 多个组件变体和 40 多种冗余Tokens，手动交接流程更是造成了极大的工程资源损耗。这种极度的碎片化不仅带来了沉重的技术债，也令业务团队对引入新的设计基建充满抵触。',
    },
    solutionAndResults: {
      intro: {
        en: "I drove the system's transformation from the ground up:",
        zh: '我从底层推动了系统的彻底转型：',
      },
      items: [
        {
          title: {
            en: 'Secured Buy-in',
            zh: '争取高层授权',
          },
          description: {
            en: ': Built a business case centered on aligning incentives—pitching the system not as a design library, but as a tool to remove friction and accelerate product deadlines.',
            zh: '：我重构了该项目的商业叙事：不再单纯强调"设计一致性"，而是将设计系统定位为"消除协同阻力、加速产品交付"的基石，从而实现了各方利益对齐并获得预算支持。',
          },
        },
        {
          title: {
            en: 'Architected the Foundation',
            zh: '重构底层架构',
          },
          description: {
            en: ': Introduced semantic tokens and "slot components," condensing <strong>200+</strong> chaotic variations into <strong>60</strong> flexible core elements.',
            zh: '：引入了语义化 Tokens (Semantic Tokens) 和"插槽组件 (Slot Components)"，将 200 多个高耦合的变体精简为 60 个灵活且高内聚的核心组件。',
          },
        },
        {
          title: {
            en: 'Automated the Pipeline',
            zh: '打通自动化流水线',
          },
          description: {
            en: ': Coded a custom Figma plugin with OAuth integration, connecting our design tokens directly to the CI/CD pipeline.',
            zh: '：开发了集成 OAuth 授权的定制化 Figma 插件，将我们的 Design Tokens 直接与研发的 CI/CD 流水线打通。',
          },
        },
      ],
    },
    impact: {
      en: `The system didn't just make our files cleaner; it fundamentally changed how we ship. We cut handoff times from days to minutes, saved significant quarterly costs, and established the definitive backbone for Volvo's next-generation digital experiences in China.`,
      zh: '该系统不仅提升了设计文件的整洁度，更从根本上改变了我们的交付模式。我们将设计到研发的交接时间从数天压缩至几分钟，每季度为公司节省了可观的隐性成本，并为沃尔沃在中国的下一代数字体验奠定了坚实的基础架构。',
    },
  },
  problem: {
    title: {
      en: 'Problem: Uncovering the Root Causation',
      zh: '问题：挖掘混乱下的症结',
    },
    content: {
      en: `
        <p class="mb-4">In 2025, our team was tasked with building a localized OS for future vehicles. A quick audit revealed a mess: a bloated library of <strong>200+</strong> component variations and <strong>40+</strong> redundant tokens, with <strong>60%</strong> of developer queries looping back to design.</p>
        <p class="mb-4"><strong>But the real insight was why this happened.</strong></p>
        <p class="mb-4">Product teams exist to ship products, not maintain design systems. When deadlines loom, adopting rigid new components naturally falls to the bottom of the backlog. Because our existing system added friction and forced habit changes, designers took the path of least resistance: detaching and rebuilding from scratch.</p>
        <p><strong>This fragmentation wasn't a lack of discipline. It was a symptom of systemic friction.</strong></p>
      `,
      zh: `
        <p class="mb-4">2025年，我们团队接到了为未来车型开发本土化 OS 的任务。初步审计揭示了严峻的技术债：组件库严重臃肿，包含了 200 多个变体和 40 多种冗余色彩；更为突出的是，开发团队 60% 的疑问最终都会在设计与研发之间反复折返，造成大量沟通内耗。</p>
        <p class="mb-4"><strong>然而，真正的洞察在于挖掘这一现象的成因。</strong></p>
        <p class="mb-4">业务团队的核心目标是如期交付产品，而非维护公共基建。在严苛的交付压力下，学习并适应一套僵化组件的优先级会被自然降级。由于现有的系统带来了过高的协同摩擦力，甚至强制改变了原有的工作流，设计师倾向于选择成本最低的路径：解除组件关联（Detach），继而脱离规范重复造轮子。</p>
        <p><strong>这种碎片化并非源于团队缺乏纪律性，而是系统性摩擦的直观症状。</strong></p>
      `,
    },
    media: 'images/hmi-design-system/problem.png',
    caption: {
      en: "The challenges weren't immediately obvious on the surface. Separate libraries helped hit immediate deadlines, but created massive technical debt",
      zh: '表面的平静掩盖了深层的混乱。独立的库文件或许能应对眼前的交付，但却积累了沉重的技术债。',
    },
  },
  pitch: {
    title: {
      en: 'The Pitch (Flipping the Frame for Leadership)',
      zh: '帮助Stakeholders转换视角',
    },
    content: {
      en: `
        <p class="mb-4">Getting executive budget meant overcoming political resistance. Leadership rarely funds internal 'housekeeping,' so pitching 'design consistency' would fail. I had to flip the frame.</p>
        <p class="mb-4">I built a business case around <strong>aligning incentives</strong>. I promised stakeholders we would stop forcing teams to adopt arbitrary rules and instead treat them as our primary customers. By automating the boring parts of their workflow, we would make using the design system the fastest way to hit a product deadline.</p>
        <p>Positioning the system as critical infrastructure to accelerate OS development secured the budget and executive mandate.</p>
      `,
      zh: `
        <p class="mb-4">要获得高管预算，意味着要克服组织内部的阻力。领导层很少为内部的"家务事"买单，因此单纯推销"设计一致性"注定会失败。我必须转换视角。</p>
        <p class="mb-4">我围绕<strong>利益对齐</strong>建立了商业案例。我向利益相关者承诺，我们将停止强迫团队遵守任意规则，而是将他们视为我们的主要客户。通过自动化他们工作流程中枯燥的部分，我们将使使用设计系统成为赶上产品截止日期的最快方式。</p>
        <p>将设计系统定位为加速 OS 开发的关键基础设施，最终确保了预算和高层的授权。</p>
      `,
    },
    media: 'images/hmi-design-system/pitch.png',
    caption: {
      en: 'We reinforce stakeholder confidence in the project through thorough PI Planning',
      zh: '我们通过详尽的 PI 规划会议，增强利益相关者对项目的信心。',
    },
  },
  solution: {
    architecture: {
      title: {
        en: 'Solution: Cleaning Up the Architecture',
        zh: '方案：清理架构顽疾',
      },
      intro: {
        en: `With the green light, I had to fix the bloat. But knowing what I now knew about human habits, one thing was certain: documentation alone would only preserve the chaos. We needed structural constraints that didn't feel restrictive.`,
        zh: '项目获批后，首要任务是解决架构的过度膨胀。基于系统搭建的经验，有一点毋庸置疑：单纯依赖规范文档无法遏制系统的熵增。我们需要引入一种具备隐性边界的"结构性约束（Structural Constraints）"。',
      },
      sections: [
        {
          subtitle: {
            en: 'Semantic Tokens & Reduction',
            zh: '语义化 Tokens 与系统减负',
          },
          content: {
            en: 'I created a hierarchical mapping system that reduced token redundancy by <strong>40%</strong>. This approach meant a global color change could propagate automatically through regional implementations. Through systematic reduction, I ruthlessly cut the <strong>200+</strong> variations down to <strong>60</strong> focused core components.',
            zh: '我建立了一套层级映射机制，将 Token 的冗余度降低了 40%。这意味着全局色彩的变更可自动同步至各个区域的落地项目中。通过系统性的缩减，我将 200 多个变体有效压缩至 60 个聚焦的核心组件。',
          },
          media: 'images/hmi-design-system/design-token.png',
        },
        {
          subtitle: {
            en: '',
            zh: '',
          },
          content: {
            en: 'To ensure cross-project consistency while still allowing local flexibility, I restructured the component library and held bi-weekly reviews to consolidate similar patterns and components across projects.',
            zh: '为了在保障跨项目一致性的同时兼顾本地业务的灵活性，我重组了组件库的架构，并确立了双周评审机制，以统筹和合并各项目间高频出现的交互模式。',
          },
          media: 'images/hmi-design-system/library-structure.png',
        },
        {
          subtitle: {
            en: 'Slot Component Innovation',
            zh: '引入"插槽组件"(Slot Components)',
          },
          content: {
            en: 'To prevent designers from feeling trapped and detaching components again, I introduced "slot components" (inspired by Material Design 3). This modular architecture allowed designers to swap content or sub-components without breaking the primary structure. It reduced their cognitive load, giving them the regional flexibility they needed while maintaining strict global governance in the background.',
            zh: '为避免设计师因缺乏灵活性而脱离组件库，我引入了"插槽组件"模式（灵感来源于 Material Design 3）。这种高度模块化的架构允许设计师在不破坏主结构的条件下，自由替换内容或子组件。它有效降低了设计师的认知负荷，赋予了本地业务极大的灵活性，同时在底层维持了严格的全局管控。',
          },
          media: 'images/hmi-design-system/slot-1.png',
          ref: 'slotComponents',
        },
      ],
    },
    slotComponents: {
      subtitle: {
        en: 'Slot Component Innovation',
        zh: '引入"插槽组件"(Slot Components)',
      },
      content: {
        en: 'To prevent designers from feeling trapped and detaching components again, I introduced "slot components" (inspired by Material Design 3). This modular architecture allowed designers to swap content or sub-components without breaking the primary structure. It reduced their cognitive load, giving them the regional flexibility they needed while maintaining strict global governance in the background.',
        zh: '为避免设计师因缺乏灵活性而脱离组件库，我引入了"插槽组件"模式（灵感来源于 Material Design 3）。这种高度模块化的架构允许设计师在不破坏主结构的条件下，自由替换内容或子组件。它有效降低了设计师的认知负荷，赋予了本地业务极大的灵活性，同时在底层维持了严格的全局管控。',
      },
      mediaColumns: [
        {
          media: 'images/hmi-design-system/slot-1.png',
          caption: {
            en: 'Slot were integrated into compound elements as a flexible variant, helping teams identify customizable elements while preserving system consistency',
            zh: '插槽被作为一种灵活的变体集成到复合元素中，帮助团队在保持系统一致性的同时，快速识别可自定义的区域。',
          },
        },
        {
          media: 'images/hmi-design-system/slot-2.png',
          caption: {
            en: 'The designers within each product team could then maintain local product-specific components without detaching from the main library',
            zh: '各个业务线的设计师可以在不脱离主库的情况下，独立维护自身专属的本地业务组件。',
          },
        },
      ],
    },
    automatingHandoff: {
      title: {
        en: 'Automating the Handoff',
        zh: '打通自动化交付流水线',
      },
      intro1: {
        en: 'Removing friction meant fixing the most painful part of the job: handoff. Our traditional process required extensive documentation, screenshots, and developers manually re-entering values. It took 2-3 days and caused endless inconsistencies.',
        zh: '减少协同摩擦的核心在于优化最具挑战的环节：设计到研发的交接。我们传统的流程极其低效，需要输出冗长的标注文档与截图，并由开发人员手动硬编码数值。这一流程通常耗时 2-3 天，且极易导致视觉还原误差。',
      },
      intro2: {
        en: 'I collaborated with engineering to build a custom Figma plugin. By integrating OAuth, the plugin connects our design tokens directly to the CI/CD pipeline. When a designer updates a token, it automatically syncs to the codebase.',
        zh: '我与工程团队紧密合作，开发了一款定制化的 Figma 插件。通过接入 OAuth 授权，该插件将我们的 Design Tokens 直接与研发的 CI/CD 流水线打通。设计师更新 Token 后，代码库将自动同步拉取最新数值。',
      },
      beforeMedia: 'images/hmi-design-system/workflow-1.png',
      afterMedia: 'images/hmi-design-system/workflow-2.png',
      conclusion: {
        en: 'This did not just force adoption. It made contribution the path of least resistance. When teams realized they could spend less time on documentation and more time on craft, the culture shifted. The design system was no longer seen as a bottleneck but as a multiplier.',
        zh: '这不仅是一项强制推行的标准，更是将"系统共建"转变为研发流程中最顺畅的一环。当业务团队发现无需在繁杂的文档上耗费精力，从而能专注于体验打磨时，团队的协同文化发生了实质性转变。设计系统不再被视为效率瓶颈，而是真正的研发效能倍增器。',
      },
      fullWidthMedia: {
        media: 'images/hmi-design-system/pipeline.png',
        caption: {
          en: 'Design-to-development feedback cycles dropped from 2-3 days to under 30 minutes. This automation enabled unprecedented design-development collaboration, with developers gaining confidence in implementations and designers gaining production visibility.',
          zh: '设计到研发的反馈周期从 2-3 天断崖式缩减至 30 分钟以内。这种自动化促成了端到端协作：工程师对落地还原充满信心，设计师也获得了对生产环境代码的实际把控力。',
        },
      },
    },
  },
  adoption: {
    title: {
      en: 'Driving the Culture',
      zh: '驱动团队文化',
    },
    content: {
      en: `
        <p><strong>Technical excellence alone doesn't guarantee a culture shift.</strong> Instead of throwing a finished system over the wall, I embedded myself in the integration process. I ran bi-weekly review sessions that served a dual purpose: recognizing and celebrating even small component updates from the team, and collecting the harsh feedback I needed to iterate on the system itself.</p>
      `,
      zh: `
        <p><strong>单纯的技术架构升级不足以驱动团队文化的转变。</strong>我并未将建成的系统单向推给业务线，而是深度参与了整合落地的全过程。我主持的双周评审会承担着两个任务：一是认可并宣发团队哪怕最微小的组件贡献，二是收集必要的批评意见，以持续迭代系统和流程本身。</p>
      `,
    },
    media: 'images/hmi-design-system/adoption.png',
  },
  finalTakeaways: {
    title: {
      en: 'Final Takeaways',
      zh: '总结',
    },
    intro: {
      en: 'This project shifted our team from providing reactive design support to building proactive design infrastructure. Here is what I learned about leading system-level change:',
      zh: '该项目促使我们团队从"被动提供设计支持"转变为"主动建设设计基建"。下面是我在主导系统级变革时沉淀的核心经验：',
    },
    items: [
      {
        title: {
          en: 'Product teams are your primary customers',
          zh: '业务团队是第一客户',
        },
        content: {
          en: 'Product teams exist to ship products, not to maintain your system. If you want them to contribute, you cannot rely on goodwill. You have to integrate into their natural workflow and make contribution the path of least resistance.',
          zh: '产品团队的终极目标是交付产品，而非维护系统。若期望他们持续贡献，不能仅凭团队的自发意愿。必须将其无缝融入日常工作流，使系统应用成为最自然的选择。',
        },
      },
      {
        title: {
          en: 'Documentation cannot fix broken architecture',
          zh: '规范文档无法修复脆弱的架构',
        },
        content: {
          en: 'If you have 200 bloated component variations, writing a rulebook on how to use them just crystallizes the mess. True scalability requires structural constraints—like semantic tokens and slot components—that make doing the wrong thing harder than doing the right thing.',
          zh: '面对 200 个臃肿的组件变体，编写详尽的使用说明只会将现有的混乱固化。真正的系统延展性依赖于底层的结构性约束（如语义化 Tokens 和Slot Components）——其核心在于使偏离规范的成本远高于遵循规范。',
        },
      },
      {
        title: {
          en: 'Adoption is a product feature',
          zh: '"普及率"即核心指标',
        },
        content: {
          en: `A design system is only as good as its adoption rate. Building the Figma CI/CD plugin wasn't just a technical exercise; it was a deliberate strategy to eliminate the friction that makes developers hate design systems. When contribution actually helps teams hit deadlines faster, a design system stops being a bottleneck and becomes a culture.`,
          zh: '设计系统的价值直接取决于其普及率 (Adoption Rate)。开发 Figma CI/CD 插件并非纯粹的技术探索，而是一项核心策略，旨在彻底消除开发人员对设计系统的抗拒心理。当底层基建切实帮助团队加速交付节奏时，设计系统才能摆脱阻力，沉淀为真正的工程师文化。',
        },
      },
    ],
  },
};
