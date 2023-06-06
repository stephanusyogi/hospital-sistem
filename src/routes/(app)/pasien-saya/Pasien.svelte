<script>
  export let no_rm, nama_pasien, nik, ruangan, asuransi, jenis_kelamin;
  import { Button } from "flowbite-svelte";
</script>
<tr>
  <td><Button size="xs" href="/rekam-medis/0000012023">Rekam Medis Pasien</Button></td>
  <td>{no_rm}</td>
  <td>{nama_pasien} ,<span class="italic">{(jenis_kelamin === "Perempuan") ? "Nn." : "Tn."}</span></td>
  <td>{nik}</td>
  <td>{ruangan}</td>
  <td>{asuransi}</td>
</tr>