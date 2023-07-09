<script>
  export let _id, createdAt, catatan, perawat, data
  import Swal from 'sweetalert2';
  import axios from 'axios';
  import Icon from '@iconify/svelte';
  import { Button } from 'flowbite-svelte';
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Catatan?',
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

        await axios.delete(data.api_base+'/rekam-medis/catatan-keperawatan/'+id , { headers });
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
<tr>
  <td>{formattedDateTimeWithPkl}</td>
  <td>{catatan}</td>
  <td>{perawat}</td>
  <td>
    <button on:click={()=>handleDelete(_id)} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="30" height="30"/></button>
  </td>
</tr>