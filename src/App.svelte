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
  import { Orm } from "./localstorage-orm";
  import Gerbang from "./kunci/src/Gerbang.svelte";

  let tambahBaru = "";
  let database = { todo: [] };
  if (localStorage.database) {
    database = JSON.parse(localStorage.database);
  }

  function ubah(id, isDone) {
    database = new Orm(database).update("todo", id, { isDone }).done();
    localStorage.database = JSON.stringify(database);
  }
</script>

<svelte:head>
  <title>TODO</title>
</svelte:head>

<Gerbang namaAplikasi="TODO">
  <form
    on:submit|preventDefault={() => {
      database = new Orm(database)
        .insert("todo", { todonya: tambahBaru, isDone: false })
        .done();
      localStorage.database = JSON.stringify(database);
      tambahBaru = "";
    }}
  >
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
        {#each database.todo as item}
          {#if item.isDone == false}
            <div class="mb-3">
              <Toggle checked={false} on:click={() => ubah(item.id, true)}
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
        {#each database.todo as item}
          {#if item.isDone == true}
            <div class="mb-3">
              <Toggle checked={true} on:click={() => ubah(item.id, false)}
                >{item.todonya}</Toggle
              >
            </div>
          {/if}
        {/each}
      </Card>
    </div>
  </div>
</Gerbang>
