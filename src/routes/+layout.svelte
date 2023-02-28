<script>
  import "../app.postcss";
  import Sidebar from "./Sidebar.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<svelte:head>
  <title>RSIA - Hospital Sistem</title>
</svelte:head>

<div class="flex bg-gray-100 min-h-screen">
  <Sidebar/>
  <div class="relative overflow-x-auto w-full bg-gray-100">
    <Navbar/>
    <!-- Content -->
    <slot/>
  </div>
</div>

