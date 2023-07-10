<script>
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css";
  import AjuanDpjp from "./AjuanDPJP.svelte";
  
  export let data

  const handler = new DataHandler(data?.dpjp_tidak_disetujui, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>

<p class="text-xl font-medium">Progress Pengajuan DPJP</p>
<hr class="my-5">

<section class="table-section">
  <Datatable {handler}>
    <table>
      <thead>
        <tr>
          <Th {handler} orderBy="status_permintaan">Status</Th>
          <Th {handler} orderBy="nama_dokter">Nama Dokter</Th>
          <Th {handler} orderBy="keterangan">Keterangan</Th>
          <Th {handler} orderBy="permintaan_pasien">Permintaan Pasien</Th>
          <Th {handler} orderBy="aksi">Aksi</Th>
        </tr>
      </thead>
      <tbody>
        {#each $rows as { _id, spesialis, status_permintaan, nama_dokter, keterangan_perawat, atas_permintaan_pasien }}
          <AjuanDpjp _id={_id} spesialis={spesialis} status_permintaan={status_permintaan} nama_dokter={nama_dokter}  keterangan_perawat={keterangan_perawat} atas_permintaan_pasien={atas_permintaan_pasien} data={data}/>
        {/each}   
      </tbody>
    </table>
  </Datatable>
</section>