<script>

  import { Accordion, AccordionItem, Button, Label, Radio, Textarea } from "flowbite-svelte";

</script>
<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-xl font-semibold">Edukasi Pasien & Keluarga Terintegrasi</p>
      <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
    </div>
    <div class="flex flex-wrap gap-4">
      <Button type="submit" color="green">
        Simpan</Button>
    </div>
  </div>
  <hr class="my-5">
  <Accordion>
    <!-- Pengkajian Kebutuhan Edukasi -->
    <AccordionItem>
      <span slot="header">Pengkajian Kebutuhan Edukasi <span class="text-sm text-red-500 italic">*</span></span>
      <div class="grid grid-cols-4 gap-4">
        <div class="my-2">
          <Label for="" class="mb-2">Keyakinan & nilai-nilai pribadi pasien & keluarga: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Radio name="keyakinan" value="Tidak Ada">Tidak Ada</Radio>
            <div class="flex gap-2 w-full">
              <Radio name="keyakinan" value="Ada">Ada</Radio>
              <Textarea id="uraian_keyakinan" rows="1" placeholder="" name="uraian_keyakinan"/>
            </div>
          </div>
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Tingkat Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Radio name="pendidikan" value="SD">SD</Radio>
            <Radio name="pendidikan" value="SMP">SMP</Radio>
            <Radio name="pendidikan" value="SMA">SMA</Radio>
            <Radio name="pendidikan" value="D3">D3</Radio>
            <Radio name="pendidikan" value="S1">S1</Radio>
            <Radio name="pendidikan" value="S2">S2</Radio>
            <Radio name="pendidikan" value="S3">S3</Radio>
            <Radio name="pendidikan" value="Tidak Sekolah">Tidak Sekolah</Radio>
          </div>
        </div>
      </div>
    </AccordionItem>
  </Accordion>
</main>