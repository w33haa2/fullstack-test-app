<template>
  <ul style="position: -webkit-sticky;position: sticky;top: 0;" class="flex flex-col text-gray-500 gap-y-2 hidden lg:block lg:w-2/12">
    <a  href="/profile/personal-info" aria-current="page">
      <li  class="text-base nav-item flex items-center justify-between bg-gray-100 w-full rounded px-3 py-2 cursor-pointer text-blue-600 font-semibold">
        <div>
          <svg  aria-hidden="false" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fa-lg mr-2 svg-inline--fa fa-user fa-fw">
            <path  fill="currentColor" d="M320 128a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM32 480H416c-1.2-79.7-66.2-144-146.3-144H178.3c-80 0-145 64.3-146.3 144zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" class></path>
          </svg>
          Profile
        </div>
        <svg  aria-hidden="false" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right">
          <path  fill="currentColor" d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" class></path>
        </svg>
      </li>
    </a>
    <a  href="/profile/resume-cv" class>
      <li  class="text-base nav-item w-full rounded px-3 py-2 cursor-pointer">
        <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="memo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="fa-lg mr-2 svg-inline--fa fa-memo fa-fw">
          <path  fill="currentColor" d="M64 32C46.3 32 32 46.3 32 64V448c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H64zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm80 64H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16s7.2-16 16-16z" class></path>
        </svg>
        Resume / CV
        <div  class="__chevron-icon ml-auto hidden">
          <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right">
            <path  fill="currentColor" d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" class></path>
          </svg>
        </div>
      </li>
    </a>
    <a  href="/profile/assessment" class>
      <li  class="text-base nav-item w-full rounded px-3 py-2 cursor-pointer">
        <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chart-column" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-lg mr-2 svg-inline--fa fa-chart-column fa-fw">
          <path  fill="currentColor" d="M16 32c8.8 0 16 7.2 16 16V400c0 26.5 21.5 48 48 48H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.2 0-80-35.8-80-80V48c0-8.8 7.2-16 16-16zM144 256c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V272c0-8.8 7.2-16 16-16zM256 144V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 48c8.8 0 16 7.2 16 16V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm112-80V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-8.8 7.2-16 16-16s16 7.2 16 16z" class></path>
        </svg>
        Assessment
        <div  class="__chevron-icon ml-auto hidden">
          <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right">
            <path  fill="currentColor" d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" class></path>
          </svg>
        </div>
      </li>
    </a>
    <a  href="/profile/video-introduction" class>
      <li  class="text-base nav-item w-full rounded px-3 py-2 cursor-pointer">
        <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="clapperboard-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-lg mr-2 svg-inline--fa fa-clapperboard-play fa-fw">
          <path  fill="currentColor" d="M480 192V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192H480zm0-32H382.6l87.3-87.3C476.1 78.5 480 86.8 480 96v64zm-249.4 0l96-96H433.4l-96 96H230.6zm-45.3 0H78.6l96-96H281.4l-96 96zM64 64h65.4l-96 96H32V96c0-17.7 14.3-32 32-32zm448 96V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64 16 16V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192 176 160zM216.1 226.2c-4.9-2.9-11.1-2.9-16.1-.1s-8.1 8.1-8.1 13.9V400c0 5.7 3.1 11 8.1 13.9s11.1 2.8 16.1-.1l136-80c4.9-2.9 7.9-8.1 7.9-13.8s-3-10.9-7.9-13.8l-136-80zM312.4 320L224 372V268l88.4 52z" class></path>
        </svg>
        Video Script
        <div  class="__chevron-icon ml-auto hidden">
          <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right">
            <path  fill="currentColor" d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" class></path>
          </svg>
        </div>
      </li>
    </a>
    <hr  class="my-3">
    <a  href="/profile/application-tracking" class>
      <li  class="text-base nav-item w-full rounded px-3 py-2 cursor-pointer">
        <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-lg mr-2 svg-inline--fa fa-briefcase fa-fw">
          <path  fill="currentColor" d="M160 48V96H352V48c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zM128 96V48c0-26.5 21.5-48 48-48H336c26.5 0 48 21.5 48 48V96h64c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64zm240 32H144 64c-17.7 0-32 14.3-32 32v96H176h32 96 32H480V160c0-17.7-14.3-32-32-32H368zM480 288H336v48c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V288H32V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V288zm-272 0v48h96V288H208z" class></path>
        </svg>
        Application Tracking
        <div  class="__chevron-icon ml-auto hidden">
          <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right">
            <path  fill="currentColor" d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" class></path>
          </svg>
        </div>
      </li>
    </a>
    <a  href="/profile/bookmarks" class>
      <li  class="text-base nav-item w-full rounded px-3 py-2 cursor-pointer">
        <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="fa-lg mr-2 svg-inline--fa fa-bookmark fa-fw">
          <path  fill="currentColor" d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V489.9c0 12.2-9.9 22.1-22.1 22.1c-4.4 0-8.6-1.3-12.3-3.7L192 403.2 34.4 508.3c-3.6 2.4-7.9 3.7-12.3 3.7C9.9 512 0 502.1 0 489.9V48zM48 32c-8.8 0-16 7.2-16 16V471.4L183.1 370.7c5.4-3.6 12.4-3.6 17.8 0L352 471.4V48c0-8.8-7.2-16-16-16H48z" class></path>
        </svg>
        Bookmarked
        <div  class="__chevron-icon ml-auto hidden">
          <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right">
            <path  fill="currentColor" d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" class></path>
          </svg>
        </div>
      </li>
    </a>
    <a  href="/profile/activity-logs" class>
      <li  class="text-base nav-item w-full rounded px-3 py-2 cursor-pointer">
        <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="wave-pulse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="fa-lg mr-2 svg-inline--fa fa-wave-pulse fa-fw">
          <path  fill="currentColor" d="M319.6 0c7.5-.2 14.1 4.9 15.9 12.1l84 336 37.6-93.9c7.3-18.2 24.9-30.2 44.6-30.2H624c8.8 0 16 7.2 16 16s-7.2 16-16 16H501.7c-6.5 0-12.4 4-14.9 10.1l-56 139.9c-2.6 6.4-9 10.5-15.9 10s-12.8-5.4-14.4-12.1l-78.7-315-82 410.2c-1.5 7.3-7.8 12.7-15.3 12.9s-14.1-4.9-15.9-12.1L150.5 268.1C148.8 261 142.4 256 135 256H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H135c22 0 41.2 15 46.6 36.4l40.7 162.7 82-410.2C305.8 5.5 312.1 .2 319.6 0z" class></path>
        </svg>
        Notifications
        <div  class="__chevron-icon ml-auto hidden">
          <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right">
            <path  fill="currentColor" d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" class></path>
          </svg>
        </div>
      </li>
    </a>
    <a  href="/profile/activity-logs" class>
      <li  class="text-base nav-item w-full rounded px-3 py-2 cursor-pointer">
        <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="wave-pulse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="fa-lg mr-2 svg-inline--fa fa-wave-pulse fa-fw">
          <path  fill="currentColor" d="M319.6 0c7.5-.2 14.1 4.9 15.9 12.1l84 336 37.6-93.9c7.3-18.2 24.9-30.2 44.6-30.2H624c8.8 0 16 7.2 16 16s-7.2 16-16 16H501.7c-6.5 0-12.4 4-14.9 10.1l-56 139.9c-2.6 6.4-9 10.5-15.9 10s-12.8-5.4-14.4-12.1l-78.7-315-82 410.2c-1.5 7.3-7.8 12.7-15.3 12.9s-14.1-4.9-15.9-12.1L150.5 268.1C148.8 261 142.4 256 135 256H16c-8.8 0-16-7.2-16-16s7.2-16 16-16H135c22 0 41.2 15 46.6 36.4l40.7 162.7 82-410.2C305.8 5.5 312.1 .2 319.6 0z" class></path>
        </svg>
        Activity Logs
        <div  class="__chevron-icon ml-auto hidden">
          <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right">
            <path  fill="currentColor" d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" class></path>
          </svg>
        </div>
      </li>
    </a>
    <a  href="/profile/settings" class>
      <li  class="text-base nav-item w-full rounded px-3 py-2 cursor-pointer">
        <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="gear" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-lg mr-2 svg-inline--fa fa-gear fa-fw">
          <path  fill="currentColor" d="M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.1-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.1-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z" class></path>
        </svg>
        Settings
        <div  class="__chevron-icon ml-auto hidden">
          <svg  aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-right">
            <path  fill="currentColor" d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z" class></path>
          </svg>
        </div>
      </li>
    </a>
    <p  class="text-sm text-gray-600 pl-3 mt-3">Copyright 2018 - 2023</p>
    <p  class="text-sm text-gray-600 pl-3">All Rights Reserved.</p>
  </ul>
</template>

<script>
</script>