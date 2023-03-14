<script>

  import { Button, CloseButton, Drawer } from "flowbite-svelte";
  import { sineIn } from 'svelte/easing';
  import { page } from '$app/stores'; 

  export let no_rm, judulHalaman, judulBreadcrumb, hrefBreadcrumb

  let hidden9 = true;
  let transitionParams = {
    x: 320,
    duration: 200,
    easing: sineIn
  };
  let activeUrl = $page.route.id

  const changePageTitle  = (halaman, breadcrumb) => {
    hidden9 = true
    judulHalaman = halaman
    judulBreadcrumb = breadcrumb
    hrefBreadcrumb = `/rekam-medis/${no_rm}`
  }
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
      <a on:click={() => changePageTitle("Informasi Pasien", "Formulir")} href="/rekam-medis/{no_rm}/informasi-pasien" class="{(activeUrl === "/rekam-medis/[slug]/informasi-pasien") ? "font-semibold" : ""} text-md hover:text-gray-500">Informasi Pasien</a>
      <a on:click={() => changePageTitle("Asesmen Medis Rawat Inap", "Formulir 12.31")} href="/rekam-medis/{no_rm}/asesmen-rawat-inap" class="{(activeUrl === "/rekam-medis/[slug]/asesmen-rawat-inap") ? "font-semibold" : ""} text-md font-base hover:text-gray-500">Asesmen Medis Rawat Inap</a>
      <a on:click={() => changePageTitle("Asesmen Medis Awal & Rencana Pelayanan", "Formulir 12.15")} href="/rekam-medis/{no_rm}/asesmen-medis-awal" class="{(activeUrl === "/rekam-medis/[slug]/asesmen-medis-awal") ? "font-semibold" : ""} text-md font-base hover:text-gray-500">Asesmen Medis Awal</a>
      <a on:click={() => changePageTitle("Daftar Dokter Penanggung Jawab", "Formulir 12.54")} href="/rekam-medis/{no_rm}/daftar-dokter-penanggungjawab-pasien"  class="{(activeUrl === "/rekam-medis/[slug]/daftar-dokter-penanggungjawab-pasien") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Daftar DPJP</a>
      <a on:click={() => changePageTitle("Rekonsiliasi", "Formulir 12.37.1")} href="/rekam-medis/{no_rm}/rekonsiliasi"  class="{(activeUrl === "/rekam-medis/[slug]/rekonsiliasi") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Rekonsiliasi</a>
      <a on:click={() => changePageTitle("Edukasi Pasien & Keluarga Terintegrasi", "Formulir 12.10")} href="/rekam-medis/{no_rm}/edukasi-pasien"  class="{(activeUrl === "/rekam-medis/[slug]/edukasi-pasien") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Edukasi Pasien & Keluarga Terintegrasi</a>
      <a on:click={() => changePageTitle("Observasi Cairan", "Formulir 12.19")} href="/rekam-medis/{no_rm}/observasi-cairan"  class="{(activeUrl === "/rekam-medis/[slug]/observasi-cairan") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Observasi Cairan</a>
      <a on:click={() => changePageTitle("Hasil Pemeriksaan Penunjang", "Formulir 12.21")} href="/rekam-medis/{no_rm}/hasil-pemeriksaan-penunjang"  class="{(activeUrl === "/rekam-medis/[slug]/hasil-pemeriksaan-penunjang") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Hasil Pemeriksaan Penunjang</a>
      <a on:click={() => changePageTitle("Kopi Resep", "Formulir 12.22")} href="/rekam-medis/{no_rm}/kopi-resep"  class="{(activeUrl === "/rekam-medis/[slug]/kopi-resep") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Kopi Resep</a>
      <a on:click={() => changePageTitle("Catatan Perkembangan Pasien Terintegrasi", "Formulir 12.16")} href="/rekam-medis/{no_rm}/catatan-perkembangan-pasien-terintegrasi"  class=" {(activeUrl === "/rekam-medis/[slug]/catatan-perkembangan-pasien-terintegrasi") ? "font-semibold" : ""} text-md font-base hover:text-gray-500">Catatan Perkembangan Pasien Terintegrasi</a>
      <a on:click={() => changePageTitle("Pemberian Obat Pasien", "Formulir 12.37")} href="/rekam-medis/{no_rm}/pemberian-obat-pasien"  class="{(activeUrl === "/rekam-medis/[slug]/pemberian-obat-pasien") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Pemberian Obat Pasien</a>
      <a on:click={() => changePageTitle("National Early Warning Score", "Formulir")} href="/rekam-medis/{no_rm}/news"  class="{(activeUrl === "/rekam-medis/[slug]/news") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >National Early Warning Score</a>
      <a on:click={() => changePageTitle("Transfer Pasien Internal", "Formulir 12.13")} href="/rekam-medis/{no_rm}/transfer-pasien-internal"  class="{(activeUrl === "/rekam-medis/[slug]/transfer-pasien-inte") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Transfer Pasien Internal</a>
      <a on:click={() => changePageTitle("Ringkasan Pasien Pulang", "Formulir 12.6")} href="/rekam-medis/{no_rm}/ringkasan-pasien-pulang"  class="{(activeUrl === "/rekam-medis/[slug]/ringkasan-pasien-pulang") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Ringkasan Pasien Pulang</a>
    </div>
</Drawer>