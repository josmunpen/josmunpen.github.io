---
title: "On AI-powered superpowers and how to keep them in check"
publishDate: 2026-09-2
description: "AI makes it easier than ever to build faster, but also to overbuild. A small framework I use to slow down, understand the problem, and avoid complexity."
tags: [ personal ]
---

I don’t know if you have a colleague who lately feels like they’re on top of the world. Someone who, compared to a year ago, now seems capable of doing everything better and faster than everyone else.

These people think everything is extremely simple, that anything can be done in less time and that, probably, their dick is a few centimetres bigger than everyone else’s.

Honestly, just because you can ship a feature in 30 minutes doesn’t mean you should.

Without a minimum amount of review, we can generate absurd amounts of code that, quite often, become almost impossible for a human to debug. We end up building pieces that are practically only maintainable by agents. But that’s a topic for another day.

And I’m not only talking about speed. I’m also starting to see excessive complexity as a recurring pattern.

I can understand why. It’s easier than ever to get carried away: AI gives any developer a feeling of superpowers because it does so much of the heavy lifting.

I think that little bit of ego has always existed between software engineers, and getting too excited and building something much more complex than necessary was already a fairly common mistake. But lately it feels like the wave is getting a little too big.

Look how cool my new SQL connection pool handler is.

Let’s reinvent the wheel. Why not?

Make absolutely everything configurable. It doesn’t matter if 90% of those parameters will never change.

Look how configurable my component is.

___

The developers I’ve learned the most from have always been the ones who don’t talk much and keep their PRs restrained.

They’re like that boxer who doesn’t spend the whole round throwing punches. But when they finally throw one, you’re going down.

The things they build are robust and made to last, like an ’80s washing machine or a soviet Lada.

Not long ago, the Ponytail skill blew up, and I think it has a lot to do with this. I should probably try it at some point. [^1]

___

After that little rant, I wanted to share the analysis exercise I try to follow when maintaining or improving these kinds of components.

It may sound like an obvious process, but I have to admit that I tend to underestimate problems, skip the first three steps, and jump straight into implementation.

So I thought it might be useful to write it down.

### 1. Requirements analysis

This is about understanding, in detail, what a piece of software actually does: its purpose, how it fits into the rest of the architecture, which business logic it contains, who consumes it, and what behavior is expected from it.

For me, this is the most important step and probably the one I fail at most often: I jump into reimplementing things before I’ve finished a proper analysis.

But even if something is a shitty solution, there’s one important fact: it works right now. And if it works, there are probably decisions, edge cases, or behaviors you didn’t notice on your first read and that you need to identify before rebuilding it.

### 2. Look for bugs and problems

Once the requirements are clear, it’s time to look for problems in the current implementation, with the help of whatever coding agent you are using.

Maybe you already identified one particular issue, but there may be others worth finding before implementing anything.

For example, not long ago I was reviewing a process that was excessively slow. I noticed it was running far more queries than necessary. But there was also a concurrency issue I hadn’t spotted at first.

That’s what this step is for. Before changing anything, I try to understand everything that’s broken.

### 3. Design and planning

Next, it’s time to design an implementation, ideally one that is 100% compatible with the previous one.

Here, I think it’s especially important to identify any potential changes in interfaces, contracts, or observable behavior. The priority is not to break the pieces that already communicate with ours.

If something does need to change, identify it and leave tests in place that make that change traceable.

Existing tests should also be reviewed, and any necessary changes planned, so we can make sure that every point of communication with our component will keep working or, if not, apply whatever changes are needed for the new interface.

The question is: Will everything that worked before still work after this change? And when the answer is no, you should know exactly what needs to be adapted.

### 4. Implementation

Once the plan is ready, we get to the easiest part :)

Say:

“Ok, implement the plan.”
___

There are extra steps you can add, like writing the tests first (TDD) so you don’t drift away from the expected behavior, but I want to keep this flow as simple as possible so I can always keep it in mind:

**Understand and analyze → Look for other problems → Design → Implement.**

This may sound stupid, but sometimes you just can’t get out of the loop of adding patch after patch to a component. At least I can’t.

And I think coding agents make it easier than ever to fall into that loop without ever really stopping to understand the thing you’re changing.

Part of learning how to develop with these tools is knowing when to use those superpowers. And stopping for a moment to check whether doing so actually makes sense. Haven’t you watched *Batman v Superman*?

I hope you found this interesting, or maybe even useful.


[^1]: Gebert, D. [Ponytail — The best code is the code you never wrote](https://github.com/DietrichGebert/ponytail).

[^2]: Skinner, J. (2026). [Cleaning up after AI rockstar developers](https://www.jesseskinner.com/blog/rockstar-developers/).