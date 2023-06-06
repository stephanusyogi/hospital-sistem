<script>
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css";

  let dummyUsers = [
    {
      no_rm: "000001-2023",
      nama_pasien: "Jon Snow",
      pronounce: "Tn",
      tgl_masuk: "2023-01-01",
      tgl_pulang: "-",
      ruangan: "Ayodya",
      jenis_ruangan: "Kelas VVIP",
      status_rawat: 1,
    },
    {
      no_rm: "000256-2023",
      nama_pasien: "Tyrion Lanister",
      pronounce: "Tn",
      tgl_masuk: "2023-01-01",
      tgl_pulang: "-",
      ruangan: "Ayodya",
      jenis_ruangan: "Kelas VVIP",
      status_rawat: 1,
    },
    {
      no_rm: "000523-2023",
      nama_pasien: "Sansa Stark",
      pronounce: "Nn",
      tgl_masuk: "2023-01-01",
      tgl_pulang: "2023-01-02",
      ruangan: "Ayodya",
      jenis_ruangan: "Kelas VVIP",
      status_rawat: 0,
    },
    {
      no_rm: "000526-2023",
      nama_pasien: "Lyanna Mormont",
      pronounce: "Nn",
      tgl_masuk: "2023-01-01",
      tgl_pulang: "2023-01-02",
      ruangan: "Ayodya",
      jenis_ruangan: "Kelas VVIP",
      status_rawat: 0,
    },
  ];

  const handler = new DataHandler(dummyUsers, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb
    class="mt-10 overflow-x-auto"
    aria-label="Solid background breadcrumb example"
    solid
  >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      href="/"
      home>Dashboard</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Rekam Medis</BreadcrumbItem
    >
  </Breadcrumb>
  <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-md sm:text-lg lg:text-xl font-semibold">
        Rekam Medis Pasien Rawat Inap RSI Aisyah
      </p>
    </div>
    <hr class="my-5" />
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="no_rm">No Rekam Medis</Th>
              <Th {handler} orderBy="nama_pasien">Nama</Th>
              <Th {handler} orderBy="tgl_masuk">Tanggal Masuk</Th>
              <Th {handler} orderBy="tgl_pulang">Tanggal Keluar</Th>
              <Th {handler} orderBy="ruangan">Ruangan</Th>
              <Th {handler} orderBy="status_rawat">Status</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as { no_rm, nama_pasien, pronounce, tgl_masuk, tgl_pulang, ruangan, jenis_ruangan, status_rawat }}
              <Pasien
                {no_rm}
                {nama_pasien}
                {pronounce}
                {tgl_masuk}
                {tgl_pulang}
                {ruangan}
                {jenis_ruangan}
                {status_rawat}
              />
            {/each}
          </tbody>
        </table>
      </Datatable>
    </section>
  </div>
</div>
