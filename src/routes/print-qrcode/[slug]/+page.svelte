<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
	import AppPdf from './AppPdf.svelte'
	import Page from './Page.svelte'

  export let data;

  const no_rm = $page.params.slug;
  const qrCodeUrl = $page.url.origin + "/rekam-medis/" + no_rm;
  let qrcodes = [];

  let print = false

  onMount(() => {
    let script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";
    document.head.append(script);

    script.onload = function () {
      qrcodes = Array.from({ length: 16 }).map((_, index) => {
        const qrcode = new QRCode(document.getElementById(`qrcode-${index}`), {
          text: qrCodeUrl,
          width: 80,
          height: 80,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H,
        });
        return qrcode;
      });
    };

    setTimeout(() => {
      print = true
    }, 1000);

  });
</script>

<AppPdf bind:print={print}>
  <Page>
    <section>
      <div class="grid grid-cols-3 gap-2">
        {#each Array.from({ length: 16 }) as _, index (index)}
          <div class="p-4 border border-gray-300 w-max m-2">
            <div class="flex justify-between items-center gap-2 sm:gap-6">
              <div class="font-bold text-xs">
                <p class="my-1">No. RM: {no_rm}</p>
                <p class="my-1 uppercase">{data?.patient.name ?? ''} ({data?.patient.jenis_kelamin === 'Laki-Laki' ? 'L' : 'P'}) {data?.patient.umur+'th' ?? ''}</p>
                <p class="my-1">Tgl. Lahir: {data?.patient.tanggal_lahir ?? ''}</p>
                <p class="my-1">{data?.patient.alamat_ktp ?? ''}</p>
              </div>
              <div id={`qrcode-${index}`} />
            </div>
          </div>
        {/each}
      </div>
    </section>
  </Page>
</AppPdf>

<style>
  section {
    padding: 1rem;
  }
</style>
