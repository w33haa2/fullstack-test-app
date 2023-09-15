<template>
  <div  class="bg-white rounded shadow mb-4">
    <div  class="p-4 border-b">
      <div  class="flex items-center">
        <p  class="text-lg font-medium mr-auto">Welcome, Jan Rey!</p>
      </div>
      <p  class="text-gray-600 text-sm"><span  class="text-green-500">You are almost done!</span> To further strengthen your profile, it is highly recommended for you to complete the 4 sections of your application.</p>
    </div>
    <div  class="stepper-component __stepper bg-white rounded-md shadow-sm xl:mx-0" stepping="applicantProfile">
      <div  class="stepper-component__items-wrapper flex">
        <div  class="stepper-component__group-wrapper p-3 flex items-center relative w-1/4 hover:cursor-pointer">
          <div  class="stepper-component__group flex items-center w-full lg:px-2">
            <div  class="mr-1 rounded-full my-auto md:block md:mr-4 bg-gray-200">
              <div  class="h-8 w-8 flex items-center justify-center sm:h-10 sm:w-10 text-gray-700">
                <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-check w-6/12">
                  <path  fill="currentColor" d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" class></path>
                </svg>
              </div>
            </div>
            <div  class="stepper-component__group__inner w-full flex items-center md:block">
              <p  class="font-semibold text-gray-700">Applicant Profile</p>
              <div  class="flex items-center">
                <div  class="overflow-hidden text-xs hidden rounded bg-gray-200 mr-2 w-full h-1.5 lg:flex">
                  <div  class="shadow-none flex flex-col text-center whitespace-nowrap bg-orange-400 justify-center bg-success" style="width: 75%;"></div>
                </div>
                <p  class="font-semibold ml-1 md:ml-0 text-orange-500" style="font-size: 12px;">75%</p>
              </div>
            </div>
          </div>
        </div>
        <div  class="stepper-component__group-wrapper p-3 flex items-center relative w-1/4 hover:cursor-pointer">
          <div  class="stepper-component__group flex items-center w-full lg:px-2">
            <div  class="mr-1 rounded-full md:block md:mr-4 bg-gray-200">
              <div  class="h-8 w-8 flex items-center justify-center sm:h-10 sm:w-10 text-gray-700">
                <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="memo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="text-gray-600 w-6/12 svg-inline--fa fa-check ">
                  <path  fill="currentColor" d="M64 32C46.3 32 32 46.3 32 64V448c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm80 64H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16z" class></path>
                </svg>
              </div>
            </div>
            <div  class="stepper-component__group__inner w-full flex items-center md:block">
              <p  class="font-semibold text-gray-700">Resume / CV</p>
              <div  class="flex items-center">
                <div  class="overflow-hidden text-xs hidden rounded bg-gray-200 mr-2 w-full h-1.5 lg:flex">
                  <div  class="shadow-none flex flex-col text-center bg-red-400  whitespace-nowrap justify-center bg-success" style="width: 50%;"></div>
                </div>
                <p  class="font-semibold ml-1 md:ml-0 text-red-500 text-success" style="font-size: 12px;">50%</p>
              </div>
            </div>
          </div>
        </div>
        <div  class="stepper-component__group-wrapper p-3 flex items-center relative w-1/4 hover:cursor-pointer">
          <div  class="stepper-component__group flex items-center w-full lg:px-2">
            <div  class="mr-1 rounded-full md:block md:mr-4 bg-gray-200">
              <div  class="h-8 w-8 flex items-center justify-center text-gray-600 sm:h-10 sm:w-10">
                <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chart-column" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6/12 svg-inline--fa fa-chart-column">
                  <path  fill="currentColor" d="M16 32c8.8 0 16 7.2 16 16V400c0 26.5 21.5 48 48 48H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.2 0-80-35.8-80-80V48c0-8.8 7.2-16 16-16zM144 256c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V272c0-8.8 7.2-16 16-16zM256 144V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 48c8.8 0 16 7.2 16 16V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm112-80V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16z" class></path>
                </svg>
              </div>
            </div>
            <div  class="stepper-component__group__inner w-full flex items-center md:block">
              <p  class="font-semibold text-gray-700">Assessment Score</p>
              <div  class="flex items-center">
                <div  class="overflow-hidden text-xs hidden rounded bg-gray-200 mr-2 w-full h-1.5 lg:flex">
                  <div  class="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-success" style="width: 100%;"></div>
                </div>
                <p  class="font-semibold ml-1 md:ml-0 text-success" style="font-size: 12px;">100%</p>
              </div>
            </div>
          </div>
        </div>
        <div  class="stepper-component__group-wrapper p-3 flex items-center relative w-1/4 hover:cursor-pointer">
          <div  class="stepper-component__group flex items-center w-full lg:px-2">
            <div  class="mr-1 rounded-full md:block md:mr-4 bg-gray-200">
              <div  class="h-8 w-8 flex items-center justify-center sm:h-10 sm:w-10">
                <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clapperboard-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6/12 svg-inline--fa fa-clapperboard-play text-gray-600">
                  <path  fill="currentColor" d="M480 192V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192H480zm0-32H382.6l87.3-87.3C476.1 78.5 480 86.8 480 96v64zm-249.4 0l96-96H433.4l-96 96H230.6zm-45.3 0H78.6l96-96H281.4l-96 96zM64 64h65.4l-96 96H32V96c0-17.7 14.3-32 32-32zm448 96V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64 16 16V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192 176 160zM216.1 226.2c-4.9-2.9-11.1-2.9-16.1-.1s-8.1 8.1-8.1 13.9V400c0 5.7 3.1 11 8.1 13.9s11.1 2.8 16.1-.1l136-80c4.9-2.9 7.9-8.1 7.9-13.8s-3-10.9-7.9-13.8l-136-80zM312.4 320L224 372V268l88.4 52z" class></path>
                </svg>
              </div>
            </div>
            <div  class="stepper-component__group__inner w-full flex items-center md:block">
              <p  class="font-semibold text-gray-700">Video Introduction</p>
              <div  class="flex items-center">
                <div  class="overflow-hidden text-xs hidden rounded bg-gray-200 mr-2 w-full h-1.5 lg:flex">
                  <div  class="shadow-none flex flex-col text-center whitespace-nowrap justify-center bg-danger" style="width: 0%;"></div>
                </div>
                <p  class="font-semibold ml-1 md:ml-0 text-danger" style="font-size: 12px;">0%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>