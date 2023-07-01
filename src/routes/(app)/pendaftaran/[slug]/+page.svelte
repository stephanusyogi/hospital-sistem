<script>
  import { onMount, tick } from "svelte";
  import { page } from "$app/stores";
  import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Checkbox,
    Input,
    Label,
    Radio,
    Search,
    Select,
    Textarea,
  } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import JsBarcode from "jsbarcode";
  import Swal from "sweetalert2";
  import axios from 'axios';
  
  /** @type {import('./$types').PageData} */
  export let data;
  /** @type {import('./$types').ActionData} */
  export let form;

  const no_rm = $page.params.slug;
  const qrCodeUrl = $page.url.origin + "/rekam-medis/" + no_rm;

  let selectedJenisKelaminPasien
  let selectedHubunganPasien
  let selectedAgamaPasien
  let agamaPasien = [
    { value: "Islam", name: "Islam" },
    { value: "Katolik", name: "Katolik" },
    { value: "Protestan", name: "Protestan" },
    { value: "Hindu", name: "Hindu" },
    { value: "Buddha", name: "Buddha" },
    { value: "Lain-Lain", name: "Lain-Lain" },
  ];

  let dpjpUtama = [];
  let kamar = [];

  let asalRujukan = [
    { value: "Poliklinik", name: "Poliklinik" },
    { value: "Rumah Sakit Swasta", name: "Rumah Sakit Swasta" },
    { value: "Puskesmas", name: "Puskesmas" },
  ];

  let selectedUnit;
  const onChangeUnit = (event) => {
    selectedUnit = event.currentTarget.value;
  };

  let selectedAsalRujukan;
  const onChangeAsalRujukan = (event) => {
    selectedAsalRujukan = event.currentTarget.value;
  };

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: "Simpan & Perbarui Data Pasien?",
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

  const handleKembali = () => {
    Swal.fire({
      title: "Kembali ke Admisi Rawat Inap?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Kembali",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto("/pendaftaran/admisi-rawat-inap");
      }
    });
  };

  let termICD10
  let searchResultICD10
  let timeoutICD10;
  let openICD10SearchModal = false
  const searchICD10 = (e) => {
    clearTimeout(timeoutICD10); // Menghapus timeout sebelumnya
    openICD10SearchModal = true

    timeoutICD10 = setTimeout( async () => {
      const termICD10 = e.target.value;
      
      const headers = {
        'Accept': '*/*',
        'Authorization': 'Bearer '+ data.user_data.token
      };
      const formDataICD10 = new FormData();
      formDataICD10.append('terms', termICD10);

      const response = await axios.post(data.api_base+'/icd-10', formDataICD10 , { headers });
      searchResultICD10 = response.data.data;

    }, 500);
  }
  let diagnosaSementara = [];
  const handleICD10 = (kode, desc) => {
    openICD10SearchModal = false
    termICD10 = ''
    diagnosaSementara = [
      ...diagnosaSementara,
      {
        kode: kode,
        desc: desc,
      },
    ];
  }
  function deleteDiagnosa(index) {
    diagnosaSementara = diagnosaSementara.filter((_, i) => i !== index);
  }


  let termICD9
  let searchResultICD9
  let timeoutICD9;
  let openICD9SearchModal = false
  const searchICD9 = (e) => {
    clearTimeout(timeoutICD10);
    openICD9SearchModal = true

    timeoutICD9 = setTimeout( async () => {
      const termICD9 = e.target.value;
      
      const headers = {
        'Accept': '*/*',
        'Authorization': 'Bearer '+ data.user_data.token
      };
      const formDataICD9 = new FormData();
      formDataICD9.append('terms', termICD9);

      const response = await axios.post(data.api_base+'/icd-9', formDataICD9 , { headers });
      searchResultICD9 = response.data.data;

    }, 500);
  }
  let tindakan = [];
  const handleICD9 = (kode, desc) => {
    openICD9SearchModal = false
    termICD9 = ''
    tindakan = [
      ...tindakan,
      {
        kode: kode,
        desc: desc,
      },
    ];
  }
  function deleteTindakan(index) {
    tindakan = tindakan.filter((_, i) => i !== index);
  }

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

    if(data){
      selectedAgamaPasien = data.patient.agama
      selectedJenisKelaminPasien = data.patient.jenis_kelamin
      selectedHubunganPasien = data.informasi_pasien.hubungan_dengan_pasien
      
      // Load Data Dokter
      data.dokter.forEach((item) => {
        dpjpUtama.push({
          value: item._id,
          name: `${item.name} - ${item.spesialis}`,
        });
      });

      // Load Data Kamar
      data.room.forEach((item) => {
        kamar.push({
          value: item._id,
          name: `Kamar ${item.nama_ruangan} - Kelas ${item.kelas} - Rp. ${item.harga}`,
        });
      });
    }
    
    if (form?.error) {
      Swal.fire({
        text: form.message,
        icon: 'error',
        showConfirmButton: false,
        timer: 3000,
      });
    }
  });
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb
    class="mt-10 overflow-x-auto"
    aria-label="Solid background breadcrumb example"
    solid>
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      href="/"
      home>Dashboard</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Pendaftaran Rawat Inap</BreadcrumbItem
    >
    <BreadcrumbItem
      spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
      >Pemeriksaan Awal</BreadcrumbItem
    >
  </Breadcrumb>
  <section class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
    <form id="form" on:submit|preventDefault={() => handleSubmit(no_rm)} method="POST">
      <div class="flex flex-wrap justify-center lg:justify-between items-center gap-4">
        <div class="grid grid-cols-2 gap-1">
          <p class="text-lg sm:text-xl md:text-2xl font-semibold col-span-2">
            Formulir Pemeriksaan Awal Pasien Rawat Inap
          </p>
          <p class="text-red-500 text-xs lg:text-sm">(*) Wajib diisi.</p>
          <div class="flex flex-wrap gap-2 items-center col-span-2">
            <Button
              class="w-fit text-sm sm:text-md lg:text-md"
              type="submit"
              color="green">Daftarkan Pasien Rawat Inap</Button
            >
            <Button
              class="w-fit lg:order-first text-sm sm:text-md lg:text-md"
              on:click={handleKembali}
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
      <hr class="my-5" />
      <div class="flex flex-wrap lg:flex-nowrap gap-6">
        <div class="border border-slate-300 rounded p-4 w-full">
          <p class="text-xl font-semibold">Data Pemeriksaan</p>
          <hr class="my-2" />
          <div class="mb-2">
            <p class="text-md sm:text-lg font-medium italic">
              Cara Kedatangan Pasien
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div class="grid grid-cols-2 gap-4 py-2">
                <div class="grouphelperPagination col-span-2">
                  <Label for="" class="block mb-2"
                    >Unit Penerima: <span class="text-red-500 text-lg">*</span
                    ></Label
                  >
                  <div class="flex gap-2">
                    <Radio
                      required
                      name="unit_penerima"
                      checked={selectedUnit === "IGD"}
                      on:change={onChangeUnit}
                      value="IGD">IGD</Radio
                    >
                    <Radio
                      required                        
                      name="unit_penerima"
                      checked={selectedUnit === "Poliklinik"}
                      on:change={onChangeUnit}
                      value="Poliklinik">Poliklinik</Radio
                    >
                  </div>
                </div>
                {#if selectedUnit === "Poliklinik"}
                  <div class="grouphelperPagination col-span-2">
                    <Label
                      >Poliklinik: <span class="text-red-500 text-lg">*</span>
                      <Input
                        required
                        name="poliklinik_penerima"
                        placeholder="Masukkan Poliklinik"
                      />
                    </Label>
                  </div>
                {/if}
              </div>
              <div class="grid grid-cols-2 gap-4 py-2">
                <div class="grouphelperPagination col-span-2">
                  <Label for="" class="block mb-2"
                    >Asal Rujukan: <span class="text-red-500 text-lg">*</span
                    ></Label
                  >
                  <div class="flex gap-2">
                    <Radio
                      required
                      name="asal_rujukan"
                      checked={selectedAsalRujukan === "Datang Sendiri"}
                      on:change={onChangeAsalRujukan}
                      value="Datang Sendiri">Datang Sendiri</Radio
                    >
                    <Radio
                      required
                      name="asal_rujukan"
                      checked={selectedAsalRujukan === "Rujukan"}
                      on:change={onChangeAsalRujukan}
                      value="Rujukan">Rujukan</Radio
                    >
                  </div>
                </div>
                {#if selectedAsalRujukan === "Rujukan"}
                  <div class="grouphelperPagination col-span-2">
                    <Label
                      >Unit Asal Rujukan: <span class="text-red-500 text-lg"
                        >*</span
                      >
                      <Select
                        required
                        name="unit_asal_rujukan"
                        class="mt-2"
                        items={asalRujukan}
                      />
                    </Label>
                  </div>
                {/if}
              </div>
            </div>
            <div class="group mb-4" />
          </div>
          <div class="mb-2">
            <p class="text-md sm:text-lg font-medium italic">
              Diagnosa & Tindakan
            </p>
            <div class="grid grid-cols-2 gap-4 py-2">
              <div class="col-span-2 grouphelperPagination mb-4">
                <Label
                  >DPJP: <span class="text-red-500 text-lg">*</span>
                  <Select name="id_dpjp" class="mt-2" items={dpjpUtama} />
                </Label>
              </div>
              <div class="grouphelperPagination relative col-span-2 flex gap-4">
                <div class="relative w-full">
                  <div class="flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 left-0 pl-2.5 pointer-events-none">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input on:input={searchICD10} bind:value={termICD10} placeholder="ICD-10 Koding Search" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 pl-10 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg" type="search">
                </div>
                {#if openICD10SearchModal && termICD10 !== ''}
                  <div class="absolute mt-10 w-full h-60 overflow-y-scroll rounded-md border bg-gray-100 shadow z-50">
                    {#if searchResultICD10}
                      {#each searchResultICD10 as tag, i}
                        <a href="?searchICD-10" on:click|preventDefault={()=>{handleICD10(searchResultICD10[i][0], searchResultICD10[i][1])}}>
                          <div class="cursor-pointer py-2 px-3 hover:bg-slate-200">
                            <p class="text-sm font-medium text-gray-600">{searchResultICD10[i][0]}</p>
                            <p class="text-sm text-gray-500">{searchResultICD10[i][1]}</p>
                          </div>
                        </a>
                      {/each}
                    {:else}
                      <div class="text-center p-6">
                        <p class="text-sm font-medium text-gray-600">Silahkan Ketik Kata Kunci...</p>
                      </div>
                    {/if}
                  </div>
                {/if}
              </div>
              <div class="grouphelperPagination col-span-2">
                {#each diagnosaSementara as tag, i}
                  <div class="flex flex-wrap sm:flex-nowrap gap-4 py-2">
                    <Input
                      name="kodeICD10[]"
                      placeholder="Kode ICD-10"
                      bind:value={diagnosaSementara[i].kode}
                    />
                    <Input
                      name="descICD10[]"
                      placeholder="Diagnosa Sementara"
                      bind:value={diagnosaSementara[i].desc}
                    />
                    <Button
                      on:click={() => deleteDiagnosa(i)}
                      class="w-full sm:w-24"
                      size="xs"
                      color="red"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="20"
                        viewBox="0 0 24 24"
                        ><path
                          fill="currentColor"
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
                        /></svg
                      ></Button
                    >
                  </div>
                {/each}
              </div>
              <div class="grouphelperPagination relative col-span-2 flex gap-4">
                <div class="relative w-full">
                  <div class="flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 left-0 pl-2.5 pointer-events-none">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                  </div>
                  <input on:input={searchICD9} bind:value={termICD9} placeholder="ICD-9 Koding Search" class="block w-full disabled:cursor-not-allowed disabled:opacity-50 pl-10 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-2.5 text-sm rounded-lg" type="search">
                </div>
                {#if openICD9SearchModal && termICD9 !== ''}
                  <div class="absolute mt-10 w-full h-60 overflow-y-scroll rounded-md border bg-gray-100 shadow z-50">
                    {#if searchResultICD9}
                      {#each searchResultICD9 as tag, i}
                        <a href="?searchICD-9" on:click|preventDefault={()=>{handleICD9(searchResultICD9[i][0], searchResultICD9[i][1])}}>
                          <div class="cursor-pointer py-2 px-3 hover:bg-slate-200">
                            <p class="text-sm font-medium text-gray-600">{searchResultICD9[i][0]}</p>
                            <p class="text-sm text-gray-500">{searchResultICD9[i][1]}</p>
                          </div>
                        </a>
                      {/each}
                    {:else}
                      <div class="text-center p-6">
                        <p class="text-sm font-medium text-gray-600">Silahkan Ketik Kata Kunci...</p>
                      </div>
                    {/if}
                  </div>
                {/if}
              </div>
              <div class="grouphelperPagination col-span-2">
                {#each tindakan as tag, i}
                  <div class="flex flex-wrap sm:flex-nowrap gap-4 py-2">
                    <Input
                      name="kodeICD9[]"
                      placeholder="Kode ICD-9"
                      bind:value={tindakan[i].kode}
                    />
                    <Input
                      name="descICD9[]"
                      placeholder="Prosedur / Tindakan"
                      bind:value={tindakan[i].desc}
                    />
                    <Button
                      on:click={() => deleteTindakan(i)}
                      class="w-full sm:w-24"
                      size="xs"
                      color="red"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="20"
                        viewBox="0 0 24 24"
                        ><path
                          fill="currentColor"
                          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
                        /></svg
                      ></Button
                    >
                  </div>
                {/each}
              </div>
            </div>
          </div>
          <div class="mb-2">
            <p class="text-md sm:text-lg font-medium italic">Ruangan</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div class="grouphelperPagination sm:col-span-2">
                <Label
                  >Kamar: <span class="text-red-500 text-lg">*</span>
                  <Select
                    name="id_kamar"
                    class="mt-2"
                    items={kamar}
                  />
                </Label>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-slate-300 rounded p-4 w-full lg:order-first">
          <p class="text-xl font-semibold">Biodata Pasien</p>
          <hr class="my-2" />
          <div class="mb-2">
            <p class="text-lg font-medium italic">Identitas</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Nomor Rekam Medis: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  id="no_rekam_medis"
                  name="no_rekam_medis"
                  placeholder="Masukkan nomor rekam medis pasien"
                  value={data?.patient.no_rekam_medis ?? ''}
                />
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Nama Lengkap Pasien: <span class="text-red-500 text-lg"
                    >*</span
                  ></Label
                >
                <Input
                  disabled
                  id="name"
                  name="name"
                  placeholder="Masukkan nama lengkap pasien"
                  value={data?.patient.name ?? ''}
                />
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Umur: <span class="text-red-500 text-lg">*</span></Label
                >
                <Input
                  disabled
                  id="umur"
                  name="umur"
                  placeholder="Masukkan umur pasien"
                  value={data?.patient.umur ?? ''}
                />
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Jenis Kelamin: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <div class="flex gap-2">
                  <Radio checked={selectedJenisKelaminPasien === 'Laki-Laki' ? true : false } id="jenis_kelamin" name="jenis_kelamin" disabled value="Laki-Laki">Laki-Laki</Radio
                  >
                  <Radio checked={selectedJenisKelaminPasien === 'Perempuan' ? true : false } name="jenis_kelamin" disabled value="Perempuan">Perempuan</Radio
                  >
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
                    disabled
                    id="tempat_lahir"
                    name="tempat_lahir"
                    value={data?.patient.tempat_lahir ?? ''}
                    placeholder="Masukkan tempat"
                  />
                  <Input disabled id="tanggal_lahir" name="tanggal_lahir" type="date" value={data?.patient.tanggal_lahir ?? ''}/>
                </div>
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  id="no_hp"
                  name="no_hp"
                  value={data?.patient.no_hp ?? ''}
                  placeholder="Masukkan nomor telepon / HP pasien"
                />
              </div>
              <div class="grouphelperPagination">
                <Label for="">Agama: <span class="text-red-500 text-lg">*</span>
                  <Select disabled id="agama" name="agama" class="mt-2" items={agamaPasien} bind:value={selectedAgamaPasien}/>
                </Label>
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Alamat KTP: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  name="alamat_ktp"
                  id="alamat_ktp"
                  value={data?.patient.alamat_ktp ?? ''}
                  placeholder="Masukkan alamat tempat tinggal pasien"
                />
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Alamat Domisili Tempat Tinggal: <span
                    class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  value={data?.patient.alamat_domisili ?? ''}
                  name="alamat_domisili"
                  id="alamat_domisili"
                  placeholder="Masukkan alamat sesuai ktp pasien"
                />
                <Checkbox checked>Alamat domisili sama dengan KTP</Checkbox>
              </div>
            </div>
          </div>
          <div class="mb-2">
            <p class="text-lg font-medium italic">Identitas Penanggung Jawab</p>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 mb-2 border-b"
            >
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Penanggung Jawab: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  id="nama_penanggungjawab"
                  name="nama_penanggungjawab"
                  value={data?.informasi_pasien.nama_penanggungjawab ?? ''}
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
                  <Radio checked={selectedHubunganPasien === 'Orang Tua' ? true : false} disabled name="hubungan_dengan_pasien" value="Orang Tua"
                    >Orang Tua</Radio
                  >
                  <Radio checked={selectedHubunganPasien === 'Anak' ? true : false} disabled name="hubungan_dengan_pasien" value="Anak">Anak</Radio>
                  <Radio checked={selectedHubunganPasien === 'Suami/Istri' ? true : false} disabled name="hubungan_dengan_pasien" value="Suami/Istri"
                    >Suami/Istri</Radio
                  >
                  <Radio checked={selectedHubunganPasien === 'Keluarga' ? true : false} disabled name="hubungan_dengan_pasien" value="Keluarga"
                    >Keluarga</Radio
                  >
                  <Radio checked={selectedHubunganPasien === 'Teman' ? true : false} disabled name="hubungan_dengan_pasien" value="Teman">Teman</Radio>
                  <Radio checked={selectedHubunganPasien === 'Lain-Lain' ? true : false} disabled name="hubungan_dengan_pasien" value="Lain-Lain"
                    >Lain-Lain</Radio
                  >
                </div>
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Alamat KTP: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  name="alamat_ktp_penanggungjawab"
                  id="alamat_ktp_penanggungjawab"
                  value={data?.informasi_pasien.alamat_ktp_penanggungjawab ?? ''}
                  placeholder="Masukkan nama penanggung jawab pasien"
                />
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Alamat Tempat Tinggal: <span class="text-red-500 text-lg"
                    >*</span
                  ></Label
                >
                <Input
                  disabled
                  name="alamat_domisili_penanggungjawab"
                  id="alamat_domisili_penanggungjawab"
                  value={data?.informasi_pasien.alamat_domisili_penanggungjawab ?? ''}
                  placeholder="Masukkan alamat tempat tinggal penanggung jawab pasien"
                />
                <Checkbox disabled checked={data?.informasi_pasien.alamat_domisili_penanggungjawab === data?.informasi_pasien.alamat_ktp_penanggungjawab ? true : false}>Alamat domisili sama dengan KTP</Checkbox>
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Nomor Telepon/HP: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  id="no_hp_penanggungjawab"
                  name="no_hp_penanggungjawab"
                  value={data?.informasi_pasien.no_hp_penanggungjawab ?? ''}
                  placeholder="Masukkan nomor telepon / HP penanggung jawab pasien"
                />
              </div>
            </div>
          </div>
          <div class="mb-2">
            <p class="text-lg font-medium italic">Asuransi & Pembayaran</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Nama Asuransi: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  id="nama_asuransi"
                  name="nama_asuransi"
                  value={data?.informasi_pasien.nama_asuransi ?? ''}
                  placeholder="Masukkan Nama Asuransi"
                />
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >No Asuransi: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  id="nomor_asuransi"
                  name="nomor_asuransi"
                  value={data?.informasi_pasien.nomor_asuransi ?? ''}
                  placeholder="Masukkan Nomor Asuransi"
                />
              </div>
              <div class="grouphelperPagination">
                <Label for="" class="block mb-2"
                  >Status Asuransi: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <Input
                  disabled
                  id="status_asuransi"
                  name="status_asuransi"
                  value={data?.informasi_pasien.status_asuransi ? 'Peserta Aktif' : 'Peserta Tidak Aktif'}
                  placeholder="Masukkan Status Asuransi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</div>
