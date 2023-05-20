<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";

  export let jam, jenis_input, jumlah_input, jenis_output, jumlah_output
</script>

<!-- <div class="grid grid-cols-2 gap-2 border p-4 text-sm">
  <p class="font-semibold italic col-span-2 text-center">Jam {jam}</p>
  <div class="col-span-2">
    <p class="font-medium col-span-2 text-center">Input</p>
    <div class="grid grid-cols-2 gap-4">
      <p class="font-light">{jenis_input}</p>
      <p class="font-light text-right">{jumlah_input}</p>
    </div>
  </div>
  <div class="col-span-2">
    <p class="font-medium col-span-2 text-center">Output</p>
    <div class="grid grid-cols-2 gap-4">
      <p class="font-light">{jenis_output}</p>
      <p class="font-light text-right">{jumlah_output}</p>
    </div>
  </div>
</div> -->
<Table class="border border-slate-300 shadow-lg bg-white w-full text-left text-sm text-gray-500 dark:text-gray-400">
  <TableBody>
    <TableBodyRow>
        <TableBodyCell colspan="2"><center>Jam {jam}</center></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">Input</TableBodyCell>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">Output</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">
        <div class="grid grid-cols-2 gap-2 lg:gap-4">
          <p class="font-light">{jenis_input}</p>
          <p class="font-light text-right">{jumlah_input}</p>
        </div>
      </TableBodyCell>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">
        <div class="grid grid-cols-2 gap-2 lg:gap-4">
          <p class="font-light">{jenis_output}</p>
          <p class="font-light text-right">{jumlah_output}</p>
        </div>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>