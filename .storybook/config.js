import { configure } from "@storybook/svelte";

function loadStories() {
  require("../stories/index");
  // You can require as many stories as you need.
}

configure(loadStories, module);
