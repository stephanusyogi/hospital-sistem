<script>
  import { Button, Dropdown, DropdownItem, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Catatan from "./Catatan.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../tableCustom.css";
  import Icon from "@iconify/svelte";
  
  export let data

  const handler = new DataHandler(data?.logs, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>

<div>
  <div class="flex items-center justify-between">
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
          <Th {handler} orderBy="createdAt">Tanggal & Jam</Th>
          <Th {handler} orderBy="keterangan">Keterangan</Th>
          <Th {handler} orderBy="nama">Nama Pengguna</Th>
          <Th {handler} orderBy="role">Role Pengguna</Th>
        </tr>
      </thead>
      <tbody>
        {#each $rows as { createdAt, keterangan, nama, role }}
          <Catatan {createdAt} {keterangan} {nama} {role} />
        {/each}
      </tbody>
    </table>
  </Datatable>
</section>
