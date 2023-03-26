<script>
  import Icon from "@iconify/svelte";
  export let diagnosa, nama_dokter, spesialis, tgl_mulai, tgl_selesai, status_dpjp
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{diagnosa}</TableBodyCell>
  <TableBodyCell {tdClass}>{nama_dokter}</TableBodyCell>
  <TableBodyCell {tdClass}>{spesialis}</TableBodyCell>
  <TableBodyCell {tdClass}>{tgl_mulai}</TableBodyCell>
  <TableBodyCell {tdClass}>{tgl_selesai}</TableBodyCell>
  <TableBodyCell {tdClass}>{status_dpjp}</TableBodyCell>
  <TableBodyCell>
    <div class="flex flex-wrap justify-center gap-2">
      <a href="/" class="text-blue-600 hover:underline dark:text-blue-500"><Icon icon="material-symbols:edit" width="25" height="25"/></a>
      <a href="/" class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></a>
    </div>
  </TableBodyCell>
</TableBodyRow>