<script>
  import { Button } from "flowbite-svelte";

  
</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xl font-semibold">Informasi Pasien</p>
      <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
    </div>
    <Button href="informasi-pasien/update" size="md" color="green">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg>
      Update</Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    <div class="border border-slate-300 rounded p-4 w-full">
      <p class="text-xl font-semibold">Biodata Pasien</p>
      <hr class="my-2">
      <div class="mb-2">
        <p class="text-lg font-semibold italic">Identitas</p>
        <div class="grid grid-cols-2 gap-6 py-2">
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Nomor Rekam Medis:</p>
            <p class="font-light text-right">000001-2023</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Nama Lengkap Pasien:</p>
            <p class="font-light text-right">Baginda Jon Snow Pradipta Setiawan</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Umur:</p>
            <p class="font-light text-right">23 Tahun</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Jenis Kelamin:</p>
            <p class="font-light text-right">Laki-Laki</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Tempat / Tanggal Lahir:</p>
            <p class="font-light text-right">Sragen, 02 Juni 2000</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Nomor Telepon/HP:</p>
            <p class="font-light text-right">089560417864</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Agama</p>
            <p class="font-light text-right">Islam</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Alamat Tempat Tinggal:</p>
            <p class="font-light text-right">Jln. Mayjend Pandjaitan No. 22 Malang</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Alamat KTP:</p>
            <p class="font-light text-right">Jln. Mayjend Pandjaitan No. 22 Malang</p>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <p class="text-xl font-semibold">Data Pemeriksaan</p>
        <hr class="my-2">
        <div class="grid grid-cols-2 gap-6 py-2">
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm col-span-2">
            <p class="font-medium">Pasien Masuk Melalui</p>
            <p class="font-light text-right">Poliklinik Jiwa</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm col-span-2">
            <p class="font-medium col-span-2">Diagnosa & Tindakan</p>
            <div class="grid grid-cols-2 gap-4 col-span-2">
              <p class="font-medium">DPJP Utama:</p>
              <p class="font-light text-right">dr. Khal Drogo, M.Biomed, Sp.PD</p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-medium">Diagnosa Sementara:</p>
              <div class="font-light text-right">
                <div class="my-1">
                    <p>ICD-10: AA.1</p>
                    <p>Deskripsi: Pilek</p>
                </div>
                <div class="my-1">
                    <p>ICD-10: AA.2</p>
                    <p>Deskripsi: Batuk</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <p class="font-medium">Tindakan:</p>
              <div class="font-light text-right">
                <div class="my-1">
                    <p>ICD-9: BB.1</p>
                    <p>Deskripsi: Rawat Mandiri</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Jenis Kamar:</p>
            <p class="font-light text-right">Kelas 1</p>
          </div>
          <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
            <p class="font-medium">Nama Kamar:</p>
            <p class="font-light text-right">Kamar Wisnu</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>