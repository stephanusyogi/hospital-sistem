<script>
  import { Button } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  export let data
  
  const no_rm = $page.params.slug;
</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">
        Form 12.15 Asesmen Medis Awal
      </p>
    </div>
    <Button href="asesmen-medis-awal/{data?.asesmen_medis_awal._id ? data?.asesmen_medis_awal._id : no_rm}" color="green" size="sm">
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
      ><span class="hidden sm:block">Update</span></Button
    >
  </div>
  <hr class="my-5" />
  <div class="overflow-y-auto max-h-screen">
    {#if data?.asesmen_medis_awal.length > 0}
      <div class="border border-slate-300 rounded p-4 w-full">
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Anamnesa</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Keluhan Utama:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.anamnesa[0].keluhan_utama ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Riwayat Penyakit Sekarang:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.anamnesa[0].riwayat_penyakit_sekarang ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Riwayat Penyakit Keluarga:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.anamnesa[0].riwayat_penyakit_keluarga ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Riwayat Pengobatan:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.anamnesa[0].riwayat_pengobatan ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Riwayat Alergi:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.anamnesa[0].riwayat_alergi ?? ''}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Pemeriksaan Fisik</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Keadaan Umum:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.pemeriksaan_fisik[0].keadaan_umum ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Kepala/Leher:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.pemeriksaan_fisik[0].kepala_leher ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Ekstremitas:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.pemeriksaan_fisik[0].ekstremitas ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Genitalia:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.pemeriksaan_fisik[0].genitalia ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium col-span-2">Kesadaran & GCS:</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-2">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Kesadaran:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].kesadaran ?? ''}
                  </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">GCS:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].gcs ?? ''}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium col-span-2">Status Gizi & BB:</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-2">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Status Gizi:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].status_gizi ?? ''}
                  </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">BB:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].bb ?? ''}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium col-span-2">Thorax:</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-2">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">COR:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].thorax_cor ?? ''}
                  </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Pulmo:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].thorax_pulmo ?? ''}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium sm:col-span-2">Abdomen:</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-2">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Inspeksi:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].abdomen_inspeksi ?? ''}
                  </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Palpasi:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].abdomen_palpasi ?? ''}
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-2">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Auskultasi:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].abdomen_auskultasi ?? ''}
                  </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Perkusi:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].abdomen_perkusi ?? ''}
                  </p>
                </div>
              </div>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium sm:col-span-2">Vital Sign:</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-2">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Tensi:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].vital_sign_tensi ?? ''}
                  </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Nadi:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].vital_sign_nadi ?? ''}
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-2">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">Suhu:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].vital_sign_suhu ?? ''}
                  </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <p class="font-medium">RR:</p>
                  <p class="font-light sm:text-right">
                    {data?.asesmen_medis_awal.pemeriksaan_fisik[0].vital_sign_rr ?? ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Pemeriksaan Penunjang</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Laboratorium:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.pemeriksaan_penunjang[0].laboratorium ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Radiologi:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.pemeriksaan_penunjang[0].radiologi ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Lain-Lain:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.pemeriksaan_penunjang[0].lain_lain ?? ''}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Masalah</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Uraian Masalah:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.masalah ?? ''}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Diagnosis</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Uraian Diagnosis:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.diagnosis ?? ''}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Rencana Asuhan Pemeriksaan Penunjang
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Uraian Rencana Asuhan:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0].uraian_rencana_asuhan ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Terapi:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0].terapi ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Tindakan/prosedur khusus/operasi:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0].tindakan ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Nutrisi:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0].nutrisi ?? ''}
              </p>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Konsultasi/rehabilitasi:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0].konsultasi ?? ''}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Sasaran</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Uraian Sasaran:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.sasaran ?? ''}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Rencana Monitoring / Follow Up
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Uraian:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.rencana_monitoring ?? ''}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Efek Samping / Komplikasi yang Mungkin Terjadi / Hasil yang Tidak
            Diharapkan
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Uraian:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.efek_samping ?? ''}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Hasil yang Diharapkan / Outcome (Prognosa)
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2"
            >
              <p class="font-medium">Uraian:</p>
              <p class="font-light sm:text-right">
                {data?.asesmen_medis_awal.prognosa ?? ''}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">
            Pengkajian Rencana Pemulangan Pasien
          </p>
          <p class="text-md font-medium italic">
            Catatan: jika satu terpenuhi maka pasien membutuhkan perencanaan
            pemulangan khusus.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
              <p class="font-medium">Usia lanjut(60 tahun atau lebih):</p>
              <p class="font-light text-right">{data?.asesmen_medis_awal.pengkajian_rencana_pemulangan_pasien[0].usia_lanjut ? 'Ya' : 'Tidak'}</p>
            </div>
            <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
              <p class="font-medium">Hambatan mobilitasi:</p>
              <p class="font-light text-right">{data?.asesmen_medis_awal.pengkajian_rencana_pemulangan_pasien[0].hambatan_mobilitasi ? 'Ya' : 'Tidak'}</p>
            </div>
            <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
              <p class="font-medium">
                Membutuhkan perawatan medis dan perawatan berkelanjutan:
              </p>
              <p class="font-light text-right">{data?.asesmen_medis_awal.pengkajian_rencana_pemulangan_pasien[0].membutuhkan_perawatan_lanjutan ? 'Ya' : 'Tidak'}</p>
            </div>
            <div class="grid grid-cols-2 gap-6 border p-4 text-sm">
              <p class="font-medium">
                Tergantung dengan orang lain dalam aktivitas harian:
              </p>
              <p class="font-light text-right">{data?.asesmen_medis_awal.pengkajian_rencana_pemulangan_pasien[0].ketergantungan_orang_lain ? 'Ya' : 'Tidak'}</p>
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
