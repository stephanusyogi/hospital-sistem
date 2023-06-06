<script>
  import { Button, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Obat from './Obat.svelte';
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css";

  let dummyObat = [
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "deskripsi_obat": {
        "nama": "Lorem ipsum",
        "dosis": "250 mL",
        "rute": "-",
      },
      "dpjp": "dr. Khal Drogo, Sp PD FINASIM"
    },
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "deskripsi_obat": {
        "nama": "Lorem ipsum",
        "dosis": "250 mL",
        "rute": "-",
      },
      "dpjp": "dr. Khal Drogo, Sp PD FINASIM"
    },
  ];

  const handler = new DataHandler(dummyObat, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>
<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.37 Pemberian Obat Pasien</p>
    </div>
    <Button href="pemberian-obat-pasien/tambah" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Tambah</span></Button>
  </div>
  <hr class="my-5">
  <section class="table-section">
    <Datatable {handler}>
      <table>
        <thead>
          <tr>
            <Th {handler} orderBy="tgl_jam">Tanggal & Jam</Th>
            <Th {handler} orderBy="deskripsi_obat">Deskripsi Obat</Th>
            <Th {handler} orderBy="dpjp">DPJP</Th>
            <Th {handler} orderBy="aksi">Aksi</Th>
          </tr>
        </thead>
        <tbody>
          {#each $rows as { tgl_jam, deskripsi_obat, dpjp }}
            <Obat tgl_jam={tgl_jam} deskripsi_obat={deskripsi_obat} dpjp={dpjp}/>
          {/each}   
        </tbody>
      </table>
    </Datatable>
  </section>
</main>