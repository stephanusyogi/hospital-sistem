<script>
  import {
    Button,
    Input,
    Label,
    Radio,
    Search,
    Select,
    Textarea,
  } from "flowbite-svelte";
  import { goto } from "$app/navigation";
  import Swal from "sweetalert2";
  import { page } from "$app/stores";

  const no_rm = $page.params.slug;

  let jenisRuangan = [
    { value: "Kelas VVIP", name: "Kelas VVIP" },
    { value: "Kelas VIP", name: "Kelas VIP" },
    { value: "Kelas 1", name: "Kelas 1" },
    { value: "Kelas 2", name: "Kelas 2" },
    { value: "Kelas 3", name: "Kelas 3" },
    { value: "Kelas Khusus Anak", name: "Kelas Khusus Anak" },
    { value: "Kelas Obstetri", name: "Kelas Obstetri" },
  ];

  let asalRujukan = [
    { value: "Poliklinik", name: "Poliklinik" },
    { value: "Rumah Sakit Swasta", name: "Rumah Sakit Swasta" },
    { value: "Puskesmas", name: "Puskesmas" },
  ];

  let namaRuangan = [
    { value: "Kamar Wisnu", name: "Kamar Wisnu" },
    { value: "Kamar Amarta", name: "Kamar Amarta" },
    { value: "Kamar Rama", name: "Kamar Rama" },
  ];

  let poliklinik = [
    {
      value: "Poliklinik Obstetri & Ginekologi",
      name: "Poliklinik Obstetri & Ginekologi",
    },
    { value: "Poliklinik Anak", name: "Poliklinik Anak" },
    { value: "Poliklinik Penyakit Dalam", name: "Poliklinik Penyakit Dalam" },
    { value: "Poliklinik Bedah Umum", name: "Poliklinik Bedah Umum" },
    { value: "Poliklinik Bedah Onkologi", name: "Poliklinik Bedah Onkologi" },
    { value: "Poliklinik Mata", name: "Poliklinik Mata" },
    { value: "Poliklinik Saraf", name: "Poliklinik Saraf" },
    { value: "Poliklinik Bedah Digistif", name: "Poliklinik Bedah Digistif" },
    { value: "Poli Paru", name: "Poli Paru" },
    { value: "Poliklinik Orthopaedi", name: "Poliklinik Orthopaedi" },
    { value: "Poliklinik Bedah Plastik", name: "Poliklinik Bedah Plastik" },
    { value: "Poliklinik Urologi", name: "Poliklinik Urologi" },
    { value: "Poliklinik Jiwa", name: "Poliklinik Jiwa" },
    { value: "Poliklinik Kulit & Kelamin", name: "Poliklinik Kulit & Kelamin" },
    { value: "Poliklinik THT", name: "Poliklinik THT" },
    { value: "Poliklinik Gizi", name: "Poliklinik Gizin" },
    { value: "Poliklinik Anastesi", name: "Poliklinik Anastesi" },
    { value: "Poliklinik Gigi & Mulut", name: "Poliklinik Gigi & Mulut" },
    { value: "Poliklinik Bedah Mulut", name: "Poliklinik Bedah Mulut" },
    { value: "Poliklinik Bedah Syaraf", name: "Poliklinik Bedah Syaraf" },
  ];

  let dpjpUtama = [
    {
      value: "dr. Khal Drogo, M.Biomed, Sp.PD",
      name: "dr. Khal Drogo, M.Biomed, Sp.PD",
    },
    {
      value: "dr. Viserys Targaryen, M.Biomed, Sp.JP",
      name: "dr. Viserys Targaryen, M.Biomed, Sp.JP",
    },
    {
      value: "dr. Khal Drogo, M.Biomed, Sp.OT",
      name: "dr. Khal Drogo, M.Biomed, Sp.OT",
    },
    {
      value: "dr. Viserys Targaryen. Sp. KJ",
      name: "dr. Viserys Targaryen. Sp. KJ",
    },
    { value: "dr. Ramsay Bolton	,Sp.KK", name: "dr. Ramsay Bolton	,Sp.KK" },
    {
      value: "dr. Ramsay Bolton	, M.Kes., Sp.GK",
      name: "dr. Ramsay Bolton	, M.Kes., Sp.GK",
    },
  ];

  let selectedUnit;
  const onChangeUnit = (event) => {
    selectedUnit = event.currentTarget.value;
  };

  let selectedAsalRujukan;
  const onChangeAsalRujukan = (event) => {
    selectedAsalRujukan = event.currentTarget.value;
  };

  let diagnosaSementara = [
    {
      kode_icd10: "",
      deskripsi_diagnosa: "",
    },
  ];

  let tindakan = [
    {
      kode_icd9: "",
      deskripsi_tindakan: "",
    },
  ];

  function addDiagnosa() {
    diagnosaSementara = [
      ...diagnosaSementara,
      {
        kode_icd10: "",
        deskripsi_diagnosa: "",
      },
    ];
  }

  function deleteDiagnosa(index) {
    diagnosaSementara = diagnosaSementara.filter((_, i) => i !== index);
  }

  function addTindakan() {
    tindakan = [
      ...tindakan,
      {
        kode_icd9: "",
        deskripsi_tindakan: "",
      },
    ];
  }

  function deleteTindakan(index) {
    tindakan = tindakan.filter((_, i) => i !== index);
  }

  const handleSubmit = (no_rm) => {
    Swal.fire({
      title: "Simpan & Perbarui Pemeriksaan Awal?",
      text: "Mohon berhati-hati, aksi ini bersifat permanen pada database.",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Simpan",
      denyButtonText: `Batal`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Pemeriksaan Awal Disimpan & Diperbarui",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          goto(`/rekam-medis/${no_rm}/pemeriksaan-awal`);
        });
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          title: "Aksi Dibatalkan",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };
</script>

