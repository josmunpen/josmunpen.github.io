---
title: "Attention-less"
publishDate: 2026-08-15
description: "Lack of attention in the age of attention mechanisms"
tags: [ developer-experience, productivity, ai ]
draft: true
---

*Attention Is All You Need* [^1] was a turning point. It showed that attention alone could power language models at scale, setting the direction for modern LLMs.

Who would have thought that, 9 years later, I'd be wondering whether transformers cause attention problems. But a different kind. Let me explain. You have a task. You sketch a solution or ask a coding agent for a plan. You make some adjustments and say "Let's go." And in that moment, your attention drifts. You know you have a few seconds or minutes with no serious cognitive work required, and you relax automatically.
In my case, that usually means checking my chats, opening email, reviewing pending tasks.

Some people argue that a developer should work with n agents, n being the number of tasks that makes you the bottleneck. The agents wait on you, not the other way around.

I've been trying different approaches. One: launching up to 5 tasks in parallel, then reviewing them in round-robin order - task 1, task 2, task 3, 4, 5, repeat.
For me this isn't natural. On each round, I can barely recover the context of the previous task before the next one is already waiting. I rush, and things don't get the attention they deserve.

Another approach: take one task, and while the coding agent works, either follow its tool executions obsessively (not easy to read) or look at the involved code in parallel.
Two problems with this: one, it doesn't get the most out of parallelizing async work with agents. Two, it's a cognitive effort that's hard to commit to when you have a very comfortable alternative: not making that effort, waiting, checking your phone, opening email.

I don't have a clear solution. The only thing that's working for me - at least enough to end the day with some brain cells left - is keeping my phone out of the room and working in 20-minute focus sessions. During those 20 minutes: no changing songs, no unlocking my phone, no replying to Teams. And while the agent works, I force myself to review the code or think through the solution instead of constantly context-switching. I try to work with up to 2 agents in parallel depending on task complexity, but I haven't managed to push the async value higher without hurting my focus or the quality of my work.

*Attention Is All You Need*. Just not in the way we thought.

[^1]: Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). [Attention Is All You Need](https://arxiv.org/abs/1706.03762). *NeurIPS 2017*.
