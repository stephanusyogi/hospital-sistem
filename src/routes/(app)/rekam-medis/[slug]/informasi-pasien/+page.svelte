<script>
  import { Button } from "flowbite-svelte";
</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">
        Informasi Pasien
      </p>
    </div>
    <Button href="informasi-pasien/update" size="sm" color="green">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="sm:mr-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
        /></svg
      >
      <span class="hidden sm:block">Update</span></Button
    >
  </div>
  <hr class="my-5" />
  <div class="overflow-y-auto max-h-screen">
    <div class="border border-slate-300 rounded p-4 w-full">
      <p class="text-xl font-semibold">Biodata Pasien</p>
      <hr class="my-2" />
      <div class="mb-2">
        <p class="text-md sm:text-lg font-medium italic">Identitas</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nomor Rekam Medis:</p>
            <p class="font-light sm:text-right">000001-2023</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nama Lengkap Pasien:</p>
            <p class="font-light sm:text-right">
              Baginda Jon Snow Pradipta Setiawan
            </p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Umur:</p>
            <p class="font-light sm:text-right">23 Tahun</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Jenis Kelamin:</p>
            <p class="font-light sm:text-right">Laki-Laki</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Tempat / Tanggal Lahir:</p>
            <p class="font-light sm:text-right">Sragen, 02 Juni 2000</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nomor Telepon/HP:</p>
            <p class="font-light sm:text-right">089560417864</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Agama</p>
            <p class="font-light sm:text-right">Islam</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Alamat Tempat Tinggal:</p>
            <p class="font-light sm:text-right">
              Jln. Mayjend Pandjaitan No. 22 Malang
            </p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Alamat KTP:</p>
            <p class="font-light sm:text-right">
              Jln. Mayjend Pandjaitan No. 22 Malang
            </p>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <p class="text-md sm:text-lg font-medium italic">
          Identitas Penanggung Jawab
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nama:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Hubungan Dengan Pasien:</p>
            <p class="font-light sm:text-right">Keluarga</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nomor Telepon/HP:</p>
            <p class="font-light sm:text-right">089560417864</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Alamat Tempat Tinggal:</p>
            <p class="font-light sm:text-right">
              Jln. Mayjend Pandjaitan No. 22 Malang
            </p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Alamat KTP:</p>
            <p class="font-light sm:text-right">
              Jln. Mayjend Pandjaitan No. 22 Malang
            </p>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <p class="text-lg font-semibold italic">Asuransi & Pembayaran</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Jenis Asuransi:</p>
            <p class="font-light sm:text-right">BPJS</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nama Asuransi:</p>
            <p class="font-light sm:text-right">BPJS</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nomor Asuransi:</p>
            <p class="font-light sm:text-right">089560417864</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Status Asuransi:</p>
            <p class="font-light sm:text-right">Aktif</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
