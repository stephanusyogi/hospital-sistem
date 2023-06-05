<script>
  import Icon from '@iconify/svelte';
  import { Button, Checkbox, Input, Label, Radio, TabItem, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Tabs, Textarea } from "flowbite-svelte";

</script>

<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.13 Transfer Pasien Internal</p>
    </div>
    <Button href="transfer-pasien-internal/update" size="sm" color="green">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg><span class="hidden sm:block">Update</span></Button>
  </div>
  <hr class="my-5">
  <div class="overflow-y-auto max-h-screen">
    <div class="border border-slate-300 rounded p-4 w-full">
      <div class="mb-2">
        <p class="text-lg font-semibold italic">General</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Ruangan Asal:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Ruangan Tujuan:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Petugas yang Menghubungi:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Petugas Penerima:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Tanggal Berangkat:</p>
            <p class="font-light sm:text-right">02/02/2021</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Jam Berangkat:</p>
            <p class="font-light sm:text-right">15:30</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Alasan Mentransfer:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Level Transfer:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Indikasi Dirawat:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Diagnosa Medis:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">DPJP Utama:</p>
            <p class="font-light sm:text-right">dr. Khal Drogo, Sp PD FINASIM	</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">DPJP:</p>
            <ul class="space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>dr. Ramsay Bolton, Sp AN</li>
              <li>dr. Viserys II S, Sp.KJ	</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <p class="text-lg font-semibold italic">Catatan Klinis</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Anamnesis:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Pemeriksaan Fisik:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Pemeriksaan Diagnostik:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Jenis:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Dibawakan:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-2">
                <p class="font-medium">Jenis:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
              </div>
              <div class="grid grid-cols-2">
                <p class="font-medium">Dibawakan:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Alergi:</p>
            <p class="font-light sm:text-right">Tidak</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Riwayat Penyakit:</p>
            <p class="font-light sm:text-right">Tidak Ada</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Pengobatan yang sudah diberikan:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Deskripsi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Deskripsi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Tindakan/Prosedur yang sudah diberikan:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Deskripsi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Deskripsi:</p>
                <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Luka:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Makan/Minum Terakhir Jam:</p>
            <p class="font-light sm:text-right">09:00</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm">
            <p class="font-medium">Lain-Lain:</p>
            <p class="font-light sm:text-right">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div class="mb-2">
        <p class="text-lg font-semibold italic">Kondisi Pasien</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Kesadaran Umum:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Sebelum di Transfer:</p>
                <p class="font-light sm:text-right">Baik</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Saat di Terima:</p>
                <p class="font-light sm:text-right">Baik</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Kesadaran / GCS:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium sm:col-span-2">Sebelum di Transfer:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">Kesadaran:</p>
                  <p class="font-light sm:text-right">Lorem ipsum</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">GCS:</p>
                  <p class="font-light sm:text-right">Lorem ipsum</p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium sm:col-span-2">Saat di Terima:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">Kesadaran:</p>
                  <p class="font-light sm:text-right">Lorem ipsum</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">GCS:</p>
                  <p class="font-light sm:text-right">Lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Tekanan Darah:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Sebelum di Transfer:</p>
                <p class="font-light sm:text-right">20 mmHg</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Saat di Terima:</p>
                <p class="font-light sm:text-right">20 mmHg</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Suhu & Nadi:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium sm:col-span-2">Sebelum di Transfer:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">Suhu:</p>
                  <p class="font-light sm:text-right">50 C</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">Nadi:</p>
                  <p class="font-light sm:text-right">50 x/menit</p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium sm:col-span-2">Saat di Terima:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">Suhu:</p>
                  <p class="font-light sm:text-right">50 C</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">Nadi:</p>
                  <p class="font-light sm:text-right">50 x/menit</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">RR & Saturasi:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium sm:col-span-2">Sebelum di Transfer:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">RR:</p>
                  <p class="font-light sm:text-right">50 x/menit</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">Saturasi:</p>
                  <p class="font-light sm:text-right">50 %</p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium sm:col-span-2">Saat di Terima:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">RR:</p>
                  <p class="font-light sm:text-right">50 x/menit</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                  <p class="font-medium">Saturasi:</p>
                  <p class="font-light sm:text-right">50 %</p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Skala Nyeri:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Sebelum di Transfer:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Saat di Terima:</p>
                <p class="font-light sm:text-right">Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
            <p class="font-medium sm:col-span-2">Resiko Jatuh:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 border p-4 text-sm sm:col-span-2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Sebelum di Transfer:</p>
                <p class="font-light sm:text-right">Ringan</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
                <p class="font-medium">Saat di Terima:</p>
                <p class="font-light sm:text-right">Ringan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>