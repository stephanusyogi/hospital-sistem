<script>
  import { page } from "$app/stores";
  import {
    Button,
    Checkbox,
    Input,
    Label,
    Helper,
    Radio,
    Search,
    Modal,
    Select,
    Textarea,
  } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  import { onMount } from 'svelte';
  import axios from 'axios';
  import bpjs from "$lib/images/bpjs.png";

  export let data
  export let form

  const no_rm = $page.params.slug;
  const id_informasi_pasien = $page.params.id_informasi_pasien;

  let SelectedAgamaPasien
  let agamaPasien = [
    { value: "Islam", name: "Islam" },
    { value: "Katolik", name: "Katolik" },
    { value: "Protestan", name: "Protestan" },
    { value: "Hindu", name: "Hindu" },
    { value: "Buddha", name: "Buddha" },
    { value: "Lain-Lain", name: "Lain-Lain" },
  ];

  let SelectedJenisKelamin

  let alamat_ktp = '';
  let alamat_domisili = '';
  let isAlamatDomisiliSama = false;
  const handleAlamat = () => {
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

  let HubunganDenganPasien

  let cara_pembayaran
  let nama_asuransi
  let nomor_asuransi
  let data_bpjs
  let requiredNomorAsuransi = true
  let requiredStatusPeserta
  
  let status_peserta
  let statusPeserta = [
    { value: true, name: "Peserta Aktif" },
    { value: false, name: "Peserta Tidak Aktif" },
  ];

  const handleCaraPembayaran = (event) => {
    if(event.currentTarget.value === 'Umum/Mandiri' || cara_pembayaran === 'Umum/Mandiri'){
      requiredNomorAsuransi = false
      requiredStatusPeserta = false
    }
    cara_pembayaran = event.currentTarget.value;
    if(cara_pembayaran === data.informasi_pasien.nama_asuransi){
      nomor_asuransi = data.informasi_pasien.nomor_asuransi
      status_peserta = data.informasi_pasien.status_asuransi ? true : false
    }else{
      nomor_asuransi = ''
      status_peserta = ''
    }
  };

  
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

  
  onMount(() => {
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }

    if(data){
      SelectedAgamaPasien = data.informasi_pasien.agama
      SelectedJenisKelamin = data.informasi_pasien.jenis_kelamin
      alamat_ktp = data.informasi_pasien.alamat_ktp
      alamat_domisili = data.informasi_pasien.alamat_domisili
      isAlamatDomisiliSama = data.informasi_pasien.alamat_domisili === data.informasi_pasien.alamat_ktp ? true : false

      HubunganDenganPasien = data.informasi_pasien.hubungan_dengan_pasien

      cara_pembayaran = (data.informasi_pasien.nama_asuransi !== 'Umum/Mandiri' || data.informasi_pasien.nama_asuransi !== 'BPJS') ? 'Lainnya' : data.informasi_pasien.nama_asuransi
      nomor_asuransi = data.informasi_pasien.nomor_asuransi
      nama_asuransi = data.informasi_pasien.nama_asuransi
      status_peserta = data.informasi_pasien.status_asuransi ? true : false
      
      if(cara_pembayaran === 'Umum/Mandiri'){
        requiredNomorAsuransi = false
        requiredStatusPeserta = false
      }
    }
  });

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: "Simpan & Perbarui Informasi Pasien?",
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
</script>

