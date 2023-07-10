<script>
  import Icon from "@iconify/svelte";
  export let _id, name, role, email, data
  import { Button, Input, Label, Modal, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import Swal from "sweetalert2";
  import axios from "axios";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Apoteker?',
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

        await axios.delete(data.api_base+'/nurse/'+id , { headers });
        window.location.reload();
      }
    })
  }
  
  let updateModal = false;
  
  async function handleUpdate(e){
    const formData = new FormData(e.target)

    const config = {
      headers: {
        'Accept': '*/*',
        'Authorization': 'Bearer '+data.user_data.token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    const updatedData = {
      name: formData.get('name'), 
      email: formData.get('email')
    }

    if(formData.get('password')){
      await axios.put(data.api_base+'/nurse/update-password/'+_id, {newPassword:formData.get('password')}, config)    
    }

    await axios.put(data.api_base+'/nurse/'+_id, updatedData, config)
    window.location.reload()
  }
</script>
<tr>
  <td>{name}</td>
  <td>{role}</td>
  <td>{email}</td>
  <td>
    <div class="flex flex-wrap justify-center gap-2">
      <button on:click={() => updateModal = true} class="text-blue-600 hover:underline dark:text-blue-500"><Icon icon="material-symbols:edit" width="25" height="25"/></button>
      <button on:click={()=>handleDelete(_id)} class="text-red-600 hover:underline dark:text-red-500"><Icon icon="ic:baseline-delete"  width="25" height="25"/></button>
    </div>
  </td>
</tr>

<Modal title="Update" bind:open={updateModal} autoclose={false}>
  <form on:submit|preventDefault={handleUpdate}>
    <div class="flex flex-wrap gap-2">
      <div class="my-2">
        <Label for="name" class="mb-2">Nama</Label>
        <Input type="text" id="name" name="name"  required  bind:value={name}/>
      </div>
      <div class="my-2">
        <Label for="email" class="mb-2">Email</Label>
        <Input type="email" id="email" name="email" required bind:value={email}/>
      </div>
      <div class="my-2">
        <Label for="password" class="mb-2">Ubah Password</Label>
        <Input type="password" id="password" name="password"/>
      </div>
    </div>
    <div class="flex justify-end my-2">
      <Button type="submit">Simpan</Button>
    </div>
  </form>
</Modal>