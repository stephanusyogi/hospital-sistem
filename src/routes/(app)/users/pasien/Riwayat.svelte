<script>
  import Icon from "@iconify/svelte";
  import { Button, Modal, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../tableCustom.css"

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"

  const handleGoToDokumen = (no_rm) => {
    goto(`/rekam-medis/${no_rm}`)
  }
  let defaultModal = false;
  
  let dummyUsers = [
    {
      "no_rm": "000001-2023",
      "nama_pasien": "Jon Snow",
      "pronounce": "Tn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "2023-01-02",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 1,
    },
    {
      "no_rm": "000256-2023",
      "nama_pasien": "Jon Snow",
      "pronounce": "Tn",
      "tgl_masuk": "2023-01-01",
      "tgl_pulang": "2023-01-02",
      "ruangan": "Ayodya",
      "jenis_ruangan": "Kelas VVIP",
      "status_rawat" : 1,
    },
  ];
  const handler = new DataHandler(dummyUsers, { rowsPerPage: 50 })
  const rows = handler.getRows()
</script>

<Button on:click={() => defaultModal = true} color="green" size="sm">
  <Icon icon="material-symbols:history" class="sm:mr-2" width="27" height="27"/>
  <span class="hidden sm:block">Riwayat Rekam Medis</span>
</Button>
<Modal size="xl" title="Riwayat Rekam Medis Rawat Inap" bind:open={defaultModal} autoclose class="overflow-auto">
  <section class="table-section">
    <Datatable {handler}>
      <table>
        <thead>
          <tr>
            <Th {handler} orderBy="no_rm">No. RM</Th>
            <Th {handler} orderBy="nama_pasien">Nama</Th>
            <Th {handler} orderBy="tgl_masuk">Tanggal Masuk</Th>
            <Th {handler} orderBy="tgl_pulang">Tanggal Keluar</Th>
            <Th {handler} orderBy="ruangan">Ruangan</Th>
            <Th {handler} orderBy="aksi">Aksi</Th>
          </tr>
        </thead>
        <tbody>
          {#each $rows as row}
            <tr>
              <td>{row.no_rm}</td>
              <td>{row.nama_pasien} ,<span class="italic">{row.pronounce}</span></td>
              <td>{row.tgl_masuk}</td>
              <td>{row.tgl_pulang}</td>
              <td>{row.ruangan}, {row.jenis_ruangan}</td>
              <td>
                <Button on:click={()=>handleGoToDokumen(row.no_rm)}>
                  <Icon icon="mdi:file-document-edit" class="sm:mr-2" width="27" height="27"/>
                  <span class="hidden sm:block">Lihat Rekam Medis</span>
                </Button>
              </td>
            </tr>
          {/each}   
        </tbody>
      </table>
    </Datatable>
  </section>
  <svelte:fragment slot='footer'>
    <Button color="alternative">Tutup</Button>
  </svelte:fragment>
</Modal>
