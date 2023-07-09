<script>

  import { Button } from "flowbite-svelte";
  import { page } from "$app/stores";
  export let data
  
  const no_rm = $page.params.slug;

</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Ringkasan Pasien Pulang</p>
    </div>
    <Button href="ringkasan-pasien-pulang/{data?.ringkasan_pasien_pulang._id ? data?.ringkasan_pasien_pulang._id : no_rm}" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg><span class="hidden sm:block">Update</span></Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    {#if data?.ringkasan_pasien_pulang.length !== 0}
      <div class="border border-slate-300 rounded p-4 w-full">
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Kondisi Pasien Pulang (<span class="italic">Status Present</span>)</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
              <p class="font-medium sm:col-span-2">Keadaan Umum/GCS:</p>
              <div class="grid grid-cols-3 gap-4 sm:col-span-2">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p class="font-medium">T:</p>
                  <p class="font-light sm:text-right">{data.ringkasan_pasien_pulang.keadaan_umum_t} mmHg</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p class="font-medium">N:</p>
                  <p class="font-light sm:text-right">{data.ringkasan_pasien_pulang.keadaan_umum_n} x/menit</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p class="font-medium">RR:</p>
                  <p class="font-light sm:text-right">{data.ringkasan_pasien_pulang.keadaan_umum_rr} x/menit</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p class="font-medium">S:</p>
                  <p class="font-light sm:text-right">{data.ringkasan_pasien_pulang.keadaan_umum_s} C</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p class="font-medium">SpO2:</p>
                  <p class="font-light sm:text-right">{data.ringkasan_pasien_pulang.keadaan_umum_spo2} %</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
              <p class="font-medium">Cara Pulang:</p>
              <p class="font-light sm:text-right">{data.ringkasan_pasien_pulang.cara_pulang}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
              <p class="font-medium">Keadaan Pulang:</p>
              <p class="font-light sm:text-right">{data.ringkasan_pasien_pulang.keadaan_pulang}</p>
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