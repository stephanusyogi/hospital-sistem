<script>

  import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-svelte";
  import { page } from '$app/stores';
  import Swal from "sweetalert2";

  const no_rm = $page.params.slug;
  
  const handleBayar = () => {
    Swal.fire({
      title: 'Bayar Perawatan Pasien?',
      text: 'Mohon berhati-hati, aksi ini bersifat permanen pada database.',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Ubah Status Nota Telah di Bayar',
      denyButtonText: `Batal`,
    })
  }
</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6 mt-10">
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xl font-semibold">Nota Pasien Rawat Inap</p>
        </div>
        <div class="flex items-center justify-between gap-4">
          <Button href="/transaksi/{no_rm}/12351" color="green">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg>
            Update</Button>
          <Button color="yellow">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 7H6V3h12v4Zm0 5.5q.425 0 .713-.288T19 11.5q0-.425-.288-.713T18 10.5q-.425 0-.713.288T17 11.5q0 .425.288.713T18 12.5ZM16 19v-4H8v4h8Zm2 2H6v-4H2v-6q0-1.275.875-2.138T5 8h14q1.275 0 2.138.863T22 11v6h-4v4Z"/></svg>
            Download</Button>
          <Button color="purple" on:click={handleBayar}>
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M216 74H56a10 10 0 0 1 0-20h136a6 6 0 0 0 0-12H56a22 22 0 0 0-22 22v128a22 22 0 0 0 22 22h160a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14Zm2 126a2 2 0 0 1-2 2H56a10 10 0 0 1-10-10V83.59A21.84 21.84 0 0 0 56 86h160a2 2 0 0 1 2 2Zm-28-60a10 10 0 1 1-10-10a10 10 0 0 1 10 10Z"/></svg>
              Bayar</Button>
        </div>
      </div>
      <hr class="my-4">
      <div class="text-center p-4">
        <p class="text-2xl font-bold">Rincian Biaya Perawatan</p>
        <p class="text-xl font-semibold">Periode Perawatan: 8 April 2023 s/d 9 April 2023</p>
      </div>
      <hr class="my-2 border-slate-600">
      <div class="grid grid-cols-2 gap-6 py-4 font-medium">
        <div>
          <div class="grid grid-cols-2 gap-4">
            <div>No. RM</div>
            <div>: 000001-2023</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Nama Pasien</div>
            <div>: Jon Snow</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Tanggal Lahir</div>
            <div>: 02-06-2000</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Dokter Utama</div>
            <div>: dr. Khal Drogo, Sp PD FINASIM</div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <div>Ruang Perawatan</div>
            <div>: Kamar Ayodya</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Kelas</div>
            <div>: VVIP</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Tanggal Masuk</div>
            <div>: 08-04-2023</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Tanggal Keluar</div>
            <div>: 09-04-2023</div>
          </div>
        </div>
      </div>
      <hr class="my-2 border-slate-600">
      <div class="grid grid-cols-7 gap-4 text-lg font-semibold">
        <div>Uraian Pelayanan</div>
        <div>Tanggal</div>
        <div>Kelas</div>
        <div class="text-right">Satuan</div>
        <div>Qty</div>
        <div class="col-span-2 text-right">Biaya</div>
      </div>
      <hr class="my-2 border-slate-600">
      <div class="my-2">
        <div class="text-md font-semibold pb-2 border-b border-dashed border-slate-600">Administrasi</div>
        <div class="grid grid-cols-7 gap-4 text-md font-base py-2">
          <div>Pendaftaran Rawat Inap</div>
          <div>08-04-2023</div>
          <div>Kelas VVIP</div>
          <div class="text-right">20,000.00</div>
          <div>1</div>
          <div>0.00</div>
          <div class="text-right border-b border-dashed border-slate-600">20,000.00</div>
        </div>
        <div class="grid grid-cols-7 gap-4 text-md font-medium py-2">
          <div class="text-right col-span-6">Total Administrasi</div>
          <div class="text-right border-b border-dashed border-slate-600">20,000.00</div>
        </div>
      </div>
      <div class="my-2">
        <div class="text-md font-semibold pb-2 border-b border-dashed border-slate-600">Ruang Perawatan</div>
        <div class="grid grid-cols-7 gap-4 text-md font-base py-2">
          <div>Kamar Ayodya</div>
          <div>08-04-2023</div>
          <div>Kelas VVIP</div>
          <div class="text-right">2,500,000.00</div>
          <div>1</div>
          <div>0.00</div>
          <div class="text-right border-b border-dashed border-slate-600">2,500,000.00</div>
        </div>
        <div class="grid grid-cols-7 gap-4 text-md font-base">
          <div>Kamar Ayodya</div>
          <div>09-04-2023</div>
          <div>Kelas VVIP</div>
          <div class="text-right">2,500,000.00</div>
          <div>1</div>
          <div>0.00</div>
          <div class="text-right border-b border-dashed border-slate-600">2,500,000.00</div>
        </div>
        <div class="grid grid-cols-7 gap-4 text-md font-medium py-2">
          <div class="text-right col-span-6">Total Ruang Perawatan</div>
          <div class="text-right border-b border-dashed border-slate-600">5,000,000.00</div>
        </div>
      </div>
      <div class="my-2">
        <div class="text-md font-semibold pb-2 border-b border-dashed border-slate-600">Visit Dokter</div>
        <div class="py-1">
          <div class="font-medium">dr. Khal Drogo, Sp PD FINASIM</div>
          <div class="grid grid-cols-7 gap-4 text-md font-base py-2">
            <div>Visit Pertama Dokter Spesialis</div>
            <div>08-04-2023</div>
            <div>Kelas VVIP</div>
            <div class="text-right">100,000.00</div>
            <div>1</div>
            <div>0.00</div>
            <div class="text-right border-b border-dashed border-slate-600">100,000.00</div>
          </div>
        </div>
        <div class="py-1">
          <div class="font-medium">dr. Ramsay Bolton, Sp AN</div>
          <div class="grid grid-cols-7 gap-4 text-md font-base py-2">
            <div>Visit Dokter Umum</div>
            <div>08-04-2023</div>
            <div>Kelas VVIP</div>
            <div class="text-right">100,000.00</div>
            <div>1</div>
            <div>0.00</div>
            <div class="text-right border-b border-dashed border-slate-600">100,000.00</div>
          </div>
        </div>
        <div class="py-1">
          <div class="font-medium">dr. Viserys II S, Sp.KJ</div>
          <div class="grid grid-cols-7 gap-4 text-md font-base py-2">
            <div>Visit Pertama Dokter Spesialis</div>
            <div>09-04-2023</div>
            <div>Kelas VVIP</div>
            <div class="text-right">100,000.00</div>
            <div>1</div>
            <div>0.00</div>
            <div class="text-right border-b border-dashed border-slate-600">100,000.00</div>
          </div>
        </div>
        <div class="grid grid-cols-7 gap-4 text-md font-medium py-2">
          <div class="text-right col-span-6">Total Visit Dokter</div>
          <div class="text-right border-b border-dashed border-slate-600">300,000.00</div>
        </div>
      </div>
      <div class="my-2">
        <div class="text-md font-semibold pb-2 border-b border-dashed border-slate-600">Obat & Bahan Habis Pakai</div>
        <div class="grid grid-cols-7 gap-4 text-md font-base py-2">
          <div>Artesunate tablet</div>
          <div>08-04-2023</div>
          <div>Kelas VVIP</div>
          <div class="text-right">50,000.00</div>
          <div>1</div>
          <div>0.00</div>
          <div class="text-right border-b border-dashed border-slate-600">50,000.00</div>
        </div>
        <div class="grid grid-cols-7 gap-4 text-md font-base">
          <div>Ambroxol Sirup</div>
          <div>09-04-2023</div>
          <div>Kelas VVIP</div>
          <div class="text-right">50,000.00</div>
          <div>1</div>
          <div>0.00</div>
          <div class="text-right border-b border-dashed border-slate-600">50,000.00</div>
        </div>
        <div class="grid grid-cols-7 gap-4 text-md font-medium py-2">
          <div class="text-right col-span-6">Total Obat & Bahan Habis Pakai</div>
          <div class="text-right border-b border-dashed border-slate-600">100,000.00</div>
        </div>
      </div>
      <div class="my-2">
        <div class="text-md font-semibold pb-2 border-b border-dashed border-slate-600">Tindakan Medis</div>
        <div class="grid grid-cols-7 gap-4 text-md font-base py-2">
          <div>Pemasangan Infus</div>
          <div>08-04-2023</div>
          <div>Kelas VVIP</div>
          <div class="text-right">150,000.00</div>
          <div>1</div>
          <div>0.00</div>
          <div class="text-right border-b border-dashed border-slate-600">150,000.00</div>
        </div>
        <div class="grid grid-cols-7 gap-4 text-md font-base">
          <div>Uji Laboratup</div>
          <div>09-04-2023</div>
          <div>Kelas VVIP</div>
          <div class="text-right">50,000.00</div>
          <div>1</div>
          <div>0.00</div>
          <div class="text-right border-b border-dashed border-slate-600">50,000.00</div>
        </div>
        <div class="grid grid-cols-7 gap-4 text-md font-medium py-2">
          <div class="text-right col-span-6">Total Tindakan Medis</div>
          <div class="text-right border-b border-dashed border-slate-600">200,000.00</div>
        </div>
      </div>
      <hr class="my-2 border-slate-600">
      <div class="grid grid-cols-7 gap-4 text-lg font-semibold">
        <div class="col-span-6 text-right">
          Total Biaya
        </div>
        <div class="text-right">5,420,000.00</div>
      </div>
    </div>
  </section>
</div>