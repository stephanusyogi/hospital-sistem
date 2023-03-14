<script>

  import { Button, Label, Radio, TabItem, Tabs, Textarea } from "flowbite-svelte";

</script>

<main class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
  <Tabs style="underline" defaultClass="flex overflow-x-auto rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem open title="Anamnesa" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="keluhan_utama" class="mb-2">Keluhan utama:</Label>
        <Textarea id="keluhan_utama" rows="4" placeholder="Masukkan keluhan utama" name="keluhan_utama"/>
      </div>
      <div class="mb-5">
        <Label for="riwayat_penyakit_sekarang" class="mb-2">Riwayat penyakit sekarang:</Label>
        <Textarea id="riwayat_penyakit_sekarang" placeholder="Masukkan riwayat penyakit sekarang" rows="4" name="riwayat_penyakit_sekarang"/>
      </div>
      <div class="mb-5">
        <Label for="riwayat_penyakit_keluarga" class="mb-2">Riwayat penyakit keluarga:</Label>
        <Textarea id="riwayat_penyakit_keluarga" placeholder="Masukkan riwayat penyakit keluarga" rows="4" name="riwayat_penyakit_keluarga"/>
      </div>
      <div class="mb-5">
        <Label for="riwayat_pengobatan" class="mb-2">Riwayat pengobatan:</Label>
        <Textarea id="riwayat_pengobatan" rows="4" placeholder="Masukkan riwayat pengobatan" name="riwayat_pengobatan"/>
      </div>
      <div class="mb-5">
        <Label for="riwayat_alergi" class="mb-2">Riwayat alergi:</Label>
        <Textarea id="riwayat_alergi" rows="4" placeholder="Masukkan riwayat alergi" name="riwayat_alergi"/>
      </div>
    </TabItem>
    <TabItem title="Pemeriksaan Fisik" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="keadaan_umum" class="mb-2">Keadaan umum:</Label>
        <Textarea id="keadaan_umum" placeholder="Masukkan kesadaran umum" rows="4" name="keadaan_umum"/>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Kesadaran & GCS:</Label>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label for="kesadaran">Kesadaran:</Label>
            <Textarea id="kesadaran" rows="4" placeholder="Masukkan kesadaran" name="kesadaran"/>
          </div>
          <div>
            <Label for="gcs">GCS:</Label>
            <Textarea id="gcs" rows="4" placeholder="Masukkan GCS" name="gcs"/>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Vital Sign:</Label>
        <div class="grid grid-cols-4 gap-4">
          <div>
            <Label for="tensi" class="mb-2">Tensi:</Label>
            <Textarea class="mr-2" id="tensi" rows="2" placeholder="Masukkan tensi" name="tensi"/>
          </div>
          <div>
            <Label for="nadi" class="mb-2">Nadi:</Label>
            <Textarea rows="2" id="nadi" placeholder="Masukkan nadi" name="nadi"/>
          </div>
          <div>
            <Label for="suhu" class="mb-2">Suhu:</Label>
            <Textarea id="suhu" rows="2" placeholder="Masukkan suhu" name="suhu"/>
          </div>
          <div>
            <Label for="rr" class="mb-2">RR:</Label>
            <Textarea id="rr" rows="2" placeholder="Masukkan RR" name="rr"/>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Status Gizi & BB:</Label>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label for="status_gizi">Status Gizi:</Label>
            <Textarea id="status_gizi" rows="4" placeholder="Masukkan status gizi" name="status_gizi"/>
          </div>
          <div>
            <Label for="bb">BB:</Label>
            <Textarea id="bb" rows="4" placeholder="Masukkan BB" name="bb"/>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <Label for="kepala_leher">Kepala/leher:</Label>
        <Textarea id="kepala_leher" rows="4" placeholder="Masukkan kepala/leher" name="kepala_leher"/>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Thorax:</Label>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label for="cor">COR:</Label>
            <Textarea id="cor" rows="4" placeholder="Masukkan COR" name="cor"/>
          </div>
          <div>
            <Label for="pulmo">Pulmo:</Label>
            <Textarea id="pulmo" rows="4" placeholder="Masukkan pulmo" name="pulmo"/>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Abdomen:</Label>
        <div class="grid grid-cols-4 gap-4">
          <div>
            <Label for="inspeksi" class="mb-2">Inspeksi:</Label>
            <Textarea class="mr-2" id="inspeksi" rows="2" placeholder="Masukkan inspeksi" name="inspeksi"/>
          </div>
          <div>
            <Label for="palpasi" class="mb-2">Palpasi:</Label>
            <Textarea rows="2" id="palpasi" placeholder="Masukkan palpasi" name="palpasi"/>
          </div>
          <div>
            <Label for="auskultasi" class="mb-2">Auskultasi:</Label>
            <Textarea id="auskultasi" rows="2" placeholder="Masukkan auskultasi" name="auskultasi"/>
          </div>
          <div>
            <Label for="perkusi" class="mb-2">Perkusi:</Label>
            <Textarea id="perkusi" rows="2" placeholder="Masukkan perkusi" name="perkusi"/>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <Label for="ekstremitas">Ekstremitas:</Label>
        <Textarea id="ekstremitas" rows="4" placeholder="Masukkan ekstremitas" name="ekstremitas"/>
      </div>
      <div class="mb-5">
        <Label for="genitalia">Genitalia:</Label>
        <Textarea id="genitalia" rows="4" placeholder="Masukkan genitalia" name="genitalia"/>
      </div>
    </TabItem>
    <TabItem title="Pemeriksaan Penunjang" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="laboratorium" class="mb-2">Laboratorium:</Label>
        <Textarea id="laboratorium" placeholder="Masukkan laboratorium" rows="4" name="laboratorium"/>
      </div>
      <div class="mb-5">
        <Label for="radiologi" class="mb-2">Radiologi:</Label>
        <Textarea id="radiologi" placeholder="Masukkan radiologi" rows="4" name="radiologi"/>
      </div>
      <div class="mb-5">
        <Label for="lain_lain" class="mb-2">Lain-lain:</Label>
        <Textarea id="lain_lain" placeholder="Masukkan lain-lain" rows="4" name="lain_lain"/>
      </div>
    </TabItem>
    <TabItem title="Masalah" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="masalah" class="mb-2">Uraian Masalah:</Label>
        <Textarea id="masalah" placeholder="Masukkan masalah" rows="4" name="masalah"/>
      </div>
    </TabItem>
    <TabItem title="Diagnosis" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="diagnosis" class="mb-2">Uraian Diagnosis:</Label>
        <Textarea id="diagnosis" placeholder="Masukkan diagnosis" rows="4" name="diagnosis"/>
      </div>
    </TabItem>
    <TabItem title="Rencana Asuhan Pemeriksaan Penunjang" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="rencana_asuhan" class="mb-2">Uraian Rencana Asuhan:</Label>
        <Textarea id="rencana_asuhan" placeholder="Masukkan rencana asuhan" rows="4" name="rencana_asuhan"/>
      </div>
      <div class="mb-5">
        <Label for="terapi" class="mb-2">Terapi:</Label>
        <Textarea id="terapi" placeholder="Masukkan terapi" rows="4" name="terapi"/>
      </div>
      <div class="mb-5">
        <Label for="tindakan_prosedur_khusus_operasi" class="mb-2">Tindakan/prosedur khusus/operasi:</Label>
        <Textarea id="tindakan_prosedur_khusus_operasi" placeholder="Masukkan tindakan/prosedur khusus/operasi" rows="4" name="tindakan_prosedur_khusus_operasi"/>
      </div>
      <div class="mb-5">
        <Label for="nutrisi" class="mb-2">Nutrisi:</Label>
        <Textarea id="nutrisi" placeholder="Masukkan nutrisi" rows="4" name="nutrisi"/>
      </div>
      <div class="mb-5">
        <Label for="konsultasi_rehabilitasi" class="mb-2">Konsultasi/rehabilitasi:</Label>
        <Textarea id="konsultasi_rehabilitasi" placeholder="Masukkan konsultasi/rehabilitasi" rows="4" name="konsultasi_rehabilitasi"/>
      </div>
    </TabItem>
    <TabItem title="Sasaran" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="sasaran" class="mb-2">Uraian Sasaran:</Label>
        <Textarea id="sasaran" placeholder="Masukkan sasaran" rows="4" name="sasaran"/>
      </div>
    </TabItem>
    <TabItem title="Rencana Monitoring / Follow Up" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="rencana_monitoring" class="mb-2">Uraian Monitoring / Follow Up:</Label>
        <Textarea id="rencana_monitoring" placeholder="Masukkan rencana monitoring" rows="4" name="rencana_monitoring"/>
      </div>
    </TabItem>
    <TabItem title="Efek Samping / Komplikasi yang Mungkin Terjadi / Hasil yang Tidak Diharapkan" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="efek_samping" class="mb-2">Uraian Efek Samping/Komplikasi yang Mungkin Terjadi/Hasil yang Tidak Diharapkan:</Label>
        <Textarea id="efek_samping" placeholder="Masukkan uraian" rows="4" name="efek_samping"/>
      </div>
    </TabItem>
    <TabItem title="Hasil yang Diharapkan / Outcome (Prognosa)" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="prognosa" class="mb-2">Uraian MonitHasil yang Diharapkan/Outcome (Prognosa):</Label>
        <Textarea id="prognosa" placeholder="Masukkan prognosa" rows="4" name="prognosa"/>
      </div>
    </TabItem>
    <TabItem title="Pengkajian Rencana Pemulangan Pasien" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <Label for="" class="mb-2">Catatan: jika satu terpenuhi maka pasien membutuhkan perencanaan pemulangan khusus.</Label>
      <div class="mb-5">
        <Label for="" class="mb-2">Usia lanjut(60 tahun atau lebih):</Label>
        <div class="flex gap-6">
          <Radio name="pemulangan_usia" value="Ya">Ya</Radio>
          <Radio name="pemulangan_usia" value="Tidak">Tidak</Radio>
        </div>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Hambatan mobilitasi:</Label>
        <div class="flex gap-6">
          <Radio name="hambatan_mobilitasi" value="Ya">Ya</Radio>
          <Radio name="hambatan_mobilitasi" value="Tidak">Tidak</Radio>
        </div>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Membutuhkan perawatan medis dan perawatan berkelanjutan:</Label>
        <div class="flex gap-6">
          <Radio name="membutuhkan_perawatan_berkelanjutan" value="Ya">Ya</Radio>
          <Radio name="membutuhkan_perawatan_berkelanjutan" value="Tidak">Tidak</Radio>
        </div>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Tergantung dengan orang lain dalam aktivitas harian:</Label>
        <div class="flex gap-6">
          <Radio name="tergantung_dalam_aktivitas_harian" value="Ya">Ya</Radio>
          <Radio name="tergantung_dalam_aktivitas_harian" value="Tidak">Tidak</Radio>
        </div>
      </div>
      <br>
      <div class="text-right">
        <Button color="green">Update & Simpan</Button>
      </div>
    </TabItem>
  </Tabs>
</main>