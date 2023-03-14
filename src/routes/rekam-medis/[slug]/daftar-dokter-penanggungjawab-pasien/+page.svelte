<script>
  import Icon from '@iconify/svelte';
  import { Button, Checkbox, Input, Label, Radio, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";

</script>

<main class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
  <Tabs style="underline" defaultClass="flex overflow-x-auto rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem open title="Form Utama" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
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
      <br>
      <div class="text-right">
        <Button color="green">Submit</Button>
      </div>
    </TabItem>
    <TabItem title="Form Permintaan DPJP Pribadi" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="grid grid-cols-2 gap-6">
        <div class="content">
          <div class="mb-5">
            <Label for="" class="mb-2">Nama Penanggung Jawab:</Label>
            <Textarea id="nama_penanggungjawab" placeholder="Masukkan nama" rows="2" name="nama_penanggungjawab"/>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Alamat:</Label>
            <Textarea id="alamat_penanggungjawab" placeholder="Masukkan alamat" rows="4" name="alamat_penanggungjawab"/>
          </div>
        </div>
        <div class="content">
          <div class="mb-5">
            <Label for="" class="mb-2">Nama Pasien:</Label>
            <Textarea id="nama_pasien" placeholder="Masukkan nama" rows="2" name="nama_pasien"/>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">No. RM:</Label>
            <Textarea id="nomor_rm" placeholder="Masukkan nomor" rows="2" name="nomor_rm"/>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Nama Dokter:</Label>
        <Textarea id="nama_dokter" placeholder="Masukkan nama" rows="2" name="nama_dokter"/>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Jabatan / Keahlian:</Label>
        <Textarea id="jabatan_keahlian_dokter" placeholder="Masukkan jabatan atau keahlian" rows="2" name="jabatan_keahlian_dokter"/>
      </div>
      <br>
      <div class="text-right">
        <Button color="green">Submit</Button>
      </div>
    </TabItem>
  </Tabs>
</main>