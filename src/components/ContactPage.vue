<template>
  <div class="text-[#c1d1e8] pageFont md:w-100 md:flex md:flex-col md:items-center">
    <div class="md:w-[400px]">
    <h1 class="text-2xl mb-10">GET IN TOUCH</h1>

    <p class="mb-10"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

    <form class="flex flex-col bg-[#0e1a2b]">

      <h2 class="text-[#c1d1e8] mb-5 p-3">Contact Form</h2>

      <div class="flex flex-row">

        <div class="flex flex-col w-full p-3">
          <label class="mb-2">Name <span class="text-[#5692e8]">*</span></label>
          <input class="bg-[#182c47] h-[35px]">
        </div>

        <div class="flex flex-col w-full p-3"> 
          <label class="mb-2">Email Address <span class="text-[#5692e8]">*</span></label>
          <input class="bg-[#182c47] h-[35px]">
        </div>
      </div>

      <div class="flex flex-col w-full p-3">
        <label class="mb-2">Message <span class="text-[#5692e8]">*</span></label>
        <input class="bg-[#182c47] h-[100px]">
      </div>

      <div class="p-3 flex justify-end">
        <button class="bg-[#5692e8] w-[100px] p-1 font-bold">Send</button>
      </div>

    </form>
</div>
</div>
</template>
<script>
export default {
  name: 'ContactPage',
  
}
</script>

<style scoped>

  .pageFont {
    font-weight: 600;
    font-family: 'Montserrat';
  }
</style>
