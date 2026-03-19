# Portfolio Draft EN

# Vibe Coding in Practice: How a Designer Directed AI to Build a Frontend Project from Scratch

This is a practical record of breaking free from the constraints of traditional "no-code" website builders to construct a personal portfolio from scratch using AI tools. In this project, I didn't write frontend code line by line. Instead, I used my Figma design as the absolute visual baseline and directed a "digital team" of Claude Code and Gemini, completing the entire loop from establishing foundational Design Tokens to implementing React + Tailwind pages.

This review won't list dry prompt engineering tricks. Instead, it offers a real look from a UX designer's perspective at navigating Vibe Coding. It's about attempting to build a systematic workflow, controlling AI "hallucinations," and fighting cognitive load during complex code generation to ultimately achieve pixel-perfect execution.

## Why Abandon Established Site Builders?

When I started building my personal site, my first instinct was to use no-code tools like Framer or Figma Site. Their advantage is obvious: they let me stay within my comfort zone and quickly turn familiar design workflows into live frontend pages. But the problem is that the moment you touch specific interaction details, complex responsive logic, or custom web animations, the limitations of these tools become glaringly apparent.

As a UX designer, I still want pixel-level control over the final web presentation, but I don't want to burn massive amounts of time hand-coding frontend tags from scratch. The rise of Vibe Coding offered a way out. It gave me access to React and underlying code logic, while utilizing AI to drastically compress the learning curve of manual coding.

## Building My "Digital Team": Tools and Roles

Real Vibe Coding isn't just opening a code editor and blindly typing requests. I treat it like assembling a development team made of different AI tools, letting each handle the specific stage it excels at.

- **Gemini (The PM)**: Throwing massive walls of natural language directly at a coding model usually leads to misunderstandings and wasted tokens. I generally have Gemini act as my PM first. It helps me untangle the logic and translates my natural language into structured technical terms and clear steps before passing the task to the execution side.
- **Claude Code (The Frontend Dev)**: The pure executor. It handles the actual code generation, error debugging, and refactoring.
- **Figma + MCP (The Design Baseline)**: As a designer, this is my Single Source of Truth. It's not just a drafting tool; it's the precise data source that feeds visual specifications to the AI.
- **The Stack**: For this web project, rendering frontend pages was the only requirement. I settled on React paired with Tailwind CSS, bringing in an open-source component library like shadcn/ui for customization.

## Workflow: The 0-to-1 Build Loop

Naturally, my workflow starts with page design. Even though I sometimes feel my own aesthetic sense might not beat the output of certain AI visual skills, getting hands-on during the design phase allows me to precisely dictate the project's visual intent and design framework.

While I have a basic coding background, I had never truly participated in a 0-to-1 frontend programming project before. Initially, I tried to take a shortcut—cloning an open-source GitHub repository and asking the AI to comprehend someone else's code before modifying it. I quickly discovered that this approach offers terrible control over the details. Watching the AI generate UIs that were just slightly off from my original design draft was torture for my OCD. Repeatedly debugging just to adjust a margin or align an element ended up burning far more tokens and energy.

After those headaches, I took a much more cautious approach before genuinely starting the build. I decided to lay a rock-solid foundation to prevent the AI from generating too many "hallucinations" that would lead to endless rework. I learned to configure MCP, installed the relevant Skills, and used NotebookLM to generate universal `claude.md` rules for the project. These rules explicitly defined the AI's standard execution path (Read Page Spec -> Access Figma -> Plan -> Execute -> Audit). This maximized the chances that the AI and I were on the exact same page.

With the environment prepped, I didn't rush the AI into generating specific pages. I had it build the Design System first. We heavily customized an existing public UI library. The process is remarkably similar to a designer building a Design Library; it's fundamentally atomic-to-component development. The AI established foundational Design Tokens based on my specs and strictly aligned the Tailwind configuration.

Only after this foundation was completely set did we move into the 0-to-1 code generation phase. Thanks to the upfront rule constraints and component limitations, the AI's output during page assembly became highly stable. And throughout this ongoing process, I was Vibe Coding while simultaneously filling gaps and learning actual code architecture.

## The Reality of the Process

Looking back at the entire run, the time I spent actually typing code was minimal. Most of the time, my role felt more like a strict code reviewer, handing off component breakdowns and responsive logic for the AI to execute. Sometimes, the web animation solutions it provided felt even more natural than what I had originally envisioned.

But that doesn't mean it was easy. Vibe Coding inherently demands extreme project management skills—you are essentially directing several tireless AI assistants simultaneously. In the early stages of the project, as context bounced rapidly across multiple files, my cognitive load spiked. It was incredibly easy to lose my bearings entirely in the chaotic state of tasks.

To counter this, I brought in skills like `planning-with-files` to force progress tracking. Concurrently, I dumped all PRDs, debug logs, and system prompts into NotebookLM to build a project-specific knowledge base. Now, when I hit a thorny component interaction issue, I prioritize querying my own knowledge base for a verified solution, rather than blindly asking Claude Code to regenerate the code.

## Takeaways: Building a Reusable Vibe Coding System

Although this project consumed more time than initially expected, it successfully proved out a complete loop from Figma straight to frontend delivery. Stepping back from the specific code implementation, this practice left me with three foundational takeaways:

**1. Infrastructure sets your workflow ceiling.**
When facing a brand-new development demand, the temptation is strong to throw it directly at the AI and ask it to write code immediately. But blind execution usually ends up lost in a sea of errors. My biggest lesson from this project: infrastructure is critically important. Before typing the first line of code, you must figure out exactly what problem the AI is solving, list clear goals and implementation steps, and properly integrate tools like Figma, MCP, and rule documents. Once the environment is stable, execution simply falls into place.

**2. Work fast, but don't just follow.**
Vibe Coding makes it easy to form a habit: hitting a problem and immediately throwing the error log at the AI. It seems fast, but in reality, you sink massive amounts of time into "describing the problem to the AI," and the answer you get isn't necessarily the optimal one. I realized that hunting for answers on the fly is highly inefficient. What matters more is continuously building a knowledge reserve, documenting the high-quality solutions found during trial and error. A knowledge base doesn't just serve you personally; when an error occurs, the AI can also tap into this reserve to identify a better path forward, rather than passively running in circles following random AI outputs.

**3. Take control of AI to avoid tool fatigue.**
There's been a lot of discussion online recently about "AI fatigue," and it resonates deeply with me. New efficiency tools and workflows pop up constantly. Sometimes, while sketching out a design, I catch myself wondering: *Would it be faster if I just generated this with AI?* But the experience of this project confirmed something for me: abandoning active thinking in the pursuit of speed is the most dangerous trap. AI is an excellent engine for executing details. But the solution to the problem, the definition of boundaries, and the final acceptance criteria must remain firmly in the designer's grip. Rather than stressing over keeping up with every dazzling new tool, energy is better spent learning and accumulating personal skills.