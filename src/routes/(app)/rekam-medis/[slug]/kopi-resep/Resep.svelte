<script>
  import Icon from "@iconify/svelte";
  export let uraian, createdAt, file_dir, _id, data
  import Swal from "sweetalert2";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import axios from 'axios';

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  const no_rm = $page.params.slug;
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Kopi Resep?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Hapus',
      denyButtonText: `Batal`,
    }).then(async(result) => {
      if (result.isConfirmed) {
        const headers = {
          'Accept': '*/*',
          'Authorization': 'Bearer '+ data.user_data.token
        };

        await axios.delete(data.api_base+'/rekam-medis/kopi-resep/'+id , { headers });
        window.location.reload();
      }
    })
  }
  const datetimeString = createdAt;
  const datetime = new Date(datetimeString);

  const options = {
    weekday: 'long', // Menampilkan nama hari secara lengkap (Misal: Senin)
    day: '2-digit',  // Menampilkan tanggal dengan 2 digit (Misal: 02)
    month: '2-digit', // Menampilkan bulan dengan 2 digit (Misal: 06)
    year: 'numeric', // Menampilkan tahun secara lengkap (Misal: 2023)
    hour: 'numeric', // Menampilkan jam (Misal: 15)
    minute: 'numeric', // Menampilkan menit (Misal: 30)
    hour12: false, // Menggunakan format 24 jam (Misal: 15.30)
  };

  const formatter = new Intl.DateTimeFormat('id-ID', options);
  const formattedDateTime = formatter.format(datetime);

  const day = formattedDateTime.split(',')[0]; // Mendapatkan nama hari
  const date = formattedDateTime.split(',')[1].trim(); // Mendapatkan tanggal

  const dateTimeParts = formattedDateTime.split(", ");
  const timeString = dateTimeParts[2];
  const formattedTimeWithPkl = `Pkl. ${timeString}`; // Menambahkan "Pkl." di depan nilai jam

  const formattedDateTimeWithPkl = `${day}, ${date} ${formattedTimeWithPkl}`;
</script>

<div class="border p-10 my-2 text-sm relative">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
    <p class="font-medium">Uraian:</p>
    <p class="font-light sm:text-right">{uraian}</p>
  </div>
  <hr class="my-2">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
    <p class="font-medium">File Scan:</p>
    <p class="font-light sm:text-right"><a href={file_dir} target="_blank" rel="noopener noreferrer">Lihat File</a></p>
  </div>
  <hr class="my-2">
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
    <p class="font-medium">Created At:</p>
    <p class="font-light sm:text-right">{formattedDateTimeWithPkl}</p>
  </div>
  <div class="absolute right-2 top-2">
    <button on:click={()=>handleDelete(_id)} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="30" height="30"/></button>
  </div>
</div>