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
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";

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
        Swal.fire({
          icon: "success",
          title: "Asesmen Medis Awal Berhasil Disimpan & Diperbarui",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          goto(`/rekam-medis/${no_rm}/asesmen-medis-awal`);
        });
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          title: "Aksi Dibatalkan",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };
</script>

<main>
  <form on:submit|preventDefault={() => handleSubmit(no_rm)}>
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">
          Form 12.15 Asesmen Medis Awal
        </p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" size="sm" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5" />
    <Accordion>
      <!-- Anamnesa -->
      <AccordionItem open>
        <span slot="header"
          >Anamnesa <span class="text-sm text-red-500 italic">*</span></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="keluhan_utama" class="mb-2"
              >Keluhan utama: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="keluhan_utama"
              rows="2"
              placeholder="Masukkan keluhan utama"
              name="keluhan_utama"
            />
          </div>
          <div class="my-2">
            <Label for="riwayat_penyakit_sekarang" class="mb-2"
              >Riwayat penyakit sekarang: <span
                class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="riwayat_penyakit_sekarang"
              placeholder="Masukkan riwayat penyakit sekarang"
              rows="2"
              name="riwayat_penyakit_sekarang"
            />
          </div>
          <div class="my-2">
            <Label for="riwayat_penyakit_keluarga" class="mb-2"
              >Riwayat penyakit keluarga: <span
                class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="riwayat_penyakit_keluarga"
              placeholder="Masukkan riwayat penyakit keluarga"
              rows="2"
              name="riwayat_penyakit_keluarga"
            />
          </div>
          <div class="my-2">
            <Label for="riwayat_pengobatan" class="mb-2"
              >Riwayat pengobatan: <span class="text-sm text-red-500 italic"
                >*</span
              ></Label
            >
            <Textarea
              id="riwayat_pengobatan"
              rows="2"
              placeholder="Masukkan riwayat pengobatan"
              name="riwayat_pengobatan"
            />
          </div>
          <div class="my-2">
            <Label for="riwayat_alergi" class="mb-2"
              >Riwayat alergi: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="riwayat_alergi"
              rows="2"
              placeholder="Masukkan riwayat alergi"
              name="riwayat_alergi"
            />
          </div>
        </div>
      </AccordionItem>
      <!-- Pemeriksaan Fisik -->
      <AccordionItem>
        <span slot="header"
          >Pemeriksaan Fisik <span class="text-sm text-red-500 italic">*</span
          ></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="keadaan_umum" class="mb-2"
              >Keadaan umum: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="keadaan_umum"
              placeholder="Masukkan kesadaran umum"
              rows="2"
              name="keadaan_umum"
            />
          </div>
          <div class="my-2">
            <Label for="kepala_leher"
              >Kepala/leher: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="kepala_leher"
              rows="2"
              placeholder="Masukkan kepala/leher"
              name="kepala_leher"
            />
          </div>
          <div class="my-2">
            <Label for="ekstremitas"
              >Ekstremitas: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="ekstremitas"
              rows="2"
              placeholder="Masukkan ekstremitas"
              name="ekstremitas"
            />
          </div>
          <div class="my-2">
            <Label for="genitalia"
              >Genitalia: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="genitalia"
              rows="2"
              placeholder="Masukkan genitalia"
              name="genitalia"
            />
          </div>
          <div class="my-2 sm:col-span-2">
            <Label for="" class="mb-2"
              >Kesadaran & GCS: <span class="text-sm text-red-500 italic"
                >*</span
              ></Label
            >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <Label for="kesadaran"
                  >Kesadaran: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  id="kesadaran"
                  rows="2"
                  placeholder="Masukkan kesadaran"
                  name="kesadaran"
                />
              </div>
              <div>
                <Label for="gcs"
                  >GCS: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  id="gcs"
                  rows="2"
                  placeholder="Masukkan GCS"
                  name="gcs"
                />
              </div>
            </div>
          </div>
          <div class="my-2 sm:col-span-2">
            <Label for="" class="mb-2"
              >Status Gizi & BB: <span class="text-sm text-red-500 italic"
                >*</span
              ></Label
            >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <Label for="status_gizi"
                  >Status Gizi: <span class="text-sm text-red-500 italic"
                    >*</span
                  ></Label
                >
                <Textarea
                  id="status_gizi"
                  rows="2"
                  placeholder="Masukkan status gizi"
                  name="status_gizi"
                />
              </div>
              <div>
                <Label for="bb"
                  >BB: <span class="text-sm text-red-500 italic">*</span></Label
                >
                <Textarea
                  id="bb"
                  rows="2"
                  placeholder="Masukkan BB"
                  name="bb"
                />
              </div>
            </div>
          </div>
          <div class="my-2 sm:col-span-2">
            <Label for="" class="mb-2"
              >Thorax: <span class="text-sm text-red-500 italic">*</span></Label
            >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <Label for="cor"
                  >COR: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  id="cor"
                  rows="2"
                  placeholder="Masukkan COR"
                  name="cor"
                />
              </div>
              <div>
                <Label for="pulmo"
                  >Pulmo: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  id="pulmo"
                  rows="2"
                  placeholder="Masukkan pulmo"
                  name="pulmo"
                />
              </div>
            </div>
          </div>
          <div class="my-2 sm:col-span-2">
            <Label for="" class="mb-2"
              >Abdomen: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <Label for="inspeksi" class="mb-2"
                  >Inspeksi: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  class="mr-2"
                  id="inspeksi"
                  rows="2"
                  placeholder="Masukkan inspeksi"
                  name="inspeksi"
                />
              </div>
              <div>
                <Label for="palpasi" class="mb-2"
                  >Palpasi: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  rows="2"
                  id="palpasi"
                  placeholder="Masukkan palpasi"
                  name="palpasi"
                />
              </div>
              <div>
                <Label for="auskultasi" class="mb-2"
                  >Auskultasi: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  id="auskultasi"
                  rows="2"
                  placeholder="Masukkan auskultasi"
                  name="auskultasi"
                />
              </div>
              <div>
                <Label for="perkusi" class="mb-2"
                  >Perkusi: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  id="perkusi"
                  rows="2"
                  placeholder="Masukkan perkusi"
                  name="perkusi"
                />
              </div>
            </div>
          </div>
          <div class="my-2 sm:col-span-2">
            <Label for="" class="mb-2"
              >Vital Sign: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <Label for="tensi" class="mb-2"
                  >Tensi: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  class="mr-2"
                  id="tensi"
                  rows="2"
                  placeholder="Masukkan tensi"
                  name="tensi"
                />
              </div>
              <div>
                <Label for="nadi" class="mb-2"
                  >Nadi: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  rows="2"
                  id="nadi"
                  placeholder="Masukkan nadi"
                  name="nadi"
                />
              </div>
              <div>
                <Label for="suhu" class="mb-2"
                  >Suhu: <span class="text-sm text-red-500 italic">*</span
                  ></Label
                >
                <Textarea
                  id="suhu"
                  rows="2"
                  placeholder="Masukkan suhu"
                  name="suhu"
                />
              </div>
              <div>
                <Label for="rr" class="mb-2"
                  >RR: <span class="text-sm text-red-500 italic">*</span></Label
                >
                <Textarea
                  id="rr"
                  rows="2"
                  placeholder="Masukkan RR"
                  name="rr"
                />
              </div>
            </div>
          </div>
        </div>
      </AccordionItem>
      <!-- Pemeriksaan Penunjang -->
      <AccordionItem>
        <span slot="header"
          >Pemeriksaan Penunjang <span class="text-sm text-red-500 italic"
            >*</span
          ></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="laboratorium" class="mb-2"
              >Laboratorium: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="laboratorium"
              placeholder="Masukkan laboratorium"
              rows="2"
              name="laboratorium"
            />
          </div>
          <div class="my-2">
            <Label for="radiologi" class="mb-2"
              >Radiologi: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="radiologi"
              placeholder="Masukkan radiologi"
              rows="2"
              name="radiologi"
            />
          </div>
          <div class="my-2">
            <Label for="lain_lain" class="mb-2"
              >Lain-lain: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="lain_lain"
              placeholder="Masukkan lain-lain"
              rows="2"
              name="lain_lain"
            />
          </div>
        </div>
      </AccordionItem>
      <!-- Masalah -->
      <AccordionItem>
        <span slot="header"
          >Masalah <span class="text-sm text-red-500 italic">*</span></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="masalah" class="mb-2"
              >Uraian Masalah: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="masalah"
              placeholder="Masukkan masalah"
              rows="2"
              name="masalah"
            />
          </div>
        </div>
      </AccordionItem>
      <!-- Diagnosis -->
      <AccordionItem>
        <span slot="header"
          >Diagnosis <span class="text-sm text-red-500 italic">*</span></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="diagnosis" class="mb-2"
              >Uraian Diagnosis: <span class="text-sm text-red-500 italic"
                >*</span
              ></Label
            >
            <Textarea
              id="diagnosis"
              placeholder="Masukkan diagnosis"
              rows="2"
              name="diagnosis"
            />
          </div>
        </div>
      </AccordionItem>
      <!-- Rencana Asuhan Pemeriksaan Penunjang -->
      <AccordionItem>
        <span slot="header"
          >Rencana Asuhan Pemeriksaan Penunjang <span
            class="text-sm text-red-500 italic">*</span
          ></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="rencana_asuhan" class="mb-2"
              >Uraian Rencana Asuhan: <span class="text-sm text-red-500 italic"
                >*</span
              ></Label
            >
            <Textarea
              id="rencana_asuhan"
              placeholder="Masukkan rencana asuhan"
              rows="2"
              name="rencana_asuhan"
            />
          </div>
          <div class="my-2">
            <Label for="terapi" class="mb-2"
              >Terapi: <span class="text-sm text-red-500 italic">*</span></Label
            >
            <Textarea
              id="terapi"
              placeholder="Masukkan terapi"
              rows="2"
              name="terapi"
            />
          </div>
          <div class="my-2">
            <Label for="tindakan_prosedur_khusus_operasi" class="mb-2"
              >Tindakan/prosedur khusus/operasi: <span
                class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="tindakan_prosedur_khusus_operasi"
              placeholder="Masukkan tindakan/prosedur khusus/operasi"
              rows="2"
              name="tindakan_prosedur_khusus_operasi"
            />
          </div>
          <div class="my-2">
            <Label for="nutrisi" class="mb-2"
              >Nutrisi: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="nutrisi"
              placeholder="Masukkan nutrisi"
              rows="2"
              name="nutrisi"
            />
          </div>
          <div class="my-2">
            <Label for="konsultasi_rehabilitasi" class="mb-2"
              >Konsultasi/rehabilitasi: <span
                class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="konsultasi_rehabilitasi"
              placeholder="Masukkan konsultasi/rehabilitasi"
              rows="2"
              name="konsultasi_rehabilitasi"
            />
          </div>
        </div>
      </AccordionItem>
      <!-- Sasaran -->
      <AccordionItem>
        <span slot="header"
          >Sasaran <span class="text-sm text-red-500 italic">*</span></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="sasaran" class="mb-2"
              >Uraian Sasaran: <span class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="sasaran"
              placeholder="Masukkan sasaran"
              rows="2"
              name="sasaran"
            />
          </div>
        </div>
      </AccordionItem>
      <!-- Rencana Monitoring / Follow Up -->
      <AccordionItem>
        <span slot="header"
          >Rencana Monitoring / Follow Up <span
            class="text-sm text-red-500 italic">*</span
          ></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="rencana_monitoring" class="mb-2"
              >Uraian Monitoring / Follow Up: <span
                class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="rencana_monitoring"
              placeholder="Masukkan rencana monitoring"
              rows="2"
              name="rencana_monitoring"
            />
          </div>
        </div>
      </AccordionItem>
      <!-- Efek Samping / Komplikasi yang Mungkin Terjadi / Hasil yang Tidak Diharapkan -->
      <AccordionItem>
        <span slot="header"
          >Efek Samping / Komplikasi yang Mungkin Terjadi / Hasil yang Tidak
          Diharapkan <span class="text-sm text-red-500 italic">*</span></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="efek_samping" class="mb-2"
              >Uraian Efek Samping/Komplikasi yang Mungkin Terjadi/Hasil yang
              Tidak Diharapkan: <span class="text-sm text-red-500 italic"
                >*</span
              ></Label
            >
            <Textarea
              id="efek_samping"
              placeholder="Masukkan uraian"
              rows="2"
              name="efek_samping"
            />
          </div>
        </div>
      </AccordionItem>
      <!-- Hasil yang Diharapkan / Outcome (Prognosa) -->
      <AccordionItem>
        <span slot="header"
          >Hasil yang Diharapkan / Outcome (Prognosa) <span
            class="text-sm text-red-500 italic">*</span
          ></span
        >
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="prognosa" class="mb-2"
              >Uraian Hasil yang Diharapkan/Outcome (Prognosa): <span
                class="text-sm text-red-500 italic">*</span
              ></Label
            >
            <Textarea
              id="prognosa"
              placeholder="Masukkan prognosa"
              rows="2"
              name="prognosa"
            />
          </div>
        </div>
      </AccordionItem>
      <!-- Pengkajian Rencana Pemulangan Pasien -->
      <AccordionItem>
        <span slot="header"
          >Pengkajian Rencana Pemulangan Pasien <span
            class="text-sm text-red-500 italic">*</span
          ></span
        >
        <p class="text-sm font-medium italic">
          Catatan: jika satu terpenuhi maka pasien membutuhkan perencanaan
          pemulangan khusus.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="my-2">
            <Label for="" class="mb-2">Usia lanjut(60 tahun atau lebih):</Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="pemulangan_usia" value="Ya">Ya</Radio>
              <Radio name="pemulangan_usia" value="Tidak">Tidak</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Hambatan mobilitasi:</Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="hambatan_mobilitasi" value="Ya">Ya</Radio>
              <Radio name="hambatan_mobilitasi" value="Tidak">Tidak</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2"
              >Membutuhkan perawatan medis dan perawatan berkelanjutan:</Label
            >
            <div class="flex flex-wrap gap-2">
              <Radio name="membutuhkan_perawatan_berkelanjutan" value="Ya"
                >Ya</Radio
              >
              <Radio name="membutuhkan_perawatan_berkelanjutan" value="Tidak"
                >Tidak</Radio
              >
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2"
              >Tergantung dengan orang lain dalam aktivitas harian:</Label
            >
            <div class="flex flex-wrap gap-2">
              <Radio name="tergantung_dalam_aktivitas_harian" value="Ya"
                >Ya</Radio
              >
              <Radio name="tergantung_dalam_aktivitas_harian" value="Tidak"
                >Tidak</Radio
              >
            </div>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  </form>
</main>
