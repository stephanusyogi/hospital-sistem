<script>
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
  import Swal from "sweetalert2";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  let selectedAgamaPasien;
  let selectedAgama = 'default';
  let agamaPasien = [
    { value: "Islam", name: "Islam" },
    { value: "Katolik", name: "Katolik" },
    { value: "Protestan", name: "Protestan" },
    { value: "Hindu", name: "Hindu" },
    { value: "Buddha", name: "Buddha" },
  ];
  
  let selectedJenisKelamin = 'default';

  let alamat_ktp = '';
  let alamat_domisili = '';
  let isAlamatDomisiliSama = false;

  let nik
  let nikError = ''
  const handleCheckNIK = (e) => {
    let value = e.target.value
    if (value.length !== 16) {
      return nikError = 'red';
    }

    // Cek NIK harus angka
    if (!(/^\d+$/.test(value))) {
      return nikError = 'red';
    }

    // Cek provinsi (2 digit pertama NIK) valid
    const provinsiCode = value.substr(0, 2);
    const validProvinsiCodes = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '31', '32', '33', '34', '35', '36', '51', '52', '53', '61', '62', '63', '64', '65', '71', '72', '73', '74', '75', '76', '81', '82', '91', '92'];
    if (!validProvinsiCodes.includes(provinsiCode)) {
      return nikError = 'red';
    }

    // Semua kondisi validasi terpenuhi
    return nikError = '';
  }

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

  const handleSubmit = () => {
    if(nikError){
      alert("NIK Tidak Valid, Mohon Perikasa Kembali")
      return
    }
    Swal.fire({
      title: "Daftarkan Pasien Baru?",
      text: "Mohon berhati-hati, aksi ini bersifat permanen pada database.",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Lanjutkan",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        const form = document.getElementById('form');
        form.submit()
      }
    });
  };

  export let form
  // Alert Form Validation
  onMount(() => {
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }

    if (form?.success) {
      Swal.fire({
        text: form.message,
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
      }).then(() => {
        // Hanya jalankan goto di sisi klien (browser)
        if (typeof window !== 'undefined') {
          goto(`/pendaftaran/loket-pasien`);
        }
      });
    }
    
    if(form?.data){
      alamat_ktp = form.data.alamat_ktp
      alamat_domisili = form.data.alamat_domisili
      selectedAgamaPasien = form.data.agama
      selectedAgama = form.data.agama
      selectedJenisKelamin = form.data.jenis_kelamin
      nik = form.data.nik
    }
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
      >Pendaftaran</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Loket Pasien</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Formulir Pasien Baru</BreadcrumbItem
    >
  </Breadcrumb>
  <form id="form" on:submit|preventDefault={handleSubmit} method="POST">
    <div class="flex flex-wrap gap-4 justify-between items-center">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">
          Formulir Pasien Baru RSI Aisyah
        </p>
        <p class="text-red-500 text-xs lg:text-sm">(*) Wajib diisi.</p>
      </div>
      <Button
        class="text-xs sm:text-md lg:text-md"
        color="green"
        type="submit">Daftarkan Pasien Baru</Button
      >
    </div>
    <hr class="my-5" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      <div class="group">
        <Label for="" class="block mb-2"
          >Nomor Rekam Medis:
          <span class="text-red-500 text-lg">*</span></Label
        >
        <Input
          id="no_rekam_medis"
          name="no_rekam_medis"
          value="Auto-Generated"
          disabled
          readonly
        />
      </div>
      <div class="group">
        <Label for="nama_lengkap" class="block mb-2" color={form?.data.name === '' ? 'red' : ''}
          >Nama Lengkap Pasien: <span class="text-red-500 text-lg">*</span
          ></Label
        >
        <Input
          id="name"
          name="name"
          placeholder="Masukkan nama lengkap pasien"
          value={form?.data.name ?? ''}
        />
      </div>
      <div class="group">
        <Label for="nik" class="block mb-2" color={form?.data.nik === '' ? 'red' : ''}
          >NIK Pasien: <span class="text-red-500 text-lg">*</span></Label
        >
        <Input id="nik" name="nik" placeholder="Masukkan NIK pasien" bind:value={nik} on:input={handleCheckNIK}/>
        {#if nikError}
          <Helper class='mt-2' color='red'>NIK Anda Tidak Valid!</Helper>
        {/if}
      </div>
      <div class="group">
        <Label for="umur" class="block mb-2" color={form?.data.umur === '' ? 'red' : ''}
          >Umur: <span class="text-red-500 text-lg">*</span></Label
        >
        <Input type="number" id="umur" name="umur" placeholder="Masukkan umur pasien" value={form?.data.umur ?? ''}/>
      </div>
      <div class="group">
        <Label for="" class="block mb-2" color={selectedJenisKelamin === undefined ? 'red' : ''}
          >Jenis Kelamin: <span class="text-red-500 text-lg">*</span></Label
        >
        <div>
          <Radio class="mb-2" name="jenis_kelamin" value="Laki-Laki"
            checked={form?.data.jenis_kelamin === 'Laki-Laki' ? true : false}>Laki-Laki</Radio
          >
          <Radio name="jenis_kelamin" value="Perempuan" checked={form?.data.jenis_kelamin === 'Perempuan' ? true : false}>Perempuan</Radio>
        </div>
      </div>
      <div class="group">
        <Label for="" class="block mb-2" color={form?.data.tempat_lahir === '' ? 'red' : ''}
          >Tempat / Tanggal Lahir: <span class="text-red-500 text-lg">*</span
          ></Label
        >
        <div class="flex gap-2">
          <Input
            id="tempat_lahir"
            name="tempat_lahir"
            placeholder="Masukkan tempat"
            defaultClass="block w-40 disabled:cursor-not-allowed disabled:opacity-50"
            value={form?.data.tempat_lahir ?? ''}
          />
          <Input
            id="tanggal_lahir"
            name="tanggal_lahir"
            type="date"
            defaultClass="block w-80 disabled:cursor-not-allowed disabled:opacity-50"
            value={form?.data.tanggal_lahir ?? ''}
          />
        </div>
      </div>
      <div class="group">
        <Label for="no_hp" class="block mb-2" color={form?.data.no_hp === '' ? 'red' : ''}
          >Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span></Label
        >
        <Input
          id="no_hp"
          name="no_hp"
          placeholder="Masukkan nomor telepon / HP pasien"
          value={form?.data.no_hp ?? ''}
        />
      </div>
      <div class="group">
        <Label color={selectedAgama === undefined ? 'red' : ''}
          >Agama: <span class="text-red-500 text-lg">*</span>
          <Select name="agama" class="mt-2" items={agamaPasien} bind:value={selectedAgamaPasien}/>
        </Label>
      </div>
      <div class="group">
        <Label for="alamat_ktp" class="block mb-2" color={form?.data.alamat_ktp === '' ? 'red' : ''}
          >Alamat KTP: <span class="text-red-500 text-lg">*</span></Label
        >
        <Textarea
          name="alamat_ktp"
          id="alamat_ktp"
          placeholder="Masukkan alamat sesuai ktp pasien"
          rows="2"
          bind:value={alamat_ktp}
        />
      </div>
      <div class="group">
        <Label for="alamat_domisili" class="block mb-2" color={form?.data.alamat_domisili === '' ? 'red' : ''}
          >Alamat Domisili Tempat Tinggal: <span class="text-red-500 text-lg"
            >*</span
          ></Label
        >
        <Textarea
          name="alamat_domisili"
          id="alamat_domisili"
          placeholder="Masukkan alamat tempat tinggal pasien"
          rows="2"
          bind:value={alamat_domisili}
        />
        <Checkbox on:change={handleCheckboxChange} bind:checked={isAlamatDomisiliSama}>Alamat domisili sama dengan KTP</Checkbox>
      </div>
    </div>
  </form>
</div>

