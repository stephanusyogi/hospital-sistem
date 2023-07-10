<script>

  import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-svelte";
  import { page } from '$app/stores';
  import Swal from "sweetalert2";
  import { onMount } from "svelte";

  const id_receipt = $page.params.id_receipt;
  export let data
  let totalVisitDokter = 0
  let totalObat = 0
  let totalBiaya = 0

  onMount(()=>{
    if(data?.transaksi.visit_dokter.length !== 0){
      for (let index = 0; index < data.transaksi.visit_dokter.length; index++) {
        let total = (parseInt(data.transaksi.visit_dokter[index].harga_satuan) * parseInt(data.transaksi.visit_dokter[index].quantity))
        totalVisitDokter += parseInt(total)
      }
    }
    
    if(data?.transaksi.obat_bahan_habis_pakai.length !== 0){
      for (let index = 0; index < data.transaksi.obat_bahan_habis_pakai.length; index++) {
        let total = (parseInt(data.transaksi.obat_bahan_habis_pakai[index].harga_satuan) * parseInt(data.transaksi.obat_bahan_habis_pakai[index].quantity))
        totalObat += parseInt(total)
      }
    }

    let tagTotalBiaya = document.getElementById('totalBiaya').innerText;
    let tagTotalAdministrasi = document.getElementById('totalAdministrasi').innerText;
    let tagTotalRuangPerawatan = document.getElementById('totalRuangPerawatan').innerText;
    let tagTotalVisitDokter = document.getElementById('totalVisitDokter').innerText;
    let tagTotalObat = document.getElementById('totalObat').innerText;

    tagTotalVisitDokter = totalVisitDokter
    tagTotalObat = totalObat

    totalBiaya = parseInt(tagTotalAdministrasi) + parseInt(tagTotalRuangPerawatan) + parseInt(tagTotalVisitDokter) + parseInt(tagTotalObat)
    tagTotalBiaya = totalBiaya
  })

</script>

