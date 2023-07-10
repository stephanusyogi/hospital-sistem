<script>
  import Icon from "@iconify/svelte";
  import { Button, Modal, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import axios from 'axios';

  export let _id, no_rekam_medis, nama_pasien, ruangan, asuransi, keterangan_perawat, tgl_mulai, tgl_selesai, data

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  
  const handleVerifikasi = (id) => {
    Swal.fire({
      title: 'Setujui Ajuan DPJP?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Ya, Saya Bersedia',
      denyButtonText: `Tidak, Saya Tidak Bersedia`,
    }).then(async(result) => {
      if (result.isConfirmed) {
        const headers = {
          'Accept': '*/*',
          'Authorization': 'Bearer '+ data.user_data.token
        };
        const updatedData = {
          status_permintaan: 'Disetujui'
        }

        await axios.put(data.api_base+'/rekam-medis/dpjp/'+id , updatedData, { headers });
        window.location.reload();
      } else if (result.isDenied) {
        const headers = {
          'Accept': '*/*',
          'Authorization': 'Bearer '+ data.user_data.token
        };

        const updatedData = {
          status_permintaan: 'Ditolak'
        }

        await axios.put(data.api_base+'/rekam-medis/dpjp/'+id , updatedData, { headers });
        window.location.reload();
      }
    })
  }
</script>

<tr>
  <td>
    <Button class="w-fit my-2" color="green" on:click={handleVerifikasi(_id)}>Verifikasi</Button>
  </td>
  <td>{no_rekam_medis}</td>
  <td>{nama_pasien}</td>
  <td>{ruangan}</td>
  <td>{asuransi}</td>
  <td>{keterangan_perawat}</td>
  <td>{tgl_selesai}</td>
  <td>{tgl_mulai}</td>
</tr>  