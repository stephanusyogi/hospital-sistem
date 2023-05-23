<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Label, Modal, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Textarea } from "flowbite-svelte";

</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Pasien Saya</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="flex justify-between items-center">
        <p class="text-xl font-semibold">Pasien Saya</p>
      </div>
      <hr class="my-5">
      <Table hoverable={true}>
        <TableHead>
          <TableHeadCell class="text-center">Rekam Medis</TableHeadCell>
          <TableHeadCell class="text-center">Nama Pasien</TableHeadCell>
          <TableHeadCell class="text-center">NIK</TableHeadCell>
          <TableHeadCell class="text-center">No. RM</TableHeadCell>
          <TableHeadCell class="text-center">Ruangan</TableHeadCell>
          <TableHeadCell class="text-center">Asuransi</TableHeadCell>
        </TableHead>
        <TableBody> 
          <TableBodyRow>            
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium"><Button size="xs" href="/rekam-medis/0000012023">Rekam Medis Pasien</Button></TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Dracarys</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">24173192310</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">0000012023</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Kamar Rendra - Kelas II</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">UMUM/Mandiri</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>            
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium"><Button size="xs" href="/rekam-medis/0000012023">Rekam Medis Pasien</Button></TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Oberyn Martell</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">24173192310</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">0000012024</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Kamar Wisnu - Kelas III</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">UMUM/Mandiri</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>            
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium"><Button size="xs" href="/rekam-medis/0000012023">Rekam Medis Pasien</Button></TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Lyanna Mormont</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">1931093</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">0000012025</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Kamar Wisnu - Kelas VVIIP</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">BPJS<Button class="ml-2" color="green" size="xs">Aktif</Button></TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </div>
  </section>
</div>