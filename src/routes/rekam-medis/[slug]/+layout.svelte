<script>
  import { onMount, tick } from 'svelte';
  import { page } from '$app/stores'; 
  import JsBarcode from 'jsbarcode';
  import { Button, Popover } from 'flowbite-svelte';
  import Swal from "sweetalert2";
  import { goto } from '$app/navigation';

  const no_rm = $page.params.slug;
  $: activeUrl = $page.route.id

  let barcode;
  const defaultOptions = {
    format: 'CODE128',
    height: 30,
    displayValue: false,
    background: 'rgb(249 250 251)',
    lineColor: '#000000',
  };

  const handlePasienPulang = () => {
    Swal.fire({
      title: 'Perawatan Pasien Inap Selesai?',
      text: 'Periksa kembali kelengkapan dokumen rekam medis. Hati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan & Lanjutkan ke Pembayaran',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto("/transaksi/00123141")
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Aksi Dibatalkan',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }


  onMount(async () => {
    await tick();
    JsBarcode(barcode, "1910391301", defaultOptions);
  });
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <section class="grid grid-cols-12 gap-6 mt-10 px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <div class="col-span-12 sm:col-span-4 p-2">
      <div class="flex items-center justify-center">
        <div class="p-4 border border-gray-300 w-max">
          <div class="flex justify-between gap-6">
            <p class="font-bold text-xs">No. RM: {no_rm}</p>
            <p class="font-bold text-xs uppercase">Jon Snow <span>(L)</span></p>
          </div>
          <div class="flex justify-between gap-6">
            <p class="font-bold text-xs">Tgl. Lahir: 02/06/2000</p>
            <p class="font-bold text-xs">23th</p>
          </div>
          <p class="font-bold text-xs">Jln. Mayjend Pandjaitan No. 22 Malang</p>
          <canvas class="w-full" bind:this={barcode}></canvas>
        </div>
      </div>
      <div class="flex items-center justify-between gap-4 mt-5">
        <div>
          <h5 
          class="inline-flex items-center text-md font-semibold text-gray-500 dark:text-gray-400">
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
        <div class="flex items-center justify-between gap-4">
          <Button id="pasienPulang" size="sm" color="yellow" on:click={handlePasienPulang}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 12v.01M3 21h18M5 21V5a2 2 0 0 1 2-2h7.5M17 13.5V21M14 7h7m-3-3l3 3l-3 3"/></svg>
          </Button>
          <Popover class="text-sm font-light " title="Perawatan Pasien Selesai" triggeredBy="#pasienPulang"></Popover>
          <Button id="billing" size="sm" color="purple" href="/transaksi/00123141">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M216 74H56a10 10 0 0 1 0-20h136a6 6 0 0 0 0-12H56a22 22 0 0 0-22 22v128a22 22 0 0 0 22 22h160a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14Zm2 126a2 2 0 0 1-2 2H56a10 10 0 0 1-10-10V83.59A21.84 21.84 0 0 0 56 86h160a2 2 0 0 1 2 2Zm-28-60a10 10 0 1 1-10-10a10 10 0 0 1 10 10Z"/></svg>
          </Button>
          <Popover class="text-sm font-light " title="Nota Rawat Inap Pasien" triggeredBy="#billing"></Popover>
        </div>
      </div>
      <div class="mt-5 overflow-y-auto h-80">
        <div class="grid gap-2">
          <a href="/rekam-medis/{no_rm}" class="{(activeUrl === "/rekam-medis/[slug]") ? "font-semibold" : ""} text-md hover:text-gray-500">Aktivitas Hari Ini</a>
          <a href="/rekam-medis/{no_rm}/informasi-pasien" class="{(activeUrl === "/rekam-medis/[slug]/informasi-pasien") ? "font-semibold" : ""} text-md hover:text-gray-500">Informasi Pasien <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/pemeriksaan-igd-poliklinik" class="{(activeUrl === "/rekam-medis/[slug]/pemeriksaan-igd-poliklinik") ? "font-semibold" : ""} text-md hover:text-gray-500">Pemeriksaan IGD/Poliklinik <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/asesmen-rawat-inap" class="{(activeUrl === "/rekam-medis/[slug]/asesmen-rawat-inap") ? "font-semibold" : ""} text-md font-base hover:text-gray-500">Asesmen Medis Rawat Inap <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/asesmen-medis-awal" class="{(activeUrl === "/rekam-medis/[slug]/asesmen-medis-awal") ? "font-semibold" : ""} text-md font-base hover:text-gray-500">Asesmen Medis Awal <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/daftar-dokter-penanggungjawab-pasien"  class="{(activeUrl === "/rekam-medis/[slug]/daftar-dokter-penanggungjawab-pasien") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Daftar DPJP <span class="text-red-600">*</span></a>
          <a  href="/rekam-medis/{no_rm}/rekonsiliasi"  class="{(activeUrl === "/rekam-medis/[slug]/rekonsiliasi") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Rekonsiliasi <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/edukasi-pasien"  class="{(activeUrl === "/rekam-medis/[slug]/edukasi-pasien") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Edukasi Pasien & Keluarga Terintegrasi <span class="text-red-600">(opsional)</span></a>
          <a href="/rekam-medis/{no_rm}/observasi-cairan"  class="{(activeUrl === "/rekam-medis/[slug]/observasi-cairan") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Observasi Cairan <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/hasil-pemeriksaan-penunjang"  class="{(activeUrl === "/rekam-medis/[slug]/hasil-pemeriksaan-penunjang") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Hasil Pemeriksaan Penunjang <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/kopi-resep"  class="{(activeUrl === "/rekam-medis/[slug]/kopi-resep") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Kopi Resep <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/catatan-perkembangan-pasien-terintegrasi"  class=" {(activeUrl === "/rekam-medis/[slug]/catatan-perkembangan-pasien-terintegrasi") ? "font-semibold" : ""} text-md font-base hover:text-gray-500">Catatan Perkembangan Pasien Terintegrasi <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/pemberian-obat-pasien"  class="{(activeUrl === "/rekam-medis/[slug]/pemberian-obat-pasien") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Pemberian Obat Pasien <span class="text-red-600">*</span></a>
          <a href="/rekam-medis/{no_rm}/news"  class="{(activeUrl === "/rekam-medis/[slug]/news") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >National Early Warning Score <span class="text-red-600">(opsional)</span></a>
          <a href="/rekam-medis/{no_rm}/transfer-pasien-internal"  class="{(activeUrl === "/rekam-medis/[slug]/transfer-pasien-internal") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Transfer Pasien Internal <span class="text-red-600">(opsional)</span></a>
          <a href="/rekam-medis/{no_rm}/ringkasan-pasien-pulang"  class="{(activeUrl === "/rekam-medis/[slug]/ringkasan-pasien-pulang") ? "font-semibold" : ""} text-md font-base hover:text-gray-500" >Ringkasan Pasien Pulang <span class="text-red-600">*</span></a>
        </div>
      </div>
    </div>
    <div class="col-span-12 sm:col-span-8 sm:order-first sm:border-r p-4">
      <slot/>
    </div>
  </section>
</div>