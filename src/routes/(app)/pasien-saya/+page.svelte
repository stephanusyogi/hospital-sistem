<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Label, Modal, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Textarea } from "flowbite-svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css"
  import Pasien from "./Pasien.svelte";

  let dummyUsers = [
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "ruangan" : "Kamar Rendra - Kelas II",
      "jenis_kelamin": "Laki-Laki",
      "ttl": "Malang, 02 Juni 2000",
      "asuransi": "UMUM/Mandiri",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "jenis_kelamin": "Laki-Laki",
      "ruangan" : "Kamar Rendra - Kelas II",
      "ttl": "Malang, 02 Juni 2000",
      "asuransi": "UMUM/Mandiri",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "jenis_kelamin": "Laki-Laki",
      "ruangan" : "Kamar Wisnu - Kelas III",
      "ttl": "Malang, 02 Juni 2000",
      "asuransi": "UMUM/Mandiri",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "jenis_kelamin": "Laki-Laki",
      "ruangan" : "Kamar Wisnu - Kelas VVIIP",
      "ttl": "Malang, 02 Juni 2000",
      "asuransi": "UMUM/Mandiri",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "jenis_kelamin": "Laki-Laki",
      "ruangan" : "Kamar Wisnu - Kelas VVIIP",
      "ttl": "Malang, 02 Juni 2000",
      "asuransi": "UMUM/Mandiri",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
  ];
  const handler = new DataHandler(dummyUsers, { rowsPerPage: 50 })
  const rows = handler.getRows()
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/" 
    spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem 
    spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Pasien Saya</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="flex justify-between items-center">
        <p class="text-lg sm:text-md lg:text-2xl font-semibold">Pasien Saya</p>
      </div>
      <hr class="my-5">
      <section class="table-section">
        <Datatable {handler}>
          <table>
            <thead>
              <tr>
                <Th {handler} orderBy="rekam_medis">Rekam Medis</Th>
                <Th {handler} orderBy="no_rm">No. RM</Th>
                <Th {handler} orderBy="nama_pasien">Nama</Th>
                <Th {handler} orderBy="nik">NIK</Th>
                <Th {handler} orderBy="ruangan">Ruangan</Th>
                <Th {handler} orderBy="asuransi">Asuransi</Th>
              </tr>
            </thead>
            <tbody>
              {#each $rows as {no_rm, nama_pasien, nik, ruangan, asuransi, jenis_kelamin}, i}
                <Pasien no_rm={no_rm} nama_pasien={nama_pasien} nik={nik} jenis_kelamin={jenis_kelamin} ruangan={ruangan} asuransi={asuransi}/>
              {/each}   
            </tbody>
          </table>
        </Datatable>
      </section>
    </div>
  </section>
</div>