<main>
  <form id="form" on:submit|preventDefault={() => handleSubmit(no_rm)} method="post">
    <div
      class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2"
    >
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">
          Informasi Pasien
        </p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" size="sm" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5" />
    <div class="overflow-y-auto max-h-screen">
      <div class="border border-slate-300 rounded p-4 w-full">
        <p class="text-xl font-semibold">Biodata Pasien</p>
        <hr class="my-2" />
        <div class="mb-2">
          <p class="text-md sm:text-lg font-medium italic">Identitas</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div class="grouphelperPagination">
              <Label for="no_rekam_medis" class="block mb-2"
                >Nomor Rekam Medis: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                id="no_rekam_medis"
                name="no_rekam_medis"
                placeholder="Masukkan nomor rekam medis pasien"
                value={data?.informasi_pasien.no_rekam_medis}
                disabled
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="name" class="block mb-2"
                >Nama Lengkap Pasien: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                required
                id="name"
                name="name"
                placeholder="Masukkan nama lengkap pasien"
                value={data?.informasi_pasien.name}
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="umur" class="block mb-2"
                >Umur: <span class="text-red-500 text-lg">*</span></Label
              >
              <Input type="number" id="umur" name="umur" placeholder="Masukkan umur pasien" value={data?.informasi_pasien.umur} required/>
            </div>
            <div class="grouphelperPagination">
              <Label for="" class="block mb-2"
                >Jenis Kelamin: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <div class="flex gap-2">
                <Radio checked={SelectedJenisKelamin === 'Laki-Laki' ? true : false} name="jenis_kelamin" value="Laki-Laki">Laki-Laki</Radio>
                <Radio checked={SelectedJenisKelamin === 'Perempuan' ? true : false} name="jenis_kelamin" value="Perempuan">Perempuan</Radio>
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
                  required
                  id="tempat_lahir"
                  name="tempat_lahir"
                  placeholder="Masukkan tempat"
                  value={data?.informasi_pasien.tempat_lahir}
                />
                <Input id="tanggal_lahir" name="tanggal_lahir" type="date" value={data?.informasi_pasien.tanggal_lahir} required/>
              </div>
            </div>
            <div class="grouphelperPagination">
              <Label for="no_hp" class="block mb-2"
                >Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                required
                id="no_hp"
                name="no_hp"
                placeholder="Masukkan nomor telepon / HP pasien"
                value={data?.informasi_pasien.no_hp}
              />
            </div>
            <div class="grouphelperPagination">
              <Label
                >Agama: <span class="text-red-500 text-lg">*</span>
                <Select required name="agama" class="mt-2" items={agamaPasien} bind:value={SelectedAgamaPasien}/>
              </Label>
            </div>
            <div class="grouphelperPagination">
              <Label for="alamat_ktp" class="block mb-2"
                >Alamat KTP: <span class="text-red-500 text-lg">*</span></Label
              >
              <Textarea
                required
                name="alamat_tempat_tinggal"
                id="alamat_tempat_tinggal"
                placeholder="Masukkan alamat tempat tinggal pasien"
                bind:value={alamat_ktp}
                rows="1"
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="alamat_tempat_tinggal" class="block mb-2"
                >Alamat Domisili Tempat Tinggal: <span
                  class="text-red-500 text-lg">*</span
                ></Label
              >
              <Textarea
                name="alamat_domisili"
                id="alamat_domisili"
                placeholder="Masukkan alamat sesuai domisili pasien"
                bind:value={alamat_domisili}
                rows="2"
              />
              <Checkbox on:change={handleAlamat} bind:checked={isAlamatDomisiliSama}>Alamat domisili sama dengan KTP</Checkbox>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-md sm:text-lg font-medium italic">
            Identitas Penanggung Jawab
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 mb-2 border-b">
            <div class="grouphelperPagination">
              <Label for="nama_penanggungjawab" class="block mb-2"
                >Penanggung Jawab: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                required
                id="nama_penanggungjawab"
                name="nama_penanggungjawab"
                value={data?.informasi_pasien.nama_penanggungjawab}
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
                <Radio checked={HubunganDenganPasien === 'Orang Tua' ? true : false} required name="hubungan_dengan_pasien" value="Orang Tua"
                  >Orang Tua</Radio
                >
                <Radio checked={HubunganDenganPasien === 'Anak' ? true : false} required name="hubungan_dengan_pasien" value="Anak">Anak</Radio>
                <Radio checked={HubunganDenganPasien === 'Suami/Istri' ? true : false} required name="hubungan_dengan_pasien" value="Suami/Istri"
                  >Suami/Istri</Radio
                >
                <Radio checked={HubunganDenganPasien === 'Keluarga' ? true : false} required name="hubungan_dengan_pasien" value="Keluarga"
                  >Keluarga</Radio
                >
                <Radio checked={HubunganDenganPasien === 'Teman' ? true : false} required name="hubungan_dengan_pasien" value="Teman">Teman</Radio>
                <Radio checked={HubunganDenganPasien === 'Lain-Lain' ? true : false} required name="hubungan_dengan_pasien" value="Lain-Lain"
                  >Lain-Lain</Radio
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
                value={data?.informasi_pasien.alamat_domisili_penanggungjawab}
                placeholder="Masukkan alamat sesuai ktp penanggung jawab pasien"
                rows="2"
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="alamat_domisili_penanggungjawab" class="block mb-2"
                >Alamat Tempat Tinggal: <span class="text-red-500 text-lg"
                  >*</span
                ></Label
              >
              <Textarea
                required
                name="alamat_domisili_penanggungjawab"
                id="alamat_domisili_penanggungjawab"
                value={data?.informasi_pasien.alamat_domisili_penanggungjawab}
                placeholder="Masukkan alamat tempat tinggal penanggung jawab pasien"
                rows="2"
              />
            </div>
            <div class="grouphelperPagination">
              <Label for="no_telp_pj" class="block mb-2"
                >Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span
                ></Label
              >
              <Input
                required
                id="no_hp_penanggungjawab"
                name="no_hp_penanggungjawab"
                value={data?.informasi_pasien.no_hp_penanggungjawab}
                placeholder="Masukkan nomor telepon / HP penanggung jawab pasien"
              />
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-md sm:text-lg font-medium italic">
            Asuransi & Pembayaran
          </p>
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
                value={nama_asuransi}
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
    </div>
  </form>
</main>
