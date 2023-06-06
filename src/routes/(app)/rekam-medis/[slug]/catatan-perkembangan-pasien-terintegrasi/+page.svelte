<script>
  import { Button} from "flowbite-svelte";
  import Catatan from "./Catatan.svelte";
  import { DataHandler, Datatable, Th } from "@vincjo/datatables";
  import "../../../tableCustom.css";

  let dummyCatatan = [
    {
      "tgl_jam": "2023-03-19 08:00:00",
      "ppa": "Perawat",
      "identitas_ppa": "Stephanus Yogi",
      "hasil": "<p>S: Nyeri akut lutut kiri sejak 1-2 jam</p><p>O: Skala nyeri VAS: 7 TD 165/90, N 115/m, Frek Nafas: 30/m</p><p>A: Nyeri akut athritis gout</p><p>P: Mengatasi nyeri dalam 2 jam dengan target VAS < 4</p>",
      "instruksi": "<ol><li>Monitoring nyeri tiap 30'</li><li>Lapor DPJP</li><li>Kolaborasi pemberian anti inlamasi & analgesic</li></ol>",
      "dpjp": "Belum Diverifikasi",
    },
    {
      "tgl_jam": "2023-03-19 10:30:00",
      "ppa": "Dokter",
      "identitas_ppa": "dr. Khal Drogo, Sp PD FINASIM",
      "hasil": "<p>S: Nyeri lutut kiri akut sejak pagi</p><p>O: Lutut kiri agak merah, nyeri tekan, skala NTS 7-8, hangat pada palpasi</p><p>A: Gouty Arthritis - flare Genu Sinistra</p><p>P: Inj steroid xx mg, tab colchicine 2x0,6 mg/hari</p>",
      "instruksi": "<ol><li>Lapor 2 jam lagi skala nyeri</li><li>Foto ro lutut hari ini bila nyeri mereda/toleransi cukup</li></ol>",
      "dpjp": "dr. Khal Drogo, Sp PD FINASIM",
    },
  ];

  const handler = new DataHandler(dummyCatatan, { rowsPerPage: 10 });
  const rows = handler.getRows();
</script>
<main>
  <div class="flex items-center justify-between">
    <div>
      <p class="text-md sm:text-lg lg:text-xl font-semibold">Form 12.16 Catatan Perkembangan Pasien Terintegrasi</p>
    </div>
    <Button href="catatan-perkembangan-pasien-terintegrasi/tambah" color="green" size="sm">
      <svg xmlns="http://www.w3.org/2000/svg" class="sm:mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg><span class="hidden sm:block">Tambah</span></Button>
  </div>
  <hr class="my-5">
  <section class="table-section">
    <Datatable {handler}>
      <table>
        <thead>
          <tr>
            <Th {handler} orderBy="tgl_jam">Tanggal & Jam</Th>
            <Th {handler} orderBy="hasil">Hasil Asesmen Pasien & Pemberian Layanan</Th>
            <Th {handler} orderBy="instruksi">Instruksi</Th>
            <Th {handler} orderBy="ppa">Profesional Pemberi Asuhan(PPA)</Th>
            <Th {handler} orderBy="identitas_ppa">Identitas PPA</Th>
            <Th {handler} orderBy="dpjp">Verifikasi DPJP</Th>
          </tr>
        </thead>
        <tbody>
          {#each $rows as { tgl_jam, ppa, hasil, instruksi, dpjp, identitas_ppa }}
            <Catatan tgl_jam={tgl_jam} ppa={ppa} hasil={hasil} instruksi={instruksi} dpjp={dpjp} identitas_ppa={identitas_ppa}/>
          {/each}   
        </tbody>
      </table>
    </Datatable>
  </section>
</main>
