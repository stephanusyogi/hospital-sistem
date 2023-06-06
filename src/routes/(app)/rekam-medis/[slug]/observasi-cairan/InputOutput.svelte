<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";

  export let jam, jenis_input, jumlah_input, jenis_output, jumlah_output
</script>
<Table class="border border-slate-300 shadow-lg bg-white w-full text-left text-sm text-gray-500 dark:text-gray-400">
  <TableBody>
    <TableBodyRow>
        <TableBodyCell colspan="2" tdClass="p-2 whitespace-nowrap font-medium border border-slate-300"><center>Jam {jam}</center></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">Input</TableBodyCell>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">Output</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300 text-center">
          <p class="font-light">{jenis_input}</p>
          <p class="font-light">{jumlah_input}</p>
      </TableBodyCell>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300 text-center">
          <p class="font-light">{jenis_output}</p>
          <p class="font-light">{jumlah_output}</p>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>