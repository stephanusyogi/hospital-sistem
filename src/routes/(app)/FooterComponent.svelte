<script>
  import { Footer, FooterCopyright } from "flowbite-svelte";
</script>

<Footer>
  <FooterCopyright href="/" by="RSI Aisyah Hospital Sistem" year={2023} />
  <div>
    <p class="text-xs md:text-sm text-gray-500 dark:bg-gray-800">
      Integrated with <span
        ><a class="hover:underline" href="https://clinicaltables.nlm.nih.gov/"
          >Clinical Table Search Service</a
        ></span
      > for ICD-10 Diagnoses & ICD-9 Procedures Koding.
    </p>
  </div>
</Footer>
