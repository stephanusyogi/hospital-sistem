<script>

  import { Button, CloseButton, Drawer } from "flowbite-svelte";
  import { sineIn } from 'svelte/easing';
  import { page } from '$app/stores'; 

  export let no_rm

  let hidden9 = true;
  let transitionParams = {
    x: 320,
    duration: 200,
    easing: sineIn
  };

  $: activeUrl = $page.route.id
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
      <div class="mb-4">
        <h5 id="drawer-label"
        class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400">
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
        >Dokumen Rekam Medis</h5>
        <p class="text-xs font-base italic text-red-600">(*) Wajib diperiksa & diisi.</p>
      </div>
      
      <CloseButton on:click={() => (hidden9 = true)} class="mb-4 dark:text-white" />
    </div>
    <div class="grid gap-2">
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/informasi-pasien" class="{(activeUrl === "/rekam-medis/[slug]/informasi-pasien") ? "font-semibold" : ""} text-md hover:text-gray-500">Informasi Pasien <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true} on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/asesmen-rawat-inap" class="{(activeUrl === "/rekam-medis/[slug]/asesmen-rawat-inap") ? "font-semibold" : ""} text-md font-base hover:text-gray-500">Asesmen Medis Rawat Inap <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/asesmen-medis-awal" class="{(activeUrl === "/rekam-medis/[slug]/asesmen-medis-awal") ? "font-semibold" : ""} text-md font-base hover:text-gray-500">Asesmen Medis Awal <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/daftar-dokter-penanggungjawab-pasien"  class="{(activeUrl === "/rekam-medis/[slug]/daftar-dokter-penanggungjawab-pasien") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Daftar DPJP <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true}  href="/rekam-medis/{no_rm}/rekonsiliasi"  class="{(activeUrl === "/rekam-medis/[slug]/rekonsiliasi") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Rekonsiliasi <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/edukasi-pasien"  class="{(activeUrl === "/rekam-medis/[slug]/edukasi-pasien") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Edukasi Pasien & Keluarga Terintegrasi <span class="text-red-600">(opsional)</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/observasi-cairan"  class="{(activeUrl === "/rekam-medis/[slug]/observasi-cairan") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Observasi Cairan <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/hasil-pemeriksaan-penunjang"  class="{(activeUrl === "/rekam-medis/[slug]/hasil-pemeriksaan-penunjang") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Hasil Pemeriksaan Penunjang <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/kopi-resep"  class="{(activeUrl === "/rekam-medis/[slug]/kopi-resep") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Kopi Resep <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/catatan-perkembangan-pasien-terintegrasi"  class=" {(activeUrl === "/rekam-medis/[slug]/catatan-perkembangan-pasien-terintegrasi") ? "font-semibold" : ""} text-md font-base hover:text-gray-500">Catatan Perkembangan Pasien Terintegrasi <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/pemberian-obat-pasien"  class="{(activeUrl === "/rekam-medis/[slug]/pemberian-obat-pasien") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Pemberian Obat Pasien <span class="text-red-600">*</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/news"  class="{(activeUrl === "/rekam-medis/[slug]/news") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >National Early Warning Score <span class="text-red-600">(opsional)</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/transfer-pasien-internal"  class="{(activeUrl === "/rekam-medis/[slug]/transfer-pasien-inte") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Transfer Pasien Internal <span class="text-red-600">(opsional)</span></a>
      <a on:click={()=>hidden9 = true} href="/rekam-medis/{no_rm}/ringkasan-pasien-pulang"  class="{(activeUrl === "/rekam-medis/[slug]/ringkasan-pasien-pulang") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Ringkasan Pasien Pulang <span class="text-red-600">*</span></a>
    </div>
</Drawer>