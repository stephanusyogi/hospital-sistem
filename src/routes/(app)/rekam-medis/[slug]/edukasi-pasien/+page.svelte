<script>

  import { Accordion, AccordionItem, Button, Checkbox, Dropzone, Input, Label, Radio, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";

  import { page } from "$app/stores";
  export let data
  
  const no_rm = $page.params.slug;
</script>
<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.10 Edukasi Pasien & Keluarga Terintegrasi</p>
    </div>
    <Button href="edukasi-pasien/{data?.edukasi_pasien._id ? data?.edukasi_pasien._id : no_rm}" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg><span class="hidden sm:block">Isi Dokumen</span></Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    {#if data?.edukasi_pasien.length !== 0}
      <div class="border border-slate-300 rounded p-4 w-full">
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Pengkajian Kebutuhan Edukasi</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Keyakinan & nilai-nilai pribadi pasien & keluarga:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].keyakinan_nilai}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Tingkat Edukasi:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].tingkat_edukasi}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Bahasa yang Digunakan:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].bahasa_yang_digunakan}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Kesediaan Menerima Informasi & Edukasi:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].kesediaan_menerima_informasi}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Diagnosis Masuk:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].diagnosis_masuk}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Rencana Operasi:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.pengkajian_kebutuhan_edukasi[0].rencana_operasi}</p>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Kebutuhan Edukasi</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Penerjemah:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.kebutuhan_edukasi[0].penerjemah}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Perawatan Pendamping:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.kebutuhan_edukasi[0].perawatan_pendamping}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Asuhan Berkelanjutan di Rumah:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.kebutuhan_edukasi[0].asuhan_berkelanjutan}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
              <p class="font-medium">Media Edukasi:</p>
              <p class="font-light sm:text-right">{data?.edukasi_pasien.kebutuhan_edukasi[0].media_edukasi}</p>
            </div>
          </div>
        </div>
        <!-- <div class="mb-2">
          <p class="text-lg font-semibold italic">Rencana & Pelaksanaan Edukasi</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <p class="font-medium sm:col-span-2">DPJP:</p>
              <div class="sm:col-span-2">
                <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
                <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Kondisi kesehatan dan diagnosis pasti.</li>
                  <li>Partisipasi dalam pengambilan keputusan terkait dengan pelayanannya.</li>
                  <li>Proses memberikan Informed Consent.</li>
                  <li>Manajemen nyeri.</li>
                </ul>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
                <p class="font-medium">Rencana Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ex neque. Proin mauris eros, hendrerit euismod faucibus sed, molestie vitae massa. Etiam consectetur eleifend fermentum.</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Pemberi Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Penerima Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Verifikasi Pemahaman:</p>
                <p class="font-light sm:text-right">Ya</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Durasi Edukasi (Jam):</p>
                <p class="font-light sm:text-right">1</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <p class="font-medium sm:col-span-2">PJ SHIFT PERAWAT:</p>
              <div class="sm:col-span-2">
                <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
                <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Partisipasi dalam proses pelayanan.</li>
                  <li>Penggunaan peralatan medis secara efektif dan aman.</li>
                  <li class="italic">Hand Hygine.</li>
                  <li>Manajemen nyeri.</li>
                </ul>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
                <p class="font-medium">Rencana Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ex neque. Proin mauris eros, hendrerit euismod faucibus sed, molestie vitae massa. Etiam consectetur eleifend fermentum.</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Pemberi Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Penerima Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Verifikasi Pemahaman:</p>
                <p class="font-light sm:text-right">Ya</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Durasi Edukasi (Jam):</p>
                <p class="font-light sm:text-right">1</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <p class="font-medium sm:col-span-2">APOTEKER:</p>
              <div class="sm:col-span-2">
                <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
                <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Penggunaan obat efektif.</li>
                  <li>Interaksi obat dengan obat lain, makanan.</li>
                  <li>Efek samping obat.</li>
                  <li>Penggunaan obat secara mandiri oleh pasien.</li>
                </ul>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
                <p class="font-medium">Rencana Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ex neque. Proin mauris eros, hendrerit euismod faucibus sed, molestie vitae massa. Etiam consectetur eleifend fermentum.</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Pemberi Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Penerima Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Verifikasi Pemahaman:</p>
                <p class="font-light sm:text-right">Ya</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Durasi Edukasi (Jam):</p>
                <p class="font-light sm:text-right">1</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <p class="font-medium sm:col-span-2">FISIOTERAPIS:</p>
              <div class="sm:col-span-2">
                <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
                <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Teknik rehabilitasi.</li>
                </ul>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
                <p class="font-medium">Rencana Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ex neque. Proin mauris eros, hendrerit euismod faucibus sed, molestie vitae massa. Etiam consectetur eleifend fermentum.</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Pemberi Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Penerima Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Verifikasi Pemahaman:</p>
                <p class="font-light sm:text-right">Ya</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Durasi Edukasi (Jam):</p>
                <p class="font-light sm:text-right">1</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <p class="font-medium sm:col-span-2">NUTRITIONIS KLINIS:</p>
              <div class="sm:col-span-2">
                <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
                <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Diet dan nutrisi.</li>
                </ul>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
                <p class="font-medium">Rencana Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ex neque. Proin mauris eros, hendrerit euismod faucibus sed, molestie vitae massa. Etiam consectetur eleifend fermentum.</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Pemberi Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Penerima Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Verifikasi Pemahaman:</p>
                <p class="font-light sm:text-right">Ya</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Durasi Edukasi (Jam):</p>
                <p class="font-light sm:text-right">1</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <p class="font-medium sm:col-span-2">LAINNYA:</p>
              <div class="sm:col-span-2">
                <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
                <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
                <p class="font-medium">Rencana Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel ex neque. Proin mauris eros, hendrerit euismod faucibus sed, molestie vitae massa. Etiam consectetur eleifend fermentum.</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Pemberi Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Nama Penerima Edukasi:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Verifikasi Pemahaman:</p>
                <p class="font-light sm:text-right">Ya</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
                <p class="font-medium">Durasi Edukasi (Jam):</p>
                <p class="font-light sm:text-right">1</p>
              </div>
            </div>
          </div>
        </div> -->
        <div class="mb-2">
          <p class="text-lg font-semibold italic">Penandaan Lokasi Operasi</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <p class="font-medium">File Scan:</p>
              {#if data?.edukasi_pasien.img_dir_penandaan_lokasi_operasi !== ''}
                <p class="font-light sm:text-right"><a href={data?.edukasi_pasien.img_dir_penandaan_lokasi_operasi ?? ''} target="_blank" rel="noreferrer">Lihat File</a></p>
              {/if}
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