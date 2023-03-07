<script>

  import { Breadcrumb, BreadcrumbItem, Button, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";

  let dummyUsers = [
    {
      "no_rm": "000001-2023",
      "nama_pasien": "Jon Snow",
      "pronounce": "Tn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "-",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 1,
    },
    {
      "no_rm": "000256-2023",
      "nama_pasien": "Tyrion Lanister",
      "pronounce": "Tn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "-",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 1,
    },
    {
      "no_rm": "000523-2023",
      "nama_pasien": "Sansa Stark",
      "pronounce": "Nn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "2023-01-02",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 0,
    },
    {
      "no_rm": "000526-2023",
      "nama_pasien": "Lyanna Mormont",
      "pronounce": "Nn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "2023-01-02",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 0,
    },
  ];
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Rekam Medis</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="font-semibold text-2xl">Rekam Medis Pasien Rawat Inap RSI Aisyah</p>
    </div>
    <hr class="my-5">
    <Table hoverable={true}>
      <TableHead>
        <TableHeadCell class="text-center">Nomor Rekam Medis</TableHeadCell>
        <TableHeadCell class="text-center">Nama</TableHeadCell>
        <TableHeadCell class="text-center">Tanggal Masuk</TableHeadCell>
        <TableHeadCell class="text-center">Tanggal Keluar</TableHeadCell>
        <TableHeadCell class="text-center">Ruangan</TableHeadCell>
        <TableHeadCell class="text-center">Status</TableHeadCell>
        <TableHeadCell class="text-center">Aksi</TableHeadCell>
      </TableHead>
      <TableBody>    
        {#each dummyUsers as {no_rm, nama_pasien, pronounce, tgl_masuk, tgl_pulang, ruangan, jenis_ruangan, status_rawat}}
          <Pasien no_rm={no_rm} nama_pasien={nama_pasien} pronounce={pronounce} tgl_masuk={tgl_masuk} tgl_pulang={tgl_pulang} ruangan={ruangan} jenis_ruangan={jenis_ruangan} , status_rawat={status_rawat}/>
        {/each}
      </TableBody>
    </Table>
  </section>
</div>