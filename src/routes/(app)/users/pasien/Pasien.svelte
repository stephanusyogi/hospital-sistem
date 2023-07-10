<script>
  import Icon from "@iconify/svelte";
  export let tableRowNumber, no_rekam_medis, name, nik, jenis_kelamin, tempat_lahir, tanggal_lahir, alamat_ktp;
  import { Button, Modal, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>
<tr>
  <td>{tableRowNumber}</td>
  <td>{no_rekam_medis}</td>
  <td>{name} ,<span class="italic">{(jenis_kelamin === "Perempuan") ? "Nn." : "Tn."}</span></td>
  <td>{nik}</td>
  <td>{jenis_kelamin}</td>
  <td>{tempat_lahir}, {tanggal_lahir}</td>
  <td>{alamat_ktp}</td>
  <td>
    <Button href="/users/pasien/{no_rekam_medis}" color="green" size="sm">
      <Icon icon="material-symbols:history" class="sm:mr-2" width="27" height="27"/>
      <span class="hidden sm:block">Riwayat Rekam Medis</span>
    </Button>
  </td>
</tr>