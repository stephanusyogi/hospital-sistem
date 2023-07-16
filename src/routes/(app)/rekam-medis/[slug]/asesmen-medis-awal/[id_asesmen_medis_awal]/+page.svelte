<script>
  import {
    Accordion,
    AccordionItem,
    Button,
    Label,
    Radio,
    TabItem,
    Tabs,
    Textarea,
  } from "flowbite-svelte";
  import { page } from "$app/stores";
  import Swal from "sweetalert2";
  import { onMount } from "svelte";

  export let data
  export let form

  const no_rm = $page.params.slug;

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: "Simpan & Perbarui Asesmen Medis Awal?",
      text: "Mohon berhati-hati, aksi ini bersifat permanen pada database.",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Simpan",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        const form = document.getElementById('form');
        form.submit()
      }
    });
  };
  let keluhan_utama
  let riwayat_penyakit_sekarang
  let riwayat_penyakit_keluarga
  let riwayat_pengobatan
  let riwayat_alergi
  let masalah
  let diagnosis
  onMount(() => {
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if(data?.asesmen_medis_awal.length !== 0){
      keluhan_utama = data.asesmen_medis_awal.anamnesa[0].keluhan_utama
      riwayat_penyakit_sekarang = data.asesmen_medis_awal.anamnesa[0].riwayat_penyakit_sekarang
      riwayat_penyakit_keluarga = data.asesmen_medis_awal.anamnesa[0].riwayat_penyakit_keluarga
      riwayat_pengobatan = data.asesmen_medis_awal.anamnesa[0].riwayat_pengobatan
      riwayat_alergi = data.asesmen_medis_awal.anamnesa[0].riwayat_alergi
      masalah = data.asesmen_medis_awal.masalah
      diagnosis = data.asesmen_medis_awal.diagnosis
    }
  })


  // let keadaan_umum = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.keadaan_umum || "";
  // let kepala_leher = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.kepala_leher || "";
  // let ekstremitas = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.ekstremitas || "";
  // let genitalia = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.genitalia || "";
  // let kesadaran = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.kesadaran || "";
  // let gcs = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.gcs || "";
  // let status_gizi = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.status_gizi || "";
  // let bb = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.bb || "";
  // let thorax_cor = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.thorax_cor || "";
  // let thorax_pulmo = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.thorax_pulmo || "";
  // let abdomen_inspeksi = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.abdomen_inspeksi || "";
  // let abdomen_palpasi = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.abdomen_palpasi || "";
  // let abdomen_auskultasi = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.abdomen_auskultasi || "";
  // let abdomen_perkusi = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.abdomen_perkusi || "";
  // let vital_sign_tensi = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.vital_sign_tensi || "";
  // let vital_sign_nadi = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.vital_sign_nadi || "";
  // let vital_sign_suhu = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.vital_sign_suhu || "";
  // let vital_sign_rr = data?.asesmen_medis_awal.pemeriksaan_fisik[0]?.vital_sign_rr || "";

  // let masalah = data?.asesmen_medis_awal.masalah || "";
  // let diagnosis = data?.asesmen_medis_awal.diagnosis || "";
  // let sasaran = data?.asesmen_medis_awal.sasaran || "";
  // let rencana_monitoring = data?.asesmen_medis_awal.rencana_monitoring || "";
  // let efek_samping = data?.asesmen_medis_awal.efek_samping || "";
  // let prognosa = data?.asesmen_medis_awal.prognosa || "";

  // let laboratorium = data?.asesmen_medis_awal.pemeriksaan_penunjang[0]?.laboratorium || "";
  // let radiologi = data?.asesmen_medis_awal.pemeriksaan_penunjang[0]?.radiologi || "";
  // let lain_lain = data?.asesmen_medis_awal.pemeriksaan_penunjang[0]?.lain_lain || "";

  // let uraian_rencana_asuhan = data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0]?.uraian_rencana_asuhan || "";
  // let terapi = data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0]?.terapi || "";
  // let tindakan = data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0]?.tindakan || "";
  // let nutrisi = data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0]?.nutrisi || "";
  // let konsultasi = data?.asesmen_medis_awal.rencana_asuhan_pemeriksaan_penunjang[0]?.konsultasi || "";

  // let usia_lanjut = data?.asesmen_medis_awal.pengkajian_rencana_pemulangan_pasien[0]?.usia_lanjut || false;
  // let hambatan_mobilitasi = data?.asesmen_medis_awal.pengkajian_rencana_pemulangan_pasien[0]?.hambatan_mobilitasi || false;
  // let membutuhkan_perawatan_lanjutan = data?.asesmen_medis_awal.pengkajian_rencana_pemulangan_pasien[0]?.membutuhkan_perawatan_lanjutan || false;
  // let ketergantungan_orang_lain = data?.asesmen_medis_awal.pengkajian_rencana_pemulangan_pasien[0]?.ketergantungan_orang_lain || false;


