<script>

  import { Button, Search } from "flowbite-svelte";
  import User from "./User.svelte";
  let dummyUsers = [
    {
      "no_rm": "000001-2023",
      "nama_pasien": "Jon Snow",
      "jenis_kelamin": "Tn",
      "ttl": "Malang, 04-25-2000",
      "alamat_ktp": "Jl. Pattimura 51 Malang"
    },
    {
      "no_rm": "000256-2023",
      "nama_pasien": "Tyrion Lanister",
      "jenis_kelamin": "Tn",
      "ttl": "Sragen, 02-17-1999",
      "alamat_ktp": "Jl. Kasembon 8B Malang"
    },
    {
      "no_rm": "000523-2023",
      "nama_pasien": "Sansa Stark",
      "jenis_kelamin": "Nn",
      "ttl": "Malang, 08-20-1998",
      "alamat_ktp": "Jl. Jakarta 12 Malang"
    },
    {
      "no_rm": "000526-2023",
      "nama_pasien": "Lyanna Mormont",
      "jenis_kelamin": "Nn",
      "ttl": "Kediri, 07-31-2001",
      "alamat_ktp": "Jl. Pandeglang 234 Malang"
    },
  ];

</script>

<section class="relative py-5">
  <form class="my-10 flex gap-2 px-24">
    <Search size="md" placeholder="Masukkan Nama / Nomor Rekam Medis Pasien"/>
    <Button class="!p-2.5">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    </Button>
  </form>
  <div class="my-10 grid grid-cols-3 gap-4" id="resultSearch">
    {#each dummyUsers as { no_rm, nama_pasien, jenis_kelamin, ttl, alamat_ktp }}
      <User no_rm={no_rm} nama_pasien={nama_pasien} jenis_kelamin={jenis_kelamin} ttl={ttl} alamat_ktp={alamat_ktp}/>
    {/each}
  </div>
  <p class="absolute text-sm bottom-0 right-0">
    *Klik pasien untuk melanjutkan ke pendaftaran rawat inap.
  </p>
</section>