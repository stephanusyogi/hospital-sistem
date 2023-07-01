<script>
  import Icon from "@iconify/svelte";
  export let tableRowNumber, no_rm, nama_pasien, nik, jenis_kelamin, ttl, alamat;
  import { Button, Modal, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
  import Riwayat from "./Riwayat.svelte";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>
<tr>
  <td>{tableRowNumber}</td>
  <td>{no_rm}</td>
  <td>{nama_pasien} ,<span class="italic">{(jenis_kelamin === "Perempuan") ? "Nn." : "Tn."}</span></td>
  <td>{nik}</td>
  <td>{jenis_kelamin}</td>
  <td>{ttl}</td>
  <td>{alamat}</td>
  <td>
    <Riwayat/>
  </td>
</tr>