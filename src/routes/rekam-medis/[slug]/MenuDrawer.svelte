<script>

  import { Button, ButtonGroup, CloseButton, Drawer, Listgroup } from "flowbite-svelte";
  import { sineIn } from 'svelte/easing';
  let hidden9 = true;
  let transitionParams = {
    x: 320,
    duration: 200,
    easing: sineIn
  };
</script>

<Button class="mt-5" on:click={() => (hidden9 = false)}>Pilih Dokumen</Button>
<Drawer
  rightOffset="top-16 h-screen right-0"
  backdrop={false}
  placement='right' 
  {transitionParams}
  bind:hidden={hidden9}
  id="sidebar9"
  divClass="overflow-y-auto z-50 p-4 bg-white shadow dark:bg-gray-800">
    <div class="flex items-center">
      <h5 id="drawer-label"
        class="inline-flex items-center mb-4 text-lg font-semibold text-gray-500 dark:text-gray-400">
        <svg
          class="w-5 h-5 mr-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd" /></svg
        >Dokumen Rekam Medis
      </h5>
      <CloseButton on:click={() => (hidden9 = true)} class="mb-4 dark:text-white" />
    </div>
    <div class="grid gap-4">
      <a class="text-md font-semibold hover:text-gray-500" href="/">Informasi Pasien</a><a class="text-md font-base hover:text-gray-500" href="/">Asesmen Medis Rawat Inap</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Asesmen Medis Awal</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Daftar DPJP</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Rekonsiliasi</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Edukasi Pasien & Keluarga Terintegrasi</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Observasi Cairan</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Hasil Pemeriksaan Penunjang</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Kopi Resep</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Catatan Perkembangan Pasien Terintegrasi</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Pemberian Obat Pasien</a>
      <a class="text-md font-base hover:text-gray-500" href="/">National Early Warning Score</a>
      <a class="text-md font-base hover:text-gray-500" href="/">Ringkasan Pasien Pulang</a>
    </div>
</Drawer>