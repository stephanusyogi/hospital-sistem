<script>
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { Breadcrumb, BreadcrumbItem, Spinner } from "flowbite-svelte";
  import Pasien from "./Pasien.svelte";
  import "../../tableCustom.css";
  import { DataHandler, Datatable, Th, ThFilter } from "@vincjo/datatables";
  import { onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  let isLoading = true;

  onMount(async () => {
    setTimeout(async () => {
      isLoading = false
    }, 2000);
  });

  const handler = new DataHandler(data?.patients, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb
    class="mt-10 overflow-x-auto"
    aria-label="Solid background breadcrumb example"
    solid
  >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      href="/"
      home>Dashboard</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Pendaftaran</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Admisi Rawat Inap</BreadcrumbItem
    >
  </Breadcrumb>
  <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="flex justify-between items-center">
      <p class="text-xl font-semibold">Antrean Pasien Admisi Rawat Inap</p>
    </div>
    <hr class="my-5" />
    {#if isLoading}
      <div class="text-center">
        <Spinner />
      </div>
    {:else}
      <section class="table-section">
        <Datatable {handler}>
          <table>
            <thead>
              <tr>
                <Th {handler} orderBy="no">No Antrean</Th>
                <Th {handler} orderBy="no_rm">No Rekam Medis</Th>
                <Th {handler} orderBy="nama_pasien">Nama</Th>
                <Th {handler} orderBy="nik">NIK</Th>
                <Th {handler} orderBy="nama_asuransi">Asuransi</Th>
                <Th {handler} orderBy="aksi">Aksi</Th>
              </tr>
            </thead>
            <tbody>
              {#each $rows as { name, no_rekam_medis, nik, nama_asuransi, nomor_asuransi, status_asuransi }, i}
                <Pasien
                  tableRowNumber={i + 1}
                  {name}
                  {no_rekam_medis}
                  {nik}
                  {nama_asuransi}
                  {nomor_asuransi}
                  {status_asuransi}
                />
              {/each}
            </tbody>
          </table>
        </Datatable>
      </section>
    {/if}
  </div>
</div>
