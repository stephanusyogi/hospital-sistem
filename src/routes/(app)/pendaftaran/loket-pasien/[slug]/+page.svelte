<script>
  import { onMount } from "svelte";
  import {
  Alert,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Checkbox,
    Helper,
    Input,
    Label,
    Modal,
    Radio,
    Select,
    Textarea,
  } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  import { page } from "$app/stores";
  import axios from 'axios';
  import bpjs from "$lib/images/bpjs.png";

  
  /** @type {import('./$types').PageData} */
  export let data;
  
  /** @type {import('./$types').ActionData} */
  export let form;

  let selectedJenisKelamin

  let selectedAgamaPasien;
  let agamaPasien = [
    { value: "Islam", name: "Islam" },
    { value: "Katolik", name: "Katolik" },
    { value: "Protestan", name: "Protestan" },
    { value: "Hindu", name: "Hindu" },
    { value: "Buddha", name: "Buddha" },
    { value: "Lain-Lain", name: "Lain-Lain" },
  ];

  const no_rm = $page.params.slug;
  const qrCodeUrl = $page.url.origin + "/rekam-medis/" + no_rm;

  const handleSubmitInformasiPasien = () => {
    Swal.fire({
      title: "Simpan Informasi Pasien?",
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

  let cara_pembayaran
  let nomor_asuransi
  let status_peserta
  let data_bpjs
  let requiredNomorAsuransi = true
  let requiredStatusPeserta
  const handleCaraPembayaran = (event) => {
    if(event.currentTarget.value === 'Umum/Mandiri'){
      requiredNomorAsuransi = false
      requiredStatusPeserta = false
    }
    cara_pembayaran = event.currentTarget.value;
    nomor_asuransi = ''
  };

  let statusPeserta = [
    { value: true, name: "Peserta Aktif" },
    { value: false, name: "Peserta Tidak Aktif" },
  ];
  
  const handleCheckBPJS = async (nik) => {
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer '+ data.user_data.token
    };

    try {
      const response = await axios.get(data.api_base+'/bpjs/'+nik, { headers });
      data_bpjs = response.data;
      status_peserta = data_bpjs[0].status ? true : false;
      nomor_asuransi = data_bpjs[0].no_peserta
    } catch (error) {
      data_bpjs = [{
        error: true,
        message: error.response.data.message
      }]
    }
  }
  let SEPModal = false;

  
  let alamat_ktp = '';
  let alamat_domisili = '';
  let isAlamatDomisiliSama = false;
  const handleCheckboxChange = () => {
    if(isAlamatDomisiliSama){
      if(alamat_ktp == ''){
        isAlamatDomisiliSama = false
        alert("Alamat KTP Tidak Boleh Kosong!")
        return
      }else{
        alamat_domisili = alamat_ktp;
      }
    }else{
      alamat_domisili = ''
    }
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
    
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }

    if(data?.patient){
      selectedAgamaPasien = data.patient.agama
      selectedJenisKelamin = data.patient.jenis_kelamin
    }

    setTimeout(() => {
      const divElement = document.getElementById('scrollToDiv');
      if (divElement) {
        divElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);
  });
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb
    class="mt-10 overflow-x-auto"
    aria-label="Solid background breadcrumb example"
    solid
  >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      href="/"
      home>Dashboard</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Loket Pasien</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Admisi Rawat Inap</BreadcrumbItem
    >
  </Breadcrumb>
  {#if data?.bpjs.length > 0}
    <Alert color="green" dismissable>
      <svg slot="icon" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
      Pasien terdeteksi sebagai peserta Layanan BPJS, <a href="#scrollToDiv" class="underline hover:font-weight-500">Check NIK</a> untuk memeriksa Surat Eligibelitas Peserta.
    </Alert>
  {/if}
  <section>
    <form id="form" on:submit|preventDefault={handleSubmitInformasiPasien} method="POST">
      <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
        <div
          class="flex flex-wrap justify-center lg:justify-between items-center"
        >
          <div class="grid grid-cols-2 gap-1">
            <p
              class="text-lg sm:text-xl md:text-2xl font-semibold col-span-2"
            >
              Pendaftaran Rawat Inap
            </p>
            <p class="text-red-500 text-xs lg:text-sm">(*) Wajib diisi.</p>
            <div class="flex flex-wrap gap-2 items-center col-span-2">
              <Button
                class="w-fit text-sm sm:text-md lg:text-md"
                size="md"
                type="submit"
                color="green">Daftarkan Pasien</Button
              >
              <Button
                class="w-fit lg:order-first text-sm sm:text-md lg:text-md"
                href="/pendaftaran/loket-pasien"
                size="md"
                color="yellow">Kembali</Button
              >
            </div>
          </div>
          <div class="p-4 border border-gray-300 w-max h-fit">
            <div class="flex justify-between items-center gap-2 sm:gap-6">
              <div class="font-bold text-xs">
                <p class="my-1">No. RM: {no_rm}</p>
                <p class="my-1 uppercase">{data?.patient.name} ({data?.patient.jenis_kelamin === 'Laki-Laki' ? 'L' : 'P'}) {data?.patient.umur+'th' ?? ''}</p>
                <p class="my-1">Tgl. Lahir: {data?.patient.tanggal_lahir}</p>
                <p class="my-1">{data?.patient.alamat_ktp}</p>
              </div>
              <div id="qrcode" />
            </div>
          </div>
        </div>
        <hr class="my-4 border-slate-500" />
        <div class="my-2 border-b border-slate-500 py-4 px-2">
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
                value={no_rm}
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
                value={data?.patient.name}
                placeholder="Masukkan nama lengkap pasien"
                readonly
                disabled
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >NIK Pasien: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="nik"
                name="nik"
                value={data?.patient.nik}
                placeholder="Masukkan nama lengkap pasien"
                readonly
                disabled
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
                value={data?.patient.umur}
                readonly
                disabled
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Jenis Kelamin: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <div class="flex flex-col gap-2">
                <Radio id="jenis_kelamin" name="jenis_kelamin"
                disabled
                checked={selectedJenisKelamin === 'Laki-Laki' ? true : false }>Laki-Laki</Radio>
                <Radio name="jenis_kelamin"
                disabled
                checked={selectedJenisKelamin === 'Perempuan' ? true : false }>Perempuan</Radio>
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
                  value={data?.patient.tempat_lahir}
                  readonly
                  disabled
                />
                <Input
                  id="tanggal_lahir"
                  name="tanggal_lahir"
                  type="date"
                  value={data?.patient.tanggal_lahir}
                  readonly
                  disabled
                />
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="no_telp_pasien"
                name="no_telp_pasien"
                placeholder="Masukkan nomor telepon / HP pasien"
                value={data?.patient.no_hp}
                readonly
                disabled
              />
            </div>
            <div class="grouphelperPagination">
              <Label for=""
                >Agama: <span class="text-red-500 text-lg">*</span>
                <Select
                  id="agama"
                  disabled
                  name="agama"
                  class="mt-2"
                  items={agamaPasien}
                  bind:value={selectedAgamaPasien}
                />
              </Label>
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Alamat KTP: <span class="text-red-500 text-lg">*</span></Label
              >
              <Input
                id="alamat_ktp"
                name="alamat_ktp"
                value={data?.patient.alamat_ktp}
                readonly
                disabled
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Alamat Domisili Tempat Tinggal: <span
                  class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="alamat_domisili"
                name="alamat_domisili"
                value={data?.patient.alamat_domisili}
                readonly
                disabled
              />
              <Checkbox disabled checked={data?.patient.alamat_ktp === data?.patient.alamat_domisili ? true : false}>Alamat domisili sama dengan KTP</Checkbox>
            </div>
          </div>
        </div>
        <div id="scrollToDiv" class="my-2 border-b border-slate-500 py-4 px-2">
          <p class="text-lg font-medium italic">Identitas Penanggung Jawab</p>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2 mb-2"
          >
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Penanggung Jawab: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="nama_penanggungjawab"
                name="nama_penanggungjawab"
                placeholder="Masukkan nama penanggung jawab pasien"
                required
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Hubungan dengan Pasien: <span class="text-red-500 text-lg"
                  >*</span
                ></Label
              >
              <div class="flex flex-wrap gap-2">
                <Radio name="hubungan_dengan_pasien" value="Orang Tua" required
                  >Orang Tua</Radio
                >
                <Radio name="hubungan_dengan_pasien" value="Anak" required>Anak</Radio>
                <Radio name="hubungan_dengan_pasien" value="Suami/Istri"
                required>Suami/Istri</Radio
                >
                <Radio name="hubungan_dengan_pasien" value="Keluarga"
                required>Keluarga</Radio
                >
                <Radio name="hubungan_dengan_pasien" value="Teman" required>Teman</Radio>
                <Radio name="hubungan_dengan_pasien" value="Lain-Lain"
                required>Lain-Lain</Radio
                >
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for="alamat_ktp_penanggungjawab" class="block mb-2"
                >Alamat KTP: <span class="text-red-500 text-lg">*</span></Label
              >
              <Textarea
                name="alamat_ktp_penanggungjawab"
                id="alamat_ktp_penanggungjawab"
                placeholder="Masukkan alamat sesuai ktp penanggung jawab pasien"
                rows="2"
                bind:value={alamat_ktp}
                required
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="alamat_domisili_penanggungjawab" class="block mb-2"
                >Alamat Tempat Tinggal: <span class="text-red-500 text-lg"
                  >*</span
                ></Label
              >
              <Textarea
                name="alamat_domisili_penanggungjawab"
                id="alamat_domisili_penanggungjawab"
                placeholder="Masukkan alamat tempat tinggal penanggung jawab pasien"
                rows="2"
                bind:value={alamat_domisili}
                required
              />
              <Checkbox on:change={handleCheckboxChange} bind:checked={isAlamatDomisiliSama}>Alamat domisili sama dengan KTP</Checkbox>
            </div>
            <div class="grouphelperPagination">
              <Label for="no_hp_penanggungjawab" class="block mb-2"
                >Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="no_hp_penanggungjawab"
                name="no_hp_penanggungjawab"
                placeholder="Masukkan nomor telepon / HP penanggung jawab pasien"
                required
              />
            </div>
          </div>
        </div>
        <div class="mb-2 border-b border-slate-500 py-4 px-2">
          <p class="text-lg font-medium italic">Asuransi & Pembayaran</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2">
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Cara Pembayaran: <span class="text-red-500 text-lg">*</span
                ></Label>
              <div class="">
                <Radio
                  required
                  class="my-1"
                  checked={cara_pembayaran === "Umum/Mandiri"}
                  name="cara_pembayaran"
                  value="Umum/Mandiri"
                  on:change={handleCaraPembayaran}>Umum/Mandiri</Radio
                >
                <Radio
                  required
                  class="my-1"
                  checked={cara_pembayaran === "Lainnya"}
                  name="cara_pembayaran"
                  value="Lainnya"
                  on:change={handleCaraPembayaran}>Lainnya</Radio
                >
                <Radio
                  required
                  class="my-1"
                  checked={cara_pembayaran === "BPJS"}
                  name="cara_pembayaran"
                  value="BPJS"
                  on:change={handleCaraPembayaran}>BPJS</Radio
                >
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for="nama_asuransi" class="block mb-2"
                >Nama Asuransi: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                required
                id="nama_asuransi"
                name="nama_asuransi"
                placeholder="Masukkan nama asuransi"
                value={cara_pembayaran === 'Lainnya' ? '' : cara_pembayaran}
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="flex justify-between mb-2">
                <div>
                  Nomor Asuransi Peserta: <span class="text-red-500 text-lg">*</span>
                </div>
                {#if cara_pembayaran === 'BPJS'}
                  <Button color="yellow" size="xs" on:click={handleCheckBPJS(data?.patient.nik)}>Check NIK</Button>
                {/if}
                </Label>
              <Input
                bind:required={requiredNomorAsuransi}
                id="nomor_asuransi"
                name="nomor_asuransi"
                placeholder="Masukkan nomor asuransi peserta"
                bind:value={nomor_asuransi}
              />
              {#if cara_pembayaran === 'BPJS'}
                {#if data_bpjs}
                  {#if data_bpjs[0].error}
                    <Helper class="mt-2" color="red">
                      Data Tidak Ditemukan!
                    </Helper>
                  {:else if data_bpjs[0].status}
                    <Helper class="mt-2" color="green">
                      Peserta Aktif! Layanan BPJS Dapat Digunakan.
                      <span class="font-bold"><Button size="xs" on:click={() => SEPModal = true}>Lihat SEP</Button></span>
                    </Helper>
                    <Modal class="relative flex flex-col w-full" size="lg" title="Informasi BPJS" bind:open={SEPModal} autoclose>
                      <div class="relative p-6">
                        <img class="w-48 absolute left-0 top-0" src={bpjs} alt="">
                        <div class="text-center">
                          <h1 class="font-bold">Surat Eligibilitas Peserta</h1>
                          <h3 class="font-semibold">{data_bpjs[0].asal_faskes}</h3>
                        </div>
                        <br>
                        <div class="grid-cols-2 grid gap-6">
                          <div>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">No. SEP :</span>{data_bpjs[0].no_sep ?? ''}</p>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">Tanggal SEP :</span>{data_bpjs[0].tgl_sep ?? ''}</p>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">No. Peserta :</span>{data_bpjs[0].no_peserta ?? ''}</p>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">Poliklinik :</span>{data_bpjs[0].polilklinik ?? ''}</p>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">Asal Faskes :</span>{data_bpjs[0].asal_faskes ?? ''}</p>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">Diagnosa :</span>{data_bpjs[0].diagnosa ?? ''}</p>
                          </div>
                          <div>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">Jenis Peserta :</span>{data_bpjs[0].jenis_peserta ?? ''}</p>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">Jenis Rawat :</span>{data_bpjs[0].jenis_rawat ?? ''}</p>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">Kelas Rawat :</span>{data_bpjs[0].kelas_rawat ?? ''}</p>
                            <p class="font-light flex justify-between items-center"><span class="font-semibold my-1 mr-3">Status Peserta :</span>{data_bpjs[0].status ? 'Peserta Aktif' : 'Peserta Tidak Aktif'}</p>
                          </div>
                        </div>
                      </div>
                      <svelte:fragment slot='footer'>
                        <div class="text-right">
                          <Button color="alternative">Tutup</Button>
                        </div>
                      </svelte:fragment>
                    </Modal>
                  {:else}
                    <Helper class="mt-2" color="red">
                      Peserta Tidak Aktif! Layanan BPJS Tidak Dapat Digunakan.
                    </Helper>
                  {/if}
                {/if}
              {/if}
            </div>
            <div class="grouphelperPagination">
              <Label for=""
                >Status Peserta: <span class="text-red-500 text-lg">*</span>
                <Select
                  bind:required={requiredStatusPeserta}
                  name="status_asuransi"
                  class="mt-2"
                  items={statusPeserta}
                  bind:value={status_peserta}
                />
              </Label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</div>
