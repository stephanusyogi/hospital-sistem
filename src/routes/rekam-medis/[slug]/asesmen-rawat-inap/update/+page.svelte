<script>

  import { Accordion, AccordionItem, Button, Checkbox, Input, Label, Radio, TabItem, Tabs, Textarea } from "flowbite-svelte";
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import Swal from 'sweetalert2';

  const no_rm = $page.params.slug;

  let diagnosaPerawat = [
		{
			diagnosa_perawat: "",
		},
	];

	function addDiagnosaPerawat() {
		diagnosaPerawat = [
			...diagnosaPerawat,
			{
				diagnosa_perawat: "",
			},
		];
	}

	function deleteDiagnosaPerawat(index) {
		diagnosaPerawat = diagnosaPerawat.filter((_, i) => i !== index);
	}
  
  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: 'Simpan & Perbarui Asesmen Rawat Inap?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Simpan',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Asesmen Rawat Inap Berhasil Disimpan & Diperbarui',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          goto(`/rekam-medis/${no_rm}/asesmen-rawat-inap`)
        })
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Aksi Dibatalkan',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
</script>

<main>
  <form on:submit|preventDefault={()=>handleSubmit(no_rm)}>
    <div class="flex items-center justify-between">
      <div>
        <p class="text-xl font-semibold">Asesmen Rawat Inap</p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5">
    <Tabs style="underline" defaultClass="flex space-x-2">
      <TabItem open title="Bagian 1: Informasi">
        <Accordion>
          <!-- Status Fisik & Riwayat -->
          <AccordionItem open>
            <span slot="header">Status Fisik & Riwayat <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-2 gap-4">
              <div class="my-2">
                <Label for="diagnosa_masuk" class="mb-2">Diagnosa Masuk: <span class="text-sm text-red-500 italic">*</span></Label>
                <Textarea id="diagnosa_masuk" rows="2" placeholder="Masukkan diagnosa masuk" name="diagnosa_masuk"/>
              </div>
              <div class="my-2">
                <Label for="keluhan_utama" class="mb-2">Keluhan Utama: <span class="text-sm text-red-500 italic">*</span></Label>
                <Textarea id="keluhan_utama" rows="2" placeholder="Masukkan keluhan utama" name="keluhan_utama"/>
              </div>
            </div>
          </AccordionItem>
          <!-- Alloanamnesa -->
          <AccordionItem>
            <span slot="header">Alloanamnesa <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-3 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Riwayat Penyakit Pasien: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="riwayat_penyakit_pasien" value="Tidak Ada">Tidak Ada</Radio>
                  <div class="flex gap-2 w-full">
                    <Radio name="riwayat_penyakit_pasien" value="Ada">Ya</Radio>
                    <Textarea id="uraian_riwayat_penyakit_pasien" rows="1" placeholder="Masukkan apabila ada" name="uraian_riwayat_penyakit_pasien"/>
                  </div>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Alkohol / Obat: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="alkohol_obat" value="Ya">Ya</Radio>
                  <Radio name="alkohol_obat" value="Tidak">Tidak</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Merokok: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="merokok" value="Ya">Ya</Radio>
                  <Radio name="merokok" value="Tidak">Tidak</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Imunisasi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="imunisasi" value="Belum">Belum</Radio>
                  <Radio name="imunisasi" value="Sudah">Sudah</Radio>
                  <Radio name="imunisasi" value="Lengkap">Lengkap</Radio>
                  <Radio name="imunisasi" value="Tidak">Tidak</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Riwayat Penyakit Keluarga: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="riwayat_penyakit_keluarga" value="Tidak Ada">Tidak Ada</Radio>
                  <div class="flex gap-2 w-full">
                    <Radio name="riwayat_penyakit_keluarga" value="Ada">Ya</Radio>
                    <Textarea id="uraian_riwayat_penyakit_keluarga" rows="1" placeholder="Masukkan apabila ada" name="uraian_riwayat_penyakit_keluarga"/>
                  </div>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Kondisi Saat Masuk: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="kondisi_saat_masuk" value="Mandiri">Mandiri</Radio>
                  <Radio name="kondisi_saat_masuk" value="Tempat Tidur">Tempat Tidur</Radio>
                  <Radio name="kondisi_saat_masuk" value="Dipapah">Dipapah</Radio>
                  <Radio name="kondisi_saat_masuk" value="Lainnya">Lainnya</Radio>
                  <Textarea id="kondisi_saat_masuk_lainnya" rows="1" placeholder="Masukkan kondisi masuk lainnya" name="kondisi_saat_masuk_lainnya"/>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Asal Pasien: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="asal_pasien" value="Poliklinik">Poliklinik</Radio>
                  <Radio name="asal_pasien" value="IGD">IGD</Radio>
                  <Radio name="asal_pasien" value="Kamar Oper">Kamar Operasi</Radio>
                  <Radio name="asal_pasien" value="Lainnya">Lainnya</Radio>
                  <Textarea id="asal_pasien_lainnya" rows="1" placeholder="Masukkan asal pasien lainnya" name="asal_pasien_lainnya"/>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Kepercayaan Khusus/Sosial Budaya: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="kepercayaan_khusus" value="Tidak Ada">Tidak Ada</Radio>
                  <Radio name="kepercayaan_khusus" value="Ada">Ada</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Status Pernikahan: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="status_pernikahan" value="Menikah">Menikah</Radio>
                  <Radio name="status_pernikahan" value="Belum Menikah">Belum Menikah</Radio>
                  <Radio name="status_pernikahan" value="Duda/Janda">Duda/Janda</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Aktivitas: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="aktivitas" value="Mandiri">Mandiri</Radio>
                  <Radio name="aktivitas" value="Tongkat">Tongkat</Radio>
                  <Radio name="aktivitas" value="Kursi Roda">Kursi Roda</Radio>
                  <Radio name="aktivitas" value="Tirah Baring">Tirah Baring</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Status Emosional: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="status_emosional" value="Kooperatif">Kooperatif</Radio>
                  <Radio name="status_emosional" value="Cemas">Cemas</Radio>
                  <Radio name="status_emosional" value="Depresi">Depresi</Radio>
                  <Radio name="status_emosional" value="Ingin Mengakhiri Hidup">Ingin Mengakhiri Hidup</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="keluarga_terdekat" class="mb-2">Keluarga Terdekat: <span class="text-sm text-red-500 italic">*</span></Label>
                <Textarea id="keluarga_terdekat" rows="1" placeholder="Masukkan keluarga terdekat" name="keluarga_terdekat"/>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Informasi Didapat Dari: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="informasi_didapat_dari" value="Pasien">Pasien</Radio>
                  <Radio name="informasi_didapat_dari" value="Keluarga">Keluarga</Radio>
                  <Radio name="informasi_didapat_dari" value="Lainnya">Lainnya</Radio>
                  <Textarea id="informasi_didapat_dari_lainnya" rows="1" placeholder="Masukkan informasi lainnya" name="informasi_didapat_dari_lainnya"/>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Kebutuhan Privasi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="kebutuhan_privasi" value="Tidak Ada">Tidak Ada</Radio>
                  <div class="flex gap-2 w-full">
                    <Radio name="kebutuhan_privasi" value="Ada">Ya</Radio>
                    <Textarea id="uraian_kebutuhan_privasi" rows="1" placeholder="Masukkan apabila ada" name="uraian_kebutuhan_privasi"/>
                  </div>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Pendidikan: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="pendidikan" value="SD">SD</Radio>
                  <Radio name="pendidikan" value="SMP">SMP</Radio>
                  <Radio name="pendidikan" value="SMA">SMA</Radio>
                  <Radio name="pendidikan" value="D3">D3</Radio>
                  <Radio name="pendidikan" value="S1">S1</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="penanggung_jawab_biaya" class="mb-2">Penanggung Jawab Biaya: <span class="text-sm text-red-500 italic">*</span></Label>
                <Textarea id="penanggung_jawab_biaya" rows="2" placeholder="Masukkan penanggung jawab biaya" name="penanggung_jawab_biaya"/>
              </div>
              <div class="my-2">
                <Label for="pekerjaan" class="mb-2">Pekerjaan Penanggung Jawab Biaya: <span class="text-sm text-red-500 italic">*</span></Label>
                <Textarea id="pekerjaan" rows="2" placeholder="Masukkan pekerjaan" name="pekerjaan"/>
              </div>
            </div>
          </AccordionItem>
          <!-- Heteroanamnesa -->
          <AccordionItem>
            <span slot="header">Heteroanamnesa <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-3 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Tanda-Tanda Vital: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-col gap-2">
                  <div class="grid grid-cols-3 gap-2">
                    <span>Suhu:</span>
                    <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="suhu" size="sm" />
                    <span>C</span>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <span>SpO2:</span>
                    <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="sp02" size="sm" />
                    <span>%</span>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <span>Nadi:</span>
                    <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="nadi" size="sm" />
                    <span>x/mnt</span>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <span>Tensi:</span>
                    <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="tensi" size="sm" />
                    <span>mmHg</span>
                  </div>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Kewaspadaan: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="kewaspadaan" value="Standar">Standar</Radio>
                  <Radio name="kewaspadaan" value="Kontak">Kontak</Radio>
                  <Radio name="kewaspadaan" value="Udara">Udara</Radio>
                  <Radio name="kewaspadaan" value="Droplet">Droplet</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Alergi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="alergi" value="Tidak Ada">Tidak Ada</Radio>
                  <div class="flex gap-2 w-full">
                    <Radio name="alergi" value="Ada">Ya</Radio>
                    <Textarea id="uraian_alergi" rows="1" placeholder="Masukkan apabila ada" name="uraian_alergi"/>
                  </div>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Jenis Reaksi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="jenis_reaksi" value="Gatal">Gatal</Radio>
                  <Radio name="jenis_reaksi" value="Hiperemi">Hiperemi</Radio>
                  <Radio name="jenis_reaksi" value="Panas">Panas</Radio>
                  <Radio name="jenis_reaksi" value="Lainnya">Lainnya</Radio>
                  <Textarea id="jenis_reaksi_lainnya" rows="2" placeholder="Masukkan jenis rekasi lainnya" name="jenis_reaksi_lainnya"/>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Barang Berharga: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="barang_berharga" value="Tidak Ada">Tidak Ada</Radio>
                  <Radio name="barang_berharga" value="Gadget">Gadget</Radio>
                  <Radio name="barang_berharga" value="Perhiasan">Perhiasan</Radio>
                  <Radio name="barang_berharga" value="Lainnya">Lainnya</Radio>
                  <Textarea id="barang_berharga_lainnya" rows="2" placeholder="Masukkan barang berharga lainnya" name="barang_berharga_lainnya"/>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Alat Bantu: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="alat_bantu" value="Tidak Ada">Tidak Ada</Radio>
                  <Radio name="alat_bantu" value="Kacamata">Kacamata</Radio>
                  <Radio name="alat_bantu" value="Gigi Palsu">Gigi Palsu</Radio>
                  <Radio name="alat_bantu" value="Lainnya">Lainnya</Radio>
                  <Textarea id="alat_bantu_lainnya" rows="2" placeholder="Masukkan alat bantu lainnya" name="alat_bantu_lainnya"/>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Kepala & Leher -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Kepala & Leher <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-3 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Mata: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="mata" value="Normal">Normal</Radio>
                  <Radio name="mata" value="Cowong">Cowong</Radio>
                  <Radio name="mata" value="Perdarahan">Perdarahan</Radio>
                  <Radio name="mata" value="Sklera Pucat">Sklera Pucat</Radio>
                  <Radio name="mata" value="Konjungtiva Ikterus">Konjungtiva Ikterus</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Hidung: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="hidung" value="Normal">Normal</Radio>
                  <Radio name="hidung" value="Perdarahan">Perdarahan</Radio>
                  <Radio name="hidung" value="Sekret">Sekret</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Mulut: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="mulut" value="Normal">Normal</Radio>
                  <Radio name="mulut" value="Perdarahan">Perdarahan</Radio>
                  <Radio name="mulut" value="Stomatitis">Stomatitis</Radio>
                  <Radio name="mulut" value="Trimus">Trimus</Radio>
                  <Radio name="mulut" value="Lidah Kotor">Lidah Kotor</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Telinga: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="telinga" value="Normal">Normal</Radio>
                  <Radio name="telinga" value="Perdarahan">Perdarahan</Radio>
                  <Radio name="telinga" value="Serumen">Serumen</Radio>
                  <Radio name="telinga" value="Benda Asing">Benda Asing</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Leher: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="leher" value="Normal">Normal</Radio>
                  <Radio name="leher" value="Kaku Kuduk">Kaku Kuduk</Radio>
                  <Radio name="leher" value="Pembesaran">Pembesaran</Radio>
                  <Radio name="leher" value="Vena Jugularis">Vena Jugularis</Radio>
                  <Radio name="leher" value="Kelenjar Tyroid">Kelenjar Tyroid</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Thorax -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Thorax <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-1 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Bentuk: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="bentuk_thorax" value="Normal">Normal</Radio>
                  <Radio name="bentuk_thorax" value="Asimetris">Asimetris</Radio>
                  <Radio name="bentuk_thorax" value="Barrel Chest">Barrel Chest</Radio>
                  <Radio name="bentuk_thorax" value="Penggunaan Otot Bantu Napas">Penggunaan Otot Bantu Napas</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Paru:<span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="paru_1" value="Normal">Normal</Radio>
                  <Radio name="paru_1" value="Takipnea">Takipnea</Radio>
                  <Radio name="paru_1" value="Bradipnea">Bradipnea</Radio>
                  <Radio name="paru_1" value="Batuk Kering">Batuk Kering</Radio>
                  <Radio name="paru_1" value="Dahak">Dahak</Radio>
                  <Textarea id="paru_1_warna_dahak" rows="2" placeholder="Masukkan warna dahak" name="paru_1_warna_dahak"/>
                </div>
                <hr class="my-2">
                <div class="flex flex-wrap gap-2">
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
              <div class="my-2">
                <Label for="" class="mb-2">Jantung: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="jantung_1" value="Normal">Normal</Radio>
                  <Radio name="jantung_1" value="Takikardi">Takikardi</Radio>
                  <Radio name="jantung_1" value="Bradikardi">Bradikardi</Radio>
                  <Radio name="jantung_1" value="Nadi Lemah">Nadi Lemah</Radio>
                  <Radio name="jantung_1" value="Nadi Tidak Teraba">Nadi Tidak Teraba</Radio>
                </div>
                <hr class="my-2">
                <div class="flex flex-wrap gap-2">
                  <Radio name="jantung_2" value="Normal">Normal</Radio>
                  <Radio name="jantung_2" value="Murmur">Murmur</Radio>
                  <Radio name="jantung_2" value="Suara Jantung Tambahan">Suara Jantung Tambahan</Radio>
                  <Radio name="jantung_2" value="Gallops Rhytm">Gallops Rhytm</Radio>
                </div>
                <hr class="my-2">
                <div class="flex flex-wrap gap-2">
                  <Radio name="jantung_3" value="Normal">Normal</Radio>
                  <Radio name="jantung_3" value="Dullnes">Dullnes</Radio>
                  <Radio name="jantung_3" value="Resonan">Resonan</Radio>
                  <Radio name="jantung_3" value="Hyper Resonan">Hyper Resonan</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Abdomen -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Abdomen <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-4 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Palpasi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="palpasi" value="Normal">Normal</Radio>
                  <Radio name="palpasi" value="Kaku">Kaku</Radio>
                  <Radio name="palpasi" value="Distensi">Distensi</Radio>
                  <Radio name="palpasi" value="Ascites">Ascites</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Inspeksi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="inspeksi" value="Normal">Normal</Radio>
                  <Radio name="inspeksi" value="Asimetris">Asimetris</Radio>
                  <Radio name="inspeksi" value="Kelainan Bentuk">Kelainan Bentuk</Radio>
                  <Radio name="inspeksi" value="Luka">Luka</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Auskultasi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="auskultasi" value="Normal">Normal</Radio>
                  <Radio name="auskultasi" value="Bising Usus">Bising Usus</Radio>
                  <Radio name="auskultasi" value="Menurun">Menurun</Radio>
                  <Radio name="auskultasi" value="Meningkat">Meningkat</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Perkusi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="perkusi" value="Normal">Normal</Radio>
                  <Radio name="perkusi" value="Thympani">Thympani</Radio>
                  <Radio name="perkusi" value="Hyper Thympani">Hyper Thympani</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Asupan Diit: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="asupan_diit" value="Normal">Normal</Radio>
                  <Radio name="asupan_diit" value="Khusus">Khusus</Radio>
                  <Radio name="asupan_diit" value="Intoleran">Intoleran</Radio>
                  <Radio name="asupan_diit" value="Anoreksia">Anoreksia</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Defekasi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="defekasi" value="Normal">Normal</Radio>
                  <Radio name="defekasi" value="Konstipasi">Konstipasi</Radio>
                  <Radio name="defekasi" value="Diare">Diare</Radio>
                  <Radio name="defekasi" value="Inkontinensia">Inkontinensia</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Genitourinaria -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Genitourinaria <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-1 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Opsi Genitourinaria: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="genitourinaria" value="Normal">Normal</Radio>
                  <Radio name="genitourinaria" value="Disuria">Disuria</Radio>
                  <Radio name="genitourinaria" value="Foley Cath">Foley Cath</Radio>
                  <Radio name="genitourinaria" value="Inkontinensia">Inkontinensia</Radio>
                  <Radio name="genitourinaria" value="Hematuria">Hematuria</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Ginekologi -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Ginekologi <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-1 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Opsi Ginekologi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="ginekologi" value="Normal">Normal</Radio>
                  <Radio name="ginekologi" value="Sekret Abnormal">Sekret Abnormal</Radio>
                  <Radio name="ginekologi" value="Hamil">Hamil</Radio>
                  <Radio name="ginekologi" value="Menopause">Menopause</Radio>
                  <Radio name="ginekologi" value="Lainnya">Lainnya</Radio>
                  <Textarea id="ginekologi_lainnya" rows="2" placeholder="Masukkan ginekologi lainnya" name="ginekologi_lainnya"/>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Neurologi -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Neurologi <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-2 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Opsi Neurologi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
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
              <div class="my-2">
                <Label for="" class="mb-2">Kesadaran: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="neurologi" value="Compos Mentis">Compos Mentis</Radio>
                  <Radio name="neurologi" value="Apatis">Apatis</Radio>
                  <Radio name="neurologi" value="Somnolen">Somnolen</Radio>
                  <Radio name="neurologi" value="Sopor">Sopor</Radio>
                  <Radio name="neurologi" value="Koma">Koma</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Glassgow Coma Scale -->
          <AccordionItem>
            <span slot="header">Glassgow Coma Scale <span class="text-sm text-red-500 italic">*</span></span>
            <div class="">
              <p class="text-lg font-semibold">Total Nilai : <span>-</span></p>
              <p class="text-sm font-medium italic">15 (CM), 13-14 (Penurunan Kesadaran Ringan), 9-12 (Penurunan Kesadaran Sedang), 3-8 (Penurunan Kesadaran Berat)</p>
            </div>
            <div class="grid grid-cols-3 gap-4 my-5">
              <div class="my-2">
                <Label for="" class="mb-2">Mata: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="gcs_mata" value="4">Spontan (4)</Radio>
                  <Radio name="gcs_mata" value="3">Dengan Panggilan (3)</Radio>
                  <Radio name="gcs_mata" value="2">Dengan Nyeri (2)</Radio>
                  <Radio name="gcs_mata" value="1">Tidak Ada Respon (1)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Verbal: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="gcs_verbal" value="5">Orientasi Baik (5)</Radio>
                  <Radio name="gcs_verbal" value="4">Disorientasi (4)</Radio>
                  <Radio name="gcs_verbal" value="3">Jawaban Tidak Sesuai (3)</Radio>
                  <Radio name="gcs_verbal" value="2">Suara Tidak Jelas (2)</Radio>
                  <Radio name="gcs_verbal" value="1">Tidak Respon (1)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Motorik: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="gcs_motorik" value="6">Sesuai Perintah (6)</Radio>
                  <Radio name="gcs_motorik" value="5">Lokalisir Nyeri (5)</Radio>
                  <Radio name="gcs_motorik" value="4">Menarik Diri dari Rangsang Nyeri (4)</Radio>
                  <Radio name="gcs_motorik" value="3">Fleksi Abnormal (3)</Radio>
                  <Radio name="gcs_motorik" value="2">Ekstensi Abnormal (2)</Radio>
                  <Radio name="gcs_motorik" value="1">Tidak Respon (1)</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Muskuloskeletal & Kulit (Mobilitas, Fungsi Sendi, Warna Kulit, Turgor) -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Muskuloskeletal & Kulit (Mobilitas, Fungsi Sendi, Warna Kulit, Turgor) <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-3 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Mobilitas: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="mobilitas" value="Normal">Normal</Radio>
                  <Radio name="mobilitas" value="Alat Bantu">Alat Bantu</Radio>
                  <Radio name="mobilitas" value="Deformitas / Atrofi">Deformitas / Atrofi</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Fungsi Sendi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="fungsi_sendi" value="Baik">Baik</Radio>
                  <Radio name="fungsi_sendi" value="Terbatas">Terbatas</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Warna Kulit: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="warna_kulit" value="Pucat">Pucat</Radio>
                  <Radio name="warna_kulit" value="Panas">Panas</Radio>
                  <Radio name="warna_kulit" value="Kemerahan">Kemerahan</Radio>
                  <Radio name="warna_kulit" value="Lembab">Lembab</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Turgor: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="turgor" value="Turgor Buruk">Turgor Buruk</Radio>
                  <Radio name="turgor" value="Dingin">Dingin</Radio>
                  <Radio name="turgor" value="Diaforesis">Diaforesis</Radio>
                  <Radio name="turgor" value="Turgor Baik">Turgor Baik</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Isi Apabila Terdapat Frakture: <span class="text-sm text-red-500 italic">*</span></Label>
                <Textarea rows="2" name="frakture"/>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Norton Scale (Resiko Kulit) -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Norton Scale (Resiko Kulit) <span class="text-sm text-red-500 italic">*</span></span>
            <div class="">
              <p class="text-lg font-semibold">Total Skor : <span>-</span></p>
              <p class="text-sm font-medium italic">*Skor kurang dari 14 = Resiko Tinggi, lakukan pencegahan dekubitus sesuai prosedur</p>
            </div>
            <div class="grid grid-cols-4 gap-4 my-5">
              <div class="my-2">
                <Label for="" class="mb-2">Kondisi Fisik: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="ns_kondisi_fisik" value="1">Sangat Buruk (1)</Radio>
                  <Radio name="ns_kondisi_fisik" value="2">Buruk (2)</Radio>
                  <Radio name="ns_kondisi_fisik" value="3">Cukup (3)</Radio>
                  <Radio name="ns_kondisi_fisik" value="4">Baik (4)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Kondisi Mental: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="ns_kondisi_mental" value="1">Stupor (1)</Radio>
                  <Radio name="ns_kondisi_mental" value="2">Delirium (2)</Radio>
                  <Radio name="ns_kondisi_mental" value="3">Apatis (3)</Radio>
                  <Radio name="ns_kondisi_mental" value="4">Kompos Mentiks (4)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Aktivitas: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="ns_aktivitas" value="1">Tirah Baring (1)</Radio>
                  <Radio name="ns_aktivitas" value="2">Kursi Roda (2)</Radio>
                  <Radio name="ns_aktivitas" value="3">Dipapah (3)</Radio>
                  <Radio name="ns_aktivitas" value="4">Mandiri (4)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Mobilitas: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="ns_mobilitas" value="1">Imobilisasi (1)</Radio>
                  <Radio name="ns_mobilitas" value="2">Sangat Terbatas (2)</Radio>
                  <Radio name="ns_mobilitas" value="3">Agak Terbatas (3)</Radio>
                  <Radio name="ns_mobilitas" value="4">Baik (4)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Inkontinensia: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="ns_inkontinensia" value="1">Selalu (1)</Radio>
                  <Radio name="ns_inkontinensia" value="2">Sering (2)</Radio>
                  <Radio name="ns_inkontinensia" value="3">Terkadang (3)</Radio>
                  <Radio name="ns_inkontinensia" value="4">Tidak (4)</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Aktivitas Harian Dasar -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Aktivitas Harian Dasar <span class="text-sm text-red-500 italic">*</span></span>
            <div class="">
              <p class="text-lg font-semibold">Total Nilai ADL : <span>-</span></p>
              <p class="text-sm font-medium italic">Skor: 6, Tidak Ada Ketergantungan. Skor: 3-5, Ketergantungan Sebagian. Skor: 0-2, Tergantung Penuh.</p>
            </div>
            <div class="grid grid-cols-4 gap-4 my-5">
              <div class="my-2">
                <Label for="" class="mb-2">Makan / Minum: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="aktivitas_makanminum" value="1">Mandiri (1)</Radio>
                  <Radio name="aktivitas_makanminum" value="2">100% Dibantu (2)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Mandi: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="aktivitas_mandi" value="1">Mandiri (1)</Radio>
                  <Radio name="aktivitas_mandi" value="2">100% Dibantu (2)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Memakai Baju: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="aktivitas_baju" value="1">Mandiri (1)</Radio>
                  <Radio name="aktivitas_baju" value="2">100% Dibantu (2)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">BAB/BAK (Pergi ke toilet): <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="aktivitas_toilet" value="1">Mandiri (1)</Radio>
                  <Radio name="aktivitas_toilet" value="2">100% Dibantu (2)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Naik turun tempat tidur: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="aktivitas_tidur" value="1">Mandiri (1)</Radio>
                  <Radio name="aktivitas_tidur" value="2">100% Dibantu (2)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Kemampuan menahan BAB/BAK: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="aktivitas_menahan" value="1">Mandiri (1)</Radio>
                  <Radio name="aktivitas_menahan" value="2">100% Dibantu (2)</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Status Nutrisi (MUST) -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Status Nutrisi (MUST) <span class="text-sm text-red-500 italic">*</span></span>
            <div class="">
              <p class="text-lg font-semibold">Total Skor : <span>-</span></p>
              <p class="text-sm font-medium italic">0: Resiko Rendah, 1: Resiko Sedang, Lebih dari 2: Resiko Tinggi</p>
              <p class="text-sm font-medium italic">(Kolaborasi dengan Ahli Gizi)</p>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="my-2 col-span-3">
                <Label for="" class="mb-2">Tanda-Tanda Vital: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="grid grid-cols-2 gap-2">
                  <div class="grid grid-cols-3 gap-2">
                    <span>Tinggi Badan:</span>
                    <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="tb" size="sm" />
                    <span>cm</span>
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    <span>Berat Badan:</span>
                    <Input type="text" defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50" name="bb" size="sm" />
                    <span>kg</span>
                  </div>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Skor IMT (BB:TB2/LLA): <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="must_imt" value="0"> Lebih dari 20 (0)</Radio>
                  <Radio name="must_imt" value="1"> 18,5 - 20 (1)</Radio>
                  <Radio name="must_imt" value="2"> Kurang dari 18,5 (2)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Persentase kehilangan berat badan tak terencana(dalam 3-6 bulan terakhir): <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="must_kehilangan_bb" value="0"> Kurang dari 5% (0)</Radio>
                  <Radio name="must_kehilangan_bb" value="1"> 5% - 10% (1)</Radio>
                  <Radio name="must_kehilangan_bb" value="2"> Lebih dari 10% (2)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Efek akut akibat penyakit: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="must_efek" value="0"> Tidak ada gangguan (0)</Radio>
                  <Radio name="must_efek" value="1"> Kurang/tidak ada asupan 2-5 hari (1)</Radio>
                  <Radio name="must_efek" value="2"> Kurang/tidak ada asupan lebih dari 5 hari (2)</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Resiko Jatuh Morse (Untuk pasien usia > 13 tahun) -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Resiko Jatuh Morse (Untuk pasien usia > 13 tahun) <span class="text-sm text-red-500 italic">*</span></span>
            <div class="">
              <p class="text-lg font-semibold">Total Skor : <span>-</span></p>
              <p class="text-sm font-medium italic">Lebih dari 45: Resiko Tinggi, 25-44: Resiko Sedang, 0-24: Resiko Rendah</p>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Riwayat jatuh: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="morse_riwayat_jatuh" value="25"> Ya (25)</Radio>
                  <Radio name="morse_riwayat_jatuh" value="0"> Tidak (0)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Diagnosis Sekunder( sama dengan/lebih dari 2 diagnosis): <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="morse_diagnosis_sekunder" value="15"> Ya (15)</Radio>
                  <Radio name="morse_diagnosis_sekunder" value="0"> Tidak (0)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Alat Bantu: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="morse_alat_bantu" value="30"> Perbaot (30)</Radio>
                  <Radio name="morse_alat_bantu" value="15"> Tongkat/alat penopang (15)</Radio>
                  <Radio name="morse_alat_bantu" value="0"> Tidak ada/kursi roda/bedrest (0)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Terpasang Infus: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="morse_infus" value="20"> Ya (20)</Radio>
                  <Radio name="morse_infus" value="0"> Tidak (0)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Gaya Berjalan: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="morse_berjalan" value="20"> Terganggu (20)</Radio>
                  <Radio name="morse_berjalan" value="10"> Lemah (10)</Radio>
                  <Radio name="morse_berjalan" value="0"> Normal/bedrest/immobilisasi (0)</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Status Mental: <span class="text-sm text-red-500 italic">*</span></Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="morse_mental" value="15"> Sering lupa akan keterbatan yang dimiliki (15)</Radio>
                  <Radio name="morse_mental" value="10"> Orientasi baik terhadap diri sendiri (10)</Radio>
                </div>
              </div>
            </div>
          </AccordionItem>
          <!-- Pemeriksaan Nyeri (Bila ada nyeri lakukan Asesmen Lanjutan Nyeri) -->
          <AccordionItem>
            <span slot="header">Pemeriksaan Nyeri (Bila ada nyeri lakukan Asesmen Lanjutan Nyeri) <span class="text-sm text-red-500 italic">*</span></span>
            <div class="grid grid-cols-4 gap-4">
              <div class="my-2">
                <Label for="" class="mb-2">Nyeri:</Label>
                <div class="flex flex-wrap gap-2">
                  <Radio name="pemeriksaan_nyeri" value="Ya">Ya</Radio>
                  <Radio name="pemeriksaan_nyeri" value="Tidak">Tidak</Radio>
                </div>
              </div>
              <div class="my-2">
                <Label for="" class="mb-2">Asesmen Lanjutan Nyeri:</Label>
                <Textarea rows="2" name="pemeriksaan_nyeri_lanjutan"/>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </TabItem>
      <TabItem title="Bagian 2: Analisa">
        <div class="flex items-center justify-between mb-2">
          <p class="text-md font-medium">Diagnosa Keperawatan (Beri tanda centang yang menjadi prioritas)</p>
          <Button size="md" on:click={addDiagnosaPerawat}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg> Diagnosa
          </Button>
        </div>
        {#each diagnosaPerawat as tag, i}
          <div class="flex items-center gap-4 py-2">
            <div class="w-full">
              <Checkbox class="my-2">
                <Textarea rows="2" name="diagnosa_perawat[]" placeholder="Masukan Diagnosa" bind:value={diagnosaPerawat[i].diagnosa_perawat}/>
              </Checkbox>
            </div>
            <Button on:click={() => deleteDiagnosaPerawat(i)} size="xs" color="red"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg></Button>
          </div>
        {/each}
      </TabItem>
    </Tabs>
  </form>
</main>