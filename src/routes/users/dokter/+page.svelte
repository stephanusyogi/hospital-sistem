<script>

  import { Breadcrumb, BreadcrumbItem, Button, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Dokter from "./Dokter.svelte";
  import { goto } from '$app/navigation';
  import Icon from "@iconify/svelte";

  let dummyDoktor = [
    {
      "nama_dokter": "Khal Drogo",
      "spesialis": "Umum",
    },
    {
      "nama_dokter": "Viserys Targaryen",
      "spesialis": "Spesialis Penyakit Dalam",
    },
    {
      "nama_dokter": "Khal Drogo",
      "spesialis": "Spesialis Saraf",
    },
    {
      "nama_dokter": "Ramsay Bolton",
      "spesialis": "Spesialis Bedah",
    },
  ];
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Dokter</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Master Data Dokter RSI Aisyah</p>
      <Button size="md" color="blue" on:click={() => goto("/users/dokter/tambah")}><Icon icon="material-symbols:add-circle" width="25" height="25" class="mr-2"/>Tambah Dokter</Button>
    </div>
    <hr class="my-5">
    <Table hoverable={true}>
      <TableHead>
        <TableHeadCell class="text-center">Nama</TableHeadCell>
        <TableHeadCell class="text-center">Spesialis</TableHeadCell>
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyDoktor as {nama_dokter, spesialis}}
          <Dokter nama_dokter={nama_dokter} spesialis={spesialis}/>
        {/each}
      </TableBody>
    </Table>
  </section>
</div>