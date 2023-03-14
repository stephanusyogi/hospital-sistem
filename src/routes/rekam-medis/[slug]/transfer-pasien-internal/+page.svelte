<script>
  import Icon from '@iconify/svelte';
  import { Button, Checkbox, Input, Label, Radio, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";

</script>

<main class="overflow-y-auto max-h-screen p-6 sm:p-10 space-y-6">
  <div class="text-center">
    <h1 class="text-2xl font-normal mt-10 mb-2">Form Rekam Medis 12.13</h1>
  </div>
  <div class="text-center">
    <p class="text-xl mb-2">TRANSFER PASIEN INTERNAL</p>
  </div>
  <hr class="border-2">
  <Tabs style="underline" defaultClass="flex overflow-x-auto rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700">
    <TabItem open title="General" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="grid grid-cols-2 gap-4">
        <div class="content">
          <div class="mb-5">
            <Label for="ruangan_asal" class="mb-2">Ruangan Asal:</Label>
            <Textarea id="ruangan_asal" rows="2" placeholder="Masukkan ruangan asal" name="ruangan_asal"/>
          </div>
          <div class="mb-5">
            <Label for="petugas_penghubung" class="mb-2">Petugas yang Menghubungi:</Label>
            <Textarea id="petugas_penghubung" placeholder="Masukkan petugas penghubung" rows="4" name="petugas_penghubung"/>
          </div>
          <div class="mb-5">
            <Label for="tgl_berangkat" class="mb-2">Tanggal Berangkat:</Label>
            <Input name="tgl_berangkat"type="date"/>
          </div>
        </div>
        <div class="content">
          <div class="mb-5">
            <Label for="ruangan_tujuan" class="mb-2">Ruangan Tujuan:</Label>
            <Textarea id="ruangan_tujuan" rows="2" placeholder="Masukkan ruangan tujuan" name="ruangan_tujuan"/>
          </div>
          <div class="mb-5">
            <Label for="petugas_penerima" class="mb-2">Petugas yang Menghubungi:</Label>
            <Textarea id="petugas_penerima" placeholder="Masukkan petugas penerima" rows="4" name="petugas_penerima"/>
          </div>
          <div class="mb-5">
            <Label for="" class="mb-2">Jam Berangkat:</Label>
            <div class="flex">
              <Input type="number" value="00" name="jam_berangkat_hour" min="0" max="24"/>
              <p class="text-lg font-semibold mx-2">:</p>
              <Input type="number" value="00" name="jam_berangkat_minute" min="0" max="59"/>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-5">
      <div class="mb-5">
        <Label for="" class="mb-2">Alasan Mentransfer:</Label>
        <div class="flex flex-wrap gap-6">
          <Radio name="alasan_mentransfer" value="Perlu Perawatan Lebih Lanjut">Perlu Perawatan Lebih Lanjut</Radio>
          <Radio name="alasan_mentransfer" value="Permintaan Pasien atau Keluarga">Permintaan Pasien atau Keluarga</Radio>
          <Radio name="alasan_mentransfer" value="Lain-Lain">Lain-Lain</Radio>
        </div>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Level Transfer:</Label>
        <div class="flex flex-wrap gap-6">
          <Radio name="level_transfer" value="Level 0">Level 0</Radio>
          <Radio name="level_transfer" value="Level 0,5">Level 0,5</Radio>
          <Radio name="level_transfer" value="Level 1">Level 1</Radio>
          <Radio name="level_transfer" value="Level 2">Level 2</Radio>
          <Radio name="level_transfer" value="Level 3">Level 3</Radio>
        </div>
      </div>
      <div class="mb-5">
        <Label for="indikasi_dirawat" class="mb-2">Indikasi Dirawat:</Label>
        <Textarea id="indikasi_dirawat" rows="2" placeholder="Masukkan indikasi dirawat" name="indikasi_dirawat"/>
      </div>
      <div class="mb-5">
        <Label for="diagnosa_medis" class="mb-2">Diagnosa Medis:</Label>
        <Textarea id="diagnosa_medis" rows="2" placeholder="Masukkan diagnosa medis" name="diagnosa_medis"/>
      </div>
      <div class="mb-5">
        <Label for="dpjp_utama" class="mb-2">DPJP Utama:</Label>
        <Textarea id="dpjp_utama" rows="2" placeholder="Masukkan DPJP utama" name="dpjp_utama"/>
      </div>
      <div class="mb-5">
        <Label for="dpjp" class="mb-2">DPJP:</Label>
        <Textarea id="dpjp" rows="2" placeholder="Masukkan DPJP" name="dpjp"/>
      </div>
    </TabItem>
    <TabItem title="Catatan Klinis" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <div class="mb-5">
        <Label for="anamnesis" class="mb-2">Anamnesis:</Label>
        <Textarea id="anamnesis" placeholder="Masukkan anamnesis" rows="4" name="anamnesis"/>
      </div>
      <div class="mb-5">
        <Label for="pemeriksaan_fisik" class="mb-2">Pemeriksaan Fisik:</Label>
        <Textarea id="pemeriksaan_fisik" placeholder="Masukkan pemeriksaan fisik" rows="4" name="pemeriksaan_fisik"/>
      </div>
      <div class="mb-5">
        <div class="flex justify-between mb-2">
          <Label for="pemeriksaan_diagnostik" class="mb-2">Pemeriksaan Diagnostik:</Label>
          <Button size="xs">Tambah Pemeriksaan Diagnostik<Icon class="ml-2" icon="material-symbols:add-circle" /></Button>
        </div>
        <Table>
          <TableHead>
            <TableHeadCell>Jenis</TableHeadCell>
            <TableHeadCell>Dibawakan</TableHeadCell>
          </TableHead>
          <TableBody class="divide-y">
            <TableBodyRow>
              <TableBodyCell>
                <Textarea rows="2" name="jenis_pemeriksaan_diagnostik[]"/>
              </TableBodyCell>
              <TableBodyCell>
                <Textarea rows="2" name="dibawakan_pemeriksaan_diagnostik[]"/>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>
                <Textarea rows="2" name="jenis_pemeriksaan_diagnostik[]"/>
              </TableBodyCell>
              <TableBodyCell>
                <Textarea rows="2" name="dibawakan_pemeriksaan_diagnostik[]"/>
              </TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Alergi:</Label>
        <div class="flex gap-6">
          <Radio name="alergi" value="Ya">Ya</Radio>
          <Radio name="alergi" value="Tidak">Tidak</Radio>
        </div>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Riwayat Penyakit:</Label>
        <div class="flex flex-wrap lg:flex-nowrap gap-6">
          <Radio name="riwayat_penyakit" value="Tidak Ada">Tidak Ada</Radio>
          <Radio name="riwayat_penyakit" value="Ada">Ada</Radio>
          <Radio name="riwayat_penyakit" value="CVA">CVA</Radio>
          <Radio name="riwayat_penyakit" value="Diabetes">Diabetes</Radio>
          <Radio name="riwayat_penyakit" value="Lain-Lain">Lain-Lain</Radio>
          <Textarea id="riwayat_penyakit_lainnya" rows="2" placeholder="Masukkan riwayat penyakit lainnya" name="riwayat_penyakit_lainnya"/>
        </div>
      </div>
      <div class="mb-5">
        <div class="flex justify-between mb-2">
          <Label for="" class="mb-2">Pengobatan yang Sudah Diberikan:</Label>
          <Button size="xs">Tambah Pengobatan<Icon class="ml-2" icon="material-symbols:add-circle" /></Button>
        </div>
        <Textarea rows="2" name="pengobatan_diberikan[]"/>
        <Textarea rows="2" name="pengobatan_diberikan[]"/>
      </div>
      <div class="mb-5">
        <div class="flex justify-between mb-2">
          <Label for="" class="mb-2">Tindakan/Prosedur yang Dilakukan:</Label>
          <Button size="xs">Tambah Tindakan/Prosedur<Icon class="ml-2" icon="material-symbols:add-circle" /></Button>
        </div>
        <Textarea rows="2" name="tindakan_dilakukan[]"/>
        <Textarea rows="2" name="tindakan_dilakukan[]"/>
      </div>
      <div class="mb-5">
        <Label for="luka" class="mb-2">Luka:</Label>
        <Textarea id="luka" placeholder="Masukkan luka" rows="2" name="luka"/>
      </div>
      <div class="mb-5">
        <Label for="" class="mb-2">Makan/Minum Terakhir Jam:</Label>
        <div class="flex">
          <Input type="number" value="00" name="makan_minum_terakhir_hour" min="0" max="24"/>
          <p class="text-lg font-semibold mx-2">:</p>
          <Input type="number" value="00" name="makan_minum_terakhir_minute" min="0" max="59"/>
        </div>
      </div>
      <div class="mb-5">
        <Label for="makan_minum_terakhir" class="mb-2">Peralatan Medis yang Digunakan:</Label>
        <div class="flex flex-wrap gap-6">
          <Checkbox name="peralatan_medis[]" value="Infus">Infus</Checkbox>
          <Checkbox name="peralatan_medis[]" value="ETT">ETT</Checkbox>
          <Checkbox name="peralatan_medis[]" value="Oksigen">Oksigen</Checkbox>
          <Checkbox name="peralatan_medis[]" value="CVP">CVP</Checkbox>
          <Checkbox name="peralatan_medis[]" value="Cateter">Cateter</Checkbox>
          <Checkbox name="peralatan_medis[]" value="Bidai">Bidai</Checkbox>
          <Checkbox name="peralatan_medis[]" value="NGT">NGT</Checkbox>
          <Checkbox name="peralatan_medis[]" value="Ortotrakeal">Ortotrakeal</Checkbox>
        </div>
      </div>
      <div class="mb-5">
        <Label for="diet" class="mb-2">Diet:</Label>
        <Textarea id="luka" placeholder="Masukkan luka" rows="2" name="luka"/>
      </div>
      <div class="mb-5">
        <Label for="catatan_klinis_lain_lain" class="mb-2">Lain - Lain:</Label>
        <Textarea id="catatan_klinis_lain_lain" placeholder="Masukkan lain lain" rows="2" name="catatan_klinis_lain_lain"/>
      </div>
    </TabItem>
    <TabItem title="Kondisi Pasien" defaultClass="inline-block text-sm font-medium text-center disabled:cursor-not-allowed h-full">
      <Table>
        <TableHead theadClass="text-xs uppercase text-center">
          <TableHeadCell>Pemeriksaan</TableHeadCell>
          <TableHeadCell>Sebelum di Transfer</TableHeadCell>
          <TableHeadCell>Saat Diterima</TableHeadCell>
        </TableHead>
        <TableBody class="divide-y">
          <TableBodyRow>
            <TableBodyCell>Kesadaran Umum</TableBodyCell>
            <TableBodyCell>
              <div class="flex flex-wrap gap-6">
                <Radio name="kesadaran_umum_sebelum_transfer" value="Baik">Baik</Radio>
                <Radio name="kesadaran_umum_sebelum_transfer" value="Cukup">Cukup</Radio>
                <Radio name="kesadaran_umum_sebelum_transfer" value="Lemah">Lemah</Radio>
                <Radio name="kesadaran_umum_sebelum_transfer" value="Jelek">Jelek</Radio>
              </div>
            </TableBodyCell>
            <TableBodyCell>
              <div class="flex flex-wrap gap-6">
                <Radio name="kesadaran_umum_saat_diterima" value="Baik">Baik</Radio>
                <Radio name="kesadaran_umum_saat_diterima" value="Cukup">Cukup</Radio>
                <Radio name="kesadaran_umum_saat_diterima" value="Lemah">Lemah</Radio>
                <Radio name="kesadaran_umum_saat_diterima" value="Jelek">Jelek</Radio>
              </div>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>Kesadaran / GCS</TableBodyCell>
            <TableBodyCell>
              <p>Kesadaran</p>
              <Textarea id="kesadaran_sebelum_ditransfer" placeholder="Masukkan kesadaran" rows="2" name="kesadaran_sebelum_ditransfer"/>
              <br>
              <p>GCS</p>
              <Textarea id="gcs_sebelum_ditransfer" placeholder="Masukkan gcs" rows="2" name="gcs_sebelum_ditransfer"/>
            </TableBodyCell>
            <TableBodyCell>
              <p>Kesadaran</p>
              <Textarea id="kesadaran_saat_diterima" placeholder="Masukkan kesadaran" rows="2" name="kesadaran_saat_diterima"/>
              <br>
              <p>GCS</p>
              <Textarea id="gcs_saat_diterima" placeholder="Masukkan gcs" rows="2" name="gcs_saat_diterima"/>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>Tekanan Darah</TableBodyCell>
            <TableBodyCell>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="tekanan_darah_sebelum_ditransfer" type="number"/>
                </div>
                <p class="ml-2">mmHg</p>
              </div>
            </TableBodyCell>
            <TableBodyCell>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="tekanan_darah_saat_diterima" type="number"/>
                </div>
                <p class="ml-2">mmHg</p>
              </div>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>Suhu & Nadi</TableBodyCell>
            <TableBodyCell>
              <p>Suhu:</p>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="suhu_sebelum_ditransfer" type="number"/>
                </div>
                <p class="ml-2">C</p>
              </div>
              <br>
              <p>Nadi:</p>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="nadi_sebelum_ditransfer" type="number"/>
                </div>
                <p class="ml-2">x/menit</p>
              </div>
            </TableBodyCell>
            <TableBodyCell>
              <p>Suhu:</p>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="suhu_saat_diterima" type="number"/>
                </div>
                <p class="ml-2">C</p>
              </div>
              <br>
              <p>Nadi:</p>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="nadi_saat_diterima" type="number"/>
                </div>
                <p class="ml-2">x/menit</p>
              </div>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>RR & Saturasi</TableBodyCell>
            <TableBodyCell>
              <p>RR:</p>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="rr_sebelum_ditransfer" type="number"/>
                </div>
                <p class="ml-2">x/menit</p>
              </div>
              <br>
              <p>Saturasi:</p>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="saturasi_sebelum_ditransfer" type="number"/>
                </div>
                <p class="ml-2">%</p>
              </div>
            </TableBodyCell>
            <TableBodyCell>
              <p>RR:</p>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="rr_saat_diterima" type="number"/>
                </div>
                <p class="ml-2">x/menit</p>
              </div>
              <br>
              <p>Saturasi:</p>
              <div class="flex items-center">
                <div class="w-40">
                  <Input name="saturasi_saat_diterima" type="number"/>
                </div>
                <p class="ml-2">%</p>
              </div>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>Skala Nyeri</TableBodyCell>
            <TableBodyCell>
              <Textarea id="skala_nyeri_sebelum_ditransfer" placeholder="Masukkan skala nyeri" rows="2" name="skala_nyeri_sebelum_ditransfer"/>
            </TableBodyCell>
            <TableBodyCell>
              <Textarea id="skala_nyeri_saat_diterima" placeholder="Masukkan skala nyeri" rows="2" name="skala_nyeri_saat_diterima"/>
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow>
            <TableBodyCell>Resiko Jatuh</TableBodyCell>
            <TableBodyCell>
              <div class="flex flex-wrap gap-6">
                <Radio name="resiko_jatuh_sebelum_transfer" value="Ringan">Ringan</Radio>
                <Radio name="resiko_jatuh_sebelum_transfer" value="Sedang">Sedang</Radio>
                <Radio name="resiko_jatuh_sebelum_transfer" value="Berat">Berat</Radio>
              </div>
            </TableBodyCell>
            <TableBodyCell>
              <div class="flex flex-wrap gap-6">
                <Radio name="resiko_jatuh_saat_diterima" value="Ringan">Ringan</Radio>
                <Radio name="resiko_jatuh_saat_diterima" value="Sedang">Sedang</Radio>
                <Radio name="resiko_jatuh_saat_diterima" value="Berat">Berat</Radio>
              </div>
            </TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
      <br>
      <div class="text-right">
        <Button color="green">Submit</Button>
      </div>
    </TabItem>
  </Tabs>
</main>