<script>
  import { Button } from "flowbite-svelte";
  import { page } from "$app/stores";
  export let data
  
  const no_rm = $page.params.slug;
</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">
        Form 12.31 Asesmen Rawat Inap
      </p>
    </div>
    <Button href="asesmen-rawat-inap/{data?.asesmen_medis_rawat_inap._id ? data?.asesmen_medis_rawat_inap._id : no_rm}" color="green" size="sm">
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
    {#if data?.asesmen_medis_rawat_inap.length !== 0}
      <div class="border border-slate-300 rounded p-4 w-full my-2">
        <p class="text-xl font-semibold">Bagian 1: Informasi</p>
        <hr class="my-2" />
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Status Fisik Dan Riwayat</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Diagnosa Masuk:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Keluhan Utama:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].keluhan_utama ?? ''}
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="mb-2">
          <p class="text-lg font-semibold italic">Alloanamnesa</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Riwayat Penyakit Pasien :</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Alkohol/Obat:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Merokok:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Imunisasi:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Riwayat Penyakit Keluarga:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Kondisi Saat Masuk:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Asal Pasien:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Kepercayaan Khusus/Sosial Budaya:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Status Pernikahan:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Aktivitas:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Status Emosional:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Keluarga Terdekat:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Informasi Didapat Dari:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Kebutuhan Privasi:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Pendidikan:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Penanggung Jawab Biaya:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Penanggung Jawab Biaya:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div> -->
        <!-- <div class="mb-2">
          <p class="text-lg font-semibold italic">Heteroanamnesa</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium col-span-2">Tanda-Tanda Vital :</p>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 sm:col-span-2"
              >
                <div class="grid grid-cols-2 gap-2">
                  <p class="font-medium">Suhu:</p>
                  <p class="font-light text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''} C</p>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <p class="font-medium">SpO2:</p>
                  <p class="font-light text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''} %</p>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <p class="font-medium">Nadi:</p>
                  <p class="font-light text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''} x/mnt</p>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <p class="font-medium">Tensi:</p>
                  <p class="font-light text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''} mmHg</p>
                </div>
              </div>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Kewaspadaan:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Alergi:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Jenis Reaksi:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Barang Berharga:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Alat Bantu:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div> -->
        <!-- <div class="mb-2">
          <p class="text-lg font-semibold italic">Pemeriksaan Kepala & Leher</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Mata :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Hidung:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Mulut:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Telinga:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Leher:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Pemeriksaan Thorax</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Bentuk :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Paru (i):</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Paru (ii):</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Jantung (i):</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Jantung (ii):</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Jantung (iii):</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Pemeriksaan Abdomen</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Palpasi :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Inspeksi:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Auskultasi:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Perkusi:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Asupan Diit:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Defekasi:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Pemeriksaan Genitourinaria</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Hasil :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Pemeriksaan Ginekologi</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Hasil :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Pemeriksaan Neurologi</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Hasil :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Kesadaran :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Glassgow Coma Scale</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div class="grid grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
              <div>
                <p class="font-medium">Total Nilai :</p>
                <p class="text-sm italic">
                  15 (CM), 13-14 (Penurunan Kesadaran Ringan), 9-12 (Penurunan
                  Kesadaran Sedang), 3-8 (Penurunan Kesadaran Berat)
                </p>
              </div>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Mata :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Verbal :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Motorik :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Pemeriksaan Muskuloskeletal & Kulit (Mobilitas, Fungsi Sendi, Warna
            Kulit, Turgor)
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Mobilitas :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Fungsi Sendi :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Warna Kulit :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Turgor :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Deskripsi Apabila Terdapat Frakture :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Pemeriksaan Norton Scale (Resiko Kulit)
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div class="grid grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
              <div>
                <p class="font-medium">Total Skor :</p>
                <p class="text-sm italic">
                  *Skor kurang dari 14 = Resiko Tinggi, lakukan pencegahan
                  dekubitus sesuai prosedur
                </p>
              </div>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Kondisi Fisik :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Kondisi Mental :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Aktivitas :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Mobilitas :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Inkontinensia :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Pemeriksaan Aktivitas Harian Dasar
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div class="grid grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
              <div>
                <p class="font-medium">Total Nilai ADL :</p>
                <p class="text-sm italic">
                  Skor: 6, Tidak Ada Ketergantungan. Skor: 3-5, Ketergantungan
                  Sebagian. Skor: 0-2, Tergantung Penuh.
                </p>
              </div>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Makan/Minum :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Mandi :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Memakai Baju :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">BAB/BAK (Pergi Ke Toilet) :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Naik turun tempat tidur :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Kemampuan menahan BAB/BAK :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Pemeriksaan Status Nutrisi (MUST)
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div class="text-sm sm:col-span-2">
              <p class="border p-4 font-medium sm:col-span-2 mb-2">
                Tanda-Tanda Vital :
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
                >
                  <p class="font-medium">Tinggi Badan :</p>
                  <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''} cm</p>
                </div>
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
                >
                  <p class="font-medium">Berat Badan :</p>
                  <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''} kg</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
              <div>
                <p class="font-medium">Total Skor :</p>
                <p class="text-sm italic">
                  0: Resiko Rendah, 1: Resiko Sedang, Lebih dari 2: Resiko Tinggi
                </p>
              </div>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Skor IMT :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">
                Persentase kehilangan berat badan tak terencana(dalam 3-6 bulan
                terakhir) :
              </p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Efek akut akibat penyakit :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Pemeriksaan Resiko Jatuh Morse (Untuk pasien usia > 13 tahun)
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div class="grid grid-cols-2 gap-6 border p-4 text-sm sm:col-span-2">
              <div>
                <p class="font-medium">Total Skor :</p>
                <p class="text-sm italic">
                  Lebih dari 45: Resiko Tinggi, 25-44: Resiko Sedang, 0-24: Resiko
                  Rendah
                </p>
              </div>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Riwayat Jatuh :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">
                Diagnosis Sekunder( sama dengan/lebih dari 2 diagnosis) :
              </p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Alat Bantu :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Terpasang Infus :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Gaya Berjalan :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Status Mental :</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Pemeriksaan Nyeri</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Nyeri:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm"
            >
              <p class="font-medium">Deskripsi:</p>
              <p class="font-light sm:text-right">{data?.asesmen_medis_rawat_inap.status_fisik_riwayat[0].diagnosa_masuk ?? ''}</p>
            </div>
          </div>
        </div> -->
      </div>
      <div class="border border-slate-300 rounded p-4 w-full my-2">
        <p class="text-xl font-semibold">Bagian 2: Analisa</p>
        <hr class="my-2" />
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Diagnosa Keperawatan</p>
          <div class="grid grid-cols-1 gap-2 sm:gap-6 py-2">
            <div
              class="grid grid-cols-1 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <ul class="space-y-1 font-light list-disc list-inside dark:text-gray-400">
                {#each data?.asesmen_medis_rawat_inap.diagnosa_keperawatan as row}
                  <li>{row.keterangan}</li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    {:else}
      <div class="text-center p-10">
        <h2 class="text-lg font-semibold">Data Tidak Ditemukan</h2>
      </div>
    {/if}
  </div>
</main>
