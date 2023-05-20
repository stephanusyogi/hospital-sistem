<script>

  import { TableBodyCell, TableBodyRow } from "flowbite-svelte";
  export let tgl_jam, ppa, hasil, instruksi, dpjp, identitas_ppa;

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
</script>
<TableBodyRow>
  <TableBodyCell {tdClass}>{tgl_jam}</TableBodyCell>
  <TableBodyCell {tdClass}>
    <div class="text-left" contenteditable="false" bind:innerHTML={hasil}></div>
  </TableBodyCell>
  <TableBodyCell {tdClass}>
    <div class="text-left" contenteditable="false" bind:innerHTML={instruksi}></div>
  </TableBodyCell>
  <TableBodyCell {tdClass}>{ppa}</TableBodyCell>
  <TableBodyCell {tdClass}>{identitas_ppa}</TableBodyCell>
  <TableBodyCell {tdClass}>{dpjp}</TableBodyCell>
</TableBodyRow>