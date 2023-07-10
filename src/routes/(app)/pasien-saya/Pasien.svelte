<script>
  export let no_rekam_medis, nama_pasien, ruangan, asuransi, tgl_mulai, tgl_selesai
  import { Button } from "flowbite-svelte";
</script>
<tr>
  <td><Button size="xs" href="/rekam-medis/{no_rekam_medis}">Lihat Rekam Medis</Button></td>
  <td>{no_rekam_medis}</td>
  <td>{nama_pasien}</td>
  <td>{ruangan}</td>
  <td>{asuransi}</td>
  <td>{tgl_mulai}</td>
  <td>{tgl_selesai}</td>
</tr>