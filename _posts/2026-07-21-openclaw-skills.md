---
layout: post
title: OpenClaw + Skills
date: 2026-07-21 22:23:00
description: A quick look at OpenClaw and how it selects skills via its system prompt
tags: Research AI
categories: research
---

## OpenClaw

- GitHub: [openclaw/openclaw](https://github.com/openclaw/openclaw) — _"Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞"_

OpenClaw is a personal AI agent that showed up like a typhoon (?) in early 2026 (its GitHub star count is insane).
Like Hermes Agent, Claude Code, and Codex, it is an AI agent, and a flood of follow-up "Claw" projects such as NemoClaw and NanoClaw have appeared since — it has practically built its own Claw ecosystem 😮.

From my own experience using it: AI agents already existed, but OpenClaw feels like an open-source project that did an exceptionally good job on **compatibility with external apps**. As for security concerns, I think it should be fine as long as you manage permissions carefully.

It is implemented in **TypeScript**. If the language is a barrier when reading the code, I also recommend [NousResearch/Hermes Agent](https://github.com/nousresearch/hermes-agent) (_"The agent that grows with you"_), which is written entirely in **Python**. Hermes Agent is also one of the best-built open-source AI agent projects.

Plenty of blogs and YouTube videos already explain OpenClaw well, so here are a few posts I personally recommend (though the fastest way to understand it is to just use it):

- OpenClaw official blog: [https://openclaw.ai/blog](https://openclaw.ai/blog)
- OpenClaw SkillHub: [https://clawhub.ai/](https://clawhub.ai/)
- 갓대희의 작은공간 blog (Korean): [https://goddaehee.tistory.com/504](https://goddaehee.tistory.com/504)

## How Does OpenClaw Select Skills?

**My question:** Users can install lots of skills as plugins or define their own under the `/skills` folder. So how does the AI agent pick the right skill to faithfully carry out a user's query? (Is there some complex internal logic...?)

**What I found:** The system prompt is extremely long and elaborate. It contains a section labeled `# Skills (mandatory)`, and the LLM in use (e.g., `gpt-4.1-mini`) looks **only at the `name` and `description`** of each listed skill, selects one, and then reads it. That is why **writing a good name and description for each skill is so important.**

```text
# Skills (mandatory)
Before replying: scan <available_skills> entries.
If exactly one skill clearly applies: read its SKILL.md at with read, then follow it.
If multiple could apply: choose the most specific one, then read/follow it.
If none clearly apply: do not read any SKILL.md. Constraints: never read more than one skill up front; only read after selecting.
<available_skills>
<skill>
<name> Skill name </name>
<description> Skill description </description>
<location> Path to SKILL.md </location>
</skill>
...
<skill>
...
</skill>
</available_skills>
```

Seeing this, I now understand why the cloud LLM bill keeps growing when you use OpenClaw continuously. The system prompt fed in is unimaginably long. The volume of input tokens is huge, so a model that can't handle it well probably won't work properly.... :(
