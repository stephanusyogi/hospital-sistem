<script>

  import { Button, Label, Modal, Radio, TableBodyCell, TableBodyRow, Textarea } from "flowbite-svelte";
  export let tgl_jam, farmasi, perawat,pasien ,rotd,catatan
  import Swal from "sweetalert2";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"
  let modalEdit = false;
  
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Hapus Frekuensi Obat?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Hapus',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Frekuensi Obat Berhasil Dihapus',
          showConfirmButton: false,
          timer: 1000
        })
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Aksi Dibatalkan',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }

  const handleSubmit = () => {
    Swal.fire({
      title: 'Update Frekuensi Obat Pasien?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Update',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Frekuensi Obat Berhasil Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>modalEdit = false)
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Aksi Dibatalkan',
          showConfirmButton: false,
          timer: 1000
        })
      }
    })
  }
</script>
<TableBodyRow>
  <TableBodyCell {tdClass}>{tgl_jam}</TableBodyCell>
  <TableBodyCell {tdClass}>{farmasi}</TableBodyCell>
  <TableBodyCell {tdClass}>{perawat}</TableBodyCell>
  <TableBodyCell {tdClass}>{pasien}</TableBodyCell>
  <TableBodyCell {tdClass}>{(rotd) ? "Ada" : "Tidak Ada"}</TableBodyCell>
  <TableBodyCell {tdClass}>{catatan}</TableBodyCell>
  <TableBodyCell {tdClass}>
    <div class="flex flex-col gap-6">
      <Button size="xs" color="yellow" on:click={() => modalEdit = true}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></Button>
      <Button size="xs" color="red" on:click={()=>handleDelete("1")}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M224 56a8 8 0 0 1-8 8h-8v144a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64h-8a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM88 32h80a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16Z"/></svg></Button>
    </div>
  </TableBodyCell>
</TableBodyRow>

<Modal bind:open={modalEdit} size="md" autoclose={false} class="w-full">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="grid grid-cols-2 gap-6">
      <Label class="space-y-2">
        <span>Farmasi</span>
        <Textarea id="" name=""/>
      </Label>
      <Label class="space-y-2">
        <span>Perawat</span>
        <Textarea id="" name=""/>
      </Label>
      <Label class="space-y-2">
        <span>Pasien</span>
        <Textarea id="" name=""/>
      </Label>
      <Label class="space-y-2">
        <span>ROTD (Reaksi Obat yang Tidak Diharapkan)</span>
        <Radio name="rotd">Ada</Radio>
        <Radio name="rotd">Tidak Ada</Radio>
      </Label>
      <Label class="space-y-2 col-span-2">
        <span>Catatan</span>
        <Textarea id="" name=""/>
      </Label>
    </div>
    <br>
    <div class="flex justify-end">
      <Button type="submit">Update</Button>
    </div>
  </form>
</Modal>