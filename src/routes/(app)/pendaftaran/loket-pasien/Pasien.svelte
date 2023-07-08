<script>
  export let tableRowNumber, no_rekam_medis, name, nik, jenis_kelamin, alamat_ktp, data;
  import { Button } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  import { onMount } from "svelte";
  import axios from "axios";

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

  const handleRekamMedis = (id) => {
    Swal.fire({
      title: "Lihat Rekam Medis Pasien?",
      html: `<p>No. RM: ${no_rekam_medis}</p><p>Nama: ${name}</p>`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Ya",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        goto(`/rekam-medis/${id}`);
      }
    });
  };

  let statusPasien
  onMount(async ()=>{
    const headers = {
      'Accept': '*/*',
      'Authorization': 'Bearer '+ data.user_data.token
    };

    const response = await axios.get(data.api_base+'/check-patient/'+no_rekam_medis , { headers });  
    statusPasien = response.data.status
  })
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
    {#if statusPasien}
      <Button
        class="text-xs sm:text-md lg:text-md"
        color="yellow"
        on:click={() => {
          handleRekamMedis(no_rekam_medis);
        }}
      >
        Sedang Dalam Perawatan
      </Button>
    {:else}
      <Button
        class="text-xs sm:text-md lg:text-md"
        color="green"
        on:click={() => {
          handlePasien(no_rekam_medis);
        }}
      >
        Pilih
      </Button>
    {/if}
  </td>
</tr>
