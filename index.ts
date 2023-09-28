import { log } from "./src/git.ts";

(async () => {
  log({
    count: 10,
    oneline: false,
  });
})();
