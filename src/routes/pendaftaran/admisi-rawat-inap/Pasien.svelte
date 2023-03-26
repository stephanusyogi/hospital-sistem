<script>
  export let tableRowNumber, no_rm, nama_pasien, nik, jenis_kelamin;
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from "sweetalert2";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"

</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{tableRowNumber}</TableBodyCell>
  <TableBodyCell {tdClass}>{no_rm}</TableBodyCell>
  <TableBodyCell {tdClass}>{nama_pasien} ,<span class="italic">{(jenis_kelamin === "Perempuan") ? "Nn." : "Tn."}</span></TableBodyCell>
  <TableBodyCell {tdClass}>{nik}</TableBodyCell>
  <TableBodyCell {tdClass}>
    <Button color="green" href="/pendaftaran/1">Daftarkan Rawat Inap</Button>
  </TableBodyCell>
</TableBodyRow>