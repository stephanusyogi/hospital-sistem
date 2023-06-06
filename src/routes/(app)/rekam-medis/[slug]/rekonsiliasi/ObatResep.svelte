<script>

  import { TabItem } from "flowbite-svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css";
  import Obat from "./Obat.svelte";
  let dummyObatResep = [
    {
      "nama": "Artesunate",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Tunda",
      "status_obat_pulang": "Henti",
      "catatan": "mantap",
    },
    {
      "nama": "Amodiaquine anhydrida",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Henti",
      "status_obat_pulang": "Lanjut",
      "catatan": "mantap",
    },
    {
      "nama": "Albendazol suspensi",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Tunda",
      "status_obat_pulang": "Henti",
      "catatan": "mantap",
    },
    {
      "nama": "Alopurinol",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Tunda",
      "status_obat_pulang": "Lanjut",
      "catatan": "mantap",
    },
    {
      "nama": "Ambroxol sirup",
      "kandungan": "sip",
      "frekuensi": "500mL",
      "sumber_obat": "rumah sakit",
      "tgl_mulai": "05/28/2023",
      "tgl_stop": "08/28/2023",
      "jml_obat_tersisa": "100mL",
      "status_obat_perawatan": "Henti",
      "status_obat_pulang": "Lanjut",
      "catatan": "mantap",
    },
  ];
  
  const handler = new DataHandler(dummyObatResep, { rowsPerPage: 50 })
  const rows = handler.getRows()
</script>

<section class="table-section">
  <Datatable {handler}>
    <table>
      <thead>
        <tr>
          <Th {handler} orderBy="nama">Nama Obat & Dosis</Th>
          <Th {handler} orderBy="kandungan">Kandungan</Th>
          <Th {handler} orderBy="frekuensi">Frekuensi</Th>
          <Th {handler} orderBy="sumber_obat">Sumber Obat</Th>
          <Th {handler} orderBy="tgl_mulai">Tanggal Mulai</Th>
          <Th {handler} orderBy="tgl_stop">Tanggal Stop</Th>
          <Th {handler} orderBy="jml_obat_tersisa">Jumlah Obat Tersisa</Th>
          <Th {handler} orderBy="status_obat_perawatan">Status Obat Saat Perawatan</Th>
          <Th {handler} orderBy="status_obat_pulang">Status Obat Saat Pulang</Th>
          <Th {handler} orderBy="catatan">Catatan</Th>
          <Th {handler} orderBy="aksi">Aksi</Th>
        </tr>
      </thead>
      <tbody>
        {#each $rows as { nama, kandungan, frekuensi, sumber_obat, tgl_mulai, tgl_stop, jml_obat_tersisa, status_obat_perawatan, status_obat_pulang, catatan }}
          <Obat nama={nama} kandungan={kandungan} frekuensi={frekuensi} sumber_obat={sumber_obat} tgl_mulai={tgl_mulai} tgl_stop={tgl_stop} jml_obat_tersisa={jml_obat_tersisa} status_obat_perawatan={status_obat_perawatan} status_obat_pulang={status_obat_pulang} catatan={catatan}/>
        {/each}   
      </tbody>
    </table>
  </Datatable>
</section>