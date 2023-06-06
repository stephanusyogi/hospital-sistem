<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";
  import "../../tableCustom.css";
  import { DataHandler, Datatable, Th, ThFilter } from "@vincjo/datatables";

  let dummyUsers = [
    {
      no_rm: "0000012023",
      nama_pasien: "Jon Snow",
      nik: "35730512371391",
      jenis_kelamin: "Laki-Laki",
      ttl: "Malang, 02 Juni 2000",
      alamat: "Jln. Mayjend Pandjaitan No. 22",
      cara_pembayaran: "BPJS",
      nama_asuransi: "BPJS",
      no_asuransi: "71623198313",
      status_asuransi: "Aktif",
    },
    {
      no_rm: "0000012023",
      nama_pasien: "Jon Snow",
      nik: "35730512371391",
      jenis_kelamin: "Laki-Laki",
      ttl: "Malang, 02 Juni 2000",
      alamat: "Jln. Mayjend Pandjaitan No. 22",
      cara_pembayaran: "BPJS",
      nama_asuransi: "BPJS",
      no_asuransi: "71623198313",
      status_asuransi: "Aktif",
    },
    {
      no_rm: "0000012023",
      nama_pasien: "Jon Snow",
      nik: "35730512371391",
      jenis_kelamin: "Laki-Laki",
      ttl: "Malang, 02 Juni 2000",
      alamat: "Jln. Mayjend Pandjaitan No. 22",
      cara_pembayaran: "BPJS",
      nama_asuransi: "BPJS",
      no_asuransi: "71623198313",
      status_asuransi: "Aktif",
    },
    {
      no_rm: "0000012023",
      nama_pasien: "Jon Snow",
      nik: "35730512371391",
      jenis_kelamin: "Laki-Laki",
      ttl: "Malang, 02 Juni 2000",
      alamat: "Jln. Mayjend Pandjaitan No. 22",
      cara_pembayaran: "Umum/Mandiri",
      nama_asuransi: null,
      no_asuransi: null,
      status_asuransi: null,
    },
    {
      no_rm: "0000012023",
      nama_pasien: "Jon Snow",
      nik: "35730512371391",
      jenis_kelamin: "Laki-Laki",
      ttl: "Malang, 02 Juni 2000",
      alamat: "Jln. Mayjend Pandjaitan No. 22",
      cara_pembayaran: "Lainnya",
      nama_asuransi: "Prudential",
      no_asuransi: "214142352",
      status_asuransi: "Aktif",
    },
    {
      no_rm: "0000012023",
      nama_pasien: "Jon Snow",
      nik: "35730512371391",
      jenis_kelamin: "Laki-Laki",
      ttl: "Malang, 02 Juni 2000",
      alamat: "Jln. Mayjend Pandjaitan No. 22",
      cara_pembayaran: "Umum/Mandiri",
      nama_asuransi: null,
      no_asuransi: null,
      status_asuransi: null,
    },
    {
      no_rm: "0000012023",
      nama_pasien: "Jon Snow",
      nik: "35730512371391",
      jenis_kelamin: "Laki-Laki",
      ttl: "Malang, 02 Juni 2000",
      alamat: "Jln. Mayjend Pandjaitan No. 22",
      cara_pembayaran: "Umum/Mandiri",
      nama_asuransi: null,
      no_asuransi: null,
      status_asuransi: null,
    },
    {
      no_rm: "0000012023",
      nama_pasien: "Jon Snow",
      nik: "35730512371391",
      jenis_kelamin: "Laki-Laki",
      ttl: "Malang, 02 Juni 2000",
      alamat: "Jln. Mayjend Pandjaitan No. 22",
      cara_pembayaran: "Lainnya",
      nama_asuransi: "Prudential",
      no_asuransi: "214142352",
      status_asuransi: "Aktif",
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
      >Pendaftaran</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Admisi Rawat Inap</BreadcrumbItem
    >
  </Breadcrumb>
  <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex justify-between items-center">
      <p class="text-xl font-semibold">Antrean Pasien Admisi Rawat Inap</p>
    </div>
    <hr class="my-5" />
    <section class="table-section">
      <Datatable {handler}>
        <table>
          <thead>
            <tr>
              <Th {handler} orderBy="no">No</Th>
              <Th {handler} orderBy="no_rm">No Rekam Medis</Th>
              <Th {handler} orderBy="nik">NIK</Th>
              <Th {handler} orderBy="nama_pasien">Nama</Th>
              <Th {handler} orderBy="cara_pembayaran">Asuransi</Th>
              <Th {handler} orderBy="aksi">Aksi</Th>
            </tr>
          </thead>
          <tbody>
            {#each $rows as { no_rm, nama_pasien, nik, jenis_kelamin, cara_pembayaran, nama_asuransi, status_asuransi, no_asuransi }, i}
              <Pasien
                tableRowNumber={i + 1}
                {no_rm}
                {nama_pasien}
                {nik}
                {jenis_kelamin}
                {cara_pembayaran}
                {nama_asuransi}
                {no_asuransi}
                {status_asuransi}
              />
            {/each}
          </tbody>
        </table>
      </Datatable>
    </section>
  </div>
</div>
