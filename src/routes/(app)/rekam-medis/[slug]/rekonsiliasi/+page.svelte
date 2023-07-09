<script>
  import { Button,  P,  TabItem,  Tabs } from "flowbite-svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css";
  import Obat from "./Obat.svelte";
  export let data
  const handler = new DataHandler(data?.rekonsiliasi, { rowsPerPage: 50 })
  const rows = handler.getRows()
</script>
<main>
  <div class="flex items-center justify-between">
    <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.37.1 Rekonsiliasi</p>
    <Button color="green" href="rekonsiliasi/tambah" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="25" height="25" viewBox="0 0 48 48"><mask id="ipSMedicineBottleOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M13 7a3 3 0 0 1 3-3h16a3 3 0 1 1 0 6H16a3 3 0 0 1-3-3Zm.1 10.12A3 3 0 0 1 15.437 16h17.124a3 3 0 0 1 2.339 1.12l4.438 5.523a3 3 0 0 1 .661 1.88V41a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V24.523a3 3 0 0 1 .661-1.88l4.438-5.522Z"/><path stroke="#000" stroke-linecap="round" d="M18 30h12m-6-6v12"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMedicineBottleOne0)"/></svg><span class="hidden sm:block">Tambah Rekonsiliasi Obat</span></Button>
  </div>
  <hr class="my-5">
  <section class="table-section">
    <Datatable {handler}>
      <table>
        <thead>
          <tr>
            <Th {handler} orderBy="resep_non_resep">Kategori</Th>
            <Th {handler} orderBy="nama_obat">Nama Obat</Th>
            <Th {handler} orderBy="dosis">Dosis</Th>
            <Th {handler} orderBy="kandungan">Kandungan</Th>
            <Th {handler} orderBy="frekuensi">Frekuensi</Th>
            <Th {handler} orderBy="sumber_obat">Sumber Obat</Th>
            <Th {handler} orderBy="tanggal_mulai">Tanggal Mulai</Th>
            <Th {handler} orderBy="tanggal_stop">Tanggal Stop</Th>
            <Th {handler} orderBy="jumlah_obat_tersisa">Jumlah Obat Tersisa</Th>
            <Th {handler} orderBy="status_obat_saat_perawatan">Status Obat Saat Perawatan</Th>
            <Th {handler} orderBy="status_obat_saat_pulang">Status Obat Saat Pulang</Th>
            <Th {handler} orderBy="aksi">Aksi</Th>
          </tr>
        </thead>
        <tbody>
          {#each $rows as {_id, resep_non_resep, nama_obat, dosis, kandungan, frekuensi, sumber_obat, tanggal_mulai, tanggal_stop, jumlah_obat_tersisa, status_obat_saat_perawatan, status_obat_saat_pulang }}
            <Obat _id={_id} resep_non_resep={resep_non_resep} nama_obat={nama_obat} dosis={dosis} kandungan={kandungan} frekuensi={frekuensi} sumber_obat={sumber_obat} tanggal_mulai={tanggal_mulai} tanggal_stop={tanggal_stop} jumlah_obat_tersisa={jumlah_obat_tersisa} status_obat_saat_perawatan={status_obat_saat_perawatan} status_obat_saat_pulang={status_obat_saat_pulang} data={data}/>
          {/each}   
        </tbody>
      </table>
    </Datatable>
  </section>
</main>