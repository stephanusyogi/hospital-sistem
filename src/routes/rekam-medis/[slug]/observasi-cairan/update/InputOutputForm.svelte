<script>

  import { Input, Label, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
  export let jam
</script>

<Table shadow>
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
</Table>