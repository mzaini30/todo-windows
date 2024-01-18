<script>
  import { Card, Toggle } from "flowbite-svelte";
  let data = [];
  // data: id, todo, isDone
  if (localStorage.getItem("data")) {
    data = JSON.parse(localStorage.getItem("data"));
  }
</script>

<svelte:head>
  <title>TODO</title>
</svelte:head>

<Card class="max-w-full">
  <h5
    class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
  >
    TODO
  </h5>
  <div class="mb-3">
    <Toggle checked={true}>Checked toggle</Toggle>
  </div>
</Card>
