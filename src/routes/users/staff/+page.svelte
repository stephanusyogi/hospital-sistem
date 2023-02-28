<script>
	import { Breadcrumb, BreadcrumbItem, Button, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import Icon from '@iconify/svelte';
</script>

<div class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Staff</BreadcrumbItem>
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
        <TableHeadCell>Foto</TableHeadCell>
        <TableHeadCell>Nama Staff</TableHeadCell>
        <TableHeadCell>Action</TableHeadCell>
      </TableHead>
      <TableBody >
        <TableBodyRow>
          <TableBodyCell>
            <div class="flex justify-center">
              <img class="rounded-full object-cover w-20 h-10 lg:h-20" src="/src/lib/images/dummy/staff1.jpg" alt="">
            </div>
          </TableBodyCell>
          <TableBodyCell tdClass="px-6 py-4 whitespace-nowrap font-medium text-center">
            Stephanus Yogi
          </TableBodyCell>
          <TableBodyCell>
            <div class="flex justify-center">
              <Button size="sm" class="mr-2" pill={true} color="yellow"><Icon icon="material-symbols:edit" width="20" height="20" />Edit</Button>
              <Button size="sm" class="mr-2" pill={true} color="red"><Icon icon="ic:baseline-delete" width="20" height="20" />Delete</Button>
            </div>
          </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
          <TableBodyCell>
            <div class="flex justify-center">
              <img class="rounded-full object-cover w-20 h-10 lg:h-20" src="/src/lib/images/dummy/staff2.jpg" alt="">
            </div>
          </TableBodyCell>
          <TableBodyCell tdClass="px-6 py-4 whitespace-nowrap font-medium text-center">
            Rendi Fernandito Adi
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