<script>
  import { onMount } from "svelte";
  import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Checkbox,
    Helper,
    Input,
    Label,
    Radio,
    Select,
    Textarea,
  } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  import { page } from "$app/stores";

  let selectedAgamaPasien = "Islam";
  let agamaPasien = [
    { value: "Islam", name: "Islam" },
    { value: "Katolik", name: "Katolik" },
    { value: "Protestan", name: "Protestan" },
    { value: "Hindu", name: "Hindu" },
    { value: "Buddha", name: "Buddha" },
    { value: "Lain-Lain", name: "Lain-Lain" },
  ];
  let statusPeserta = [
    { value: 1, name: "Peserta Aktif" },
    { value: 0, name: "Peserta Tidak Aktif" },
  ];

  const no_rm = $page.params.slug;
  const qrCodeUrl = $page.url.origin + "/rekam-medis/" + no_rm;

  const handleSubmitPendaftaranPasienBaru = () => {
    Swal.fire({
      title: "Simpan & Perbarui Data Pasien?",
      text: "Mohon berhati-hati, aksi ini bersifat permanen pada database.",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Simpan",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Pasien Berhasil Disimpan & Diperbarui",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          goto("/pendaftaran/admisi-rawat-inap");
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

  const handleKembali = () => {
    Swal.fire({
      title: "Kembali ke Loket Pasien?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Kembali",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto("/pendaftaran/loket-pasien");
      }
    });
  };

  let cara_pembayaran;
  const handleCaraPembayaran = (event) => {
    cara_pembayaran = event.currentTarget.value;
  };

  let qrcode;
  onMount(() => {
    let script = document.createElement("script");
    script.src =
      "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";
    document.head.append(script);

    script.onload = function () {
      qrcode = new QRCode("qrcode", {
        text: qrCodeUrl,
        width: 80,
        height: 80,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    };
  });
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb
    class="mt-10 overflow-x-auto"
    aria-label="Solid background breadcrumb example"
    solid
  >
    <BreadcrumbItem
      spanClass="text-xs sm:text-md lg:text-lg ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      homeClass="inline-flex items-center text-xs sm:text-md lg:text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      href="/"
      home>Dashboard</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs sm:text-md lg:text-lg ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Loket Pasien</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs sm:text-md lg:text-lg ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Formulir Admisi Rawat Inap</BreadcrumbItem
    >
  </Breadcrumb>
  <section>
    <form on:submit|preventDefault={handleSubmitPendaftaranPasienBaru}>
      <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
        <div
          class="flex flex-wrap justify-center lg:justify-between items-center gap-4"
        >
          <div class="grid grid-cols-2 gap-4">
            <p
              class="text-lg sm:text-xl md:text-2xl font-semibold my-1 col-span-2"
            >
              Formulir Admisi Rawat Inap
            </p>
            <div class="flex flex-wrap gap-2 items-center my-1 col-span-2">
              <Button
                class="w-fit lg:order-first text-sm sm:text-md lg:text-lg"
                type="submit"
                color="green">Daftarkan Pasien ke Admisi</Button
              >
              <Button
                class="w-fit lg:order-first text-sm sm:text-md lg:text-lg"
                on:click={handleKembali}
                color="yellow">Kembali</Button
              >
            </div>
            <p class="text-red-500 text-xs lg:text-sm">(*) Wajib diisi.</p>
          </div>
          <div class="p-4 border border-gray-300 w-max h-fit">
            <div class="flex justify-between items-center gap-2 sm:gap-6">
              <div class="font-bold text-xs">
                <p class="my-1">No. RM: {no_rm}</p>
                <p class="my-1 uppercase">Jon Snow (L) 23th</p>
                <p class="my-1">Tgl. Lahir: 02/06/2000</p>
                <p class="my-1">Jln. Mayjend Pandjaitan No. 22 Malang</p>
              </div>
              <div id="qrcode" />
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <div class="my-2 border-b">
          <p class="text-lg font-medium italic">Identitas Pasien</p>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2"
          >
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Nomor Rekam Medis: <span class="italic">(Auto-Generated)</span>
                <span class="text-red-500 text-lg">*</span></Label
              >
              <Input
                id="no_rekam_medis"
                name="no_rekam_medis"
                placeholder="Masukkan nomor rekam medis pasien"
                value="00013-12313"
                readonly
                disabled
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Nama Lengkap Pasien: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="nama_lengkap"
                name="nama_lengkap"
                value="Jon Snow"
                placeholder="Masukkan nama lengkap pasien"
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Umur: <span class="text-red-500 text-lg">*</span></Label
              >
              <Input
                id="umur"
                name="umur"
                placeholder="Masukkan umur pasien"
                value="23"
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Jenis Kelamin: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <div class="flex flex-col gap-2">
                <label
                  for=""
                  class="text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center"
                >
                  <input
                    type="radio"
                    name="jenis_kelamin"
                    value="Laki-Laki"
                    checked
                    class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
                  />
                  Laki-Laki
                </label>
                <label
                  for=""
                  class="text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center"
                >
                  <input
                    type="radio"
                    name="jenis_kelamin"
                    value="Perempuan"
                    class="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2 dark:bg-gray-700 dark:border-gray-600 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
                  />
                  Perempuan
                </label>
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Tempat / Tanggal Lahir: <span class="text-red-500 text-lg"
                  >*</span
                ></Label
              >
              <div class="flex gap-2">
                <Input
                  id="tempat_lahir"
                  name="tempat_lahir"
                  placeholder="Masukkan tempat"
                  value="Sragen"
                />
                <Input
                  id="tanggal_lahir"
                  name="tanggal_lahir"
                  type="date"
                  value="2000-06-02"
                />
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for="no_telp_pasien" class="block mb-2"
                >Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="no_telp_pasien"
                name="no_telp_pasien"
                placeholder="Masukkan nomor telepon / HP pasien"
                value="08912318731831"
              />
            </div>
            <div class="grouphelperPagination">
              <Label
                >Agama: <span class="text-red-500 text-lg">*</span>
                <Select
                  name="agama"
                  class="mt-2"
                  items={agamaPasien}
                  bind:value={selectedAgamaPasien}
                />
              </Label>
            </div>
            <div class="grouphelperPagination">
              <Label for="alamat_ktp" class="block mb-2"
                >Alamat KTP: <span class="text-red-500 text-lg">*</span></Label
              >
              <Textarea
                name="alamat_tempat_tinggal"
                id="alamat_tempat_tinggal"
                placeholder="Masukkan alamat tempat tinggal pasien"
                rows="2"
                value="Jln. Mayjend Pandjaitan No. 22 Malang"
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="alamat_tempat_tinggal" class="block mb-2"
                >Alamat Domisili Tempat Tinggal: <span
                  class="text-red-500 text-lg">*</span
                ></Label
              >
              <Textarea
                name="alamat_ktp"
                id="alamat_ktp"
                placeholder="Masukkan alamat sesuai ktp pasien"
                rows="2"
                value="Jln. Mayjend Pandjaitan No. 22 Malang"
              />
              <Checkbox checked>Alamat domisili sama dengan KTP</Checkbox>
            </div>
          </div>
        </div>
        <div class="my-2 border-b">
          <p class="text-lg font-medium italic">Identitas Penanggung Jawab</p>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2 mb-2"
          >
            <div class="grouphelperPagination">
              <Label for="nama_pj" class="block mb-2"
                >Penanggung Jawab: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="nama_pj"
                name="nama_pj"
                placeholder="Masukkan nama penanggung jawab pasien"
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Hubungan dengan Pasien: <span class="text-red-500 text-lg"
                  >*</span
                ></Label
              >
              <div class="flex flex-wrap gap-2">
                <Radio name="hubungan_pasien_pj" value="Orang Tua"
                  >Orang Tua</Radio
                >
                <Radio name="hubungan_pasien_pj" value="Anak">Anak</Radio>
                <Radio name="hubungan_pasien_pj" value="Suami/Istri"
                  >Suami/Istri</Radio
                >
                <Radio name="hubungan_pasien_pj" value="Keluarga"
                  >Keluarga</Radio
                >
                <Radio name="hubungan_pasien_pj" value="Teman">Teman</Radio>
                <Radio name="hubungan_pasien_pj" value="Lain-Lain"
                  >Lain-Lain</Radio
                >
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for="alamat_tempat_tinggal_pj" class="block mb-2"
                >Alamat Tempat Tinggal: <span class="text-red-500 text-lg"
                  >*</span
                ></Label
              >
              <Textarea
                name="alamat_tempat_tinggal_pj"
                id="alamat_tempat_tinggal_pj"
                placeholder="Masukkan alamat tempat tinggal penanggung jawab pasien"
                rows="2"
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="alamat_ktp_pj" class="block mb-2"
                >Alamat KTP: <span class="text-red-500 text-lg">*</span></Label
              >
              <Textarea
                name="alamat_ktp_pj"
                id="alamat_ktp_pj"
                placeholder="Masukkan alamat sesuai ktp penanggung jawab pasien"
                rows="2"
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="no_telp_pj" class="block mb-2"
                >Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="no_telp_pj"
                name="no_telp_pj"
                placeholder="Masukkan nomor telepon / HP penanggung jawab pasien"
              />
            </div>
          </div>
        </div>
        <div class="mb-2 border-b">
          <p class="text-lg font-medium italic">Asuransi & Pembayaran</p>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2"
          >
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Cara Pembayaran: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <div class="">
                <Radio
                  class="my-1"
                  checked={cara_pembayaran === "Umum/Mandiri"}
                  name="cara_pembayaran"
                  value="Umum/Mandiri"
                  on:change={handleCaraPembayaran}>Umum/Mandiri</Radio
                >
                <Radio
                  class="my-1"
                  checked={cara_pembayaran === "Lainnya"}
                  name="cara_pembayaran"
                  value="Lainnya"
                  on:change={handleCaraPembayaran}>Lainnya</Radio
                >
                <Radio
                  class="my-1"
                  checked={cara_pembayaran === "BPJS"}
                  name="cara_pembayaran"
                  value="BPJS"
                  on:change={handleCaraPembayaran}>BPJS</Radio
                >
              </div>
            </div>
            {#if cara_pembayaran === "Lainnya"}
              <div class="grouphelperPagination">
                <Label for="nama_asuransi" class="block mb-2"
                  >Nama Asuransi: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  id="nama_asuransi"
                  name="nama_asuransi"
                  placeholder="Masukkan nama asuransi"
                  value={cara_pembayaran === "BPJS" ? "BPJS" : ""}
                />
              </div>
              <div class="grouphelperPagination">
                <Label for="no_asuransi_peserta" class="block mb-2"
                  >Nomor Asuransi Peserta: <span class="text-red-500 text-lg"
                    >*</span
                  ></Label
                >
                <Input
                  id="no_asuransi_peserta"
                  name="no_asuransi_peserta"
                  placeholder="Masukkan nomor asuransi peserta"
                />
              </div>
              <div class="grouphelperPagination">
                <Label
                  >Status Peserta: <span class="text-red-500 text-lg">*</span>
                  <Select
                    name="status_peserta"
                    class="mt-2"
                    items={statusPeserta}
                  />
                </Label>
              </div>
            {:else if cara_pembayaran === "BPJS"}
              <div class="grouphelperPagination">
                <Label for="nama_asuransi" class="block mb-2"
                  >Nama Asuransi: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  id="nama_asuransi"
                  name="nama_asuransi"
                  placeholder="Masukkan nama asuransi"
                  value={cara_pembayaran === "BPJS" ? "BPJS" : ""}
                />
              </div>
              <div class="grouphelperPagination">
                <Label
                  for="no_asuransi_peserta"
                  class="flex justify-between mb-2"
                >
                  <div>
                    Nomor Asuransi Peserta: <span class="text-red-500 text-lg"
                      >*</span
                    >
                  </div>
                  <Button color="yellow" size="xs">Check</Button>
                </Label>
                <Input
                  id="no_asuransi_peserta"
                  name="no_asuransi_peserta"
                  placeholder="Masukkan nomor asuransi peserta"
                />
                <Helper class="mt-2" color="green"
                  ><span class="font-bold"
                    >Peserta Aktif! Layanan BPJS Dapat Digunakan.</span
                  ></Helper
                >
              </div>
            {/if}
          </div>
          <!-- <div class="grid grid-cols-4 gap-4 py-2">
              <div>
                <Label for="tipePasien">Tipe Asuransi Pasien: <span class="text-red-500 text-lg">*</span></Label>
                <Select on:change={onChange} id="tipePasien" size="md" items={pasienTipeStatus} class="mt-2 mb-2"/>
                <p>Silahkan pilih tipe asuransi pasien terlebih dahulu.</p>
              </div>
              {#if viewFormAsuransi === "umum"}
                <div class="grouphelperPagination">
                  <Label for='' class='block mb-2'>Cara Pembayaran: <span class="text-red-500 text-lg">*</span></Label>
                  <div>
                    <Checkbox name="cara_pembayaran[]" value="umum/mandiri" checked="true">Umum/Mandiri</Checkbox>
                    <Checkbox name="cara_pembayaran[]" disabled>BPJS</Checkbox>
                    <Checkbox name="cara_pembayaran[]" disabled>Asuransi Lainnya</Checkbox>
                  </div>
                </div>
              {:else if viewFormAsuransi === "bpjs"}
                <div class="grouphelperPagination">
                  <Label for='' class='block mb-2'>Cara Pembayaran: <span class="text-red-500 text-lg">*</span></Label>
                  <div class="flex flex-wrap gap-2">
                    <Checkbox name="cara_pembayaran[]" disabled>Umum/Mandiri</Checkbox>
                    <Checkbox name="cara_pembayaran[]" value="bpjs" checked>BPJS</Checkbox>
                    <Checkbox name="cara_pembayaran[]" disabled>Asuransi Lainnya</Checkbox>
                  </div>
                </div>
                <div class="grouphelperPagination col-span-2">
                  <form class="flex gap-2 mb-2" on:submit|preventDefault={searchBPJS}>
                    <Search size="md" placeholder="Masukkan Nomor Registrasi Peserta" />
                    <Button class="!p-2.5">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                    </Button>
                  </form>
                  <div class="grouphelperPagination" contenteditable="true" bind:innerHTML={detailPesertaBPJS}></div>
                </div>
              {:else if viewFormAsuransi === "lainnya"}
                <div class="grouphelperPagination">
                  <Label for='' class='block mb-2'>Cara Pembayaran: <span class="text-red-500 text-lg">*</span></Label>
                  <div class="">
                    <Checkbox name="cara_pembayaran[]" disabled>Umum/Mandiri</Checkbox>
                    <Checkbox name="cara_pembayaran[]" disabled>BPJS</Checkbox>
                    <Checkbox name="cara_pembayaran[]" value="lainnya" checked>Asuransi Lainnya</Checkbox>
                  </div>
                </div>
                <div class="col-span-2 grid grid-cols-2 gap-4">
                  <div class="grouphelperPagination">
                    <Label for='nama_asuransi' class='block mb-2'>Nama Asuransi: <span class="text-red-500 text-lg">*</span></Label>
                    <Input id="nama_asuransi" name="nama_asuransi" placeholder="Masukkan nama asuransi"/>
                  </div>
                  <div class="grouphelperPagination">
                    <Label for='no_asuransi_peserta' class='block mb-2'>Nomor Asuransi Peserta: <span class="text-red-500 text-lg">*</span></Label>
                    <Input id="no_asuransi_peserta" name="no_asuransi_peserta" placeholder="Masukkan nomor asuransi peserta"/>
                  </div>
                  <div class="grouphelperPagination">
                    <Label>Status Peserta:  <span class="text-red-500 text-lg">*</span>
                      <Select name="status_peserta" class="mt-2" items={statusPeserta}/>
                    </Label>
                  </div>
                </div>
              {:else}
                <p></p>
              {/if}
            </div> -->
        </div>
      </div>
    </form>
  </section>
</div>
