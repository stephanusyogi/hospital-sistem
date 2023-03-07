<script>

  import { Breadcrumb, BreadcrumbItem, Button, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import Icon from "@iconify/svelte";
  import Petugas from "./Petugas.svelte";

  let dummyPetugas = [
    {
      "nama": "Stephanus Yogi",
    },
    {
      "nama": "Laurentius Vico",
    },
  ];
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Petugas</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Master Data Petugas RSI Aisyah</p>
      <Button size="md" color="blue" on:click={() => goto("/users/petugas/tambah")}><Icon icon="material-symbols:add-circle" width="25" height="25" class="mr-2"/>Tambah Petugas</Button>
    </div>
    <hr class="my-5">
    <Table hoverable={true}>
      <TableHead>
        <TableHeadCell class="text-center">Nama</TableHeadCell>
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyPetugas as {nama}}
          <Petugas nama={nama}/>
        {/each}
      </TableBody>
    </Table>
  </section>
</div>