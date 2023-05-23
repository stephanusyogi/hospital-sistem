<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Label, Modal, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Textarea } from "flowbite-svelte";

  let approveModal = false;
  let cancelModal = false;
  
  const handleSubmitApprove = () => {
    Swal.fire({
      title: 'Setujui Ajuan DPJP?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Ya, Saya Bersedia',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Ajuan Berhasil Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/pasien-saya")
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
  const handleSubmitCancel = () => {
    Swal.fire({
      title: 'Tolak Ajuan DPJP?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Tidak, Saya Tidak Bersedia',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Ajuan Berhasil Diperbarui',
          showConfirmButton: false,
          timer: 1000
        }).then(()=>{
          goto("/pasien-saya")
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
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/"  home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem>Pasien Saya</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="flex justify-between items-center">
        <p class="text-xl font-semibold">Daftar Permintaan Pengajuan DPJP</p>
      </div>
      <hr class="my-5">
      <Table hoverable={true}>
        <TableHead>
          <TableHeadCell class="text-center">Aksi</TableHeadCell>
          <TableHeadCell class="text-center">Rekam Medis</TableHeadCell>
          <TableHeadCell class="text-center">Nama Pasien</TableHeadCell>
          <TableHeadCell class="text-center">NIK</TableHeadCell>
          <TableHeadCell class="text-center">No. RM</TableHeadCell>
          <TableHeadCell class="text-center">Ruangan</TableHeadCell>
          <TableHeadCell class="text-center">Asuransi</TableHeadCell>
          <TableHeadCell class="text-center">Keterangan Ajuan</TableHeadCell>
          <TableHeadCell class="text-center">Tanggal Pengajuan</TableHeadCell>
          <TableHeadCell class="text-center">Ajuan Atas Permintaan Pasien</TableHeadCell>
        </TableHead>
        <TableBody>
          <TableBodyRow>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">
              <div class="flex gap-4">
                <Button color="green" on:click={() => approveModal = true}>
                  <Icon icon="mdi:approve" />
                </Button>
                <Button color="red" on:click={() => cancelModal = true}>
                  <Icon icon="material-symbols:cancel" />
                </Button>
              </div>
            </TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium"><Button size="xs" href="/rekam-medis/0000012023">Review Rekam Medis Pasien</Button></TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Jon Snow</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">3571937091301123</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">0000012023</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Kamar Wisnu - Kelas VVIP</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">BPJS<Button class="ml-2" color="green" size="xs">Aktif</Button></TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Mohon dibantu pasien sudah kritis</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Senin, 23 Mei 2023</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">
              <Button size="xs" color="red">
                <Icon icon="material-symbols:cancel" />
              </Button>
            </TableBodyCell>
          </TableBodyRow>
          <Modal id="approve-modal" title="Formulir Kesediaan DPJP" bind:open={approveModal} autoclose>
            <form on:submit|preventDefault={handleSubmitApprove}>
              <Label for="textarea-id" class="mb-2">Keterangan</Label>
              <Textarea id="textarea-id" rows="4" name="message"/>
              <div class="flex gap-4 justify-end">
                <Button>Menyetejui</Button>
                <Button color="alternative">Batal</Button>
              </div>
            </form>
          </Modal>
          <Modal id="cancel-modal" title="Formulir Ketidaksediaan DPJP" bind:open={cancelModal} autoclose>
            <form on:submit|preventDefault={handleSubmitCancel}>
              <Label for="textarea-id" class="mb-2">Keterangan</Label>
              <Textarea id="textarea-id" rows="4" name="message"/>
              <div class="flex gap-4 justify-end">
                <Button>Tidak Menyetejui</Button>
                <Button color="alternative">Batal</Button>
              </div>
            </form>
          </Modal>
        </TableBody>
      </Table>
      <br>
      <hr class="my-5">
      <div class="flex justify-between items-center">
        <p class="text-xl font-semibold">Pasien Saya</p>
      </div>
      <hr class="my-5">
      <Table hoverable={true}>
        <TableHead>
          <TableHeadCell class="text-center">Rekam Medis</TableHeadCell>
          <TableHeadCell class="text-center">Nama Pasien</TableHeadCell>
          <TableHeadCell class="text-center">NIK</TableHeadCell>
          <TableHeadCell class="text-center">No. RM</TableHeadCell>
          <TableHeadCell class="text-center">Ruangan</TableHeadCell>
          <TableHeadCell class="text-center">Asuransi</TableHeadCell>
        </TableHead>
        <TableBody> 
          <TableBodyRow>            
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium"><Button size="xs" href="/rekam-medis/0000012023">Rekam Medis Pasien</Button></TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Dracarys</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">24173192310</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">0000012023</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Kamar Rendra - Kelas II</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">UMUM/Mandiri</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>            
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium"><Button size="xs" href="/rekam-medis/0000012023">Rekam Medis Pasien</Button></TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Oberyn Martell</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">24173192310</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">0000012024</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Kamar Wisnu - Kelas III</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">UMUM/Mandiri</TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>            
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium"><Button size="xs" href="/rekam-medis/0000012023">Rekam Medis Pasien</Button></TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Lyanna Mormont</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">1931093</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">0000012025</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">Kamar Wisnu - Kelas VVIIP</TableBodyCell>
            <TableBodyCell tdClass="text-center px-6 py-4 whitespace-nowrap font-medium">BPJS<Button class="ml-2" color="green" size="xs">Aktif</Button></TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </div>
  </section>
</div>