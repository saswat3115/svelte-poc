import App from "./my-form.svelte";

// const app = new App({
//   target: document.getElementById("main")
// });

// export default app;

// const app = new App();
// console.log(App);

export default new App({ props: ["firstName", "lastName"] });
