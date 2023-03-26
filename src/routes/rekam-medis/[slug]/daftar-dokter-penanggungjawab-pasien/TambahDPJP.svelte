<script>

  import { Input, Label, Textarea } from "flowbite-svelte";

</script>
<p class="font-semibold mb-5">DPJP Utama</p>
<div class="mb-5">
  <Label for="" class="mb-2">Nama:</Label>
  <Textarea id="nama_dpjp_utama" placeholder="Masukkan nama" rows="2" name="nama_dpjp_utama"/>
</div>
<div class="mb-5">
  <div class="flex flex-wrap lg:flex-nowrap gap-6">
    <div class="content">
      <Label for="" class="mb-2">Tanggal Mulai:</Label>
      <Input type="date" name="tgl_mulai_dpjp_utama"/>
    </div>
    <div class="content">
      <Label for="" class="mb-2">Tanggal Selesai:</Label>
      <Input type="date" name="tgl_selesai_dpjp_utama"/>
    </div>
  </div>
</div>
<hr class="my-5">
<p class="font-semibold mb-5">DPJP</p>
<div class="mb-5">
  <Label for="" class="mb-2">Nama:</Label>
  <Textarea id="nama_dpjp" placeholder="Masukkan nama" rows="2" name="nama_dpjp"/>
</div>
<div class="mb-5">
  <div class="flex flex-wrap lg:flex-nowrap gap-6">
    <div class="content">
      <Label for="" class="mb-2">Tanggal Mulai:</Label>
      <Input type="date" name="tgl_mulai_dpjp"/>
    </div>
    <div class="content">
      <Label for="" class="mb-2">Tanggal Selesai:</Label>
      <Input type="date" name="tgl_selesai_dpjp"/>
    </div>
  </div>
</div>