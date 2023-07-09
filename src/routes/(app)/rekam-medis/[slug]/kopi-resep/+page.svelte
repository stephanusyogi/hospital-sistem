<script>
  import { Button } from 'flowbite-svelte';
  import Resep from './Resep.svelte';
  import { onMount } from 'svelte';

  export let data
  let kopiResep = [];
  onMount(() => {
    if(data?.kopi_resep){
      kopiResep = data.kopi_resep
    }
  })
</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.22 Kopi Resep</p>
    </div>
    <Button href="kopi-resep/tambah" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Tambah</span></Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    {#if kopiResep.length !== 0}
      <div class="border border-slate-300 rounded p-4 w-full">
        {#each kopiResep as {uraian, createdAt, file_dir, _id}}
          <Resep uraian={uraian} createdAt={createdAt} data={data} file_dir={file_dir} _id={_id}/>
        {/each}   
      </div>
    {:else}
      <div class="text-center p-10">
        <h2 class="text-lg font-semibold">Data Tidak Ditemukan</h2>
      </div>
    {/if}
  </div>
</main>