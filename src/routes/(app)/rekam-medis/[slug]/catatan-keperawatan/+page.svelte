<script>
  import { Button } from "flowbite-svelte";
  import Catatan from "./Catatan.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css";

  let dummyCatatan = [
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "catatan": "Pemberian Infus",
      "identitas": "Stephanus Yogi",
    },
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "catatan": "Pemberian Infus Kedua",
      "identitas": "Stephanus Yogi",
    },
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "catatan": "Pasien minta selimut",
      "identitas": "Stephanus Yogi",
    },
  ];

  const handler = new DataHandler(dummyCatatan, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>
<div>
  <div class="flex flex-wrap items-centere justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Catatan Keperawatan</p>
    </div>
    <Button href="catatan-keperawatan/tambah" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Tambah</span></Button>
  </div>
</div>
<hr class="my-5">
<section class="table-section">
  <Datatable {handler}>
    <table>
      <thead>
        <tr>
          <Th {handler} orderBy="tgl_jam">Tanggal & Jam</Th>
          <Th {handler} orderBy="catatan">Catatan</Th>
          <Th {handler} orderBy="identitas">Identitas Perawat</Th>
        </tr>
      </thead>
      <tbody>
        {#each $rows as { tgl_jam, catatan, identitas }}
          <Catatan tgl_jam={tgl_jam} catatan={catatan} identitas={identitas}/>
        {/each}   
      </tbody>
    </table>
  </Datatable>
</section>