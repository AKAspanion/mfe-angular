<template>
    <div class="vu-bg-base-200 vu-rounded-xl vu-flex">
        <div class="vu-w-56 vu-flex vu-pt-6 vu-flex-col vu-gap-2 vu-bg-gray-100 vu-p-4 vu-h-screen">
            <div className="vu-px-2 vu-text-2xl vu-font-bold">Vue</div>
            <div class="vu-group">

                <router-link
                    class="hover:vu-bg-primary vu-flex vu-items-center vu-p-2 vu-text-base vu-font-normal vu-text-gray-900 vu-rounded-lg dark:vu-text-white"
                    to="/page-1">
                    <svg fill="currentColor" role="img"
                        class="vu-flex-shrink-0 vu-w-6 vu-h-6 vu-text-gray-500 vu-transition vu-duration-75 dark:vu-text-gray-400 group-hover:vu-text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path
                            d="M13 16.5q-1.25 0-2.125-.875T10 13.5V7q0-1.25.875-2.125T13 4h22q1.25 0 2.125.875T38 7v6.5q0 1.25-.875 2.125T35 16.5Zm0-3h22V7H13v6.5ZM7 44q-1.25 0-2.125-.875T4 41v-3.5h40V41q0 1.25-.875 2.125T41 44Zm-3-8 7.25-16.2q.4-.8 1.125-1.3t1.575-.5h20.1q.85 0 1.575.5t1.125 1.3L44 36Zm13-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm6 8h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm6 8h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Zm0-4h2q.4 0 .7-.3.3-.3.3-.7 0-.4-.3-.7-.3-.3-.7-.3h-2q-.4 0-.7.3-.3.3-.3.7 0 .4.3.7.3.3.7.3Z" />
                    </svg>
                    <span class="vu-text-gray-900 group-hover:vu-text-white vu-flex-1 vu-ml-3 vu-whitespace-nowrap">
                        Products
                    </span>
                </router-link>
            </div>
            <div class="vu-group">
                <router-link
                    class="hover:vu-bg-primary vu-flex vu-items-center vu-p-2 vu-text-base vu-font-normal vu-text-gray-900 vu-rounded-lg dark:vu-text-white "
                    to="/page-2">
                    <svg fill="currentColor" role="img"
                        class="vu-flex-shrink-0 vu-w-6 vu-h-6 vu-text-gray-500 vu-transition vu-duration-75 dark:vu-text-gray-400 group-hover:vu-text-white"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path
                            d="m13.05 21.7 11-17.7 11 17.7ZM35.3 44q-3.7 0-6.2-2.5t-2.5-6.2q0-3.7 2.5-6.2t6.2-2.5q3.7 0 6.2 2.5t2.5 6.2q0 3.7-2.5 6.2T35.3 44ZM6 42.75v-15.2h15.2v15.2ZM35.3 41q2.4 0 4.05-1.65T41 35.3q0-2.4-1.65-4.05T35.3 29.6q-2.4 0-4.05 1.65T29.6 35.3q0 2.4 1.65 4.05T35.3 41ZM9 39.75h9.2v-9.2H9Zm9.45-21.05h11.2l-5.6-9.05Zm5.6 0ZM18.2 30.55Zm17.1 4.75Z" />
                    </svg>
                    <span class="vu-text-gray-900 group-hover:vu-text-white vu-flex-1 vu-ml-3 vu-whitespace-nowrap">
                        Categories
                    </span>
                </router-link>
            </div>
        </div>
        <div class="vu-p-6">
            <h1 class="vu-text-2xl vu-font-bold vu-pb-4">
                Hello from Vue Application
            </h1>
            <router-view />
        </div>
    </div>
</template>
<script></script>