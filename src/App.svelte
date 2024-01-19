<script>
  import {
    Card,
    Toggle,
    Input,
    Label,
    Helper,
    Button,
    Checkbox,
    A,
  } from "flowbite-svelte";

  let data = [];
  let tambahBaru = "";

  if (localStorage.data) {
    data = JSON.parse(localStorage.data);
  }

  function menambahBaru() {
    data = [...data, { id: Date.now(), todonya: tambahBaru, isDone: false }];
    tambahBaru = "";
    localStorage.data = JSON.stringify(data);
  }

  function ubahMenjadi(id, isDone) {
    data = data.map((item) => {
      if (item.id == id) {
        return { ...item, isDone };
      } else {
        return item;
      }
    });
    localStorage.data = JSON.stringify(data);
  }
</script>

<svelte:head>
  <title>TODO</title>
</svelte:head>

<form on:submit|preventDefault={menambahBaru}>
  <div class="p-4 pb-0">
    <div>
      <Label for="first_name" class="mb-2">TODO Baru</Label>
      <Input
        type="text"
        id="first_name"
        bind:value={tambahBaru}
        placeholder="Ketik di sini"
        required
      />
    </div>
  </div>
</form>

<div class="p-4">
  <div class="grid grid-cols-2 gap-4">
    <Card class="max-w-full ">
      <h5
        class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Belum Selesai
      </h5>
      {#each data as item}
        {#if item.isDone == false}
          <div class="mb-3">
            <Toggle checked={false} on:click={() => ubahMenjadi(item.id, true)}
              >{item.todonya}</Toggle
            >
          </div>
        {/if}
      {/each}
    </Card>
    <Card class="max-w-full ">
      <h5
        class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Sudah Selesai
      </h5>
      {#each data as item}
        {#if item.isDone == true}
          <div class="mb-3">
            <Toggle checked={true} on:click={() => ubahMenjadi(item.id, false)}
              >{item.todonya}</Toggle
            >
          </div>
        {/if}
      {/each}
    </Card>
  </div>
</div>
