<script>

  import { Button } from "flowbite-svelte";

</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Ringkasan Pasien Pulang</p>
    </div>
    <Button href="ringkasan-pasien-pulang/update" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg><span class="hidden sm:block">Update</span></Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    <div class="border border-slate-300 rounded p-4 w-full">
      <div class="mb-2">
        <p class="text-lg font-semibold italic">Ringkasan Informasi</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Tanggal Masuk:</p>
            <p class="font-light sm:text-right">Minggu, 9 April 2023</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Tanggal Keluar:</p>
            <p class="font-light sm:text-right">Senin, 10 April 2023</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Ruangan:</p>
            <p class="font-light sm:text-right">Lorem ipsum</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Kelas:</p>
            <p class="font-light sm:text-right">Lorem ipsum</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Cara Pembayaran:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 cols-span-2">
              <p class="font-medium">Jenis:</p>
              <p class="font-light sm:text-right">Lorem ipsum</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 cols-span-2">
              <p class="font-medium">Nama:</p>
              <p class="font-light sm:text-right">Lorem ipsum</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 cols-span-2">
              <p class="font-medium">Nomor Asuransi:</p>
              <p class="font-light sm:text-right">Lorem ipsum</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 cols-span-2">
              <p class="font-medium">Status Asuransi:</p>
              <p class="font-light sm:text-right">Lorem ipsum</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Dokter Penanggung Jawab Pasien:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 cols-span-2">
              <p class="font-medium">DPJP Utama:</p>
              <p class="font-light sm:text-right">dr. Khal Drogo, Sp PD FINASIM</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 cols-span-2">
              <p class="font-medium">Tim Dokter:</p>
              <ul class="space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                <li>dr. Ramsay Bolton, Sp AN</li>
                <li>dr. Viserys II S, Sp.KJ</li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium">Alergi:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium">Indikasi Rawat Inap / Diagnosis Masuk:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium">Pemeriksaan Fisik:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium">Hasil Pemeriksaan Penunjang:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium">Diagnosa Utama:</p>
            <div class="font-light sm:text-right">
              <div class="my-1">
                  <p>ICD-10 Code: AA.1</p>
                  <p>Deskripsi: Pilek</p>
              </div>
              <div class="my-1">
                  <p>ICD-10 Code: AA.2</p>
                  <p>Deskripsi: Batuk</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium">Diagnosa Sekunder:</p>
            <div class="font-light sm:text-right">
              <div class="my-1">
                  <p>ICD-10 Code: AA.1</p>
                  <p>Deskripsi: Pilek</p>
              </div>
              <div class="my-1">
                  <p>ICD-10 Code: AA.2</p>
                  <p>Deskripsi: Batuk</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Terapi Selama Dirawat:</p>
            <p class="font-light sm:text-right">Lorem ipsum</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Terapi Dirumah:</p>
            <p class="font-light sm:text-right">Lorem ipsum</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium">Tindakan/Operasi yang Sudah Dilakukan:</p>
            <div class="font-light sm:text-right">
              <div class="my-1">
                  <p>ICD-9 Code: AA.1</p>
                  <p>Deskripsi: Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <p class="text-lg font-semibold italic">Kondisi Pasien Pulang (<span class="italic">Status Present</span>)</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Keadaan Umum/GCS:</p>
            <div class="grid grid-cols-3 gap-4 sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p class="font-medium">T:</p>
                <p class="font-light sm:text-right">10 mmHg</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p class="font-medium">N:</p>
                <p class="font-light sm:text-right">10 x/menit</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p class="font-medium">RR:</p>
                <p class="font-light sm:text-right">10 x/menit</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p class="font-medium">S:</p>
                <p class="font-light sm:text-right">10 C</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p class="font-medium">SpO2:</p>
                <p class="font-light sm:text-right">10 %</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Cara Pulang:</p>
            <p class="font-light sm:text-right">Atas Permintaan Pasien</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Keadaan Pulang:</p>
            <p class="font-light sm:text-right">Sembuh</p>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <p class="text-lg font-semibold italic">Instruksi Tindakan Lanjut</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Kontrol di RSI Aisyah Malang:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-medium">Poliklinik:</p>
              <p class="font-light sm:text-right">Lorem Ipsum</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-medium">DPJP:</p>
              <p class="font-light sm:text-right">Lorem Ipsum</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-medium">Tanggal:</p>
              <p class="font-light sm:text-right">Lorem Ipsum</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-medium">Jam:</p>
              <p class="font-light sm:text-right">Lorem Ipsum</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Rujuk / Rujuk Balik di Luar RSI Aisyah Malang:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-medium">Nama Instansi:</p>
              <p class="font-light sm:text-right">Lorem Ipsum</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-medium">Keterangan:</p>
              <p class="font-light sm:text-right">Lorem Ipsum</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p class="font-medium">Tanggal:</p>
              <p class="font-light sm:text-right">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <p class="text-lg font-semibold italic">Edukasi</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium">Daftar Edukasi Pasien:</p>
            <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Kondisi kesehatan dan diagnosis pasti.</li>
              <li>Partisipasi dalam pengambilan keputusan terkait dengan pelayanannya.</li>
              <li>Proses memberikan Informed Consent.</li>
              <li>Manajemen nyeri.</li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</main>