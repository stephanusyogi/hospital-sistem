<script>

  import { Checkbox, Input, Label, Radio, TabItem, Tabs, Textarea } from "flowbite-svelte";

</script>

<main class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
  <Tabs style="pill" defaultClass="flex space-x-2">
    <TabItem open title="Bagian 1: Informasi">
      <Tabs style="underline" defaultClass="flex overflow-x-auto rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700" >
        <TabItem open title="Status Fisik & Riwayat" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label class="mb-2" for="agama_suku">Agama/Suku:</Label>
            <Input type="text" name="agama_suku" id="agama_suku" placeholder="Masukkan agama / suku"/>
          </div>
          <div class="mb-5">
            <Label for="diagnosa_masuk" class="mb-2">Diagnosa Masuk:</Label>
            <Textarea id="diagnosa_masuk" rows="4" placeholder="Masukkan diagnosa masuk" name="diagnosa_masuk"/>
          </div>
          <div class="mb-5">
            <Label for="keluhan_utama" class="mb-2">Keluhan Utama:</Label>
            <Textarea id="keluhan_utama" rows="4" placeholder="Masukkan keluhan utama" name="keluhan_utama"/>
          </div>
        </TabItem>
        <TabItem title="Alloanamnesa" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="" class="mb-2">Riwayat Penyakit Pasien:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="riwayat_penyakit_pasien" value="Tidak Ada">Tidak Ada</Radio>
              <div class="flex gap-2 w-full">
                <Radio name="riwayat_penyakit_pasien" value="Ada">Ya</Radio>
                <Textarea id="uraian_riwayat_penyakit_pasien" rows="2" placeholder="Masukkan apabila ada" name="uraian_riwayat_penyakit_pasien"/>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Alkohol / Obat:</Label>
            <div class="flex gap-6">
              <Radio name="alkohol_obat" value="Ya">Ya</Radio>
              <Radio name="alkohol_obat" value="Tidak">Tidak</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Merokok:</Label>
            <div class="flex gap-6">
              <Radio name="merokok" value="Ya">Ya</Radio>
              <Radio name="merokok" value="Tidak">Tidak</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Imunisasi:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="imunisasi" value="Belum">Belum</Radio>
              <Radio name="imunisasi" value="Sudah">Sudah</Radio>
              <Radio name="imunisasi" value="Lengkap">Lengkap</Radio>
              <Radio name="imunisasi" value="Tidak">Tidak</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Riwayat Penyakit Keluarga:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="riwayat_penyakit_keluarga" value="Tidak Ada">Tidak Ada</Radio>
              <div class="flex gap-2 w-full">
                <Radio name="riwayat_penyakit_keluarga" value="Ada">Ya</Radio>
                <Textarea id="uraian_riwayat_penyakit_keluarga" rows="2" placeholder="Masukkan apabila ada" name="uraian_riwayat_penyakit_keluarga"/>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Kondisi Saat Masuk:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="kondisi_saat_masuk" value="Mandiri">Mandiri</Radio>
              <Radio name="kondisi_saat_masuk" value="Tempat Tidur">Tempat Tidur</Radio>
              <Radio name="kondisi_saat_masuk" value="Dipapah">Dipapah</Radio>
              <Radio name="kondisi_saat_masuk" value="Lainnya">Lainnya</Radio>
              <Textarea id="kondisi_saat_masuk_lainnya" rows="2" placeholder="Masukkan kondisi masuk lainnya" name="kondisi_saat_masuk_lainnya"/>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Asal Pasien:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="asal_pasien" value="Poliklinik">Poliklinik</Radio>
              <Radio name="asal_pasien" value="IGD">IGD</Radio>
              <Radio name="asal_pasien" value="Kamar Oper">Kamar Operasi</Radio>
              <Radio name="asal_pasien" value="Lainnya">Lainnya</Radio>
              <Textarea id="asal_pasien_lainnya" rows="2" placeholder="Masukkan asal pasien lainnya" name="asal_pasien_lainnya"/>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Kepercayaan Khusus/Sosial Budaya:</Label>
            <div class="flex gap-6">
              <Radio name="kepercayaan_khusus" value="Tidak Ada">Tidak Ada</Radio>
              <Radio name="kepercayaan_khusus" value="Ada">Ada</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Status Pernikahan:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="status_pernikahan" value="Menikah">Menikah</Radio>
              <Radio name="status_pernikahan" value="Belum Menikah">Belum Menikah</Radio>
              <Radio name="status_pernikahan" value="Duda/Janda">Duda/Janda</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Aktivitas:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="aktivitas" value="Mandiri">Mandiri</Radio>
              <Radio name="aktivitas" value="Tongkat">Tongkat</Radio>
              <Radio name="aktivitas" value="Kursi Roda">Kursi Roda</Radio>
              <Radio name="aktivitas" value="Tirah Baring">Tirah Baring</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Status Emosional:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="status_emosional" value="Kooperatif">Kooperatif</Radio>
              <Radio name="status_emosional" value="Cemas">Cemas</Radio>
              <Radio name="status_emosional" value="Depresi">Depresi</Radio>
              <Radio name="status_emosional" value="Ingin Mengakhiri Hidup">Ingin Mengakhiri Hidup</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="keluarga_terdekat" class="mb-2">Keluarga Terdekat:</Label>
            <Textarea id="keluarga_terdekat" rows="2" placeholder="Masukkan keluarga terdekat" name="keluarga_terdekat"/>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Informasi Didapat Dari:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="informasi_didapat_dari" value="Pasien">Pasien</Radio>
              <Radio name="informasi_didapat_dari" value="Keluarga">Keluarga</Radio>
              <Radio name="informasi_didapat_dari" value="Lainnya">Lainnya</Radio>
              <Textarea id="informasi_didapat_dari_lainnya" rows="2" placeholder="Masukkan informasi lainnya" name="informasi_didapat_dari_lainnya"/>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Kebutuhan Privasi:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="kebutuhan_privasi" value="Tidak Ada">Tidak Ada</Radio>
              <div class="flex gap-2 w-full">
                <Radio name="kebutuhan_privasi" value="Ada">Ya</Radio>
                <Textarea id="uraian_kebutuhan_privasi" rows="2" placeholder="Masukkan apabila ada" name="uraian_kebutuhan_privasi"/>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Pendidikan:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="pendidikan" value="SD">SD</Radio>
              <Radio name="pendidikan" value="SMP">SMP</Radio>
              <Radio name="pendidikan" value="SMA">SMA</Radio>
              <Radio name="pendidikan" value="D3">D3</Radio>
              <Radio name="pendidikan" value="S1">S1</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="penanggung_jawab_biaya" class="mb-2">Penanggung Jawab Biaya:</Label>
            <Textarea id="penanggung_jawab_biaya" rows="2" placeholder="Masukkan penanggung jawab biaya" name="penanggung_jawab_biaya"/>
          </div>
          <div class="mb-5">
            <Label for="pekerjaan" class="mb-2">Pekerjaan Jawab Biaya:</Label>
            <Textarea id="pekerjaan" rows="2" placeholder="Masukkan pekerjaan" name="pekerjaan"/>
          </div>
        </TabItem>
        <TabItem title="Heteroanamnesa" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="=" class="mb-2">Tanda-Tanda Vital:</Label>
            <div class="flex flex-wrap gap-6">
              <div class="flex items-center gap-2">
                <span>Suhu:</span>
                <Input type="text" defaultClass="block w-16 disabled:cursor-not-allowed disabled:opacity-50" name="suhu" size="sm" />
                <span>C</span>
              </div>
              <div class="flex items-center gap-2">
                <span>SpO2:</span>
                <Input type="text" defaultClass="block w-16 disabled:cursor-not-allowed disabled:opacity-50" name="sp02" size="sm" />
                <span>%</span>
              </div>
              <div class="flex items-center gap-2">
                <span>Nadi:</span>
                <Input type="text" defaultClass="block w-16 disabled:cursor-not-allowed disabled:opacity-50" name="nadi" size="sm" />
                <span>x/mnt</span>
              </div>
              <div class="flex items-center gap-2">
                <span>Tensi:</span>
                <Input type="text" defaultClass="block w-16 disabled:cursor-not-allowed disabled:opacity-50" name="tensi" size="sm" />
                <span>mmHg</span>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Kewaspadaan:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="kewaspadaan" value="Standar">Standar</Radio>
              <Radio name="kewaspadaan" value="Kontak">Kontak</Radio>
              <Radio name="kewaspadaan" value="Udara">Udara</Radio>
              <Radio name="kewaspadaan" value="Droplet">Droplet</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Alergi:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="alergi" value="Tidak Ada">Tidak Ada</Radio>
              <div class="flex gap-2 w-full">
                <Radio name="alergi" value="Ada">Ya</Radio>
                <Textarea id="uraian_alergi" rows="2" placeholder="Masukkan apabila ada" name="uraian_alergi"/>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Jenis Reaksi:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="jenis_reaksi" value="Gatal">Gatal</Radio>
              <Radio name="jenis_reaksi" value="Hiperemi">Hiperemi</Radio>
              <Radio name="jenis_reaksi" value="Panas">Panas</Radio>
              <Radio name="jenis_reaksi" value="Lainnya">Lainnya</Radio>
              <Textarea id="jenis_reaksi_lainnya" rows="2" placeholder="Masukkan jenis rekasi lainnya" name="jenis_reaksi_lainnya"/>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Barang Berharga:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="barang_berharga" value="Tidak Ada">Tidak Ada</Radio>
              <Radio name="barang_berharga" value="Gadget">Gadget</Radio>
              <Radio name="barang_berharga" value="Perhiasan">Perhiasan</Radio>
              <Radio name="barang_berharga" value="Lainnya">Lainnya</Radio>
              <Textarea id="barang_berharga_lainnya" rows="2" placeholder="Masukkan barang berharga lainnya" name="barang_berharga_lainnya"/>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Alat Bantu:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="alat_bantu" value="Tidak Ada">Tidak Ada</Radio>
              <Radio name="alat_bantu" value="Kacamata">Kacamata</Radio>
              <Radio name="alat_bantu" value="Gigi Palsu">Gigi Palsu</Radio>
              <Radio name="alat_bantu" value="Lainnya">Lainnya</Radio>
              <Textarea id="alat_bantu_lainnya" rows="2" placeholder="Masukkan alat bantu lainnya" name="alat_bantu_lainnya"/>
            </div>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Kepala & Leher" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="" class="mb-2">Mata:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="mata" value="Normal">Normal</Radio>
              <Radio name="mata" value="Cowong">Cowong</Radio>
              <Radio name="mata" value="Perdarahan">Perdarahan</Radio>
              <Radio name="mata" value="Sklera Pucat">Sklera Pucat</Radio>
              <Radio name="mata" value="Konjungtiva Ikterus">Konjungtiva Ikterus</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Hidung:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="hidung" value="Normal">Normal</Radio>
              <Radio name="hidung" value="Perdarahan">Perdarahan</Radio>
              <Radio name="hidung" value="Sekret">Sekret</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Mulut:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="mulut" value="Normal">Normal</Radio>
              <Radio name="mulut" value="Perdarahan">Perdarahan</Radio>
              <Radio name="mulut" value="Stomatitis">Stomatitis</Radio>
              <Radio name="mulut" value="Trimus">Trimus</Radio>
              <Radio name="mulut" value="Lidah Kotor">Lidah Kotor</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Telinga:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="telinga" value="Normal">Normal</Radio>
              <Radio name="telinga" value="Perdarahan">Perdarahan</Radio>
              <Radio name="telinga" value="Serumen">Serumen</Radio>
              <Radio name="telinga" value="Benda Asing">Benda Asing</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Leher:</Label>
            <div class="flex flex-wrap gap-6">
              <Radio name="leher" value="Normal">Normal</Radio>
              <Radio name="leher" value="Kaku Kuduk">Kaku Kuduk</Radio>
              <Radio name="leher" value="Pembesaran">Pembesaran</Radio>
              <Radio name="leher" value="Vena Jugularis">Vena Jugularis</Radio>
              <Radio name="leher" value="Kelenjar Tyroid">Kelenjar Tyroid</Radio>
            </div>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Thorax" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="" class="mb-2">Bentuk:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="bentuk_thorax" value="Normal">Normal</Radio>
              <Radio name="bentuk_thorax" value="Asimetris">Asimetris</Radio>
              <Radio name="bentuk_thorax" value="Barrel Chest">Barrel Chest</Radio>
              <Radio name="bentuk_thorax" value="Penggunaan Otot Bantu Napas">Penggunaan Otot Bantu Napas</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Paru:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6 mb-1">
              <Radio name="paru_1" value="Normal">Normal</Radio>
              <Radio name="paru_1" value="Takipnea">Takipnea</Radio>
              <Radio name="paru_1" value="Bradipnea">Bradipnea</Radio>
              <Radio name="paru_1" value="Batuk Kering">Batuk Kering</Radio>
              <Radio name="paru_1" value="Dahak">Dahak</Radio>
              <Textarea id="paru_1_warna_dahak" rows="2" placeholder="Masukkan warna dahak" name="paru_1_warna_dahak"/>
            </div>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="paru_2" value="Normal">Normal</Radio>
              <div class="flex gap-2">
                <Radio name="paru_2" value="Ronki">Ronki,</Radio>
                <div class="flex flex-col gap-2">
                  <Radio name="paru_2_ronki" value="Kanan">Kanan</Radio>
                  <Radio name="paru_2_ronki" value="Kiri">Kiri</Radio>
                </div>
              </div>
              <div class="flex gap-2">
                <Radio name="paru_2" value="Wheezing">Wheezing,</Radio>
                <div class="flex flex-col gap-2">
                  <Radio name="paru_2_wheezing" value="Kanan">Kanan</Radio>
                  <Radio name="paru_2_wheezing" value="Kiri">Kiri</Radio>
                </div>
              </div>
              <div class="flex gap-2">
                <Radio name="paru_2" value="Stridor">Stridor,</Radio>
                <div class="flex flex-col gap-2">
                  <Radio name="paru_2_stridor" value="Kanan">Kanan</Radio>
                  <Radio name="paru_2_stridor" value="Kiri">Kiri</Radio>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Jantung:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6 mb-1">
              <Radio name="jantung_1" value="Normal">Normal</Radio>
              <Radio name="jantung_1" value="Takikardi">Takikardi</Radio>
              <Radio name="jantung_1" value="Bradikardi">Bradikardi</Radio>
              <Radio name="jantung_1" value="Nadi Lemah">Nadi Lemah</Radio>
              <Radio name="jantung_1" value="Nadi Tidak Teraba">Nadi Tidak Teraba</Radio>
            </div>
            <div class="flex flex-wrap lg:flex-nowrap gap-6 mb-1">
              <Radio name="jantung_2" value="Normal">Normal</Radio>
              <Radio name="jantung_2" value="Murmur">Murmur</Radio>
              <Radio name="jantung_2" value="Suara Jantung Tambahan">Suara Jantung Tambahan</Radio>
              <Radio name="jantung_2" value="Gallops Rhytm">Gallops Rhytm</Radio>
            </div>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="jantung_3" value="Normal">Normal</Radio>
              <Radio name="jantung_3" value="Dullnes">Dullnes</Radio>
              <Radio name="jantung_3" value="Resonan">Resonan</Radio>
              <Radio name="jantung_3" value="Hyper Resonan">Hyper Resonan</Radio>
            </div>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Abdomen" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="" class="mb-2">Palpasi:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="palpasi" value="Normal">Normal</Radio>
              <Radio name="palpasi" value="Kaku">Kaku</Radio>
              <Radio name="palpasi" value="Distensi">Distensi</Radio>
              <Radio name="palpasi" value="Ascites">Ascites</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Inspeksi:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="inspeksi" value="Normal">Normal</Radio>
              <Radio name="inspeksi" value="Asimetris">Asimetris</Radio>
              <Radio name="inspeksi" value="Kelainan Bentuk">Kelainan Bentuk</Radio>
              <Radio name="inspeksi" value="Luka">Luka</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Auskultasi:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="auskultasi" value="Normal">Normal</Radio>
              <Radio name="auskultasi" value="Bising Usus">Bising Usus</Radio>
              <Radio name="auskultasi" value="Menurun">Menurun</Radio>
              <Radio name="auskultasi" value="Meningkat">Meningkat</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Perkusi:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="perkusi" value="Normal">Normal</Radio>
              <Radio name="perkusi" value="Thympani">Thympani</Radio>
              <Radio name="perkusi" value="Hyper Thympani">Hyper Thympani</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Asupan Diit:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="asupan_diit" value="Normal">Normal</Radio>
              <Radio name="asupan_diit" value="Khusus">Khusus</Radio>
              <Radio name="asupan_diit" value="Intoleran">Intoleran</Radio>
              <Radio name="asupan_diit" value="Anoreksia">Anoreksia</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Defekasi:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="defekasi" value="Normal">Normal</Radio>
              <Radio name="defekasi" value="Konstipasi">Konstipasi</Radio>
              <Radio name="defekasi" value="Diare">Diare</Radio>
              <Radio name="defekasi" value="Inkontinensia">Inkontinensia</Radio>
            </div>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Genitourinaria" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="" class="mb-2">Opsi Genitourinaria:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="genitourinaria" value="Normal">Normal</Radio>
              <Radio name="genitourinaria" value="Disuria">Disuria</Radio>
              <Radio name="genitourinaria" value="Foley Cath">Foley Cath</Radio>
              <Radio name="genitourinaria" value="Inkontinensia">Inkontinensia</Radio>
              <Radio name="genitourinaria" value="Hematuria">Hematuria</Radio>
            </div>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Ginekologi" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="" class="mb-2">Opsi Ginekologi:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="ginekologi" value="Normal">Normal</Radio>
              <Radio name="ginekologi" value="Sekret Abnormal">Sekret Abnormal</Radio>
              <Radio name="ginekologi" value="Hamil">Hamil</Radio>
              <Radio name="ginekologi" value="Menopause">Menopause</Radio>
              <Radio name="ginekologi" value="Lainnya">Lainnya</Radio>
              <Textarea id="ginekologi_lainnya" rows="2" placeholder="Masukkan ginekologi lainnya" name="ginekologi_lainnya"/>
            </div>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Neurologi" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="" class="mb-2">Opsi Neurologi:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="neurologi" value="Normal">Normal</Radio>
              <Radio name="neurologi" value="Vertigo">Vertigo</Radio>
              <Radio name="neurologi" value="Sakit Kepala">Sakit Kepala</Radio>
              <Radio name="neurologi" value="Kejang">Kejang</Radio>
              <Radio name="neurologi" value="Pusing">Pusing</Radio>
              <Radio name="neurologi" value="Pupil Anisokor">Pupil Anisokor</Radio>
              <Radio name="neurologi" value="Tremor">Tremor</Radio>
              <Radio name="neurologi" value="Gelisah">Gelisah</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Kesadaran:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="neurologi" value="Compos Mentis">Compos Mentis</Radio>
              <Radio name="neurologi" value="Apatis">Apatis</Radio>
              <Radio name="neurologi" value="Somnolen">Somnolen</Radio>
              <Radio name="neurologi" value="Sopor">Sopor</Radio>
              <Radio name="neurologi" value="Koma">Koma</Radio>
            </div>
          </div>
        </TabItem>
        <TabItem title="Glassgow Coma Scale" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="content">
            <p class="text-lg font-semibold">Total Nilai : <span>-</span></p>
            <p class="text-sm font-medium italic">15 (CM), 13-14 (Penurunan Kesadaran Ringan), 9-12 (Penurunan Kesadaran Sedang), 3-8 (Penurunan Kesadaran Berat)</p>
          </div>
          <div class="mt-10 mb-5">
            <Label for="" class="mb-2">Mata:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="gcs_mata" value="4">Spontan (4)</Radio>
              <Radio name="gcs_mata" value="3">Dengan Panggilan (3)</Radio>
              <Radio name="gcs_mata" value="2">Dengan Nyeri (2)</Radio>
              <Radio name="gcs_mata" value="1">Tidak Ada Respon (1)</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Mata:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="gcs_verbal" value="5">Orientasi Baik (5)</Radio>
              <Radio name="gcs_verbal" value="4">Disorientasi (4)</Radio>
              <Radio name="gcs_verbal" value="3">Jawaban Tidak Sesuai (3)</Radio>
              <Radio name="gcs_verbal" value="2">Suara Tidak Jelas (2)</Radio>
              <Radio name="gcs_verbal" value="1">Tidak Respon (1)</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Motorik:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="gcs_motorik" value="6">Sesuai Perintah (6)</Radio>
              <Radio name="gcs_motorik" value="5">Lokalisir Nyeri (5)</Radio>
              <Radio name="gcs_motorik" value="4">Menarik Diri dari Rangsang Nyeri (4)</Radio>
              <Radio name="gcs_motorik" value="3">Fleksi Abnormal (3)</Radio>
              <Radio name="gcs_motorik" value="2">Ekstensi Abnormal (2)</Radio>
              <Radio name="gcs_motorik" value="1">Tidak Respon (1)</Radio>
            </div>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Muskuloskeletal & Kulit (Mobilitas, Fungsi Sendi, Warna Kulit, Turgor)" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="" class="mb-2">Mobilitas:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="mobilitas" value="Normal">Normal</Radio>
              <Radio name="mobilitas" value="Alat Bantu">Alat Bantu</Radio>
              <Radio name="mobilitas" value="Deformitas / Atrofi">Deformitas / Atrofi</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Fungsi Sendi:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="fungsi_sendi" value="Baik">Baik</Radio>
              <Radio name="fungsi_sendi" value="Terbatas">Terbatas</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Warna Kulit:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="warna_kulit" value="Pucat">Pucat</Radio>
              <Radio name="warna_kulit" value="Panas">Panas</Radio>
              <Radio name="warna_kulit" value="Kemerahan">Kemerahan</Radio>
              <Radio name="warna_kulit" value="Lembab">Lembab</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Warna Kulit:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="turgor" value="Turgor Buruk">Turgor Buruk</Radio>
              <Radio name="turgor" value="Dingin">Dingin</Radio>
              <Radio name="turgor" value="Diaforesis">Diaforesis</Radio>
              <Radio name="turgor" value="Turgor Baik">Turgor Baik</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Isi Apabila Terdapat Frakture:</Label>
            <Textarea rows="2" name="frakture"/>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Norton Scale (Resiko Kulit)" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="content">
            <p class="text-lg font-semibold">Total Skor : <span>-</span></p>
            <p class="text-sm font-medium italic">*Skor lebih dari 14 = Resiko Tinggi, lakukan pencegahan dekubitus sesuai prosedur</p>
          </div>
          <div class="mt-10 mb-5">
            <Label for="" class="mb-2">Kondisi Fisik:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="ns_kondisi_fisik" value="1">Sangat Buruk (1)</Radio>
              <Radio name="ns_kondisi_fisik" value="2">Buruk (2)</Radio>
              <Radio name="ns_kondisi_fisik" value="3">Cukup (3)</Radio>
              <Radio name="ns_kondisi_fisik" value="4">Baik (4)</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Kondisi Mental:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="ns_kondisi_mental" value="1">Stupor (1)</Radio>
              <Radio name="ns_kondisi_mental" value="2">Delirium (2)</Radio>
              <Radio name="ns_kondisi_mental" value="3">Apatis (3)</Radio>
              <Radio name="ns_kondisi_mental" value="4">Kompos Mentiks (4)</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Aktivitas:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="ns_aktivitas" value="1">Tirah Baring (1)</Radio>
              <Radio name="ns_aktivitas" value="2">Kursi Roda (2)</Radio>
              <Radio name="ns_aktivitas" value="3">Dipapah (3)</Radio>
              <Radio name="ns_aktivitas" value="4">Mandiri (4)</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Mobilitas:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="ns_mobilitas" value="1">Imobilisasi (1)</Radio>
              <Radio name="ns_mobilitas" value="2">Sangat Terbatas (2)</Radio>
              <Radio name="ns_mobilitas" value="3">Agak Terbatas (3)</Radio>
              <Radio name="ns_mobilitas" value="4">Baik (4)</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Inkontinensia:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="ns_inkontinensia" value="1">Selalu (1)</Radio>
              <Radio name="ns_inkontinensia" value="2">Sering (2)</Radio>
              <Radio name="ns_inkontinensia" value="3">Terkadang (3)</Radio>
              <Radio name="ns_inkontinensia" value="4">Tidak (4)</Radio>
            </div>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Aktivitas Harian Dasar" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="content">
            <p class="text-lg font-semibold">Total Nilai ADL : <span>-</span></p>
            <p class="text-sm font-medium italic">Skor: 6, Tidak Ada Ketergantungan. Skor: 3-5, Ketergantungan Sebagian. Skor: 0-2, Tergantung Penuh.</p>
          </div>
          <div class="mt-10 mb-5">
            <Label for="" class="mb-2">Makan / Minum:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="ns_kondisi_fisik" value="1">Mandi</Radio>
              <Radio name="ns_kondisi_fisik" value="2">Buruk (2)</Radio>
            </div>
          </div>
        </TabItem>
        <TabItem title="Pemeriksaan Status Nutrisi (MUST)" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
        <TabItem title="Pemeriksaan Resiko Jatuh Morse (Untuk pasien usia > 13 tahun)" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </TabItem>
        <TabItem title="Pemeriksaan Nyeri (Bila ada nyeri lakukan Asesmen Lanjutan Nyeri)" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <div class="mb-5">
            <Label for="" class="mb-2">Nyeri:</Label>
            <div class="flex flex-wrap lg:flex-nowrap gap-6">
              <Radio name="pemeriksaan_nyeri" value="Ya">Ya</Radio>
              <Radio name="pemeriksaan_nyeri" value="Tidak">Tidak</Radio>
            </div>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Asesmen Lanjutan Nyeri:</Label>
            <Textarea rows="2" name="pemeriksaan_nyeri_lanjutan"/>
          </div>
        </TabItem>
      </Tabs>
    </TabItem>
    <TabItem title="Bagian 2: Analisa">
      <Tabs style="underline">
        <TabItem open title="Diagnosa Keperawatan (Beri tanda centang yang menjadi prioritas)" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
          <Checkbox class="mb-5">
            <Textarea rows="2" name="diagnosa_keperawatan[]"/>
          </Checkbox>
          <Checkbox class="mb-5">
            <Textarea rows="2" name="diagnosa_keperawatan[]"/>
          </Checkbox>
          <Checkbox class="mb-5">
            <Textarea rows="2" name="diagnosa_keperawatan[]"/>
          </Checkbox>
        </TabItem>
      </Tabs>
    </TabItem>
  </Tabs>
</main>