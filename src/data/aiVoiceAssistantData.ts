import type { LocalizedText } from '../types/project';

export interface AIVoiceAssistantData {
  hero: {
    heroImage: string;
    title: LocalizedText;
    logoImage: string;
    description: LocalizedText;
    annotation: LocalizedText;
  };
  metadata: {
    role: LocalizedText;
    team: LocalizedText[];
    impact: LocalizedText;
  };
  oneMinuteOverview: {
    problem: LocalizedText;
    challenges: LocalizedText;
    solutions: {
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
    content: LocalizedText[];
    media: string;
  };
  mentalModel: {
    title: LocalizedText;
    content: LocalizedText;
    diagram: string;
  };
  architecture: {
    title: LocalizedText;
    content: LocalizedText;
    diagram: string;
  };
  solutions: Array<{
    title: LocalizedText;
    subtitle: LocalizedText;
    description: LocalizedText;
    media: string;
    isMultiPart?: boolean;
    additionalContent?: LocalizedText;
    additionalMedia?: string;
  }>;
  takeaways: {
    title: LocalizedText;
    intro: LocalizedText;
    items: Array<{
      title: LocalizedText;
      content: LocalizedText;
    }>;
  };
}

export const aiVoiceAssistantData: AIVoiceAssistantData = {
  hero: {
    heroImage: 'images/ai-voice/hero.png',
    title: {
      en: 'AI Voice Assistant',
      zh: 'AI语音助手',
    },
    logoImage: 'images/volvo-logo.png',
    description: {
      en: "Xiaowo is Volvo's AI-integrated in-vehicle voice assistant. I led the end-to-end UX design, creating an intent-adaptive interaction framework that balances the power of LLMs with strict driving safety standards.",
      zh: '"小沃"是沃尔沃搭载 AI 的新一代车载语音助手。我负责了从0到1从定义到落地的产品设计，搭建了一套基于"意图自适应"的交互框架。在这篇文章我会聚焦在这个项目中我遇到的核心挑战：如何在发挥大语言模型（LLM）强大能力的同时，严守驾驶安全的底线。',
    },
    annotation: {
      en: '*Since the product has not officially launched yet, I am not able to show the actual design pieces — thus, this case study would focus more on my decision making and design process.',
      zh: '*因为产品还没有正式上线，所以我目前还不能展示最终的视觉完稿——因此，这篇案例会更多聊聊我的决策过程和设计思路。',
    },
  },
  metadata: {
    role: {
      en: 'Lead Product designer',
      zh: 'Lead产品设计师',
    },
    team: [
      { en: 'Smartification · HMI', zh: '智能座舱 · 人机交互' },
    ],
    impact: {
      en: "Leadership Buy-in · New Design Standard",
      zh: '获得高层支持 (Leadership Buy-in) · 制定新设计标准',
    },
  },
  oneMinuteOverview: {
    problem: {
      en: "Users' expectations for in-car voice assistants have shifted, yet Volvo's existing solution was underutilized. Our research revealed a critical gap: powerful features were going unnoticed, and some interactions actually compromised driving focus. The experience lacked brand differentiation and safety alignment.",
      zh: '用户对车载语音助手的预期已经发生了改变，但沃尔沃现有的语音解决方案使用率却很低。我们的调研揭示了一个关键断层：强大的功能未能被用户充分发现，而某些现有的交互反而会分散驾驶注意力。这导致了整体体验既缺乏品牌差异化，也未能与沃尔沃强大的安全标准对齐。',
    },
    challenges: {
      en: "Integrating Generative AI into the cockpit created a paradox. Large Language Models (LLMs) are incredibly smart but inherently verbose. Unconstrained conversation in a driving environment isn't a feature—it's a safety hazard. We needed to reposition the voice assistant as a subordinate, multimodal layer rather than a dominant 'chatbot.'",
      zh: '将生成式 AI 引入座舱，本质上是一个体验悖论。大语言模型能力强大，但输出往往冗长且不可控。在驾驶环境中，无边界的开放式对话不是功能亮点，而是安全隐患。我们需要将语音助手重新定位为辅助性的多模态交互层，而不是一个喧宾夺主的"聊天机器人"。',
    },
    solutions: {
      intro: {
        en: 'I led the end-to-end UX design of an intent-adaptive conversational framework based on three pillars:',
        zh: '我主导并驱动了一套基于意图自适应的对话框架设计，该框架建立在以下三点：',
      },
      items: [
        {
          title: {
            en: 'The New Voice Interaction Pattern',
            zh: '新的语音交互范式',
          },
          description: {
            en: ': A non-intrusive UX framework that displays information without blocking driving instruments',
            zh: '：一套非侵入式的 UX 框架，在展示信息时绝不遮挡关键的驾驶视觉焦点。',
          },
        },
        {
          title: {
            en: 'AIGC-powered Specs',
            zh: '适配 AIGC 的设计规范',
          },
          description: {
            en: ": Rules that balance GenAI's open-ended nature with strict driving safety constraints.",
            zh: '：制定明确的交互护栏，将 GenAI 的发散性限制在驾驶安全的边界内。',
          },
        },
        {
          title: {
            en: 'Discoverability Loops',
            zh: '探索发现闭环',
          },
          description: {
            en: ': An onboarding process and "skills laboratory" to teach users what the AI can actually do.',
            zh: '：通过新手引导和"技能实验室"，帮助用户准确建立对 AI 实际能力的认知。',
          },
        },
      ],
    },
    impact: {
      en: "The design passed rigorous usability testing, securing enthusiastic buy-in from product and engineering leadership. We successfully proved the concept, integrated complex AI capabilities within technical constraints, and established a new UX standard for Volvo's future conversational features.",
      zh: '该设计成功通过了严格的可用性测试，获得了产品和研发高层的支持。我们成功完成了概念验证，在技术限制下整合了复杂的 AI 功能，并为沃尔沃未来的对话式体验确立了新的 UX 标准。',
    },
  },
  problem: {
    title: {
      en: 'The Problem: The "Smart" Trap',
      zh: '问题： "智能"的陷阱',
    },
    content: [
      {
        en: "The integration of Generative AI created a paradox in the cockpit. Large Language Models (LLMs) are incredibly smart, but they are also inherently verbose and open-ended. In a driving environment, an unconstrained conversation isn't a feature—it's a safety hazard.",
        zh: '把生成式 AI 放进车里其实是个悖论。大语言模型（LLM）虽然具备强大的理解能力，但其输出天生冗长且发散。在驾驶环境中，无边界的自由对话不仅没有价值，反而构成了严重的安全隐患。',
      },
      {
        en: "Our core challenge was to reposition the voice assistant, harnessing the power of GenAI without introducing the cognitive load of a chatbot.",
        zh: '摆在我们面前的难题是：如何重新定位语音助手，既能利用 GenAI 的能力，又避免给驾驶员带来高昂的认知负荷。',
      },
    ],
    media: 'images/ai-voice/problem_requirements.png',
  },
  mentalModel: {
    title: {
      en: 'Mental Model',
      zh: '心智模型',
    },
    content: {
      en: "Traditional AI assistants fail in cars because they treat 'chatting' as the ultimate goal. For Volvo, I had to redefine success: intelligence isn't measured by verbosity, but by managing the tension between the driver's needs and the vehicle's data. The mental model I established was built entirely around cognitive alignment. Instead of just giving an answer, the system must first identify the driver's intention, analyze the current vehicle state, and then output a response scaled to the current driving context.",
      zh: '传统的 AI 助手在车内表现不佳，因为它们将"信息收集"和"聊天"视为终极目标。在沃尔沃，我必须重新定义成功的标准：智能的衡量维度不在于输出信息的丰富度，而在于如何平衡驾驶员的需求与车辆的数据状态。我建立的心智模型完全围绕"人机认知对齐"展开。系统不能直接抛出答案，它必须首先识别驾驶员意图，结合当前车辆状态进行计算，然后输出与当下驾驶语境相匹配的反馈。',
    },
    diagram: 'images/ai-voice/mental_modal.png',
  },
  architecture: {
    title: {
      en: 'Architecture: An Intent Adaptive Framework',
      zh: '架构：意图自适应框架',
    },
    content: {
      en: "Designing for this complexity meant abandoning the traditional chat window. I built a Dynamic Surface System instead. These flexible UI containers scale based on user engagement—they stay compact to preserve critical driving anchors, but expand to show the AI's full reasoning when the driver explicitly asks.",
      zh: '应对这种复杂性意味着要放弃传统的对话框。为此，我设计了一套"动态面板系统"。这些 UI 容器具有弹性，可以通过匹配用户的参与度自适应变化：在默认状态下保持极简（最小化视觉占用），以保障核心驾驶信息的视觉优先级；当驾驶员明确需要详细解答时，再展开展示 AI 的完整推理过程。',
    },
    diagram: 'images/ai-voice/architecture.png',
  },
  solutions: [
    {
      title: {
        en: 'Reflexive Flow',
        zh: '反射性执行',
      },
      subtitle: {
        en: 'e.g. "Open the window"',
        zh: 'e.g."打开车窗"',
      },
      description: {
        en: "The user gives a direct command and expects immediate action. The system executes with zero visual distraction. The driver's eyes stay on the road.",
        zh: '用户下达明确指令并期待即时响应。系统以最低视觉干扰的方式执行，确保驾驶员视线始终保持在路面上。',
      },
      media: 'images/ai-voice/solution_reflexive_flow.mp4',
    },
    {
      title: {
        en: 'Tactical Intervention',
        zh: '战术性干预',
      },
      subtitle: {
        en: 'e.g. "Open the trunk"',
        zh: 'e.g. "打开后备箱"',
      },
      description: {
        en: "When the VA initiates a safety change or the user requests a vehicle adjustment, they need tactile affordance. The interaction is urgent and requires focused confirmation beyond voice alone.",
        zh: '当语音助手发起涉及安全的更改，或用户要求调整车辆状态时，需要提供明确的多模态反馈与操作暗示（Affordance）。这种交互具有紧急性，需要语音之外的明确触觉或视觉确认。',
      },
      media: 'images/ai-voice/solution_tactical_intervention.mp4',
    },
    {
      title: {
        en: 'Selective Engagement',
        zh: '选择性介入',
      },
      subtitle: {
        en: 'e.g. "What is Labubu?"',
        zh: 'e.g. "Labubu是什么"',
      },
      description: {
        en: "The value is in the content, but the driver's attention is scarce. I created a way to \"bookmark\" intelligence. The system shows a lightweight teaser capsule.",
        zh: '此时价值在于内容本身，但驾驶员的注意力带宽极度受限。我设计了一种"收藏"智能的机制，系统会优先在状态栏展示一个轻量级的胶囊态提示卡。',
      },
      media: 'images/ai-voice/solution_selective_engagement_1.mp4',
      isMultiPart: true,
      additionalContent: {
        en: "Once the vehicle reaches a safe state (e.g., parked or at a red light), the user's cognitive budget increases, and they can expand the capsule to shift from \"skimming\" to \"consuming.\"",
        zh: '当车辆进入安全状态（如停车或等红灯）时，驾驶员的认知带宽得到释放，便可以展开卡片，从"浅层扫视"平滑过渡到"深度阅读"。',
      },
      additionalMedia: 'images/ai-voice/solution_selective_engagement_2.png',
    },
    {
      title: {
        en: 'High-Assurance Verification',
        zh: '高可信的验证',
      },
      subtitle: {
        en: 'e.g. "Why is dim light on?"',
        zh: 'e.g. "为什么提示灯亮了"',
      },
      description: {
        en: "Here, the user isn't chatting; they are looking for the truth about a situation or complex vehicle status. I designed an anchored space for the agent's full reasoning. This allows for dense diagnostics without obstructing the primary driving instruments.",
        zh: '此时用户并非在闲聊，而是在获取车辆深层状态的诊断信息。我为 AI 的完整推理过程设计了一个专属的视觉信息域。这样既能呈现高密度的诊断信息，又不会遮挡主仪表盘。',
      },
      media: 'images/ai-voice/solution_high_assurance.png',
    },
  ],
  takeaways: {
    title: {
      en: 'Final Takeaways',
      zh: '总结',
    },
    intro: {
      en: "Designing this framework forced me to rethink how we apply AI UX patterns. What works for a desktop AI tool often needs careful recalibration for a vehicle. Here is what I learned about bridging that gap:",
      zh: '设计这套框架，促使我重新审视 AI UX 模式的应用。在桌面端行之有效的 AI 工具，置于车内往往需要精细的重新调校。关于如何跨越这道鸿沟，我总结了以下经验：',
    },
    items: [
      {
        title: {
          en: 'Dynamic UIs must prioritize "Adaptive Density"',
          zh: '动态 UI 必须优先考虑"适应性信息密度"',
        },
        content: {
          en: "A dynamic UI on a laptop is usually about keeping the user in a creative flow state. In a car, it's about matching the interface to the driver's shifting cognitive load. The UI must dynamically scale its density—expanding into a rich, conversational canvas when the car is parked, but stripping down to minimum when the driver is navigating heavy traffic.",
          zh: '在桌面端，动态 UI 通常是为了维持用户的创造力心流。但在车内，它必须与驾驶员波动的认知负荷相匹配。UI 必须能够动态调节其信息密度——在停车时展开为丰满的对话画布，而在复杂路况下精简至绝对底线。',
        },
      },
      {
        title: {
          en: 'True context-awareness decouples "intelligence" from "interruption"',
          zh: '真正的上下文感知是将"智能"与"打扰"解耦',
        },
        content: {
          en: "On a phone, a context-aware AI proactively surfaces tools to keep you engaged. In a vehicle, context-awareness is the art of restraint. It is tempting to prove an AI's intelligence by having it actively participate, but every visible or audible prompt is a tax on the driver's attention. I learned to divide participation into two tracks: ambient (silent, background calculations) and active (voice or UI). Designing this UX was less about crafting what the system says, and more about engineering the exact threshold for when it earns the right to interrupt.",
          zh: '在手机上，上下文感知的 AI 会主动推送工具以抢占用户时长。但在车内，上下文感知是一门克制的艺术。我们很容易为了证明 AI 的智能而让它频繁发声，但每一次视觉或听觉提示都在消耗驾驶员的注意力带宽。我学会了将交互分为两条轨道：隐性（后台静默计算）和显性（语音或 UI 提示）。设计这种 UX 的核心不在于打磨系统"说什么"，而是精准设定它何时有资格打断驾驶员的阈值。',
        },
      },
      {
        title: {
          en: 'The AI must seamlessly transition between "Buddy" and "Subordinate"',
          zh: 'AI 必须在"伙伴"与"助手"之间无缝切换',
        },
        content: {
          en: 'The tech industry frequently frames AI as a conversational "buddy," and many automakers are exploring this. However, I learned that an in-car AI cannot only be a buddy. During a long, monotonous stretch of highway, it can safely act as an engaging peer. But the moment the driving task becomes demanding, it must instantly transition into a strict, reliable subordinate. Trust in the cockpit isn\'t just about friendly conversation; it\'s about the system proving it knows when safety takes absolute precedence.',
          zh: '科技行业习惯将 AI 包装为拟人化的"伙伴"，许多车企也在效仿。然而我意识到，车载 AI 不能仅仅是陪聊伙伴。在漫长乏味的高速公路上，它可以是引人入胜的同行者；但一旦驾驶任务变得严苛，它必须瞬间切换为严谨、可靠、绝对服从的数字执行者。座舱内的信任感不仅来源于友好的交流，更取决于系统能否证明：它懂得安全永远高于一切。',
        },
      },
    ],
  },
};
