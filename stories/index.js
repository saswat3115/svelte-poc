import { storiesOf, setAddon } from "@storybook/svelte";
import ColorPicker from "../src/components/color-picker/color.svelte";
import MyForm from "../src/components/my-form/my-form.svelte";
import MyFormView from "../src/components/my-form/my-form-view.svelte";

storiesOf("UI-Elements", module)
  .add("Color-Picker", () => ({
    Component: ColorPicker
  }))
  .add("my-form", () => ({
    Component: MyForm,
    props: {
      firstName: "Sas",
      lastName: ""
    }
  }))
  .add("my-form-view", () => ({
    Component: MyFormView,
    submit: event => {
      console.log(event);
    }
  }));
