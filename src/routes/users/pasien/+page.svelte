<script>

  import { Breadcrumb, BreadcrumbItem, Button, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";

  let dummyUsers = [
    {
      "no_rm": "000001-2023",
      "nama_pasien": "Jon Snow",
      "pronounce": "Tn",
    },
    {
      "no_rm": "000256-2023",
      "nama_pasien": "Tyrion Lanister",
      "pronounce": "Tn",
    },
    {
      "no_rm": "000523-2023",
      "nama_pasien": "Sansa Stark",
      "pronounce": "Nn",
    },
    {
      "no_rm": "000526-2023",
      "nama_pasien": "Lyanna Mormont",
      "pronounce": "Nn",
    },
  ];
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Pasien</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Master Data Pasien RSI Aisyah</p>
    </div>
    <hr class="my-5">
    <Table hoverable={true}>
      <TableHead>
        <TableHeadCell class="text-center">Nomor Rekam Medis</TableHeadCell>
        <TableHeadCell class="text-center">Nama</TableHeadCell>
        <TableHeadCell class="text-center">Detail</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyUsers as {no_rm, nama_pasien, pronounce}}
          <Pasien no_rm={no_rm} nama_pasien={nama_pasien} pronounce={pronounce}/>
        {/each}
      </TableBody>
    </Table>
  </section>
</div>