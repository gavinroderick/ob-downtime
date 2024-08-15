# Open Banking Downtime Tracker

Honestly, just an excuse to play around with CloudFlare pages & workers.

If I tidy things up a bit, this _could_ be a useful page for anybody working in the TPP space. Reads from the publicly available [Open Banking API Downtime](https://openbanking.atlassian.net/wiki/spaces/DZ/pages/441614754/API+Downtime) page on Confluence, & formats it on a page.

### MVP

> Single webpage that displays current & future OB downtime correctly

### Future Roadmap

- 💡 map provider names nicely & include a logo
- 💡 figure out a less brittle way of ingesting data
  - (WASM worker with better HTML parsing? 👀)
- 💡 move to an async data fetch from source table
