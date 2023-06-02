<script>
  import { onMount, onDestroy } from "svelte";
  import Swal from "sweetalert2";
  import { goto } from "$app/navigation";

  let qrCodeScanner;

  onMount(() => {
    const html5QrcodeScript = document.createElement("script");
    html5QrcodeScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js";
    document.body.appendChild(html5QrcodeScript);
    function onScanSuccess(decodedText, decodedResult) {
      Swal.fire({
        title: "Buka Rekam Medis Pasien?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Ya, Lanjutkan",
        denyButtonText: `Batal`,
      }).then((result) => {
        if (result.isConfirmed) {
          goto(decodedText);
        } else if (result.isDenied) {
          Swal.fire({
            icon: "info",
            title: "Aksi Dibatalkan",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
    }
    html5QrcodeScript.onload = function () {
      qrCodeScanner = new Html5QrcodeScanner(
        "qrcode-scanner",
        { fps: 10, qrbox: 250 },
        (qrCodeMessage) => {
          console.log("QR Code Scanned:", qrCodeMessage);
        }
      );
      qrCodeScanner.render(onScanSuccess);
    };
  });

  onDestroy(() => {
    if (qrCodeScanner) {
      qrCodeScanner.clear();
    }
  });
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <section>
    <div
      class="lg:w-1/2 mt-16 mx-auto px-4 py-2 bg-gray-50 dark:bg-gray-800 shadow rounded-lg"
    >
      <div id="qrcode-scanner" />
    </div>
  </section>
</div>
