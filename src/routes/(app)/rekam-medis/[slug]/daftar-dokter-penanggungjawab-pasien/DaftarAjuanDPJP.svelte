<script>
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css";
  import AjuanDpjp from "./AjuanDPJP.svelte";
  
  let dummyAjuanDPJP = [
    {
      "nama_dokter": "dr. Viserys II S, Sp.KJ",
      "spesialis": "Spesialis Penyakit Dalam",
      "keterangan": "Mohon dibantu pasien sudah kritis",
      "status": "ditolak",
      "permintaan_pasien": 1,
    },
  ];

  const handler = new DataHandler(dummyAjuanDPJP, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>

<p class="text-xl font-medium">Daftar Status Kesediaan Pengajuan Dokter</p>
<hr class="my-5">

<section class="table-section">
  <Datatable {handler}>
    <table>
      <thead>
        <tr>
          <Th {handler} orderBy="nama_dokter">Nama Dokter</Th>
          <Th {handler} orderBy="spesialis">Spesialis</Th>
          <Th {handler} orderBy="keterangan">Keterangan</Th>
          <Th {handler} orderBy="permintaan_pasien">Permintaan Pasien</Th>
          <Th {handler} orderBy="status">Status</Th>
          <Th {handler} orderBy="aksi">Aksi</Th>
        </tr>
      </thead>
      <tbody>
        {#each $rows as { nama_dokter, spesialis, keterangan, status, permintaan_pasien }}
          <AjuanDpjp nama_dokter={nama_dokter} spesialis={spesialis}  keterangan={keterangan}  status={status} permintaan_pasien={permintaan_pasien}/>
        {/each}   
      </tbody>
    </table>
  </Datatable>
</section>