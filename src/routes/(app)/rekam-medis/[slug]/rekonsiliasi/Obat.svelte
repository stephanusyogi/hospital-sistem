<script>
  import Icon from "@iconify/svelte";
  export let _id, resep_non_resep, nama_obat, dosis, kandungan, frekuensi, sumber_obat, tanggal_mulai, tanggal_stop, jumlah_obat_tersisa, status_obat_saat_perawatan, status_obat_saat_pulang, data
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import axios from 'axios';

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Rekonsiliasi Obat?',
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

        await axios.delete(data.api_base+'/rekam-medis/rekonsiliasi/'+id , { headers });
        window.location.reload();
      }
    })
  }
</script>
<tr>
  <td>{resep_non_resep}</td>
  <td>{nama_obat}</td>
  <td>{dosis}</td>
  <td>{kandungan}</td>
  <td>{frekuensi}</td>
  <td>{sumber_obat}</td>
  <td>{tanggal_mulai}</td>
  <td>{tanggal_stop}</td>
  <td>{jumlah_obat_tersisa}</td>
  <td>
    {#if status_obat_saat_perawatan === "Tunda" }
      <Button size="sm" color="yellow">Tunda</Button>
    {:else if status_obat_saat_perawatan === "Lanjut"}
      <Button size="sm" color="green">Lanjut</Button>
    {:else}
      <Button size="sm" color="red">Henti</Button>
    {/if}
  </td>
  <td>
    {#if status_obat_saat_pulang === "Tunda" }
      <Button size="sm" color="yellow">Tunda</Button>
    {:else if status_obat_saat_pulang === "Lanjut"}
      <Button size="sm" color="green">Lanjut</Button>
    {:else}
      <Button size="sm" color="red">Henti</Button>
    {/if}
  </td>
  <td>
    <div class="flex flex-wrap justify-center gap-2">
      <button on:click={()=>handleDelete(_id)} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
    </div>
  </td>
</tr>