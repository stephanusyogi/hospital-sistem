<script>
  export let tableRowNumber, no_rekam_medis, name, nik, jenis_kelamin, alamat_ktp;
  import { Button } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";

  const handlePasien = (id) => {
    Swal.fire({
      title: "Daftarkan Pasien Berikut Ke Admisi Rawat Inap?",
      html: `<p>No. RM: ${no_rekam_medis}</p><p>Nama: ${name}</p>`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Daftarkan ke Admisi",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto(`/pendaftaran/loket-pasien/${id}`);
      }
    });
  };
</script>

<tr>
  <td>{tableRowNumber}</td>
  <td>{no_rekam_medis}</td>
  <td>{nik}</td>
  <td
    >{name} ,<span class="italic"
      >{jenis_kelamin === "Perempuan" ? "Nn." : "Tn."}</span
    ></td
  >
  <td>{alamat_ktp}</td>
  <td>
    <Button
      class="text-xs sm:text-md lg:text-md"
      color="green"
      on:click={() => {
        handlePasien(no_rekam_medis);
      }}
    >
      Pilih
    </Button>
  </td>
</tr>
