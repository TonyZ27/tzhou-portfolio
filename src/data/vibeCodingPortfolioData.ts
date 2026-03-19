export const vibeCodingPortfolioData = {
  hero: {
    heroImage: 'images/portfolio-cover.png',
    title: {
      en: 'Vibe Coding in Practice',
      zh: 'Vibe Coding 实战复盘',
    },
    description: {
      en: 'This is a practical record of breaking free from the constraints of traditional "no-code" website builders to construct a personal portfolio from scratch using AI tools. In this project, I didn\'t write frontend code line by line. Instead, I used my Figma design as the absolute visual baseline and directed a "digital team" of Claude Code and Gemini, completing the entire loop from establishing foundational Design Tokens to implementing React + Tailwind pages.',
      zh: '这是一个跳出传统"无代码"建站工具限制，利用AI工具从零构建个人作品集网站的实战记录。在这个项目中，我没有逐行手写前端代码，而是将 Figma 设计稿作为唯一的视觉基准，通过指挥 Claude Code 和 Gemini 这支"数字团队"，完成了从底层 Design Token 建立到 React + Tailwind 页面实现的闭环。',
    },
    annotation: {
      en: 'This review won\'t list dry prompt engineering tricks. Instead, it offers a real look from a UX designer\'s perspective at navigating Vibe Coding — attempting to build a systematic workflow, controlling AI "hallucinations," and fighting cognitive load during complex code generation to ultimately achieve pixel-perfect execution.',
      zh: '这篇复盘不会罗列干瘪的 Prompt 技巧，而是从 UX 设计师的视角出发，真实还原我如何在 Vibe Coding 中摸滚打爬，尝试通过系统化的工作流，控制 AI 的"幻觉"，并在复杂的代码生成过程中对抗认知负荷，最终实现像素级还原的技术落地。',
    },
  },

  metadata: {
    role: {
      en: 'Designer × Developer',
      zh: '设计师 × 开发者',
    },
    team: [
      { en: 'Claude Code', zh: 'Claude Code' },
      { en: 'Gemini', zh: 'Gemini' },
    ],
    time: '2026',
    stack: {
      en: 'React · Tailwind · Figma · MCP',
      zh: 'React · Tailwind · Figma · MCP',
    },
  },

  whyAbandon: {
    title: {
      en: 'Why Abandon Established Site Builders?',
      zh: '为什么放弃成熟的建站工具？',
    },
    content: {
      en: 'When I started building my personal site, my first instinct was to use no-code tools like Framer or Figma Site. Their advantage is obvious: they let me stay within my comfort zone and quickly turn familiar design workflows into live frontend pages. But the problem is that the moment you touch specific interaction details, complex responsive logic, or custom web animations, the limitations of these tools become glaringly apparent.<br/><br/>As a UX designer, I still want pixel-level control over the final web presentation, but I don\'t want to burn massive amounts of time hand-coding frontend tags from scratch. The rise of Vibe Coding offered a way out. It gave me access to React and underlying code logic, while utilizing AI to drastically compress the learning curve of manual coding.',
      zh: '在搭建个人网站时，我一开始尝试使用 Framer 或 Figma Site 这类无代码工具。它们的优势很明显：能在我的舒适区内，快速把我熟悉的设计工作流转化为可上线的前端页面。但问题在于，一旦涉及特定的交互细节、复杂的自适应逻辑或定制化的网页动画，这些工具的局限性就会凸显出来。<br/><br/>作为一名 UX 设计师，我仍希望对最终的网页呈现有像素级的把控力，但我并不想将大量时间耗费在从零手写前端标签上。Vibe Coding 的兴起为解决这个问题提供了一种思路。它让我能够触及 React 和更底层的代码逻辑，同时利用 AI 大幅压缩了手搓代码的学习成本。',
    },
  },

  digitalTeam: {
    title: {
      en: 'Building My "Digital Team": Tools and Roles',
      zh: '构建我的"数字团队"：工具栈与角色分配',
    },
    intro: {
      en: "Real Vibe Coding isn't just opening a code editor and blindly typing requests. I treat it like assembling a development team made of different AI tools, letting each handle the specific stage it excels at.",
      zh: '真正的 Vibe Coding 并不是打开一个代码编辑器然后盲目输入需求。我把它看作是组建一个由不同 AI 工具构成的开发团队，每个工具都在自己最擅长的环节发挥作用。',
    },
    items: [
      {
        title: { en: 'Gemini (The PM)', zh: 'Gemini（产品经理）' },
        description: {
          en: "Throwing massive walls of natural language directly at a coding model usually leads to misunderstandings and wasted tokens. I generally have Gemini act as my PM first. It helps me untangle the logic and translates my natural language into structured technical terms and clear steps before passing the task to the execution side.",
          zh: '直接向写代码的大模型下达长篇大论的自然语言，往往会导致理解偏差和 Token 的浪费。我通常先让 Gemini 充当 PM，帮我梳理逻辑，将自然语言转化为结构化的技术术语和明确的步骤，再传递给执行端。',
        },
      },
      {
        title: { en: 'Claude Code (The Frontend Dev)', zh: 'Claude Code（前端开发）' },
        description: {
          en: 'The pure executor. It handles the actual code generation, error debugging, and refactoring.',
          zh: '纯粹的执行者，负责具体的代码生成、报错调试和重构。',
        },
      },
      {
        title: { en: 'Figma + MCP (The Design Baseline)', zh: 'Figma + MCP（设计基准）' },
        description: {
          en: "As a designer, this is my Single Source of Truth. It's not just a drafting tool; it's the precise data source that feeds visual specifications to the AI.",
          zh: '作为设计师，这是我的 Single Source of Truth。它不仅是作图工具，更是向 AI 传递视觉规范的精准数据源。',
        },
      },
      {
        title: { en: 'The Stack', zh: '技术栈选型' },
        description: {
          en: 'For this web project, rendering frontend pages was the only requirement. I settled on React paired with Tailwind CSS, bringing in an open-source component library like shadcn/ui for customization.',
          zh: '对于这个网页项目，展示前端页面足以。我敲定了 React 加上 Tailwind CSS，并引入 shadcn/ui 这类开源组件库进行定制。',
        },
      },
    ],
  },

  workflow: {
    title: {
      en: 'Workflow: The 0-to-1 Build Loop',
      zh: '工作流：从 0 到 1 的完整构建链路',
    },
    content: {
      en: "Naturally, my workflow starts with page design. Even though I sometimes feel my own aesthetic sense might not beat the output of certain AI visual skills, getting hands-on during the design phase allows me to precisely dictate the project's visual intent and design framework.<br/><br/>While I have a basic coding background, I had never truly participated in a 0-to-1 frontend programming project before. Initially, I tried to take a shortcut — cloning an open-source GitHub repository and asking the AI to comprehend someone else's code before modifying it. I quickly discovered that this approach offers terrible control over the details. Watching the AI generate UIs that were just slightly off from my original design draft was torture for my OCD. Repeatedly debugging just to adjust a margin or align an element ended up burning far more tokens and energy.<br/><br/>After those headaches, I took a much more cautious approach before genuinely starting the build. I decided to lay a rock-solid foundation to prevent the AI from generating too many \"hallucinations\" that would lead to endless rework. I learned to configure MCP, installed the relevant Skills, and used NotebookLM to generate universal <code>claude.md</code> rules for the project. These rules explicitly defined the AI's standard execution path (Read Page Spec → Access Figma → Plan → Execute → Audit). This maximized the chances that the AI and I were on the exact same page.<br/><br/>With the environment prepped, I didn't rush the AI into generating specific pages. I had it build the Design System first. We heavily customized an existing public UI library — the process is remarkably similar to a designer building a Design Library; it's fundamentally atomic-to-component development. The AI established foundational Design Tokens based on my specs and strictly aligned the Tailwind configuration.<br/><br/>Only after this foundation was completely set did we move into the 0-to-1 code generation phase. Thanks to the upfront rule constraints and component limitations, the AI's output during page assembly became highly stable. And throughout this ongoing process, I was Vibe Coding while simultaneously filling gaps and learning actual code architecture.",
      zh: '作为一名 UX 设计师，我的工作流自然是从页面设计开始的（虽然有时候觉得自己的审美可能还比不上一些 AI Skills 产出的效果），但在设计阶段亲自上手，能让我精确把控项目视觉意图和设计框架。<br/><br/>虽然我有一些基础的代码背景，但此前并没有真正参与过前端从 0 到 1 的编程项目。最初，我也尝试过走捷径——直接克隆一个开源的 Github 仓库，让 AI 先去理解别人的代码再进行修改。但我很快发现，这种方式对细节的把控度极低。看着 AI 生成的 UI 界面与我的原始设计稿总有微妙的出入，对于有强迫症的我来说简直是折磨。为了调整一个间距或是对齐元素而反复 Debug，反而消耗了更多的 Token 和精力。<br/><br/>有了先前令人头大的经验，这次在真正开始构建网站前，我变得更加谨慎。我决定狠狠打牢基础，以免 AI 产生过多的"幻觉"导致后续反复返工。我学习着首先配置好了 MCP 并安装了相关的 Skills，同时结合 NotebookLM 生成了项目通用的 <code>claude.md</code> 规则。这个规则明确了 AI 的标准执行路径（读取 Page Spec → 访问 Figma → 规划方案 → 执行代码 → 审查校验）。这最大程度上保证了我和 AI 的理解同频。<br/><br/>环境就绪后，我没有急于让 AI 生成具体页面，而是让它先搭建 Design System。我们在现有的公开 UI 库上进行深度定制。这个过程和设计师搭建 Design Library 非常相似，本质上都是从原子到组件化的开发。AI 会根据我的规范建立底层的 Design Token，并严格对齐 Tailwind 的配置。<br/><br/>当地基完全打牢之后，才真正进入从 0 到 1 的代码生成阶段。有了前置的规则约束和组件库限制，后续拼装页面时 AI 的输出变得非常稳定。而我也在这个持续推进的过程中，一边 Vibe Coding，一边填补和学习真实的代码知识。',
    },
  },

  reality: {
    title: {
      en: 'The Reality of the Process',
      zh: '真实体感',
    },
    content: {
      en: 'Looking back at the entire run, the time I spent actually typing code was minimal. Most of the time, my role felt more like a strict code reviewer, handing off component breakdowns and responsive logic for the AI to execute. Sometimes, the web animation solutions it provided felt even more natural than what I had originally envisioned.<br/><br/>But that doesn\'t mean it was easy. Vibe Coding inherently demands extreme project management skills — you are essentially directing several tireless AI assistants simultaneously. In the early stages of the project, as context bounced rapidly across multiple files, my cognitive load spiked. It was incredibly easy to lose my bearings entirely in the chaotic state of tasks.<br/><br/>To counter this, I brought in skills like <code>planning-with-files</code> to force progress tracking. Concurrently, I dumped all PRDs, debug logs, and system prompts into NotebookLM to build a project-specific knowledge base. Now, when I hit a thorny component interaction issue, I prioritize querying my own knowledge base for a verified solution, rather than blindly asking Claude Code to regenerate the code.',
      zh: '整个项目跑下来，我实际手敲代码的时间很少。大多数时候，我的角色更像是一个严格的代码审核员，将组件拆解和适配逻辑交给 AI 去执行。有时它给出的网页动效方案，甚至比我原本的设想还要自然。<br/><br/>但这并不意味着轻松。Vibe Coding 本质上是对项目管理能力的极高要求，你相当于同时在指挥几个不知疲倦的 AI 助手。项目初期，由于上下文在多个文件中频繁跳跃，我的认知负荷迅速飙升，很容易在繁杂的任务状态中迷失方向。<br/><br/>对此我引入了 <code>planning-with-files</code> 这类技能来强制追踪任务进度。同时，我将所有的 PRD、报错复盘以及系统提示词统一整理到 NotebookLM 中，搭建了一个项目专属的知识库。现在遇到棘手的组件联动问题，我会优先向自己的知识库提问，获取经过验证的解决方案，而不是盲目地让 Claude Code 重新生成代码。',
    },
  },

  takeaways: {
    title: {
      en: 'Takeaways: Building a Reusable Vibe Coding System',
      zh: '总结与进阶：构建可复用的 Vibe Coding 体系',
    },
    intro: {
      en: 'Although this project consumed more time than initially expected, it successfully proved out a complete loop from Figma straight to frontend delivery. Stepping back from the specific code implementation, this practice left me with three foundational takeaways:',
      zh: '虽然这个项目耗费的时间超出了最初的预期，但它帮我跑通了一套从 Figma 到前端交付的完整闭环。跳出具体的代码实现，这次实践为我带来了三个更为底层的思考：',
    },
    items: [
      {
        title: {
          en: '1. Infrastructure sets your workflow ceiling.',
          zh: '1. 基建决定了工作流的上限',
        },
        content: {
          en: "When facing a brand-new development demand, the temptation is strong to throw it directly at the AI and ask it to write code immediately. But blind execution usually ends up lost in a sea of errors. My biggest lesson from this project: infrastructure is critically important. Before typing the first line of code, you must figure out exactly what problem the AI is solving, list clear goals and implementation steps, and properly integrate tools like Figma, MCP, and rule documents. Once the environment is stable, execution simply falls into place.",
          zh: '面对全新的开发需求，我们常常会忍不住直接抛给 AI 让它立刻写代码，但盲目执行很容易在各种报错中迷失方向。这次项目最大的经验是：基建无比重要。在敲下第一行代码前，必须先想清楚到底要用 AI 解决什么问题，列出清晰的目标和实现步骤，并把 Figma、MCP、规则文档这些工具真正集成好。环境搭稳了，执行只是水到渠成。',
        },
      },
      {
        title: {
          en: '2. Work fast, but don\'t just follow.',
          zh: '2. 保持思考，而不是被动跟随',
        },
        content: {
          en: "Vibe Coding makes it easy to form a habit: hitting a problem and immediately throwing the error log at the AI. It seems fast, but in reality, you sink massive amounts of time into \"describing the problem to the AI,\" and the answer you get isn't necessarily the optimal one. I realized that hunting for answers on the fly is highly inefficient. What matters more is continuously building a knowledge reserve, documenting the high-quality solutions found during trial and error. A knowledge base doesn't just serve you personally; when an error occurs, the AI can also tap into this reserve to identify a better path forward, rather than passively running in circles following random AI outputs.",
          zh: 'Vibe Coding 很容易让人养成一个习惯：遇到问题就直接把报错信息扔给 AI。这看起来很快，但实际上把大量的时间耗费在了"向 AI 描述问题"上，而且得到的答案也未必是最优解。我开始意识到，遇到问题现找答案的效率其实很低。更重要的是平时持续积累知识储备，把试错过程中的高质量解法沉淀。知识库不仅可以为自己所用，在遇到报错时，AI 也先调动自己的知识储备去识别更有效的方法，而不是被动地跟着 AI 的随机输出兜圈子。',
        },
      },
      {
        title: {
          en: '3. Take control of AI to avoid tool fatigue.',
          zh: '3. 掌控 AI，拒绝"无脑提速"带来的疲惫',
        },
        content: {
          en: 'There\'s been a lot of discussion online recently about "AI fatigue," and it resonates deeply with me. New efficiency tools and workflows pop up constantly. Sometimes, while sketching out a design, I catch myself wondering: Would it be faster if I just generated this with AI? But the experience of this project confirmed something for me: abandoning active thinking in the pursuit of speed is the most dangerous trap. AI is an excellent engine for executing details. But the solution to the problem, the definition of boundaries, and the final acceptance criteria must remain firmly in the designer\'s grip. Rather than stressing over keeping up with every dazzling new tool, energy is better spent learning and accumulating personal skills.',
          zh: '最近网络上关于"AI 疲惫"的讨论很多，我自己也深有感触。各种提效工具和工作流层出不穷，有时候在画设计稿时我也会动摇：如果直接用 AI 生成，是不是会快很多？但这次项目的经历让我确信：为了追求速度而放弃主动思考，才是最可怕的。AI 是执行细节的极佳推手，但问题的解决方案，边界的定义和最终的验收标准，必须由设计师牢牢掌控。与其焦虑于跟不上眼花缭乱的新工具，还是要把精力放在个人技能的学习和积累。',
        },
      },
    ],
  },
};
