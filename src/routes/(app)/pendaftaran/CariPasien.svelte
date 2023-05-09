<script>
  import { Button, Modal, Search, Skeleton } from "flowbite-svelte";
  import User from "./User.svelte";
  export let resultSearchPasien

  let userCardClass = "my-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-sm flex-col hover:bg-gray-100 dark:hover:bg-gray-700 p-4 sm:p-6 my-4"
  
  let defaultModal = false;
  let showResults = false
  let showClearBtn = false
  let searchResults = []
  let dummyUsers = [
    {
      "no_rm": "000001-2023",
      "nama_pasien": "Jon Snow",
      "pronounce": "Tn",
      "jenis_kelamin": "Laki-Laki",
      "ttl": "Malang, 04-25-2000",
      "alamat_ktp": "Jl. Pattimura 51 Malang"
    },
    {
      "no_rm": "000256-2023",
      "nama_pasien": "Tyrion Lanister",
      "pronounce": "Tn",
      "jenis_kelamin": "Laki-Laki",
      "ttl": "Sragen, 02-17-1999",
      "alamat_ktp": "Jl. Kasembon 8B Malang"
    },
    {
      "no_rm": "000523-2023",
      "nama_pasien": "Sansa Stark",
      "pronounce": "Nn",
      "jenis_kelamin": "Perempuan",
      "ttl": "Malang, 08-20-1998",
      "alamat_ktp": "Jl. Jakarta 12 Malang"
    },
    {
      "no_rm": "000526-2023",
      "nama_pasien": "Lyanna Mormont",
      "pronounce": "Nn",
      "jenis_kelamin": "Perempuan",
      "ttl": "Kediri, 07-31-2001",
      "alamat_ktp": "Jl. Pandeglang 234 Malang"
    },
  ];

  const searchPasien = (e) => {
    let query = e.target.value
    if (query === "") {
      showResults = false
    }else{
      showResults = true
    }
    searchResults = dummyUsers.filter(item => item.nama_pasien.toLowerCase().includes(query.toLowerCase()));
  }

  const handlePilihPasien = (i) => {
    resultSearchPasien = searchResults[i]
    searchResults = []
    defaultModal = false
    showClearBtn = true
  }
  
  const handleClearPasien = () => {
    resultSearchPasien = []
    showClearBtn = false
  }

</script>

<div class="ml-auto">
  <Button color="alternative" on:click={() => defaultModal = true}>
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 12q-1.65 0-2.825-1.175Q7 9.65 7 8q0-1.65 1.175-2.825Q9.35 4 11 4q1.65 0 2.825 1.175Q15 6.35 15 8q0 1.65-1.175 2.825Q12.65 12 11 12Zm11.1 11.5l-3.2-3.2q-.525.3-1.125.5T16.5 21q-1.875 0-3.188-1.312Q12 18.375 12 16.5q0-1.875 1.312-3.188Q14.625 12 16.5 12q1.875 0 3.188 1.312Q21 14.625 21 16.5q0 .675-.2 1.275q-.2.6-.5 1.125l3.2 3.2ZM16.5 19q1.05 0 1.775-.725Q19 17.55 19 16.5q0-1.05-.725-1.775Q17.55 14 16.5 14q-1.05 0-1.775.725Q14 15.45 14 16.5q0 1.05.725 1.775Q15.45 19 16.5 19Zm-5.475-6q-1.05 1.55-1.05 3.5t1.05 3.5H3v-2.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.875-1.1q1.6-.45 3.55-.45Z"/></svg>
    Cari Pasien
  </Button>
  {#if showClearBtn}
    <Button color="red" on:click={handleClearPasien}>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"/></svg>
      Clear Data Pasien
    </Button>
  {/if}
</div>

<Modal title="Pencarian Data Pasien" bind:open={defaultModal} autoclose size="xl">
  <form class=""></form>
  <div class="my-5 flex gap-2">
    <Search size="md" placeholder="Masukkan Nama Pasien" on:input={searchPasien}/>
    <Button class="!p-2.5">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    </Button>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-2" id="pasien-container">
    {#if !showResults}
    <button class={userCardClass}>
      <Skeleton/>
    </button>
    <button class={userCardClass}>
      <Skeleton/>
    </button>
    <button class={userCardClass}>
      <Skeleton/>
    </button>
    <button class={userCardClass}>
      <Skeleton/>
    </button>
    {:else}
      {#each searchResults as { no_rm, nama_pasien, jenis_kelamin, ttl, alamat_ktp, pronounce }, i}
        <button class={userCardClass} on:click={() => handlePilihPasien(i)}>
          <User no_rm={no_rm} nama_pasien={nama_pasien} jenis_kelamin={jenis_kelamin} ttl={ttl} alamat_ktp={alamat_ktp} pronounce={pronounce}/>
        </button>
      {/each}
    {/if}
  </div>
</Modal>