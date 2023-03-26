<script>

  import { Button, Table, TableBody, TableHead, TableHeadCell } from "flowbite-svelte";
  import Catatan from "./Catatan.svelte";

  let dummyCatatan = [
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "ppa": "Perawat",
      "hasil": "<p>S: Nyeri akut lutut kiri sejak 1-2 jam</p><p>O: Skala nyeri VAS: 7 TD 165/90, N 115/m, Frek Nafas: 30/m</p><p>A: Nyeri akut athritis gout</p><p>P: Mengatasi nyeri dalam 2 jam dengan target VAS < 4</p>",
      "instruksi": "<ul><li>Monitoring nyeri tiap 30'</li><li>Lapor DPJP</li><li>Kolaborasi pemberian anti inlamasi & analgesic</li></ul>",
      "dpjp": "dr. Khal Drogo, Sp PD FINASIM",
    },
    {
      "tgl_jam": "2023-03-19 10:30:00",
      "ppa": "Dokter",
      "hasil": "<p>S: Nyeri lutut kiri akut sejak pagi</p><p>O: Lutut kiri agak merah, nyeri tekan, skala NTS 7-8, hangat pada palpasi</p><p>A: Gouty Arthritis - flare Genu Sinistra</p><p>P: Inj steroid xx mg, tab colchicine 2x0,6 mg/hari</p>",
      "instruksi": "<ul><li>Lapor 2 jam lagi skala nyeri</li><li>Foto ro lutut hari ini bila nyeri mereda/toleransi cukup</li>",
      "dpjp": "dr. Khal Drogo, Sp PD FINASIM",
    },
  ];
</script>
<div class="my-5">
  <div class="flex flex-wrap items-centere justify-between">
    <div>
      <p class="font-medium text-xl">Data Aktivitas Perawatan Pasien Terbaru</p>
      <p class="font-base italic text-md">DRM - Catatan Perkembangan Pasien Terintegrasi</p>
    </div>
    <div>
      <Button color="green" href="/">Lihat Catatan Selengkapnya</Button>
    </div>
  </div>
</div>
<Table hoverable={true}>
  <TableHead>
    <TableHeadCell class="text-center">Tanggal & Jam</TableHeadCell>
    <TableHeadCell class="text-center">Profesional Pemberi Asuhan</TableHeadCell>
    <TableHeadCell class="text-center">Hasil Asesmen Pasien & Pemberian Layanan</TableHeadCell>
    <TableHeadCell class="text-center">Instruksi</TableHeadCell>
    <TableHeadCell class="text-center">Verifikasi DPJP</TableHeadCell>
  </TableHead>
  <TableBody> 
    {#each dummyCatatan as { tgl_jam, ppa, hasil, instruksi, dpjp }}
      <Catatan tgl_jam={tgl_jam} ppa={ppa} hasil={hasil} instruksi={instruksi} dpjp={dpjp}/>
    {/each}   
  </TableBody>
</Table>
