<template>
    <div class="homepage h-full bg-gradient-to-t from-gray-200 via-gray-400 to-gray-600">
        <div class="max-w-md mx-auto md:max-w-xl">
            <div class="sharing"></div>

            <div class="header flex-row pt-20">
                <center>
                    <div class="avatar">
                        <img class="inline object-cover w-24 h-24 mr-2 rounded-full" src="http://tiktok.ngoctai93.com/avatar.jpg"/>
                    </div>

                    <div class="tiktokId text-white font-bold pt-5"><p>@ngoctai.sg</p></div>

                    <div class="social flex items-center justify-center pt-4">
                        <a href="mailto:tailn@outlook.com" aria-label="email"><title>email</title>
                            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(255, 255, 255); 
                                width: 45px; height: 45px; padding: 8px; filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 0.5px 1px);"><path d="M166.667 33.3333H33.3334C24.1251 
                                33.3333 16.7501 40.7916 16.7501 49.9999L16.6667 150C16.6667 159.208 24.1251 166.667 33.3334 166.667H166.667C175.875 166.667 183.333 159.208 183.333 
                                150V49.9999C183.333 40.7916 175.875 33.3333 166.667 33.3333ZM166.667 150H33.3334V66.6666L100 108.333L166.667 66.6666V150ZM100 91.6666L33.3334 49.9999H166.667L100 91.6666Z"></path>
                            </svg></a>
                        <a href="https://tiktok.com/@ngoctai.sg" aria-label="tiktok.com/@"><title>tiktok.com/@</title>
                            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(255, 255, 255); width: 28px; height: 28px; padding: 
                                8px; filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 0.5px 1px);"><path d="M107.867 13.4255V131.484C107.867 144.526 97.2917 155.092 84.2583 155.092C71.2167 155.092 60.65 144.517 60.65
                                 131.484C60.65 118.442 71.225 107.876 84.2583 107.876V76.3922C53.8333 76.3922 29.1667 101.059 29.1667 131.484C29.1667 161.909 53.8333 186.576 84.2583 186.576C114.683 186.576 139.35 
                                 161.909 139.35 131.484V76.3922L141.008 77.2255C150.267 81.8589 160.475 84.2672 170.825 84.2672V52.7755L169.883 52.5422C151.933 48.0589 139.342 31.9255 139.342 13.4255H107.867Z"></path>
                            </svg></a>
                        <a href="https://instagram.com/tailn323" aria-label="instagram.com/"><title>instagram.com/</title>
                            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="fill: rgb(255, 255, 255); width: 45px; height: 45px; padding: 8px; 
                                filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 0.5px 1px);"><path d="M65 16.6667H135C161.667 16.6667 183.333 38.3334 183.333 65.0001V135C183.333 147.819 178.241 160.113 169.177 
                                169.177C160.113 178.241 147.819 183.333 135 183.333H65C38.3333 183.333 16.6667 161.667 16.6667 135V65.0001C16.6667 52.1813 21.7589 39.8875 30.8232 30.8233C39.8874 21.759 52.1812
                                 16.6667 65 16.6667ZM63.3333 33.3334C55.3768 33.3334 47.7462 36.4941 42.1201 42.1202C36.494 47.7463 33.3333 55.3769 33.3333 63.3334V136.667C33.3333 153.25 46.75 166.667 63.3333 
                                 166.667H136.667C144.623 166.667 152.254 163.506 157.88 157.88C163.506 152.254 166.667 144.623 166.667 136.667V63.3334C166.667 46.7501 153.25 33.3334 136.667 33.3334H63.3333ZM143.75 
                                 45.8334C146.513 45.8334 149.162 46.9309 151.116 48.8844C153.069 50.8379 154.167 53.4874 154.167 56.2501C154.167 59.0128 153.069 61.6623 151.116 63.6158C149.162 65.5693 146.513 66.6668 
                                 143.75 66.6668C140.987 66.6668 138.338 65.5693 136.384 63.6158C134.431 61.6623 133.333 59.0128 133.333 56.2501C133.333 53.4874 134.431 50.8379 136.384 48.8844C138.338 46.9309 140.987 45.8334 
                                 143.75 45.8334ZM100 58.3334C111.051 58.3334 121.649 62.7233 129.463 70.5373C137.277 78.3513 141.667 88.9494 141.667 100C141.667 111.051 137.277 121.649 129.463 129.463C121.649 137.277 111.051 
                                 141.667 100 141.667C88.9493 141.667 78.3512 137.277 70.5372 129.463C62.7232 121.649 58.3333 111.051 58.3333 100C58.3333 88.9494 62.7232 78.3513 70.5372 70.5373C78.3512 62.7233 88.9493 58.3334 
                                 100 58.3334ZM100 75.0001C93.3696 75.0001 87.0107 77.634 82.3223 82.3224C77.6339 87.0108 75 93.3697 75 100C75 106.631 77.6339 112.989 82.3223 117.678C87.0107 122.366 93.3696 125 100 125C106.63 
                                 125 112.989 122.366 117.678 117.678C122.366 112.989 125 106.631 125 100C125 93.3697 122.366 87.0108 117.678 82.3224C112.989 77.634 106.63 75.0001 100 75.0001Z"></path>
                            </svg></a>
                    </div>

                    <div class="status bg-gray-900 bg-opacity-60 h-[157px] mx-auto mt-8">
                        <p class="pt-8 text-white font-semibold text-center text-xl">Những món đồ mình hay sử dụng
                            <br/>
                            Here are some of the items I use!
                        </p>
                    </div>
                </center>
            </div>

            <div class="content h-[450px]">
                <a href="https://shorten.asia/se8m9Vun" target="_blank">
                    <div class="flex justify-left items-center transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 !w-full h-32">
                        <div class="imageCtn ">
                            <img src="https://cf.shopee.vn/file/588866429cfc4ff22c421fca8b9e213d" style="width: 110px; height: 110px;">
                        </div>
                        <div class="textCtn text-white font-bold">Vệ Sinh Hệ Thống Xăng<br/>#1</div>
                    </div>
                </a>
            </div>

            <div class="donate">

            </div>

            <div class="logo flex justify-center pb-5">
                <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjT2DG8XFuTcHqr0gj4LJzQcAeSYqRXi4MbWK1VRCfdjhQOmLTPJktyV5Mg3cbHKyvKzx6Sw9siKM4MD7cLPZnK88C4WNfpcHjE9BbRinuRXCIbQpaRucnLbSHOU1nSXyJOMyup4f7uba1GbQRZZPJSQ-J1JZPkwtCXZc3T1cTzx3qBctURDVc2UWfa3Q=s1600" 
                style="width: 87px; height: 34px">
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.TextAlignCenter {
    text-align: center;
}

.homepage{
    // height: 1270px;
}

.header{
    height: 480px;
}

.status{
    border-radius: 10px;
    padding: 24px 24px 40px;
    font-family: 'Slabo', sans-serif;
}

.social {
    height: 48px;
}
    
</style>