<script>
  import Icon from '@iconify/svelte';
  import { Button, Checkbox, Input, Label, Radio, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";
  import { page } from "$app/stores";
  export let data
  
  const no_rm = $page.params.slug;
</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.13 Transfer Pasien Internal</p>
    </div>
    <Button href="transfer-pasien-internal/{data?.transfer_pasien_internal._id ? data?.transfer_pasien_internal._id : no_rm}" size="sm" color="green">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg><span class="hidden sm:block">Isi Dokumen</span></Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    {#if data?.transfer_pasien_internal.length !== 0}
      <div class="border border-slate-300 rounded p-4 w-full">
        <div class="mb-2">
          <p class="text-lg font-semibold italic">General</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Ruangan Asal:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].ruangan_asal ?? ''}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Ruangan Tujuan:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].ruangan_tujuan ?? ''}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Petugas yang Menghubungi:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].petugas_yang_menghubungi ?? ''}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Petugas Penerima:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].petugas_penerima ?? ''}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Tanggal Berangkat:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].tanggal_berangkat ?? ''}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Jam Berangkat:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].jam_berangkat ?? ''}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Alasan Mentransfer:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].alasan_mentransfer ?? ''}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Level Transfer:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].level_transfer ?? ''}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Indikasi Dirawat:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].indikasi_dirawat ?? ''}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Diagnosa Medis:</p>
              <p class="font-light sm:text-right">{data?.transfer_pasien_internal.general[0].diagnosa_medis ?? ''}</p>
            </div>
          </div>
        </div>
      </div>
    {:else}
      <div class="text-center p-10">
        <h2 class="text-lg font-semibold">Data Tidak Ditemukan</h2>
      </div>
    {/if}
  </div>
</main>