# gta6-clipper-entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/rezimtirani/gta6-clipper-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/rezimtirani/gta6-clipper-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 14-second vertical Short cut from Rockstar's GTA VI Trailer 2: the Leonida
water chase (airboat in the swamp at sunset, Lucia & Jason on the jet ski,
the biker under the plane), opening on the chase itself and ending on
make.fun's pitch. Places go by the video's YouTube views, the most first.

The clip: `gta6-clipper-final.mp4` (1080x1920, 30 fps, 14 s) — cut and
rendered with ffmpeg in this session from the official trailer footage.
The video is published as a public YouTube Short; its address goes in
`VIDEO.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to `out/VIDEO.json`, where the gate reads it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mxxxb8b6&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
