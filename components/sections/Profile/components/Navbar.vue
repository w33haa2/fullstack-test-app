<template>
  <nav class="bg-white shadow" style="position: sticky; top: 0; z-index: 100">
    <div  class="w-full z-10 sticky sticky-position top-0 hidden lg:block">
      <div  class="brand relative px-6 flex items-center py-2.5 bg-white shadow-sm">
        <img  src="https://go.team/wp-content/uploads/2022/05/goteam-logo-dark.png" width="110px" class="mr-9 cursor-pointer">
        <div  class="flex items-center gap-x-9 h-full mr-auto">
          <div  class="flex items-center cursor-pointer text-gray-600 h-full hover:text-primary">
            <span >Careers</span>
          </div>
          <div  class="flex items-center cursor-pointer text-gray-600 h-full hover:text-primary">
            <span >Find your Role</span>
          </div>
        </div>
        <div  class="absolute w-3/12" style="left: 36.5%;">
          <form   class="search relative flex items-center">
            <input  placeholder="Type a job title or role" class="search__input rounded-full border w-full pl-4 pr-24 w-60 py-2 text-base focus:outline-none lg:pr-24">
          </form>
        </div>
        <div  class="relative">
          <div  class="cursor-pointer flex items-center">
            <div  class="mr-2 text-right">
              <p  class="font-semibold text-base text-gray-900">Jan Rey M. Suarez</p>
              <p  class="text-blue-600 text-sm">w33haa2@gmail.com</p>
            </div>
            <div class="mr-2 border h-9 w-9 bg-gray-300 rounded-full"></div>
            <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-gray-600 svg-inline--fa fa-chevron-down">
              <path  fill="currentColor" d="M267.3 395.3c-6.2 6.2-16.4 6.2-22.6 0l-192-192c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L256 361.4 436.7 180.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-192 192z" class="">

              </path>
            </svg>
          </div>
          <ul  class="absolute top-9 right-0 bg-white mt-2 py-2 w-48 rounded shadow-lg" style="display: none;">
            <a  href="/profile/personal-info" class="cursor-pointer flex items-center text-base px-4 py-2 text-gray-800 hover:text-primary nuxt-link-exact-active nuxt-link-active" aria-current="page">
              <span  class="font-semibold">My Profile</span><svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="circle-user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ml-auto fa-lg svg-inline--fa fa-circle-user fa-fw">
              <path  fill="currentColor" d="M412.1 416.6C398.1 361.1 347.9 320 288 320H224c-59.9 0-110.1 41.1-124.1 96.6C58 375.9 32 319 32 256C32 132.3 132.3 32 256 32s224 100.3 224 224c0 63-26 119.9-67.9 160.6zm-28.5 23.4C347.5 465.2 303.5 480 256 480s-91.5-14.8-127.7-39.9c4-49.3 45.3-88.1 95.7-88.1h64c50.4 0 91.6 38.8 95.7 88.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-256a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm-80-48a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" class="">
              </path>
            </svg>
            </a>
            <a  href="/profile/application-tracking" class="cursor-pointer flex items-center text-base px-4 py-2 text-gray-800 hover:text-primary">
              <span  class="font-semibold">Tracking</span><svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ml-auto fa-lg svg-inline--fa fa-briefcase fa-fw"><path  fill="currentColor" d="M160 48V96H352V48c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM128 96V48c0-26.5 21.5-48 48-48H336c26.5 0 48 21.5 48 48V96h64c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64zm240 32H144 64c-17.7 0-32 14.3-32 32v96H176h32 96 32H480V160c0-17.7-14.3-32-32-32H368zM480 288H336v48c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V288H32V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V288zm-272 0v48h96V288H208z" class="">
            </path>
            </svg>
            </a>
            <a  href="/profile/bookmarks" class="cursor-pointer flex items-center text-base px-4 py-2 text-gray-800 hover:text-primary">
              <span  class="font-semibold">
                Bookmarks
              </span>
              <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="ml-auto fa-lg svg-inline--fa fa-bookmark fa-fw">
                <path  fill="currentColor" d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V489.9c0 12.2-9.9 22.1-22.1 22.1c-4.4 0-8.6-1.3-12.3-3.7L192 403.2 34.4 508.3c-3.6 2.4-7.9 3.7-12.3 3.7C9.9 512 0 502.1 0 489.9V48zM48 32c-8.8 0-16 7.2-16 16V471.4L183.1 370.7c5.4-3.6 12.4-3.6 17.8 0L352 471.4V48c0-8.8-7.2-16-16-16H48z" class="">
                </path></svg></a>
            <a  href="/profile/settings/credentials" class="cursor-pointer flex items-center text-base px-4 py-2 text-gray-800 hover:text-primary">
              <span  class="font-semibold">Settings</span>
              <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="gear" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ml-auto fa-lg svg-inline--fa fa-gear fa-fw">
                <path  fill="currentColor" d="M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.1-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.1-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z" class="">

                </path>
              </svg>
            </a>
            <div  href="#" class="cursor-pointer flex items-center text-base px-4 py-2 text-gray-800 hover:text-primary">
              <span  class="font-semibold">
                Sign-out
              </span>
              <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-right-from-bracket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="ml-auto fa-lg svg-inline--fa fa-arrow-right-from-bracket fa-fw"><path  fill="currentColor" d="M507.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 240 176 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l281.4 0L356.7 372.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM176 64c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 32C35.8 32 0 67.8 0 112L0 400c0 44.2 35.8 80 80 80l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l96 0z" class="">

              </path>
              </svg>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>