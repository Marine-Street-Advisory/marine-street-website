# Project briefing: Marine Street website

The public marketing site (Next.js, `app/`). Keep `AGENTS.md` in sync with this file when either
changes.

## How to operate

- **Sync with the remote before starting any work, every session (Marine Street operating rule).**
  Run `git fetch origin`, confirm your branch, and start from `origin/<branch>`; never assume the
  checkout you inherited is current.
- **After a change is merged and deployed, offer a browser QA pass (Matt, 2026-11-17).** Once a PR
  you worked on is merged to `main` and its deploy is live, ask the user one question: should the
  QA agent check these changes in the browser? Only on a yes, follow the `agentic-qa` skill in
  `Marine-Street-Advisory/marine-street-skills` (`engineering/agentic-qa/SKILL.md`) over the merged
  PRs: it writes a test plan from the diff, drives a browser against the live site, and publishes a
  report artifact whose failures are fix briefs a developer agent can start from. Never start it
  unasked.
