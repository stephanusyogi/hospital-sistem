<script>

  import { TableBodyCell, TableBodyRow } from "flowbite-svelte";
  export let tgl_jam, keterangan, identitas, role;

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>
<TableBodyRow>
  <TableBodyCell {tdClass}>{tgl_jam}</TableBodyCell>
  <TableBodyCell {tdClass}>{keterangan}</TableBodyCell>
  <TableBodyCell {tdClass}>{identitas}</TableBodyCell>
  <TableBodyCell {tdClass}>{role}</TableBodyCell>
</TableBodyRow>