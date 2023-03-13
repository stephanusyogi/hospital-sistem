<script>
  export let no_rm, nama_pasien, pronounce, ttl, alamat_ktp, jenis_kelamin;

</script>

<p class="font-bold text-right text-gray-700 dark:text-gray-400 leading-tight">No. RM: {no_rm}</p>
<hr class="my-2 border-gray-800">
<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  <span class="font-semibold">Nama Lengkap</span>: {nama_pasien} <span class="italic">, {pronounce}.</span>
</p>
<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  <span class="font-semibold">Jenis Kelamin</span>: {jenis_kelamin}
</p>
<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  <span class="font-semibold">TTL</span>: {ttl}
</p>
<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  <span class="font-semibold">Alamat</span>: {alamat_ktp}
</p>