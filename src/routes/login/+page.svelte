<script>
  export let form;

  import { Button, FloatingLabelInput, Helper } from "flowbite-svelte";
  import logo from "$lib/images/logo-icon-tab.png";
  import Swal from "sweetalert2";

  if (form?.message) {
    Swal.fire({
      icon: "error",
      text: form?.message,
      showConfirmButton: false,
      timer: 2000,
    });
  }
</script>

<div
  class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
>
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      class="hidden sm:block absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
    />
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <img src={logo} alt="RSI Aisyah Malang" class="w-14 mx-auto mb-2" />
          <h1 class="text-xl sm:text-2xl font-semibold mx-auto tracking-wider">
            Selamat Datang!
          </h1>
          <h2 class="text-md sm:text-lg font-medium mx-auto">
            Sistem Rekam Medis Rawat Inap - RSI Aisyah
          </h2>
        </div>
        <form class="divide-y divide-gray-200" method="POST">
          <div
            class="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
          >
            <div class="relative">
              <FloatingLabelInput
                style="outlined"
                id="email"
                name="email"
                type="text"
                label="Email"
                value={form?.email}
                required
              />
            </div>
            <div class="relative">
              <FloatingLabelInput
                style="outlined"
                id="password"
                name="password"
                type="password"
                label="Password"
                required
              />
            </div>
            <div class="relative text-right">
              <Button type="submit" color="green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 -ml-1 w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21h-7Zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5l-5 5Z"
                  /></svg
                >
                Masuk
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
