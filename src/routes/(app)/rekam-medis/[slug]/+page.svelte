<script>
  import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Catatan from "./Catatan.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../tableCustom.css";

  let dummyCatatan = [
    {
      tgl_jam: "2023-03-19 08:00:00",
      keterangan: "Pengisian Formulir Pemeriksaan IGD/Poliklinik",
      identitas: "Stephanus Yogi",
      role: "Perawat",
    },
    {
      tgl_jam: "2023-03-19 08:00:00",
      keterangan: "Pengisian Formulir 12.16 Catatan Perkembangan",
      identitas: "dr. Khal Drogo, Sp PD FINASIM",
      role: "Dokter",
    },
    {
      tgl_jam: "2023-03-19 08:00:00",
      keterangan: "Pengisian Formulir 12.37 Pemberian Obat Pasien",
      identitas: "Stephanus Yogi",
      role: "Perawat",
    },
    {
      tgl_jam: "2023-03-19 08:00:00",
      keterangan: "Pengisian Formulir 12.37 Pemberian Obat Pasien",
      identitas: "Stephanus Yogi",
      role: "Perawat",
    },
  ];

  const handler = new DataHandler(dummyCatatan, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>

<div>
  <div class="flex flex-wrap items-centere justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">
        Log Riwayat Aktivitas Sistem Rekam Medis Rawat Inap
      </p>
    </div>
  </div>
</div>
<hr class="my-5" />
<section class="table-section">
  <Datatable {handler}>
    <table>
      <thead>
        <tr>
          <Th {handler} orderBy="tgl_jam">Tanggal & Jam</Th>
          <Th {handler} orderBy="keterangan">Keterangan</Th>
          <Th {handler} orderBy="identitas">Tanggal Keluar</Th>
          <Th {handler} orderBy="role">Identitas Aktor</Th>
        </tr>
      </thead>
      <tbody>
        {#each $rows as { tgl_jam, keterangan, identitas, role }}
          <Catatan {tgl_jam} {keterangan} {identitas} {role} />
        {/each}
      </tbody>
    </table>
  </Datatable>
</section>
