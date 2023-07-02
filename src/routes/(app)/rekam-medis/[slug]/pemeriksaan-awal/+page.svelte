<script>
  import { Button } from "flowbite-svelte";
  export let data
</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">
        Pemeriksaan Awal
      </p>
    </div>
    <Button href="pemeriksaan-awal/{data?.pemeriksaan_awal._id}" size="sm" color="green">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="sm:mr-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
        /></svg
      >
      <span class="hidden sm:block">Update</span></Button
    >
  </div>
  <hr class="my-5" />
  <div class="overflow-y-auto max-h-screen">
    <div class="border border-slate-300 rounded p-4 w-full">
      <div class="mb-2">
        <p class="text-xl font-semibold">Data Pemeriksaan</p>
        <hr class="my-2" />
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Unit Penerima</p>
            <p class="font-light sm:text-right">{data?.pemeriksaan_awal.unit_penerima ?? ''}</p>
          </div>
          {#if data?.pemeriksaan_awal.unit_penerima === 'Poliklinik'}
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Poliklinik Penerima</p>
              <p class="font-light sm:text-right">{data?.pemeriksaan_awal.poliklinik_penerima ?? ''}</p>
            </div>
          {/if}
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Asal Rujukan</p>
            <p class="font-light sm:text-right">{data?.pemeriksaan_awal.asal_rujukan ?? ''}</p>
          </div>
          {#if data?.pemeriksaan_awal.asal_rujukan === 'Rujukan'}
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Unit Rujukan</p>
              <p class="font-light sm:text-right">{data?.pemeriksaan_awal.unit_asal_rujukan ?? ''}</p>
            </div>
          {/if}
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
          >
            <p class="font-medium col-span-2">Diagnosa & Tindakan</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-2">
              <p class="font-medium">DPJP:</p>
              <p class="font-light sm:text-right">
                {data?.pemeriksaan_awal.dpjp ?? ''}
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-2">
              <p class="font-medium">Diagnosa Sementara:</p>
              <div class="font-light sm:text-right">
                {#each data?.pemeriksaan_awal.icd_10 as icd_10}
                  <div class="my-1">
                    <p>ICD-10 Code: {icd_10.kode}</p>
                    <p>Deskripsi: {icd_10.desc}</p>
                  </div>
                {/each}
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 col-span-2">
              <p class="font-medium">Tindakan:</p>
              <div class="font-light sm:text-right">
                {#each data?.pemeriksaan_awal.icd_9 as icd_9}
                  <div class="my-1">
                    <p>ICD-9 Code: {icd_9.kode}</p>
                    <p>Deskripsi: {icd_9.desc}</p>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Jenis Kamar:</p>
            <p class="font-light sm:text-right">{data?.pemeriksaan_awal.jenis_kamar ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nama Kamar:</p>
            <p class="font-light sm:text-right">{data?.pemeriksaan_awal.nama_kamar ?? ''}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
