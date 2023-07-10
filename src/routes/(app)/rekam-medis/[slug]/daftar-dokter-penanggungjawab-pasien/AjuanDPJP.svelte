<script>
  import Icon from "@iconify/svelte";
  export let _id, status_permintaan, nama_dokter, keterangan_perawat, keterangan_permintaan, atas_permintaan_pasien, data, spesialis
  import { Button, Modal, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import axios from 'axios';

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  let keteranganModal = false;
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Batalkan Ajuan Permintaaan?',
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
  <td>
    {#if status_permintaan == "Pending"}
      <Button color="yellow" size="sm">Pending</Button>
    {:else if status_permintaan == "Disetujui"}
      <div class="flex flex-wrap justify-center gap-2">
        <Button color="green" size="sm">Disetujui</Button>
        <Button on:click={() => keteranganModal = true} size="sm">Keterangan Dokter</Button>
      </div>
    {:else}
      <div class="flex flex-wrap justify-center gap-2">
        <Button color="red" size="sm">Ditolak</Button>
        <Button on:click={() => keteranganModal = true} size="sm">Keterangan Dokter</Button>
      </div>
    {/if}
  </td>
  <td>{nama_dokter} - {spesialis}</td>
  <td>{keterangan_perawat}</td>
  <td>
    {#if atas_permintaan_pasien}
      <Icon icon="material-symbols:check" class="mx-auto"/>
    {:else}
      -
    {/if}
  </td>
  <td>
    <div class="flex flex-wrap justify-center gap-2">
      <button on:click={()=>handleDelete(_id)} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
    </div>
  </td>
</tr>

<Modal title="Keterangan Dokter" bind:open={keteranganModal} autoclose size="sm">
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    {keterangan_permintaan}
  </p>
</Modal>