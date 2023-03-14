<script>
  import { page } from '$app/stores'; 
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import MenuDrawer from './MenuDrawer.svelte';

  const no_rm = $page.params.slug;
  let judulHalaman = ""
  let judulBreadcrumb = ""
  let hrefBreadcrumb = ""

</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem href="/rekam-medis">Rekam Medis</BreadcrumbItem>
    <BreadcrumbItem href={hrefBreadcrumb}>Dokumen Pasien</BreadcrumbItem>
    <BreadcrumbItem>{($page.route.id === "/rekam-medis/[slug]" || judulBreadcrumb === "") ? "General" : judulBreadcrumb}</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <div>
        <p class="font-semibold text-2xl">{($page.route.id === "/rekam-medis/[slug]" || judulHalaman === "") ? "Dokumen Rekam Medis Rawat Inap" : judulHalaman}</p>
        <MenuDrawer no_rm={no_rm} bind:judulHalaman={judulHalaman} bind:judulBreadcrumb={judulBreadcrumb} bind:hrefBreadcrumb={hrefBreadcrumb}/>
      </div>
      <div class="p-4 border border-gray-300 font-normal text-md">
        <p>No. Rekam Medis: <span class="font-semibold">{no_rm}</span></p>
        <p>Nama Pasien: <span class="font-semibold">Jon Snow, <span class="italic">Tn</span></span></p>
        <p>Ruangan: <span class="font-semibold">Kamar Wisnu</span></p>
      </div>
    </div>
    <hr class="my-2">
    <slot/>
  </section>
</div>