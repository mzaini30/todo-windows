<script>
  import Database from "./localstorage-orm/Database.svelte";
</script>

<Database data={JSON.parse(localStorage.database)}></Database>
