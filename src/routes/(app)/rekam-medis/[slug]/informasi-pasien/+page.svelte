<script>
  import { Button } from "flowbite-svelte";
  export let data
</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">
        Informasi Pasien
      </p>
    </div>
    <Button href="informasi-pasien/{data?.informasi_pasien._id}" size="sm" color="green">
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
      <span class="hidden sm:block">Isi Dokumen</span></Button
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
            <p class="font-light sm:text-right">{data?.informasi_pasien.no_rekam_medis ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nama Lengkap Pasien:</p>
            <p class="font-light sm:text-right">
              {data?.informasi_pasien.name ?? ''}
            </p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Umur:</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.umur ?? ''} Tahun</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Jenis Kelamin:</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.jenis_kelamin ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Tempat / Tanggal Lahir:</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.tempat_lahir+', ' ?? ''}{data?.informasi_pasien.tanggal_lahir ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nomor Telepon/HP:</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.no_hp ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Agama</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.agama ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Alamat Tempat Tinggal:</p>
            <p class="font-light sm:text-right">
              {data?.informasi_pasien.alamat_domisili ?? ''}
            </p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Alamat KTP:</p>
            <p class="font-light sm:text-right">
              {data?.informasi_pasien.alamat_ktp ?? ''}
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
            <p class="font-light sm:text-right">{data?.informasi_pasien.nama_penanggungjawab ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Hubungan Dengan Pasien:</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.hubungan_dengan_pasien ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nomor Telepon/HP:</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.no_hp_penanggungjawab ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Alamat Tempat Tinggal:</p>
            <p class="font-light sm:text-right">
              {data?.informasi_pasien.alamat_domisili_penanggungjawab ?? ''}
            </p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Alamat KTP:</p>
            <p class="font-light sm:text-right">
              {data?.informasi_pasien.alamat_ktp_penanggungjawab ?? ''}
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
            <p class="font-medium">Nama Asuransi:</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.nama_asuransi ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Nomor Asuransi:</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.nomor_asuransi ?? ''}</p>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
          >
            <p class="font-medium">Status Asuransi:</p>
            <p class="font-light sm:text-right">{data?.informasi_pasien.nama_asuransi !== 'Umum/Mandiri' ? data.informasi_pasien.status_asuransi ? 'Peserta Aktif' : 'Peserta Tidak Aktif' : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
