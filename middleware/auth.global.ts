export default defineNuxtRouteMiddleware((to, from) => {
    // console.log(to);
    // console.log(from);

    const isLoggedIn = false;
    if (isLoggedIn) {
        //redirect to the page
        // navigateTo(to.fullPath)
    }
    // //redirect to login
    // return navigateTo("/events")
})