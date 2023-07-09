<script>
  import { Button } from "flowbite-svelte";
  import Cairan from "./Cairan.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css";
  export let data
  const handler = new DataHandler(data?.observasi_cairan, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>
<div>
  <div class="flex flex-wrap items-centere justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.19 Observasi Cairan</p>
    </div>
    <Button href="observasi-cairan/tambah" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Tambah</span></Button>
  </div>
</div>
<hr class="my-5">
<section class="table-section">
  <Datatable {handler}>
    <table>
      <thead>
        <tr>
          <Th {handler} orderBy="createdAt">Waktu</Th>
          <Th {handler} orderBy="nama_input">Input</Th>
          <Th {handler} orderBy="jumlah_input">Jumlah Input</Th>
          <Th {handler} orderBy="nama_output">Output</Th>
          <Th {handler} orderBy="jumlah_output">Jumlah Output</Th>
          <Th {handler} orderBy="">Aksi</Th>
        </tr>
      </thead>
      <tbody>
        {#each $rows as {_id, createdAt, nama_input, jumlah_input, nama_output, jumlah_output}}
          <Cairan _id={_id} createdAt={createdAt} nama_input={nama_input} jumlah_input={jumlah_input} nama_output={nama_output} jumlah_output={jumlah_output} data={data}/>
        {/each}   
      </tbody>
    </table>
  </Datatable>
</section>