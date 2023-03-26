<script>
  export let tableRowNumber, no_rm, nama_pasien, nik, jenis_kelamin, ttl, alamat;
  import { Button, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import { goto } from '$app/navigation';
  import Swal from "sweetalert2";

  let tdClass = "text-center px-6 py-4 whitespace-nowrap font-medium"

  const handlePasien = (id) => {
    Swal.fire({
      title: 'Daftarkan Pasien Berikut Ke Admisi Rawat Inap?',
      html: '<p>No. RM: 000012023</p><p>Nama: Jon Snow</p><p>Jenis Kelamin: Laki-Laki</p>',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Daftarkan ke Admisi',
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Pasien Berhasil Didaftarkan',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          goto("/pendaftaran/admisi-rawat-inap")
        })
      } else if (result.isDenied) {
        Swal.fire({
          icon: 'info',
          title: 'Aksi Dibatalkan',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
</script>

<TableBodyRow>
  <TableBodyCell {tdClass}>{tableRowNumber}</TableBodyCell>
  <TableBodyCell {tdClass}>{no_rm}</TableBodyCell>
  <TableBodyCell {tdClass}>{nama_pasien} ,<span class="italic">{(jenis_kelamin === "Perempuan") ? "Nn." : "Tn."}</span></TableBodyCell>
  <TableBodyCell {tdClass}>{nik}</TableBodyCell>
  <TableBodyCell {tdClass}>{jenis_kelamin}</TableBodyCell>
  <TableBodyCell {tdClass}>{ttl}</TableBodyCell>
  <TableBodyCell {tdClass}>{alamat}</TableBodyCell>
  <TableBodyCell {tdClass}>
    <Button color="green" on:click={()=>{handlePasien("1")}}>Pilih</Button>
  </TableBodyCell>
</TableBodyRow>