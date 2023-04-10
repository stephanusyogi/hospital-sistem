<script>
  import { Button } from 'flowbite-svelte';
  import Hasil from './Hasil.svelte';


  let dummyHasilPemeriksaan = [
    {
      "uraian" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ex neque. Proin mauris eros, hendrerit euismod faucibus sed, molestie vitae massa. Etiam consectetur eleifend fermentum.",
      "created_at": "05/28/2023",
    },
    {
      "uraian" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ex neque. Proin mauris eros, hendrerit euismod faucibus sed, molestie vitae massa. Etiam consectetur eleifend fermentum.",
      "created_at": "05/28/2023",
    },
    {
      "uraian" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ex neque. Proin mauris eros, hendrerit euismod faucibus sed, molestie vitae massa. Etiam consectetur eleifend fermentum.",
      "created_at": "05/28/2023",
    },
  ];

  let noTable = 1
</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xl font-semibold">Hasil Pemeriksaan Penunjang</p>
    </div>
    <Button href="hasil-pemeriksaan-penunjang/tambah" color="green">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
      Tambah</Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    <div class="border border-slate-300 rounded p-4 w-full">
      {#each dummyHasilPemeriksaan as {uraian, created_at}}
        <Hasil uraian={uraian} created_at={created_at}/>
      {/each}   
    </div>
  </div>
</main>