<script>
  import {
    Button,
    Input,
    Label,
    Radio,
    Search,
    Select,
    Textarea,
  } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import axios from 'axios';

  /** @type {import('./$types').PageData} */
  export let data;
  /** @type {import('./$types').ActionData} */
  export let form;

  const no_rm = $page.params.slug;
  const id_pemeriksaan_awal = $page.params.id_pemeriksaan_awal;

  let selectedkamar
  let kamar = [];

  let selectedUnitRujukan
  let unitRujukan = [
    { value: "Poliklinik", name: "Poliklinik" },
    { value: "Rumah Sakit Swasta", name: "Rumah Sakit Swasta" },
    { value: "Puskesmas", name: "Puskesmas" },
  ];

  let selecteddpjp
  let dpjpUtama = [];

  let selectedUnit;
  const onChangeUnit = (event) => {
    selectedUnit = event.currentTarget.value;
  };

  let selectedAsalRujukan;
  const onChangeAsalRujukan = (event) => {
    selectedAsalRujukan = event.currentTarget.value;
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

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: "Simpan & Perbarui Pemeriksaan Awal?",
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
      selectedUnit = data.pemeriksaan_awal.unit_penerima
      selectedAsalRujukan = data.pemeriksaan_awal.asal_rujukan
      selectedUnitRujukan = data.pemeriksaan_awal.unit_asal_rujukan
      
      diagnosaSementara = data.pemeriksaan_awal.icd_10
      tindakan = data.pemeriksaan_awal.icd_9

      selecteddpjp = data.pemeriksaan_awal.id_dokter
      // Load Data Dokter
      data.dokter.forEach((item) => {
        dpjpUtama.push({
          value: item._id,
          name: `${item.name} - ${item.spesialis}`,
        });
      })
      console.log(data)
      console.log(dpjpUtama)

      selectedkamar = data.pemeriksaan_awal.id_kamar
      // Load Data Kamar
      data.room.forEach((item) => {
        kamar.push({
          value: item._id,
          name: `Kamar ${item.nama_ruangan} - Kelas ${item.kelas} - Rp. ${item.harga}`,
        });
      });
    }
  })
</script>

<main>
  <form id="form" on:submit|preventDefault={() => handleSubmit(no_rm)} method="post">
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">
          Pemeriksaan Awal
        </p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" size="sm" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5" />
    <div class="overflow-y-auto max-h-screen">
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
                    name="unit_penerima"
                    checked={selectedUnit === "IGD"}
                    on:change={onChangeUnit}
                    value="IGD">IGD</Radio
                  >
                  <Radio
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
                      value={data?.pemeriksaan_awal.poliklinik_penerima}
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
                    name="asal_rujukan"
                    checked={selectedAsalRujukan === "Datang Sendiri"}
                    on:change={onChangeAsalRujukan}
                    value="Datang Sendiri">Datang Sendiri</Radio
                  >
                  <Radio
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
                      name="unit_asal_rujukan"
                      class="mt-2"
                      items={unitRujukan}
                      bind:value={selectedUnitRujukan}
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
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div class="col-span-2 grouphelperPagination">
              <Label
                >DPJP: <span class="text-red-500 text-lg">*</span>
                <Select name="id_dpjp" class="mt-2" items={dpjpUtama} bind:value={selecteddpjp}/>
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
                  value={selectedkamar}
                />
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</main>