<main>
  <form on:submit|preventDefault={() => handleSubmit(no_rm)}>
    <div class="flex flex-wrap sm:flex-nowrap items-center justify-between">
      <div>
        <p class="text-md sm:text-lg lg:text-xl font-semibold">
          Pemeriksaan Awal
        </p>
        <p class="text-red-500 text-sm">(*) Wajib diisi.</p>
      </div>
      <Button type="submit" size="sm" color="green">Simpan Perubahan</Button>
    </div>
    <hr class="my-5" />
    <div class="overflow-y-auto max-h-screen">
      <div class="border border-slate-300 rounded p-4 w-full">
        <p class="text-xl font-semibold">Data Pemeriksaan</p>
        <hr class="my-2" />
        <div class="mb-2">
          <p class="text-md sm:text-lg font-medium italic">
            Cara Kedatangan Pasien
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div class="grid grid-cols-2 gap-4 py-2">
              <div class="grouphelperPagination col-span-2">
                <Label for="" class="block mb-2"
                  >Unit Penerima: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <div class="flex gap-2">
                  <Radio
                    name="masuk_melalui"
                    checked={selectedUnit === "IGD"}
                    on:change={onChangeUnit}
                    value="IGD">IGD</Radio
                  >
                  <Radio
                    name="masuk_melalui"
                    checked={selectedUnit === "Poliklinik"}
                    on:change={onChangeUnit}
                    value="Poliklinik">Poliklinik</Radio
                  >
                </div>
              </div>
              {#if selectedUnit === "Poliklinik"}
                <div class="grouphelperPagination col-span-2">
                  <Label
                    >Poliklinik: <span class="text-red-500 text-lg">*</span>
                    <Select name="polikinik" class="mt-2" items={poliklinik} />
                  </Label>
                </div>
              {/if}
            </div>
            <div class="grid grid-cols-2 gap-4 py-2">
              <div class="grouphelperPagination col-span-2">
                <Label for="" class="block mb-2"
                  >Asal Rujukan: <span class="text-red-500 text-lg">*</span
                  ></Label
                >
                <div class="flex gap-2">
                  <Radio
                    name="asal_rujukan"
                    checked={selectedAsalRujukan === "Datang Sendiri"}
                    on:change={onChangeAsalRujukan}
                    value="Datang Sendiri">Datang Sendiri</Radio
                  >
                  <Radio
                    name="asal_rujukan"
                    checked={selectedAsalRujukan === "Rujukan"}
                    on:change={onChangeAsalRujukan}
                    value="Rujukan">Rujukan</Radio
                  >
                </div>
              </div>
              {#if selectedAsalRujukan === "Rujukan"}
                <div class="grouphelperPagination col-span-2">
                  <Label
                    >Unit Asal Rujukan: <span class="text-red-500 text-lg"
                      >*</span
                    >
                    <Select
                      name="unit_asal_rujukan"
                      class="mt-2"
                      items={asalRujukan}
                    />
                  </Label>
                </div>
              {/if}
            </div>
          </div>
          <div class="group mb-4" />
        </div>
        <div class="mb-2">
          <p class="text-md sm:text-lg font-medium italic">
            Diagnosa & Tindakan
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div class="col-span-2 grouphelperPagination">
              <Label
                >DPJP: <span class="text-red-500 text-lg">*</span>
                <Select name="dpjp_utama" class="mt-2" items={dpjpUtama} />
              </Label>
            </div>
            <div class="grouphelperPagination col-span-2 flex gap-4">
              <Search size="md" placeholder="ICD-10 Koding Search" />
              <Button size="md" on:click={addDiagnosa}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  class="sm:mr-2"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  /></svg
                ><span class="hidden sm:block"> Diagnosa</span>
              </Button>
            </div>
            <div class="grouphelperPagination col-span-2">
              {#each diagnosaSementara as tag, i}
                <div class="flex flex-wrap sm:flex-nowrap gap-4 py-2">
                  <Input
                    name="icd10[]"
                    placeholder="Masukkan Kode ICD-10"
                    bind:value={diagnosaSementara[i].kode_icd10}
                  />
                  <Textarea
                    name="diagnosa_sementara[]"
                    placeholder="Masukkan Diagnosa Sementara"
                    rows="2"
                    bind:value={diagnosaSementara[i].deskripsi_diagnosa}
                  />
                  <Button
                    on:click={() => deleteDiagnosa(i)}
                    class="w-full sm:w-24"
                    size="xs"
                    color="red"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 24"
                      ><path
                        fill="currentColor"
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
                      /></svg
                    ></Button
                  >
                </div>
              {/each}
            </div>
            <div class="grouphelperPagination col-span-2 flex gap-4">
              <Search size="md" placeholder="ICD-9 Koding Search" />
              <Button size="md" on:click={addTindakan}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  class="sm:mr-2"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
                  /></svg
                ><span class="hidden sm:block"> Tindakan</span>
              </Button>
            </div>
            <div class="grouphelperPagination col-span-2">
              {#each tindakan as tag, i}
                <div class="flex flex-wrap sm:flex-nowrap gap-4 py-2">
                  <Input
                    name="icd19[]"
                    placeholder="Masukkan Kode ICD-9"
                    bind:value={tindakan[i].kode_icd9}
                  />
                  <Textarea
                    name="tindakan[]"
                    placeholder="Masukkan Tindakan"
                    rows="2"
                    bind:value={tindakan[i].deskripsi_tindakan}
                  />
                  <Button
                    on:click={() => deleteTindakan(i)}
                    class="w-full sm:w-24"
                    size="xs"
                    color="red"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      viewBox="0 0 24 24"
                      ><path
                        fill="currentColor"
                        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
                      /></svg
                    ></Button
                  >
                </div>
              {/each}
            </div>
          </div>
        </div>
        <div class="mb-2">
          <p class="text-md sm:text-lg font-medium italic">Ruangan</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            <div class="grouphelperPagination">
              <Label
                >Jenis Kamar: <span class="text-red-500 text-lg">*</span>
                <Select name="jenis_kamar" class="mt-2" items={jenisRuangan} />
              </Label>
            </div>
            <div class="grouphelperPagination">
              <Label
                >Nama Kamar: <span class="text-red-500 text-lg">*</span>
                <Select name="nama_kamar" class="mt-2" items={namaRuangan} />
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</main>
