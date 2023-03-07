<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Ruangan from "./Ruangan.svelte";
  import { goto } from '$app/navigation';
  
  let dummyRuangan = [
    {
      "nama": "Ayodya",
      "jenis": "Kelas VVIP",
      "harga": "2.500.000",
      "kuota": "4",
      "tersedia": "3"
    },
    {
      "nama": "Wisnu",
      "jenis": "Kelas VVIP",
      "harga": "2.250.000",
      "kuota": "7",
      "tersedia": "full"
    },
    {
      "nama": "Amarta",
      "jenis": "Kelas VIP",
      "harga": "2.000.000",
      "kuota": "8",
      "tersedia": "2"
    },
    {
      "nama": "Rama",
      "jenis": "Kelas VIP",
      "harga": "2.000.000",
      "kuota": "8",
      "tersedia": "full"
    },
    {
      "nama": "Krisna",
      "jenis": "Kelas 1",
      "harga": "1.750.000",
      "kuota": "15",
      "tersedia": "2"
    },
  ];
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Data Ruangan</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Data Ruangan RSI Aisyah</p>
      <Button size="md" color="blue" on:click={() => goto("/ruangan/tambah")}><Icon icon="ic:baseline-add-home" width="25" height="25" class="mr-2"/>Tambah Ruangan</Button>
    </div>
    <hr class="my-5">
    <Table hoverable={true}>
      <TableHead>
        <TableHeadCell class="text-center">Nama Ruangan</TableHeadCell>
        <TableHeadCell class="text-center">Jenis Ruangan</TableHeadCell>
        <TableHeadCell class="text-center">Harga</TableHeadCell>
        <TableHeadCell class="text-center">Kuota</TableHeadCell>
        <TableHeadCell class="text-center">Tersedia</TableHeadCell>
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyRuangan as { nama, jenis, harga, kuota, tersedia }}
          <Ruangan nama={nama} jenis={jenis} harga={harga} kuota={kuota} tersedia={tersedia}/>
        {/each}
      </TableBody>
    </Table>
  </section>
</div>