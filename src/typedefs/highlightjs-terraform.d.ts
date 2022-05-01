declare module "highlightjs-terraform" {
  import {HLJSApi} from "highlight.js";

  function definer(hljs: HLJSApi): void;
  export = definer;
}
