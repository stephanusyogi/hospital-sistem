<script>

  import { Accordion, AccordionItem, Button, Checkbox, Dropzone, Input, Label, Radio, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";

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
        <div class="my-2">
          <Label for="" class="mb-2">Keterbatasan Fisik & Kognitif: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Checkbox>Tidak Ada</Checkbox>
            <Checkbox>Tuna Rungu</Checkbox>
            <Checkbox>Tuna Wicara</Checkbox>
            <Checkbox>Tuna Netra</Checkbox>
            <Checkbox>Tuna Daksa</Checkbox>
            <Checkbox>Kognitif Terbatas</Checkbox>
            <Checkbox>Tidak Bisa Membaca</Checkbox>
            <div class="flex gap-2 w-full">
              <Checkbox>Lain-Lain</Checkbox>
              <Textarea id="" rows="1" placeholder="" name=""/>
            </div>
          </div>
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Bahasa yang Digunakan: <span class="text-sm text-red-500 italic">*</span></Label>
          <Input placeholder="" name="" id=""/>
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Hambatan Emosi & Motivasi: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Checkbox>Kooperatif</Checkbox>
            <Checkbox>Cemas</Checkbox>
            <Checkbox>Depresi</Checkbox>
            <Checkbox>Menolak</Checkbox>
            <Checkbox>Marah</Checkbox>
          </div>
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Kesediaan Menerima Informasi & Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Radio name="kesediaan_edukasi" value="Ya">Ya</Radio>
            <Radio name="kesediaan_edukasi" value="Tidak">Tidak</Radio>
          </div>
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Diagnosis Masuk: <span class="text-sm text-red-500 italic">*</span></Label>
          <Textarea id="" rows="2" placeholder="" name=""/>
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Rencana Operasi: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Radio name="rencana_operasi" value="Ya">Ya</Radio>
            <Radio name="rencana_operasi" value="Tidak">Tidak</Radio>
          </div>
        </div>
      </div>
    </AccordionItem>
    <!-- Kebutuhan Edukasi -->
    <AccordionItem>
      <span slot="header">Kebutuhan Edukasi <span class="text-sm text-red-500 italic">*</span></span>
      <div class="grid grid-cols-4 gap-4">
        <div class="my-2">
          <Label for="" class="mb-2">Penerjemah: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Radio name="penerjemah" value="Ya">Ya</Radio>
            <Radio name="penerjemah" value="Tidak">Tidak</Radio>
          </div>
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Perawatan Pendamping: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Radio name="perawatan_pendamping" value="Ya">Ya</Radio>
            <Radio name="perawatan_pendamping" value="Tidak">Tidak</Radio>
          </div>
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Asuhan Berkelanjutan di Rumah: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Radio name="asuhan_berkelanjutan" value="Ya">Ya</Radio>
            <Radio name="asuhan_berkelanjutan" value="Tidak">Tidak</Radio>
          </div>
        </div>
        <div class="my-2">
          <Label for="" class="mb-2">Media Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
          <div class="flex flex-wrap gap-2">
            <Checkbox>Lisan</Checkbox>
            <Checkbox>Leafleat</Checkbox>
            <Checkbox>Peragaan</Checkbox>
          </div>
        </div>
      </div>
    </AccordionItem>
    <!-- Rencana & Pelaksanaan Edukasi -->
    <AccordionItem>
      <span slot="header">Rencana & Pelaksanaan Edukasi <span class="text-sm text-red-500 italic">*</span></span>
      <Tabs style="underline">
        <TabItem open title="DPJP">
          <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
          <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Kondisi kesehatan dan diagnosis pasti.</li>
            <li>Partisipasi dalam pengambilan keputusan terkait dengan pelayanannya.</li>
            <li>Proses memberikan Informed Consent.</li>
            <li>Manajemen nyeri.</li>
          </ul>
          <div class="my-2">
            <Label for="" class="mb-2">Rencana Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea rows="2"/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Pemberi Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Penerima Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Verifikasi Pemahaman: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="pemahaman" value="Paham">Paham</Radio>
              <Radio name="pemahaman" value="Tidak Paham">Tidak Paham</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Durasi Edukasi (Jam): <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="w-20">
              <Input/>
            </div>
          </div>
        </TabItem>
        <TabItem title="PJ SHIFT PERAWAT">
          <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
          <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Partisipasi dalam proses pelayanan.</li>
            <li>Penggunaan peralatan medis secara efektif dan aman.</li>
            <li class="italic">Hand Hygine.</li>
            <li>Manajemen nyeri.</li>
          </ul>
          <div class="my-2">
            <Label for="" class="mb-2">Rencana Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea rows="2"/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Pemberi Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Penerima Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Verifikasi Pemahaman: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="pemahaman" value="Paham">Paham</Radio>
              <Radio name="pemahaman" value="Tidak Paham">Tidak Paham</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Durasi Edukasi (Jam): <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="w-20">
              <Input/>
            </div>
          </div>
        </TabItem>
        <TabItem title="APOTEKER">
          <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
          <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Penggunaan obat efektif.</li>
            <li>Interaksi obat dengan obat lain, makanan.</li>
            <li>Efek samping obat.</li>
            <li>Penggunaan obat secara mandiri oleh pasien.</li>
          </ul>
          <div class="my-2">
            <Label for="" class="mb-2">Rencana Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea rows="2"/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Pemberi Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Penerima Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Verifikasi Pemahaman: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="pemahaman" value="Paham">Paham</Radio>
              <Radio name="pemahaman" value="Tidak Paham">Tidak Paham</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Durasi Edukasi (Jam): <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="w-20">
              <Input/>
            </div>
          </div>
        </TabItem>
        <TabItem title="FISIOTERAPIS">
          <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
          <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Teknik rehabilitasi.</li>
          </ul>
          <div class="my-2">
            <Label for="" class="mb-2">Rencana Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea rows="2"/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Pemberi Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Penerima Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Verifikasi Pemahaman: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="pemahaman" value="Paham">Paham</Radio>
              <Radio name="pemahaman" value="Tidak Paham">Tidak Paham</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Durasi Edukasi (Jam): <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="w-20">
              <Input/>
            </div>
          </div>
        </TabItem>
        <TabItem title="NUTRITIONIS KLINIS">
          <p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Materi Edukasi:</p>
          <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Diet dan nutrisi.</li>
          </ul>
          <div class="my-2">
            <Label for="" class="mb-2">Rencana Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea rows="2"/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Pemberi Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Penerima Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Verifikasi Pemahaman: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="pemahaman" value="Paham">Paham</Radio>
              <Radio name="pemahaman" value="Tidak Paham">Tidak Paham</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Durasi Edukasi (Jam): <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="w-20">
              <Input/>
            </div>
          </div>
        </TabItem>
        <TabItem title="LAINNYA">
          <div class="my-2">
            <Label for="" class="mb-2">Materi Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea rows="2"/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Rencana Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Textarea rows="2"/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Pemberi Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Nama Penerima Edukasi: <span class="text-sm text-red-500 italic">*</span></Label>
            <Input/>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Verifikasi Pemahaman: <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="flex flex-wrap gap-2">
              <Radio name="pemahaman" value="Paham">Paham</Radio>
              <Radio name="pemahaman" value="Tidak Paham">Tidak Paham</Radio>
            </div>
          </div>
          <div class="my-2">
            <Label for="" class="mb-2">Durasi Edukasi (Jam): <span class="text-sm text-red-500 italic">*</span></Label>
            <div class="w-20">
              <Input/>
            </div>
          </div>
        </TabItem>
      </Tabs>
    </AccordionItem>
    <!-- Penandaan Lokasi Operasi -->
    <AccordionItem>
      <span slot="header">Penandaan Lokasi Operasi <span class="text-sm text-red-500 italic">*</span></span>
      <div class="my-2">
        <Label for="" class="mb-2">Upload Scan Lokasi Operasi: <span class="text-sm text-red-500 italic">*</span></Label>
        <Dropzone id='dropzone'>
          <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </Dropzone>
      </div>
    </AccordionItem>
  </Accordion>
</main>