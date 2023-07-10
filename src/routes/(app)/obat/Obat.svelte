<script>
  import Icon from "@iconify/svelte";
  export let _id, nama_obat, harga, data
  import { Button, Input, Label, Modal, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import axios from "axios";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Obat?',
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

        await axios.delete(data.api_base+'/drug/'+id , { headers });
        window.location.reload();
      }
    })
  }

  let updateModal = false;
  
  async function handleUpdate(e){
    const formData = new FormData(e.target)
    const user_cookies = data.user_data

    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+user_cookies.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    const updatedData = {
      nama_ruangan: formData.get('nama_ruangan'), 
      kelas: formData.get('kelas'), 
      harga: formData.get('harga')
    }

    await axios.put(data.api_base+'/drug/'+_id, updatedData, config)
    window.location.reload()
  }
</script>
<tr>
  <td>{nama_obat}</td>
  <td>Rp. {harga}</td>
  <td>
    {#if data.user_data.role === "Apoteker"}
      <div class="flex flex-wrap justify-center gap-2">
        <button on:click={() => updateModal = true} class="text-blue-600 hover:underline dark:text-blue-500"><Icon icon="material-symbols:edit" width="25" height="25"/></button>
        <button on:click={()=>handleDelete(_id)} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
      </div>
    {/if}
  </td>
</tr>

<Modal title="Update" bind:open={updateModal} autoclose={false}>
  <form on:submit|preventDefault={handleUpdate}>
    <div class="flex flex-wrap gap-2">
      <div class="my-2">
        <Label for="nama_obat" class="mb-2">Nama Obat</Label>
        <Input type="text" id="nama_obat" name="nama_obat"  required  bind:value={nama_obat}/>
      </div>
      <div class="my-2">
        <Label for="harga" class="mb-2">Harga Obat</Label>
        <Input type="number" id="harga" name="harga" required bind:value={harga}/>
      </div>
    </div>
    <div class="flex justify-end my-2">
      <Button type="submit">Simpan</Button>
    </div>
  </form>
</Modal>