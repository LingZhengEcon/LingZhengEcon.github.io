---
layout: page
title: "Skill: Theory Paper Reading"
permalink: /theory_paper_skills/
nav: false
description: A structured multi-round dialogue guide for deeply reading economics theory papers.
---

# Theory Paper

## Core Rules

- Separate every substantive answer into `【Formal Proposition】` and `【Intuition】`.
- Build understanding from three supports: intuition, example, and mathematical skeleton.
- Do not skip steps; explain one step at a time and wait for the user's cue before moving on.
- If the user explicitly asks for theorem-by-theorem coverage of the whole paper, first give a compact roadmap of theorem groups and dependencies, then proceed group by group instead of forcing single-theorem turns.
- For any multi-step explanation, first give a compact outline of the whole path, then execute only the current step. If the user asks about that step, answer it before advancing.
- Do not interleave future steps into the current step. Keep the current step self-contained.
- When a derivation has multiple algebraic or conceptual moves, expose each move explicitly instead of compressing them into one jump.
- Treat "understood" as: the user can explain why the result holds, verify it on a small example, and carry away a usable target.
- If the paper, excerpt, or abstract is missing, ask for it before proceeding.
- If the user has not filled Step 0, ask for Step 0 first and do not skip directly to later rounds.
- Keep the user-facing dialogue in Chinese unless the user asks otherwise.

## Workflow

Use the paper and the user's goal to choose one of four paths:

- `了解`: Step 0 -> Round 0.5 -> Round 1
- `读懂（完整）`: Step 0 -> Round 0.5 -> Rounds 1-7
- `只要带走目标`: Step 0 -> Round 0.5 -> Round 3 -> Round 4 -> Round 5 -> Round 7
- `扩展视野`: Step 0 -> Round 0.5 -> Round 1 -> Round 2

If the user has already provided some Step 0 answers, validate and refine them rather than asking everything again.

## Paper Map Mode

Before deep reading, when the paper is available, build a compact map:

1. Main question of the paper
2. Key definitions
3. Theorem list or theorem groups
4. Dependency chain among the main results
5. Which theorem(s) correspond to the user's carry-away target

When theorem extraction from PDF text is noisy, summarize theorem groups rather than overclaiming exact numbering.

## Stepwise Teaching Loop

When the user is learning a paper, concept, proof, or example:

1. Start with a short outline of the path you will follow.
2. Execute only the next step in that outline.
3. Stop after that step and let the user interrupt with questions.
4. If the user asks a question about the current step, resolve it before continuing.
5. Move to the next step only after the current one is clear.

Use this loop by default whenever the user's goal is understanding rather than immediate final output.

## LaTeX Note Mode

When the user asks for LaTeX notes during theory-paper reading, choose one of two modes based on the user's request:

- **Fragment mode**: output a complete `.tex` fragment that can be `\input{}` into a main file.
- **Standalone mode**: output a complete `.tex` document with preamble, title, author, and `\begin{document}` / `\end{document}` so it can compile directly to PDF.

See [references/latex-notes.md](references/latex-notes.md) for the exact output contract and template.

Use these custom environments:

- `\begin{intuition}[标题]...\end{intuition}` for intuition boxes
- `\begin{proofsketch}...\end{proofsketch}` for proof-skeleton boxes

Use these custom commands when relevant:

- `\R`
- `\N`
- `\E`
- `\Prob`
- `\1`
- `\eps`
- `\inner{x}{y}`

Format the note in this order:

1. 模型与定义
2. 核心例子
3. 核心命题
4. 证明骨架（如必要）
5. 工具卡

After each of the first five parts, include a corresponding `\begin{intuition}` block.

Inside `intuition` blocks, write only intuition supported by math or by the example. If a point is still unsupported, either resolve it before writing or leave it out of the note.

If the user does not ask for LaTeX notes, keep using the normal prose/card workflow.

## Step 0: Collect Inputs

Ask the user to provide:

1. One-sentence understanding: "Under what conditions does what hold, and how?"
2. Two categories of terms: what is unclear vs what feels familiar but cannot be stated clearly
3. The single biggest question to resolve
4. The carry-away target: a tool, proof trick, modeling method, or core concept

Treat the carry-away target as fixed once chosen.

## Round 0.5: Correct the Entry Point

After Step 0, do four things:

1. Correct the one-sentence understanding if it is off.
2. Explain each key term in the paper's technical sense.
3. Surface important keywords the user has not noticed yet.
4. Point to where the carry-away target appears and what prerequisites it needs.

## Round 1: Build Intuition

Goal: produce a preliminary intuition and mark what is still "hanging in the air".

Cover:

- The core causal chain, described in plain language and without symbols
- The central insight, first in everyday language and then in economics language
- The surprising or counterintuitive part
- Any intuition that is still unsupported by math or an example

Track every unsupported intuition because later rounds must either justify it or reject it.

When the paper is theorem-driven, explain each theorem with this template:

1. What the theorem says
2. What problem it solves in the paper
3. Proof logic in 2-5 explicit steps
4. Core intuition
5. Where it sits in the paper's main chain

Explicitly label whether the theorem provides existence, sufficiency, necessity, characterization, or a counterexample/construction.

## Round 2: Use Examples as Tests

Goal: test the intuition with a smallest-possible example.

Choose an example that:

- Uses as few players, states, or numbers as possible
- Satisfies each key assumption explicitly
- Can be checked by hand step by step
- Fails in a visible way when the key assumption is relaxed
- May contain accidental "just-so" properties that could mislead the user

If the user cannot walk through the verification, stop and ask a targeted follow-up.

When a condition fails and a result breaks, prioritize giving a smallest counterexample or a near-minimal constructed example.

## Round 3: Map the Model

Identify the model from scratch instead of forcing a template.

- State what each element is and what role it plays
- Classify the main result: existence, uniqueness, characterization, impossibility, representation, comparative statics, or something else
- Identify the most important assumption and what changes if it is removed
- Limit notation to at most five symbols when possible, and give each symbol an intuition

## Round 4: Anchor the Math

Goal: eliminate all unsupported intuitions from Round 1.

- Break the proof into steps and identify the critical step
- Match each intuitive link to the proof step that supports it
- For each major assumption, give the mathematical meaning, the intuitive meaning, and the effect of weakening it
- Separate the paper's own stated limits from limits visible from the outside

## Round 5: Carry Away the Target

Teach the carry-away target in two layers.

**Layer 1: The tool itself**

- Definition
- Core properties
- Typical use in economics
- A simple example unrelated to the paper

**Layer 2: The tool in this paper**

- Its elements and structure in this paper
- Which property drives the proof
- Where else the same pattern appears in economics
- What to watch for when the user sees a similar structure later

## Round 6: Verify Understanding

Ask the user to close the materials and answer:

1. What is the core conclusion, and why does it hold?
2. Can the Round 2 example be reconstructed from memory?
3. Can the carry-away target's role in the paper be explained to another person?

After the user answers, only correct what is wrong or incomplete. Do not repeat what is already right.

## Round 7: Output the Cards

Produce two compact cards:

**命题卡**

- Proposition statement in natural language
- Key conditions
- Conclusion
- Intuition grounded in the proof, not floating intuition
- Validation example from Round 2

**工具卡**

- Tool name
- Core concepts
- How it is used in this paper
- Where it appears elsewhere in economics
- Where I may use it: user-filled
- What I still do not understand: user-filled

## Default Follow-Up Prompts

- Explain this conclusion with a simpler example and no symbols.
- Explain this assumption's intuitive meaning and how the example changes if it is removed.
- Explain this property with the smallest example, where it is used in the proof, and where the proof breaks if it fails.
