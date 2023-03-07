<script>

  import { Breadcrumb, BreadcrumbItem, Button, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import Obat from "./Obat.svelte";
  import Icon from "@iconify/svelte";

  let dummyObat = [
    {
      "nama": "Artesunate tablet 50 mg",
      "kode": "OBT000001",
      "harga": "44.550",
      "stok": "4",
    },
    {
      "nama": "Amodiaquine anhydrida tablet 200 mg",
      "kode": "OBT000002",
      "harga": "44.550",
      "stok": "4",
    },
    {
      "nama": "Albendazol suspensi 200 mg/5 ml",
      "kode": "OBT000003",
      "harga": "5.198",
      "stok": "4",
    },
    {
      "nama": "Alopurinol tablet 100 mg",
      "kode": "OBT000004",
      "harga": "17.820",
      "stok": "4",
    },
    {
      "nama": "Ambroxol sirup 15 mg/ml",
      "kode": "OBT000005",
      "harga": "4.455",
      "stok": "4",
    },
  ];
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Data Obat</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Data Obat RSI Aisyah</p>
      <Button size="md" color="blue" on:click={() => goto("/obat/tambah")}><Icon icon="icon-park-solid:medicine-bottle" width="25" height="25" class="mr-2"/>Tambah Obat</Button>
    </div>
    <hr class="my-5">
    <Table hoverable={true}>
      <TableHead>
        <TableHeadCell class="text-center">Kode Barang</TableHeadCell>
        <TableHeadCell class="text-center">Nama Barang</TableHeadCell>
        <TableHeadCell class="text-center">Harga</TableHeadCell>
        <TableHeadCell class="text-center">Stok</TableHeadCell>
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyObat as {kode, nama, harga, stok }}
          <Obat kode={kode} nama={nama}, harga={harga}, stok={stok}/>
        {/each}
      </TableBody>
    </Table>
  </section>
</div>