<div class="overflow-y-auto relative max-h-screen p-6 sm:p-10 space-y-6 mt-10">
  <section>
    <div class="px-4 py-6 bg-gray-50 dark:bg-gray-800 shadow rounded-lg">
      <div class="flex items-center flex-wrap sm:flex-nowrap justify-center sm:justify-between">
        <div>
          <p class="text-lg sm:text-md lg:text-2xl font-semibold">Nota Pasien Rawat Inap</p>
        </div>
      </div>
      <hr class="my-2 lg:my-4">
      <div class="text-center p-4">
        <p class="text-md sm:text-xl lg:text-2xl font-bold">Rincian Biaya Perawatan</p>
        <p class="text-sm sm:text-md lg:text-xl font-semibold">Periode Perawatan: {data?.transaksi.tgl_masuk ?? ''} s/d {data?.transaksi.tgl_pulang ?? ''}</p>
      </div>
      <hr class="my-2 border-slate-600">
      <div class="text-xs lg:text-lg grid grid-cols-1 sm:grid-cols-2 gap-6 py-4 font-medium">
        <div>
          <div class="grid grid-cols-2 gap-4">
            <div>No. RM</div>
            <div>: {data?.transaksi.no_rekam_medis ?? ''}</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Nama Pasien</div>
            <div>: {data?.transaksi.nama_pasien ?? ''}</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Tanggal Lahir</div>
            <div>: {data?.transaksi.tgl_lahir ?? ''}</div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <div>Ruang Perawatan</div>
            <div>: Kamar {data?.transaksi.nama_kamar ?? ''} - Kelas {data?.transaksi.jenis_kamar ?? ''}</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Tanggal Masuk</div>
            <div>: {data?.transaksi.tgl_masuk ?? ''}</div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>Tanggal Keluar</div>
            <div>: {data?.transaksi.tgl_pulang ?? ''}</div>
          </div>
        </div>
      </div>
      <hr class="my-2 border-slate-600">
      <div class="hidden sm:grid grid-cols-1 sm:grid-cols-7 gap-4 text-xs lg:text-lg font-semibold">
        <div>Uraian Pelayanan</div>
        <div>Tanggal</div>
        <div>Kelas</div>
        <div class="sm:text-right">Satuan</div>
        <div>Qty</div>
        <div class="sm:col-span-2 sm:text-right">Biaya</div>
      </div>
      <hr class="my-2 border-slate-600">
      <div class="my-2">
        <div class="text-xs lg:text-lg font-semibold pb-2 border-b border-dashed border-slate-600">Administrasi</div>
        <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 text-xs lg:text-lg font-base py-2">
          <div>{data?.transaksi.administrasi.length !== 0 ? data.transaksi.administrasi[0].deskripsi : ''}</div>
          <div>{data?.transaksi.administrasi.length !== 0 ? data.transaksi.administrasi[0].tanggal : ''}</div>
          <div>{data?.transaksi.administrasi.length !== 0 ? 'Kelas '+data.transaksi.jenis_kamar : ''}</div>
          <div class="sm:text-right">{data?.transaksi.administrasi.length !== 0 ? data.transaksi.administrasi[0].harga_satuan : ''}</div>
          <div>{data?.transaksi.administrasi.length !== 0 ? data.transaksi.administrasi[0].quantity : ''}</div>
          <div>{data?.transaksi.administrasi.length !== 0 ? parseInt(data.transaksi.administrasi[0].quantity)*parseInt(data.transaksi.administrasi[0].harga_satuan) : ''}</div>
          <div class="sm:text-right border-b border-dashed border-slate-600">{data?.transaksi.administrasi.length !== 0 ? parseInt(data.transaksi.administrasi[0].quantity)*parseInt(data.transaksi.administrasi[0].harga_satuan) : ''}</div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 text-xs lg:text-lg font-medium py-2">
          <div class="sm:text-right col-span-6">Total Administrasi</div>
          <div class="sm:text-right border-b border-dashed border-slate-600" id="totalAdministrasi">{data?.transaksi.administrasi.length !== 0 ? parseInt(data.transaksi.administrasi[0].quantity)*parseInt(data.transaksi.administrasi[0].harga_satuan) : ''}</div>
        </div>
      </div>
      <div class="my-2">
        <div class="text-xs lg:text-lg font-semibold pb-2 border-b border-dashed border-slate-600">Ruang Perawatan</div>
        <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 text-xs lg:text-lg font-base py-2">
          <div>{data?.transaksi.ruang_perawatan.length !== 0 ? data.transaksi.ruang_perawatan[0].deskripsi : ''}</div>
            <div>{data?.transaksi.ruang_perawatan.length !== 0 ? data.transaksi.ruang_perawatan[0].tanggal : ''}</div>
            <div>{data?.transaksi.ruang_perawatan.length !== 0 ? 'Kelas '+data.transaksi.jenis_kamar : ''}</div>
            <div class="sm:text-right">{data?.transaksi.ruang_perawatan.length !== 0 ? data.transaksi.ruang_perawatan[0].harga_satuan : ''}</div>
            <div>{data?.transaksi.ruang_perawatan.length !== 0 ? data.transaksi.ruang_perawatan[0].quantity : ''}</div>
            <div>{data?.transaksi.ruang_perawatan.length !== 0 ? parseInt(data.transaksi.ruang_perawatan[0].quantity)*parseInt(data.transaksi.ruang_perawatan[0].harga_satuan) : ''}</div>
            <div class="sm:text-right border-b border-dashed border-slate-600">{data?.transaksi.ruang_perawatan.length !== 0 ? parseInt(data.transaksi.ruang_perawatan[0].quantity)*parseInt(data.transaksi.ruang_perawatan[0].harga_satuan) : ''}
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 text-xs lg:text-lg font-medium py-2">
          <div class="sm:text-right col-span-6">Total Ruang Perawatan</div>
          <div id="totalRuangPerawatan" class="sm:text-right border-b border-dashed border-slate-600">{data?.transaksi.ruang_perawatan.length !== 0 ? parseInt(data.transaksi.ruang_perawatan[0].quantity)*parseInt(data.transaksi.ruang_perawatan[0].harga_satuan) : ''}</div>
        </div>
      </div>
      <div class="my-2">
        <div class="text-xs lg:text-lg font-semibold pb-2 border-b border-dashed border-slate-600">Visit Dokter</div>
        {#if data?.transaksi.visit_dokter.length !== 0}
          {#each data?.transaksi.visit_dokter as visit_dokter}
            <div class="py-1">
              <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 text-xs lg:text-lg font-base py-2">
                <div class="font-medium text-xs lg:text-lg">{visit_dokter.deskripsi}</div>
                <div>{visit_dokter.tanggal}</div>
                <div>Kelas {data.transaksi.jenis_kamar}</div>
                <div class="sm:text-right">{visit_dokter.harga_satuan}</div>
                <div>{visit_dokter.quantity}</div>
                <div>{parseInt(visit_dokter.harga_satuan) * parseInt(visit_dokter.quantity)}</div>
                <div class="sm:text-right border-b border-dashed border-slate-600">{parseInt(visit_dokter.harga_satuan) * parseInt(visit_dokter.quantity)}</div>
              </div>
            </div>
          {/each}
        {/if}
        <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 text-xs lg:text-lg font-medium py-2">
          <div class="sm:text-right col-span-6">Total Visit Dokter</div>
          <div id="totalVisitDokter" class="sm:text-right border-b border-dashed border-slate-600" contenteditable="true" bind:innerHTML={totalVisitDokter}></div>
        </div>
      </div>
      <div class="my-2">
        <div class="text-xs lg:text-lg font-semibold pb-2 border-b border-dashed border-slate-600">Obat</div>
        {#if data?.transaksi.obat_bahan_habis_pakai.length !== 0}
          {#each data?.transaksi.obat_bahan_habis_pakai as obat}
            <div class="py-1">
              <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 text-xs lg:text-lg font-base py-2">
                <div>{obat.deskripsi}</div>
                <div>{obat.tanggal}</div>
                <div>Kelas {data.transaksi.jenis_kamar}</div>
                <div class="sm:text-right">{obat.harga_satuan}</div>
                <div>{obat.quantity}</div>
                <div>{parseInt(obat.harga_satuan) * parseInt(obat.quantity)}</div>
                <div class="sm:text-right border-b border-dashed border-slate-600">{parseInt(obat.harga_satuan) * parseInt(obat .quantity)}</div>
              </div>
            </div>
          {/each}
        {/if}
        <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 text-xs lg:text-lg font-medium py-2">
          <div class="sm:text-right col-span-6">Total Obat</div>
          <div id="totalObat" class="sm:text-right border-b border-dashed border-slate-600" contenteditable="true" bind:innerHTML={totalObat}></div>
        </div>
      </div>
      <hr class="my-2 border-slate-600">
      <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 text-sm lg:text-lg font-semibold">
        <div class="sm:col-span-4 lg:col-span-6">
          Total Biaya
        </div>
        <div id="totalBiaya" class="sm:col-span-3 lg:col-span-1 sm:text-right" contenteditable="true" bind:innerHTML={totalBiaya}></div>
      </div>
    </div>
  </section>
</div>