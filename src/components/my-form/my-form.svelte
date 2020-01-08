<script>
  export let firstname = "";
  export let lastname = "";
  let control = "d";

  function validate(val) {
    if (!val) {
      control = "error";
    }
    return val;
  }

  function onClick(e) {
    if (validate(firstname)) {
      let event = new CustomEvent("submit", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: { firstname, lastname }
      });

      this.dispatchEvent(event);
    }
  }
  function onReset(e) {
    firstname = "";
    lastname = "";
    control = "";
  }
</script>

<svelte:options tag="my-form" />
<div class="my-form">
  <div>
    <label>First Name *</label>
    <input
      type="text"
      bind:value="{firstname}"
      name="firstname"
      class="{control}"
    />
  </div>
  <div>
    <label>Last Name</label>
    <input type="text" bind:value="{lastname}" name="lastname" />
  </div>
  <div>
    <button on:click="{onClick}">Submit</button>
    <button on:click="{onReset}">Reset</button>
  </div>
</div>

<style>
  .my-form {
    padding: 16px;
    /* border: 1px solid gray; */
    border-radius: 3px;
    width: 250px;
    font-family: sans-serif;
    font-size: 12px;
    background: rgb(223, 235, 239);
    box-shadow: 1px 3px 5px gray;
  }

  label {
    display: block;
    font-weight: 600;
  }

  .my-form div {
    padding: 8px;
  }

  input {
    height: 20px;
    border-radius: 3px;
    border: 1px solid gray;
  }

  button {
    margin-top: 16px;
    height: 20px;
    background: rgb(25, 141, 170);
    border: none;
    border-radius: 3px;
    color: white;
  }

  button:hover {
    background: rgb(19, 111, 134);
    cursor: pointer;
  }

  .error {
    border: 1px solid red;
  }
</style>
