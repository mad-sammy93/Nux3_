export default defineNuxtRouteMiddleware((to, from) => {
    console.log("Hello frmo middleware auth");
    // console.log(from);

    // const isLoggedIn = false;
    // if (isLoggedIn) {
    //     //redirect to the page
    //     // navigateTo(to.fullPath)
    // }
    // //redirect to login
    // return navigateTo("/events")
})