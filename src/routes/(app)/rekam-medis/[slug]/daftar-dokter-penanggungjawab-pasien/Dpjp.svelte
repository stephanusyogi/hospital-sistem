<script>
  import Icon from "@iconify/svelte";
  export let _id, nama_dokter, spesialis, tgl_mulai, tgl_selesai, status_dpjp, data
  import Swal from 'sweetalert2';
  import axios from 'axios';
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Dokter Penanggung Jawab Pasien?',
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

        await axios.delete(data.api_base+'/rekam-medis/dpjp/'+id , { headers });
        window.location.reload();
      }
    })
  }
</script>
<tr>
  <td>{nama_dokter}</td>
  <td>{spesialis}</td>
  <td>{tgl_mulai}</td>
  <td>{tgl_selesai}</td>
  <td>{status_dpjp}</td>
  <td><button on:click={()=>handleDelete(_id)} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
  </td>
</tr>