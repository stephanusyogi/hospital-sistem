<script>

  import { Input, Label, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
  export let jam
</script>

<!-- <Table shadow>
  <TableHead>
    <TableHeadCell>Jam</TableHeadCell>
    <TableHeadCell>Input</TableHeadCell>
    <TableHeadCell>Output</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>{jam}</TableBodyCell>
      <TableBodyCell>
        <div class="my-2">
          <Label for="" class="mb-2">Jenis</Label>
          <Input type="text" id="" />
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Jumlah</Label>
          <Input type="text" id="" />
        </div>
      </TableBodyCell>
      <TableBodyCell>
        <div class="my-2">
          <Label for="" class="mb-2">Jenis</Label>
          <Input type="text" id="" />
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Jumlah</Label>
          <Input type="text" id="" />
        </div>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table> -->
<Table class="border border-slate-300 shadow-lg bg-white w-full text-left text-sm text-gray-500 dark:text-gray-400">
  <TableBody>
    <TableBodyRow>
        <TableBodyCell colspan="2" tdClass="p-2 whitespace-nowrap font-medium border border-slate-300 text-center"><center>Jam {jam}</center></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">Input</TableBodyCell>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">Output</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">
          <Input type="text" id="" placeholder="Jenis Cairan"/>
          <br>
          <Input type="text" id="" placeholder="Jumlah Dosis Cairan"/>
      </TableBodyCell>
      <TableBodyCell tdClass="p-2 whitespace-nowrap font-medium border border-slate-300">
          <Input type="text" id="" placeholder="Jenis Cairan"/>
          <br>
          <Input type="text" id="" placeholder="Jumlah Dosis Cairan"/>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>