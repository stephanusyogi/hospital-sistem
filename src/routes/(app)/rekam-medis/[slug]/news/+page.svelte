<script>

  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { page } from "$app/stores";
  export let data
  
  const no_rm = $page.params.slug;

</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">National Early Warning Score (NEWS)</p>
    </div>
    <Button href="news/{data?.news._id ? data?.news._id : no_rm}" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg><span class="hidden sm:block">Isi Dokumen</span></Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    {#if data?.news.length !== 0}
      <div class="border border-slate-300 rounded p-4 w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-2">
          <div class="border p-2">
            <div class="flex flex-wrap sm:flex-nowrap justify-between">
              <p class="font-medium">RR</p>
              <p class="font-light sm:text-right">{data.news.rr}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light sm:text-right">{data.news.rr_score}</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex flex-wrap sm:flex-nowrap justify-between">
              <p class="font-medium">SpO2</p>
              <p class="font-light sm:text-right">{data.news.spo2}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light sm:text-right">{data.news.spo2_score}</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex flex-wrap sm:flex-nowrap justify-between">
              <p class="font-medium">Alat Bantu O2</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light sm:text-right">{data.news.alat_bantu_o2_score}</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex flex-wrap sm:flex-nowrap justify-between">
              <p class="font-medium">Suhu</p>
              <p class="font-light sm:text-right">{data.news.suhu}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light sm:text-right">{data.news.suhu_score}</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex flex-wrap sm:flex-nowrap justify-between">
              <p class="font-medium">Tekanan Darah</p>
              <p class="font-light sm:text-right">{data.news.tekanan_darah}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light sm:text-right">{data.news.tekanan_darah_score}</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex flex-wrap sm:flex-nowrap justify-between">
              <p class="font-medium">Nadi</p>
              <p class="font-light sm:text-right">{data.news.nadi}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light sm:text-right">{data.news.nadi_score}</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex flex-wrap sm:flex-nowrap justify-between">
              <p class="font-medium">Tingkat Kesadaran</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-light">Sadar</p>
              <p class="font-light sm:text-right">{data.news.tingkat_kesadaran_sadar}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-light">V/P/U</p>
              <p class="font-light sm:text-right">{data.news.tingkat_kesadaran_vpu}</p>
            </div>
          </div> 
          <div class="border p-2">
            <div class="flex flex-wrap sm:flex-nowrap justify-between">
              <p class="font-medium">Kadar Gula Darah</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-light">Score</p>
              <p class="font-light sm:text-right">{data.news.kadar_gula_darah_score}</p>
            </div>
          </div> 
          <div class="sm:col-span-2 lg:col-span-4 border p-2">
            <div class="flex flex-wrap sm:flex-nowrap justify-between">
              <p class="font-medium">TOTAL NEW SCORE</p>
              <p class="font-light sm:text-right">{data.news.total_news_score}</p>
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