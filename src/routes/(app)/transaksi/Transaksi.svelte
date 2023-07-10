<script>
  import Icon from "@iconify/svelte";
  export let _id, nama_pasien, no_rekam_medis, tgl_masuk, nama_asuransi
  import { Button } from "flowbite-svelte";
  import Swal from 'sweetalert2'
</script>
<tr>
  <td>{nama_pasien}</td>
  <td>{no_rekam_medis}</td>
  <td>{tgl_masuk}</td>
  <td>
    {nama_asuransi}
    <br>
    {#if nama_asuransi === 'BPJS'}
      <Button class="mt-2" size="sm" color="green">Bebas Biaya</Button>
    {/if}
  </td>
  <td>
    <Button color="alternative" href="/transaksi/{_id}" size="sm">
      <Icon icon="material-symbols:receipt-long" class="sm:mr-2"/>
        <span class="hidden sm:block">Lihat Nota</span>
    </Button>
  </td>
</tr>