</script>

<main>
  <form id="form" on:submit|preventDefault={() => handleSubmit(no_rm)} method="post">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">
          Form 12.15 Asesmen Medis Awal
        </p>
      </div>
      <Button type="submit" size="sm" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5" />
    <p class="text-lg font-semibold italic">Anamnesa</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="keluhan_utama" class="mb-2"
          >Keluhan utama: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="keluhan_utama"
          rows="2"
          placeholder="Masukkan keluhan utama"
          name="keluhan_utama"
          bind:value={keluhan_utama}
        />
      </div>
      <div class="my-2">
        <Label for="riwayat_penyakit_sekarang" class="mb-2"
          >Riwayat penyakit sekarang: <span
            class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="riwayat_penyakit_sekarang"
          placeholder="Masukkan riwayat penyakit sekarang"
          rows="2"
          name="riwayat_penyakit_sekarang"
          bind:value={riwayat_penyakit_sekarang}
        />
      </div>
      <div class="my-2">
        <Label for="riwayat_penyakit_keluarga" class="mb-2"
          >Riwayat penyakit keluarga: <span
            class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="riwayat_penyakit_keluarga"
          placeholder="Masukkan riwayat penyakit keluarga"
          rows="2"
          name="riwayat_penyakit_keluarga"
          bind:value={riwayat_penyakit_keluarga}
        />
      </div>
      <div class="my-2">
        <Label for="riwayat_pengobatan" class="mb-2"
          >Riwayat pengobatan: <span class="text-sm text-red-500 italic"
            ></span
          ></Label
        >
        <Textarea
          id="riwayat_pengobatan"
          rows="2"
          placeholder="Masukkan riwayat pengobatan"
          name="riwayat_pengobatan"
          bind:value={riwayat_pengobatan}
        />
      </div>
      <div class="my-2">
        <Label for="riwayat_alergi" class="mb-2"
          >Riwayat alergi: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="riwayat_alergi"
          rows="2"
          placeholder="Masukkan riwayat alergi"
          name="riwayat_alergi"
          bind:value={riwayat_alergi}
        />
      </div>
    </div>
    <!-- Untuk Pengembangan Selanjutnya -->
    <!-- <p class="text-lg font-semibold italic">Pemeriksaan Fisik</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="keadaan_umum" class="mb-2"
          >Keadaan umum: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="keadaan_umum"
          placeholder="Masukkan kesadaran umum"
          rows="2"
          name="keadaan_umum"
          bind:value={keadaan_umum}
        />
      </div>
      <div class="my-2">
        <Label for="kepala_leher" class="mb-2"
          >Kepala/leher: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="kepala_leher"
          rows="2"
          placeholder="Masukkan kepala/leher"
          name="kepala_leher"
          bind:value={kepala_leher}
        />
      </div>
      <div class="my-2">
        <Label for="ekstremitas" class="mb-2"
          >Ekstremitas: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="ekstremitas"
          rows="2"
          placeholder="Masukkan ekstremitas"
          name="ekstremitas"
          bind:value={ekstremitas}
        />
      </div>
      <div class="my-2">
        <Label for="genitalia" class="mb-2"
          >Genitalia: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="genitalia"
          rows="2"
          placeholder="Masukkan genitalia"
          name="genitalia"
          bind:value={genitalia}
        />
      </div>
      <div class="my-2 sm:col-span-2">
        <Label for="" class="mb-2"
          >Kesadaran & GCS: <span class="text-sm text-red-500 italic"
            ></span
          ></Label
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <Label for="kesadaran"
              >Kesadaran: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              id="kesadaran"
              rows="2"
              placeholder="Masukkan kesadaran"
              name="kesadaran"
              bind:value={kesadaran}
            />
          </div>
          <div>
            <Label for="gcs"
              >GCS: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              id="gcs"
              rows="2"
              placeholder="Masukkan GCS"
              name="gcs"
              bind:value={gcs}
            />
          </div>
        </div>
      </div>
      <div class="my-2 sm:col-span-2">
        <Label for="" class="mb-2"
          >Status Gizi & BB: <span class="text-sm text-red-500 italic"
            ></span
          ></Label
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <Label for="status_gizi"
              >Status Gizi: <span class="text-sm text-red-500 italic"
                ></span
              ></Label
            >
            <Textarea
              id="status_gizi"
              rows="2"
              placeholder="Masukkan status gizi"
              name="status_gizi"
              bind:value={status_gizi}
            />
          </div>
          <div>
            <Label for="bb"
              >BB:</Label
            >
            <Textarea
              id="bb"
              rows="2"
              placeholder="Masukkan BB"
              name="bb"
              bind:value={bb}
            />
          </div>
        </div>
      </div>
      <div class="my-2 sm:col-span-2">
        <Label for="" class="mb-2"
          >Thorax:</Label
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <Label for="thorax_cor"
              >COR: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              id="thorax_cor"
              rows="2"
              placeholder="Masukkan COR"
              name="thorax_cor"
              bind:value={thorax_cor}
            />
          </div>
          <div>
            <Label for="thorax_pulmo"
              >Pulmo: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              id="thorax_pulmo"
              rows="2"
              placeholder="Masukkan pulmo"
              name="thorax_pulmo"
              bind:value={thorax_pulmo}
            />
          </div>
        </div>
      </div>
      <div class="my-2 sm:col-span-2">
        <Label for="" class="mb-2"
          >Abdomen: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <Label for="abdomen_inspeksi" class="mb-2"
              >Inspeksi: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              class="mr-2"
              id="abdomen_inspeksi"
              rows="2"
              placeholder="Masukkan inspeksi"
              name="abdomen_inspeksi"
              bind:value={abdomen_inspeksi}
            />
          </div>
          <div>
            <Label for="abdomen_palpasi" class="mb-2"
              >Palpasi: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              rows="2"
              id="abdomen_palpasi"
              placeholder="Masukkan palpasi"
              name="abdomen_palpasi"
              bind:value={abdomen_palpasi}
            />
          </div>
          <div>
            <Label for="abdomen_auskultasi" class="mb-2"
              >Auskultasi: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              id="abdomen_auskultasi"
              rows="2"
              placeholder="Masukkan auskultasi"
              name="abdomen_auskultasi"
              bind:value={abdomen_auskultasi}
            />
          </div>
          <div>
            <Label for="abdomen_perkusi" class="mb-2"
              >Perkusi: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              id="abdomen_perkusi"
              rows="2"
              placeholder="Masukkan perkusi"
              name="abdomen_perkusi"
              bind:value={abdomen_perkusi}
            />
          </div>
        </div>
      </div>
      <div class="my-2 sm:col-span-2">
        <Label for="" class="mb-2"
          >Vital Sign: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <Label for="vital_sign_tensi" class="mb-2"
              >Tensi: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              class="mr-2"
              id="vital_sign_tensi"
              rows="2"
              placeholder="Masukkan tensi"
              name="vital_sign_tensi"
              bind:value={vital_sign_tensi}
            />
          </div>
          <div>
            <Label for="vital_sign_nadi" class="mb-2"
              >Nadi: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              rows="2"
              id="vital_sign_nadi"
              placeholder="Masukkan nadi"
              name="vital_sign_nadi"
              bind:value={vital_sign_nadi}
            />
          </div>
          <div>
            <Label for="vital_sign_suhu" class="mb-2"
              >Suhu: <span class="text-sm text-red-500 italic"></span
              ></Label
            >
            <Textarea
              id="vital_sign_suhu"
              rows="2"
              placeholder="Masukkan suhu"
              name="vital_sign_suhu"
              bind:value={vital_sign_suhu}
            />
          </div>
          <div>
            <Label for="vital_sign_rr" class="mb-2"
              >RR:</Label
            >
            <Textarea
              id="vital_sign_rr"
              rows="2"
              placeholder="Masukkan RR"
              name="vital_sign_rr"
              bind:value={vital_sign_rr}
            />
          </div>
        </div>
      </div>
    </div>
    <p class="text-lg font-semibold italic">Pemeriksaan Penunjang</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="laboratorium" class="mb-2"
          >Laboratorium: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="laboratorium"
          placeholder="Masukkan laboratorium"
          rows="2"
          name="laboratorium"
          bind:value={laboratorium}
        />
      </div>
      <div class="my-2">
        <Label for="radiologi" class="mb-2"
          >Radiologi: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="radiologi"
          placeholder="Masukkan radiologi"
          rows="2"
          name="radiologi"
          bind:value={radiologi}
        />
      </div>
      <div class="my-2">
        <Label for="lain_lain" class="mb-2"
          >Lain-lain: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="lain_lain"
          placeholder="Masukkan lain-lain"
          rows="2"
          name="lain_lain"
          bind:value={lain_lain}
        />
      </div>
    </div> -->
    <hr>
    <p class="text-lg font-semibold italic">Masalah</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="masalah" class="mb-2"
          >Uraian Masalah: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="masalah"
          placeholder="Masukkan masalah"
          rows="2"
          name="masalah"
          bind:value={masalah}
        />
      </div>
    </div>
    <hr>
    <p class="text-lg font-semibold italic">Diagnosis</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="diagnosis" class="mb-2"
          >Uraian Diagnosis: <span class="text-sm text-red-500 italic"
            ></span
          ></Label
        >
        <Textarea
          id="diagnosis"
          placeholder="Masukkan diagnosis"
          rows="2"
          name="diagnosis"
          bind:value={diagnosis}
        />
      </div>
    </div>
    <!-- Untuk Pengembangan Selanjutnya -->
    <!-- <p class="text-lg font-semibold italic">Rencana Asuhan Pemeriksaan Penunjang</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="uraian_rencana_asuhan" class="mb-2"
          >Uraian Rencana Asuhan: <span class="text-sm text-red-500 italic"
            ></span
          ></Label
        >
        <Textarea
          id="uraian_rencana_asuhan"
          placeholder="Masukkan rencana asuhan"
          rows="2"
          name="uraian_rencana_asuhan"
          bind:value={uraian_rencana_asuhan}
        />
      </div>
      <div class="my-2">
        <Label for="terapi" class="mb-2"
          >Terapi:</Label
        >
        <Textarea
          id="terapi"
          placeholder="Masukkan terapi"
          rows="2"
          name="terapi"
        />
      </div>
      <div class="my-2">
        <Label for="tindakan" class="mb-2"
          >Tindakan/prosedur khusus/operasi: <span
            class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="tindakan"
          placeholder="Masukkan tindakan/prosedur khusus/operasi"
          rows="2"
          name="tindakan"
          bind:value={tindakan}
        />
      </div>
      <div class="my-2">
        <Label for="nutrisi" class="mb-2"
          >Nutrisi: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="nutrisi"
          placeholder="Masukkan nutrisi"
          rows="2"
          name="nutrisi"
          bind:value={nutrisi}
        />
      </div>
      <div class="my-2">
        <Label for="konsultasi" class="mb-2"
          >Konsultasi/rehabilitasi: <span
            class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="konsultasi"
          placeholder="Masukkan konsultasi/rehabilitasi"
          rows="2"
          name="konsultasi"
          bind:value={konsultasi}
        />
      </div>
    </div>
    <p class="text-lg font-semibold italic">Sasaran</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="sasaran" class="mb-2"
          >Uraian Sasaran: <span class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="sasaran"
          placeholder="Masukkan sasaran"
          rows="2"
          name="sasaran"
          bind:value={sasaran}
        />
      </div>
    </div>
    <p class="text-lg font-semibold italic">Rencana Monitoring / Follow Up</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="rencana_monitoring" class="mb-2"
          >Uraian Monitoring / Follow Up: <span
            class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="rencana_monitoring"
          placeholder="Masukkan rencana monitoring"
          rows="2"
          name="rencana_monitoring"
          bind:value={rencana_monitoring}
        />
      </div>
    </div>
    <p class="text-lg font-semibold italic">Efek Samping / Komplikasi yang Mungkin Terjadi / Hasil yang Tidak Diharapkan</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="efek_samping" class="mb-2"
          >Uraian Efek Samping/Komplikasi yang Mungkin Terjadi/Hasil yang
          Tidak Diharapkan: <span class="text-sm text-red-500 italic"
            ></span
          ></Label
        >
        <Textarea
          id="efek_samping"
          placeholder="Masukkan uraian"
          rows="2"
          name="efek_samping"
          bind:value={efek_samping}
        />
      </div>
    </div>
    <p class="text-lg font-semibold italic">Hasil yang Diharapkan / Outcome (Prognosa)</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="prognosa" class="mb-2"
          >Uraian Hasil yang Diharapkan/Outcome (Prognosa): <span
            class="text-sm text-red-500 italic"></span
          ></Label
        >
        <Textarea
          id="prognosa"
          placeholder="Masukkan prognosa"
          rows="2"
          name="prognosa"
          bind:value={prognosa}
        />
      </div>
    </div> -->
    <!-- <p class="text-lg font-semibold italic">Pengkajian Rencana Pemulangan Pasien</p>
    <p class="text-sm font-medium italic">
      Catatan: jika satu terpenuhi maka pasien membutuhkan perencanaan
      pemulangan khusus.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="my-2">
        <Label for="" class="mb-2">Usia lanjut(60 tahun atau lebih):</Label>
        <div class="flex flex-wrap gap-2">
          <Radio checked={usia_lanjut === true} name="usia_lanjut" value="true">Ya</Radio>
          <Radio checked={usia_lanjut === false} name="usia_lanjut" value="false">Tidak</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2">Hambatan mobilitasi:</Label>
        <div class="flex flex-wrap gap-2">
          <Radio checked={hambatan_mobilitasi === true} name="hambatan_mobilitasi" value="true">Ya</Radio>
          <Radio checked={hambatan_mobilitasi === false} name="hambatan_mobilitasi" value="false">Tidak</Radio>
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2"
          >Membutuhkan perawatan medis dan perawatan berkelanjutan:</Label
        >
        <div class="flex flex-wrap gap-2">
          <Radio on:click={()=>{membutuhkan_perawatan_lanjutan = true}} checked={membutuhkan_perawatan_lanjutan === true} name="membutuhkan_perawatan_lanjutan" value="true"
            >Ya</Radio
          >
          <Radio on:click={()=>{membutuhkan_perawatan_lanjutan = false}} checked={membutuhkan_perawatan_lanjutan === false} name="membutuhkan_perawatan_lanjutan" value="false"
            >Tidak</Radio
          >
        </div>
      </div>
      <div class="my-2">
        <Label for="" class="mb-2"
          >Tergantung dengan orang lain dalam aktivitas harian:</Label
        >
        <div class="flex flex-wrap gap-2">
          <Radio on:click={()=>{ketergantungan_orang_lain = true}} checked={ketergantungan_orang_lain === false} name="ketergantungan_orang_lain" value="true"
            >Ya</Radio
          >
          <Radio on:click={()=>{ketergantungan_orang_lain = false}} checked={ketergantungan_orang_lain === false} name="ketergantungan_orang_lain" value="false"
            >Tidak</Radio
          >
        </div>
      </div>
    </div> -->
  </form>
</main>
