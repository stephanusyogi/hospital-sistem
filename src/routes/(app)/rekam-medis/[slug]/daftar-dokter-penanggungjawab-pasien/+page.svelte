<script>
  import { Button} from "flowbite-svelte";
  import Dpjp from './Dpjp.svelte';
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css";
  import DaftarAjuanDpjp from "./DaftarAjuanDPJP.svelte";

  export let data
  // console.log(data)
  
  const handler = new DataHandler(data?.dpjp_disetujui, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>

<main>
  <div class="flex items-center justify-between">
    <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.54 Dokter Penanggung Jawab Pasien</p>
    <Button color="green" href="daftar-dokter-penanggungjawab-pasien/tambah" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Ajukan DPJP</span></Button>
  </div>
  <hr class="my-5">
  <section class="table-section">
    <Datatable {handler}>
      <table>
        <thead>
          <tr>
            <Th {handler} orderBy="nama_dokter">Nama Dokter</Th>
            <Th {handler} orderBy="spesialis">Spesialis</Th>
            <Th {handler} orderBy="tgl_mulai">Tanggal Mulai</Th>
            <Th {handler} orderBy="tgl_selesai">Tanggal Selesai</Th>
            <Th {handler} orderBy="aksi">Aksi</Th>
          </tr>
        </thead>
        <tbody>
          {#each $rows as {_id, nama_dokter, spesialis, tgl_mulai, tgl_selesai, status_dpjp }}
          <Dpjp _id={_id}, nama_dokter={nama_dokter} spesialis={spesialis} tgl_mulai={tgl_mulai} tgl_selesai={tgl_selesai} status_dpjp={status_dpjp} data={data}/>
          {/each}   
        </tbody>
      </table>
    </Datatable>
  </section>
  <br>
  <hr class="my-5">
  <DaftarAjuanDpjp data={data}/>
</main>