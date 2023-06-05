<script>
  export let tableRowNumber, no_rm, nama_pasien, nik, jenis_kelamin, alamat;
  import { Button } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  const handlePasien = (id) => {
    Swal.fire({
      title: "Daftarkan Pasien Berikut Ke Admisi Rawat Inap?",
      html: "<p>No. RM: 000012023</p><p>Nama: Jon Snow</p>",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Daftarkan ke Admisi",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto(`/pendaftaran/loket-pasien/${id}`);
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          title: "Aksi Dibatalkan",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };
</script>

<tr>
  <td>{tableRowNumber}</td>
  <td>{no_rm}</td>
  <td>{nik}</td>
  <td
    >{nama_pasien} ,<span class="italic"
      >{jenis_kelamin === "Perempuan" ? "Nn." : "Tn."}</span
    ></td
  >
  <td>{alamat}</td>
  <td>
    <Button
      class="text-xs sm:text-md lg:text-lg"
      color="green"
      on:click={() => {
        handlePasien("0000012023");
      }}
    >
      Pilih
    </Button>
  </td>
</tr>
