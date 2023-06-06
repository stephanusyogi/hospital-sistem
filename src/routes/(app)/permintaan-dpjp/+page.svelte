<script>
  import Icon from "@iconify/svelte";
  import { Breadcrumb, BreadcrumbItem, Button, Label, Modal, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Textarea } from "flowbite-svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../tableCustom.css"

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
  
  let dummyUsers = [
    {
      "no_rm": "0000012023",
      "nama_pasien": "Jon Snow",
      "nik": "35730512371391",
      "ruangan" : "Kamar Rendra - Kelas II",
      "jenis_kelamin": "Laki-Laki",
      "ttl": "Malang, 02 Juni 2000",
      "asuransi": "UMUM/Mandiri",
      "alamat": "Jln. Mayjend Pandjaitan No. 22",
    },
  ];
  const handler = new DataHandler(dummyUsers, { rowsPerPage: 50 })
  const rows = handler.getRows()
</script>
<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6">
  <Breadcrumb class="mt-10 overflow-x-auto" aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/" 
    spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400"
    homeClass="inline-flex items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" home>Dashboard</BreadcrumbItem>
    <BreadcrumbItem 
    spanClass="text-xs  ml-1 font-medium text-gray-500 md:ml-2 dark:text-gray-400">Pasien Saya</BreadcrumbItem>
  </Breadcrumb>
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="flex justify-between items-center">
        <p class="text-lg sm:text-md lg:text-2xl font-semibold">Daftar Permintaan Pengajuan DPJP</p>
      </div>
      <hr class="my-5">
      <section class="table-section">
        <Datatable {handler}>
          <table>
            <thead>
              <tr>
                <Th {handler} orderBy="aksi">Aksi</Th>
                <Th {handler} orderBy="rm">Rekam Medis</Th>
                <Th {handler} orderBy="nama_pasien">Nama Pasien</Th>
                <Th {handler} orderBy="nik">NIK</Th>
                <Th {handler} orderBy="no_rm">No. RM</Th>
                <Th {handler} orderBy="ruangan">Ruangan</Th>
                <Th {handler} orderBy="asuransi">Asuransi</Th>
                <Th {handler} orderBy="">Keterangan Ajuan</Th>
                <Th {handler} orderBy="">Tanggal Pengajuan</Th>
                <Th {handler} orderBy="">Ajuan Atas Permintaan Pasien</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="flex flex-wrap sm:flex-nowrap gap-4">
                    <Button color="green" on:click={() => approveModal = true}>
                      <Icon icon="mdi:approve" />
                    </Button>
                    <Button color="red" on:click={() => cancelModal = true}>
                      <Icon icon="material-symbols:cancel" />
                    </Button>
                  </div>
                </td>
                <td>
                  <Button size="xs" href="/rekam-medis/0000012023">Rekam Medis</Button>
                </td>
                <td>Jon Snow</td>
                <td>3571937091301123</td>
                <td>0000012023</td>
                <td>Kamar Wisnu - Kelas VVIP</td>
                <td>UMUM/Mandiri</td>
                <td>Mohon dibantu pasien sudah kritis</td>
                <td>Senin, 23 Mei 2023</td>
                <td>
                  <Button size="xs" color="red">
                    <Icon icon="material-symbols:cancel" />
                  </Button>
                </td>
              </tr>  
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
            </tbody>
          </table>
        </Datatable>
      </section>
    </div>
  </section>
</div>