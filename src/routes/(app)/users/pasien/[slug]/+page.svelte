<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Modal, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css"

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"

  export let data
  console.log(data)
  const handler = new DataHandler(data?.riwayat, { rowsPerPage: 10 })
  const rows = handler.getRows()
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Riwayat Rekam Medis</BreadcrumbItem>
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex items-center justify-between">
      <p class="text-lg sm:text-md lg:text-2xl font-semibold">Riwayat Rekam Medis</p>
    </div>
    <hr class="my-5">
      <section class="table-section">
        <Datatable {handler}>
          <table>
            <thead>
              <tr>
                <Th {handler} orderBy="no_rekam_medis">No. RM</Th>
                <Th {handler} orderBy="dpjp">Dokter</Th>
                <Th {handler} orderBy="ruangan">Ruangan</Th>
                <Th {handler} orderBy="icd_10">ICD - 10</Th>
                <Th {handler} orderBy="icd_9">ICD - 9</Th>
              </tr>
            </thead>
            <tbody>
              {#each $rows as row}
                <tr>
                  <td>{row.no_rekam_medis}</td>
                  <td>{row.dpjp}</td>
                  <td>Kamar {row.nama_kamar} - Kelas {row.jenis_kamar}</td>
                  <td>
                    <ul>
                      {#if row.icd_10.length !== 0}
                        {#each row.icd_10 as icd_10}
                          <li>Kode: {icd_10.kode}, Deskripsi: {icd_10.desc}</li>
                        {/each}
                      {/if}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {#if row.icd_9.length !== 0}
                        {#each row.icd_9 as icd_9}
                          <li>Kode: {icd_9.kode}, Deskripsi: {icd_9.desc}</li>
                        {/each}
                      {/if}
                    </ul>
                  </td>
                </tr>
              {/each}   
            </tbody>
          </table>
        </Datatable>
      </section>
  </section>
</div>
