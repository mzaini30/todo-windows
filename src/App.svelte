<script>
  import Router from "svelte-spa-router";
  import Gerbang from "./kunci/src/Gerbang.svelte";
  import Beranda from "./Beranda.svelte";
  import Database from "./localstorage-orm/Database.svelte";

  const routes = {
    "/": Beranda,
    "/database": Database,
  };
</script>

<Gerbang namaAplikasi="TODO">
  <Router {routes} />
</Gerbang>
