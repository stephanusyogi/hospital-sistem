<script>
  import { onMount, tick } from "svelte";
  import { page } from "$app/stores";
  import { Button, Dropdown, DropdownDivider, DropdownItem, Modal, Popover } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import Icon from "@iconify/svelte";
  import { goto } from '$app/navigation';
  import axios from 'axios';

  export let data

  const no_rm = $page.params.slug;
  const qrCodeUrl = $page.url.origin + "/rekam-medis/" + no_rm;
  let QRModal = false

  $: activeUrl = $page.route.id.split("/(app)/rekam-medis/[slug]/")[1]
    ? $page.route.id.split("/(app)/rekam-medis/[slug]/")[1].split("/")[0]
    : $page.route.id.split("/(app)/rekam-medis/[slug]/")[0];


  let qrcode;
  onMount(() => {
    // Redirect Akses Dokter
    if(data.user_data.role === "Dokter"){
      if(activeUrl !== qrCodeUrl+'/catatan-perkembangan-pasien-terintegrasi'){
        goto(qrCodeUrl+'/catatan-perkembangan-pasien-terintegrasi')
      }
    }
    
    let script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";
    document.head.append(script);

    script.onload = function () {
      qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeUrl,
        width: 80,
        height: 80,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    };
  });

  const handleModalQR = () => {
    QRModal = true
    setTimeout(() => {
      qrcodeChild = new QRCode(document.getElementById("qrcodeChild"), {
        text: qrCodeUrl,
        // width: 200,
        // height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }, 1000);
  }
  
  const handlePasienPulang = (id) => {
    Swal.fire({
      title: "Perawatan Pasien Inap Selesai?",
      text: "Periksa kembali kelengkapan dokumen rekam medis. Hati-hati, aksi ini bersifat permanen pada database.",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Ubah Status Perawatan Selesai",
      denyButtonText: `Batal`,
    }).then(async(result) => {
      if (result.isConfirmed) {
        const config = {
          headers: {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        };
        
        axios.put(data.api_base+'/rekam-medis/pasien-pulang/'+id , config);
        
        window.location.href = $page.url.origin + "/rekam-medis"
      }
    });
  }
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <section
    class="grid grid-cols-12 gap-2 lg:gap-6 mt-10 px-4 py-2 lg:py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg"
  >
    <div class="col-span-12 lg:col-span-4 p-2">
      <div class="flex items-center justify-center">
        <div class="p-4 border border-gray-300 w-max">
          <div class="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center gap-6">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div id="qrcode" on:click={handleModalQR}/>
            <Modal title="Kode QR Rekam Medis Pasien" bind:open={QRModal} autoclose size="xl">
              <div class="text-center">
                <div class="qrcodeModal" id="qrcodeChild"/>
              </div>
              <svelte:fragment slot='footer'>
                <div class="flex justify-between gap-2 w-full">
                  <Button color="green"><a class="flex items-center gap-1" href="/print-qrcode/{no_rm}" target="_blank" rel="noreferrer"><Icon width="26" height="26" icon="material-symbols:print"/>Print</a></Button>
                  <Button color="alternative">Tutup</Button>
                </div>
              </svelte:fragment>
            </Modal>
            <div class="sm:order-first">
              <p class="font-bold text-xs my-1">No. RM: {no_rm}</p>
              <p class="font-bold text-xs my-1 uppercase">{data?.patient.name ?? ''} ({data?.patient.jenis_kelamin === 'Laki-Laki' ? 'L' : 'P'}) {data?.patient.umur+'th' ?? ''}</p>
              <p class="font-bold text-xs my-1">Tgl. Lahir: {data?.patient.tanggal_lahir ?? ''}</p>
              <p class="font-bold text-xs my-1">
                {data?.patient.alamat_ktp ?? ''}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-nowrap items-center justify-between gap-4 mt-2 lg:mt-5"
      >
        <div>
          <h5
            class="inline-flex items-center text-md font-semibold text-gray-500 dark:text-gray-400"
          >
            <svg
              class="w-5 h-5 mr-2"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              /></svg
            >Dokumen Rekam Medis
          </h5>
          <p class="text-xs font-base italic text-red-600">
            (*) Dokumen wajib diperiksa.
          </p>
        </div>
        <div class="flex items-center justify-between gap-4">
          <button type="button" class="focus:outline-none whitespace-normal m-0.5 rounded-lg focus:ring-2 p-1.5 focus:ring-gray-400  hover:bg-gray-100 dark:hover:bg-gray-700 dots-menu dark:text-white" id="dots-menu">
            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
          </button>
          <Dropdown triggeredBy="#dots-menu" placement="left-start">
            <DropdownItem on:click={()=>handlePasienPulang(no_rm)}>Rawat Inap Selesai (<i>Pasien Pulang</i>)</DropdownItem>
            <DropdownItem href="/transaksi/{no_rm}">Nota Rawat Inap Pasien</DropdownItem>
            <!-- <DropdownDivider/>
            <DropdownItem href="/">Download Rekam Medis Pasien</DropdownItem> -->
          </Dropdown>
        </div>
      </div>
      {#if data?.user_data.role === "Perawat"}
        <div class="py-2 lg:py-4 mt-2 overflow-y-auto h-32 lg:h-80 border-b lg:border-none">
          <div class="grid gap-1 lg:gap-2">
            <a
              href="/rekam-medis/{no_rm}"
              class="{activeUrl === '/(app)/rekam-medis/[slug]'
                ? 'font-semibold'
                : ''} text-sm lg:text-md hover:text-gray-500"
              >Log Aktivitas Sistem</a
            >
            <a
              href="/rekam-medis/{no_rm}/informasi-pasien"
              class="{activeUrl === 'informasi-pasien'
                ? 'font-semibold'
                : ''} text-sm lg:text-md hover:text-gray-500"
              >Informasi Pasien <span class="text-red-600">*</span></a
            >
            <a
              href="/rekam-medis/{no_rm}/pemeriksaan-awal"
              class="{activeUrl === 'pemeriksaan-awal'
                ? 'font-semibold'
                : ''} text-sm lg:text-md hover:text-gray-500"
              >Pemeriksaan Awal <span class="text-red-600">*</span></a
            >
            <a
              href="/rekam-medis/{no_rm}/asesmen-medis-awal"
              class="{activeUrl === 'asesmen-medis-awal'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Asesmen Medis Awal</a
            >
            <a
              href="/rekam-medis/{no_rm}/asesmen-rawat-inap"
              class="{activeUrl === 'asesmen-rawat-inap'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Asesmen Medis Rawat Inap</a
            >
            <a
              href="/rekam-medis/{no_rm}/edukasi-pasien"
              class="{activeUrl === 'edukasi-pasien'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Edukasi Pasien & Keluarga Terintegrasi <span class="text-red-600"
                >(opsional)</span
              ></a
            >
            <a
              href="/rekam-medis/{no_rm}/transfer-pasien-internal"
              class="{activeUrl === 'transfer-pasien-internal'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Transfer Pasien Internal <span class="text-red-600"
                >(opsional)</span
              ></a
            >
            <a
              href="/rekam-medis/{no_rm}/hasil-pemeriksaan-penunjang"
              class="{activeUrl === 'hasil-pemeriksaan-penunjang'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Hasil Pemeriksaan Penunjang</a
            >
            <a
              href="/rekam-medis/{no_rm}/kopi-resep"
              class="{activeUrl === 'kopi-resep'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Kopi Resep</a
            >
            <a
              href="/rekam-medis/{no_rm}/catatan-perkembangan-pasien-terintegrasi"
              class=" {activeUrl === 'catatan-perkembangan-pasien-terintegrasi'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Catatan Perkembangan Pasien Terintegrasi <span class="text-red-600"
                >*</span
              ></a
            >
            <a
              href="/rekam-medis/{no_rm}/catatan-keperawatan"
              class=" {activeUrl === 'catatan-keperawatan'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Catatan Keperawatan <span class="text-red-600">*</span></a
            >
            <a
              href="/rekam-medis/{no_rm}/observasi-cairan"
              class="{activeUrl === 'observasi-cairan'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Observasi Cairan <span class="text-red-600">*</span></a
            >
            <a
              href="/rekam-medis/{no_rm}/pemberian-obat-pasien"
              class="{activeUrl === 'pemberian-obat-pasien'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Pemberian Obat Pasien <span class="text-red-600">*</span></a
            >
            <a
              href="/rekam-medis/{no_rm}/rekonsiliasi"
              class="{activeUrl === 'rekonsiliasi'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Rekonsiliasi <span class="text-red-600">*</span></a
            >
            <a
              href="/rekam-medis/{no_rm}/daftar-dokter-penanggungjawab-pasien"
              class="{activeUrl === 'daftar-dokter-penanggungjawab-pasien'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Dokter Penanggung Jawab Pasien <span class="text-red-600">*</span
              ></a
            >
            <a
              href="/rekam-medis/{no_rm}/news"
              class="{activeUrl === 'news'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >National Early Warning Score <span class="text-red-600"
                >(opsional)</span
              ></a
            >
            <a
              href="/rekam-medis/{no_rm}/ringkasan-pasien-pulang"
              class="{activeUrl === 'ringkasan-pasien-pulang'
                ? 'font-semibold'
                : ''} text-sm lg:text-md font-base hover:text-gray-500"
              >Ringkasan Pasien Pulang <span class="text-red-600">*</span></a
            >
          </div>
        </div>
      {:else}
      <div class="py-2 lg:py-4 mt-2 overflow-y-auto h-32 lg:h-80 border-b lg:border-none">
        <div class="grid gap-1 lg:gap-2">
          <a
            href="/rekam-medis/{no_rm}/catatan-perkembangan-pasien-terintegrasi"
            class=" {activeUrl === 'catatan-perkembangan-pasien-terintegrasi'
              ? 'font-semibold'
              : ''} text-sm lg:text-md font-base hover:text-gray-500"
            >Catatan Perkembangan Pasien Terintegrasi (VISITASI PASIEN) <span class="text-red-600"
              >*</span
            ></a
          >
        </div>
      </div>
      {/if}
    </div>
    <div
      class="col-span-12 lg:col-span-8 lg:order-first lg:border-r py-2 lg:py-4 px-4"
    >
      <slot />
    </div>
  </section>
</div>
