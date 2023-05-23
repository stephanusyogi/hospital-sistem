<script>

  import { TableBodyCell, TableBodyRow } from "flowbite-svelte";
  export let tgl_jam, catatan, identitas;

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>
<TableBodyRow>
  <TableBodyCell {tdClass}>{tgl_jam}</TableBodyCell>
  <TableBodyCell {tdClass}>{catatan}</TableBodyCell>
  <TableBodyCell {tdClass}>{identitas}</TableBodyCell>
</TableBodyRow>