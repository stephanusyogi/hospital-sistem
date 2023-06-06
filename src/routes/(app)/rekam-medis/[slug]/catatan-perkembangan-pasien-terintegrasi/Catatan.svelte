<script>
  export let tgl_jam, ppa, hasil, instruksi, dpjp, identitas_ppa;
</script>
<tr>
  <td>{tgl_jam}</td>
  <td><div class="text-left" contenteditable="false" bind:innerHTML={hasil}></div></td>
  <td><div class="text-left" contenteditable="false" bind:innerHTML={instruksi}></div></td>
  <td>{ppa}</td>
  <td>{identitas_ppa}</td>
  <td>{dpjp}</td>
</tr>