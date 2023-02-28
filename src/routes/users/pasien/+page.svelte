<script>
	import { Accordion, AccordionItem, Breadcrumb, BreadcrumbItem, Button, Listgroup, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import Icon from '@iconify/svelte';

  let links = [
    { name: "Asesmen Rawat Inap", href: "/" },
    { name: "Asesmen Medis Awal", href: "/" },
    { name: "Transfer Pasien Internal", href: "/"  },
    { name: "Daftar DPJP", href: "/" },
    { name: "Rekonsiliasi", href: "/" },
    { name: "Edukasi Pasien & Keluarga Terintegrasi", href: "/" },
    { name: "Observasi Cairan", href: "/" },
    { name: "Hasil Pemeriksaan Penunjang & Tempelan", href: "/" },
    { name: "Tempelan Kopi Resep", href: "/" },
    { name: "Catatan Perkembangan Pasien Terintegrasi", href: "/" },
    { name: "Pemberian Obat Pasien", href: "/" },
    { name: "NEWS", href: "/" },
    { name: "Ringkasan Pasien Pulang", href: "/" },
  ];
</script>

<div class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Pasien</BreadcrumbItem>
  </Breadcrumb>
  <!-- Content -->
  <div class="px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-start">
      <Button color="green" size="sm" >
        <Icon class="mr-2" icon="carbon:user-follow" width="20" height="20" /> Add New Record
      </Button>
    </div>
    <hr class="my-5">
    <!-- Data Table -->
    <Table divClass="relative overflow-x-auto">
      <TableHead theadClass="text-md text-center uppercase">
        <TableHeadCell>Nama Pasien</TableHeadCell>
        <TableHeadCell>Data Pasien</TableHeadCell>
        <TableHeadCell>Action</TableHeadCell>
      </TableHead>
      <TableBody >
        <TableBodyRow>
          <TableBodyCell tdClass="px-6 py-4 whitespace-nowrap font-medium text-center">
            Vico Fillian
          </TableBodyCell>
          <TableBodyCell>
            <Accordion>
              <AccordionItem>
                <span slot="header">Formulir Rekam Medis</span>
                <Listgroup active items={links} let:item class="w-full">
                  {item.name}
                </Listgroup>
              </AccordionItem>
            </Accordion>
          </TableBodyCell>
          <TableBodyCell>
            <div class="flex justify-center">
              <Button size="sm" class="mr-2" pill={true} color="yellow"><Icon icon="material-symbols:edit" width="20" height="20" />Edit</Button>
              <Button size="sm" class="mr-2" pill={true} color="red"><Icon icon="ic:baseline-delete" width="20" height="20" />Delete</Button>
            </div>
          </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell tdClass="px-6 py-4 whitespace-nowrap font-medium text-center">
            Dio Marcell
          </TableBodyCell>
          <TableBodyCell>
            <Accordion>
              <AccordionItem>
                <span slot="header">Formulir Rekam Medis</span>
                <Listgroup active items={links} let:item class="w-full">
                  {item.name}
                </Listgroup>
              </AccordionItem>
            </Accordion>
          </TableBodyCell>
          <TableBodyCell>
            <div class="flex justify-center">
              <Button size="sm" class="mr-2" pill={true} color="yellow"><Icon icon="material-symbols:edit" width="20" height="20" />Edit</Button>
              <Button size="sm" class="mr-2" pill={true} color="red"><Icon icon="ic:baseline-delete" width="20" height="20" />Delete</Button>
            </div>
          </TableBodyCell>
        </TableBodyRow>
      </TableBody>
    </Table>
  </div>
</div>