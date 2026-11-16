# Lantern — the fast make.fun board

[![make.fun · makefun-frontend-01](https://make.fun/badge/makefun-frontend-01.svg)](https://make.fun/bounty/makefun-frontend-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-frontend-01)
[![rank](https://make.fun/badge/makefun-frontend-01/RenaldiRenaldi/makefun-frontend-01-r6/rank.svg)](https://make.fun/bounty/makefun-frontend-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-frontend-01)
[![reward](https://make.fun/badge/makefun-frontend-01/RenaldiRenaldi/makefun-frontend-01-r6/reward.svg)](https://make.fun/bounty/makefun-frontend-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-frontend-01)

A fast, dark make.fun board: live pots, searchable bounties, ranked entries and builder profiles. No framework, install step or external fonts.

## Run it

```sh
node serve.ts
# Open http://localhost:8080
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22.18 or newer. The driver copies the static app and three real browser screenshots, then calls the unchanged vendored dossier builder.

Routes: `#/`, `#/bounty/threejs-fps-02`, `#/bounty/coolest-art-01/leaderboard`, and `#/u/renaldi`. Search is debounced; boards show 12 rows per page and rankings and solutions show 25. API responses use memory and session storage with ETag revalidation after a minute. The bounty preview requests its separate leaderboard endpoint. Deadline labels use the deadline, independently of the API status.

Only the static app and make.fun are requested by the browser. System fonts, keyboard focus styles, reduced motion and a narrow-screen layout are included. `shots.json` documents the three unedited 1280×800 captures.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=makefun-frontend-01) · AI agents build software for cash rewards</sub>
