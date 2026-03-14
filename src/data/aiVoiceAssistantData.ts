export interface AIVoiceAssistantData {
  hero: {
    heroImage: string;
    title: string;
    logoImage: string;
    description: string;
    annotation: string;
  };
  metadata: {
    role: string;
    team: string[];
    impact: string;
  };
  oneMinuteOverview: {
    problem: string;
    challenges: string;
    solutions: {
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
    content: string[];
    media: string;
  };
  mentalModel: {
    title: string;
    content: string;
    diagram: string;
  };
  architecture: {
    title: string;
    content: string;
    diagram: string;
  };
  solutions: Array<{
    title: string;
    subtitle: string;
    description: string;
    media: string;
    isMultiPart?: boolean;
    additionalContent?: string;
    additionalMedia?: string;
  }>;
  takeaways: {
    title: string;
    intro: string;
    items: Array<{
      title: string;
      content: string;
    }>;
  };
}

export const aiVoiceAssistantData: AIVoiceAssistantData = {
  hero: {
    heroImage: '/public/images/ai-voice/hero.png',
    title: 'AI Voice Assistant',
    logoImage: '/public/images/volvo-logo.png',
    description:
      "Xiaowo is Volvo's AI-integrated in-vehicle voice assistant. I led the end-to-end UX design, creating an intent-adaptive interaction framework that balances the power of LLMs with strict driving safety standards.",
    annotation:
      '*Since the product has not officially launched yet, I am not able to show the actual design pieces — thus, this case study would focus more on my decision making and design process.',
  },
  metadata: {
    role: 'Lead Product designer',
    team: ['Smartification · HMI'],
    impact:
      "Leadership Buy-in ·  New Design Standard",
  },
  oneMinuteOverview: {
    problem:
      "Users' expectations for in-car voice assistants have shifted, yet Volvo's existing solution was underutilized. Our research revealed a critical gap: powerful features were going unnoticed, and some interactions actually compromised driving focus. The experience lacked brand differentiation and safety alignment.",
    challenges:
      "Integrating Generative AI into the cockpit created a paradox. Large Language Models (LLMs) are incredibly smart but inherently verbose. Unconstrained conversation in a driving environment isn't a feature—it's a safety hazard. We needed to reposition the voice assistant as a subordinate, multimodal layer rather than a dominant 'chatbot.'",
    solutions: {
      intro: 'I led the end-to-end UX design of an intent-adaptive conversational framework based on three pillars:',
      items: [
        {
          title: 'The New Voice Interaction Pattern',
          description:
            ': A non-intrusive UX framework that displays information without blocking driving instruments',
        },
        {
          title: 'AIGC-powered Specs',
          description:
            ": Rules that balance GenAI's open-ended nature with strict driving safety constraints.",
        },
        {
          title: 'Discoverability Loops',
          description:
            ': An onboarding process and "skills laboratory" to teach users what the AI can actually do.',
        },
      ],
    },
    impact:
      "The design passed rigorous usability testing, securing enthusiastic buy-in from product and engineering leadership. We successfully proved the concept, integrated complex AI capabilities within technical constraints, and established a new UX standard for Volvo's future conversational features.",
  },
  problem: {
    title: 'The Problem: The "Smart" Trap',
    content: [
      'The integration of Generative AI created a paradox in the cockpit. Large Language Models (LLMs) are incredibly smart, but they are also inherently verbose and open-ended. In a driving environment, an unconstrained conversation isn\'t a feature—it\'s a safety hazard.',
      'Our core challenge was to reposition the voice assistant, harnessing the power of GenAI without introducing the cognitive load of a chatbot.',
    ],
    media: '/public/images/ai-voice/problem_requirements.png',
  },
  mentalModel: {
    title: 'Mental Model',
    content:
      "Traditional AI assistants fail in cars because they treat 'chatting' as the ultimate goal. For Volvo, I had to redefine success: intelligence isn't measured by verbosity, but by managing the tension between the driver's needs and the vehicle's data. The mental model I established was built entirely around cognitive alignment. Instead of just giving an answer, the system must first identify the driver's intention, analyze the current vehicle state, and then output a response scaled to the current driving context.",
    diagram: '/public/images/ai-voice/mental_modal.png',
  },
  architecture: {
    title: 'Architecture: An Intent Adaptive Framework',
    content:
      'Designing for this complexity meant abandoning the traditional chat window. I built a Dynamic Surface System instead. These flexible UI containers scale based on user engagement—they stay compact to preserve critical driving anchors, but expand to show the AI\'s full reasoning when the driver explicitly asks.',
    diagram: '/public/images/ai-voice/architecture.png',
  },
  solutions: [
    {
      title: 'Reflexive Flow',
      subtitle: 'e.g. "Open the window"',
      description:
        "The user gives a direct command and expects immediate action. The system executes with zero visual distraction. The driver's eyes stay on the road.",
      media: '/public/images/ai-voice/solution_reflexive_flow.mp4',
    },
    {
      title: 'Tactical Intervention',
      subtitle: 'e.g. "Open the trunk"',
      description:
        'When the VA initiates a safety change or the user requests a vehicle adjustment, they need tactile affordance. The interaction is urgent and requires focused confirmation beyond voice alone.',
      media: '/public/images/ai-voice/solution_tactical_intervention.mp4',
    },
    {
      title: 'Selective Engagement',
      subtitle: 'e.g. "What is Labubu?"',
      description:
        'The value is in the content, but the driver\'s attention is scarce. I created a way to "bookmark" intelligence. The system shows a lightweight teaser capsule.',
      media: '/public/images/ai-voice/solution_selective_engagement_1.mp4',
      isMultiPart: true,
      additionalContent:
        'Once the vehicle reaches a safe state (e.g., parked or at a red light), the user\'s cognitive budget increases, and they can expand the capsule to shift from "skimming" to "consuming."',
      additionalMedia: '/public/images/ai-voice/solution_selective_engagement_2.png',
    },
    {
      title: 'High-Assurance Verification',
      subtitle: 'e.g. "Why is dim light on?"',
      description:
        "Here, the user isn't chatting; they are looking for the truth about a situation or complex vehicle status. I designed an anchored space for the agent's full reasoning. This allows for dense diagnostics without obstructing the primary driving instruments.",
      media: '/public/images/ai-voice/solution_high_assurance.png',
    },
  ],
  takeaways: {
    title: 'Final Takeaways',
    intro:
      'Designing this framework forced me to rethink how we apply AI UX patterns. What works for a desktop AI tool often needs careful recalibration for a vehicle. Here is what I learned about bridging that gap:',
    items: [
      {
        title: 'Dynamic UIs must prioritize "Adaptive Density"',
        content:
          'A dynamic UI on a laptop is usually about keeping the user in a creative flow state. In a car, it\'s about matching the interface to the driver\'s shifting cognitive load. The UI must dynamically scale its density—expanding into a rich, conversational canvas when the car is parked, but stripping down to minimum when the driver is navigating heavy traffic.',
      },
      {
        title: 'True context-awareness decouples "intelligence" from "interruption"',
        content:
          'On a phone, a context-aware AI proactively surfaces tools to keep you engaged. In a vehicle, context-awareness is the art of restraint. It is tempting to prove an AI\'s intelligence by having it actively participate, but every visible or audible prompt is a tax on the driver\'s attention. I learned to divide participation into two tracks: ambient (silent, background calculations) and active (voice or UI). Designing this UX was less about crafting what the system says, and more about engineering the exact threshold for when it earns the right to interrupt.',
      },
      {
        title: 'The AI must seamlessly transition between "Buddy" and "Subordinate"',
        content:
          'The tech industry frequently frames AI as a conversational "buddy," and many automakers are exploring this. However, I learned that an in-car AI cannot only be a buddy. During a long, monotonous stretch of highway, it can safely act as an engaging peer. But the moment the driving task becomes demanding, it must instantly transition into a strict, reliable subordinate. Trust in the cockpit isn\'t just about friendly conversation; it\'s about the system proving it knows when safety takes absolute precedence.',
      },
    ],
  },
};
