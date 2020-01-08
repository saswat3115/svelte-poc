<script>
  function handleBgColor(event) {
    document.body.style.transition = "background 500ms linear";
    document.body.style.background = event.target
      .getAttribute("class")
      .split(" ")[1];
  }
</script>

<style>
  .color-picker {
    display: inline-flex;
    padding: 16px;
    border: 1px solid gray;
    width: 180px;
  }
  .picker {
    height: 20px;
    width: 20px;
    border: 1px solid gray;
    border-radius: 2px;
    margin-left: 20px;
  }
  .picker:hover {
    cursor: pointer;
  }
  .red {
    background: red;
  }
  .yellow {
    background: yellow;
  }
  .blue {
    background: blue;
  }
  .none {
    background: white;
  }
</style>

<svelte:options tag="color-picker" />
<div class="color-picker">
  <div class="picker red" on:click="{handleBgColor}"></div>
  <div class="picker yellow" on:click="{handleBgColor}"></div>
  <div class="picker blue" on:click="{handleBgColor}"></div>
  <div class="picker none" on:click="{handleBgColor}"></div>
</div>
