const featuresNav = document.getElementById("featuresNavigator")
const companyNav = document.getElementById("companyNavigator")
const navOn = document.getElementById("toggleNavigationOn")
const navOff = document.getElementById("toggleNavigationOff")
const mediaSize = window.matchMedia("(max-width: 700px)")
const mainImage = document.getElementById("mainPageImage")

featuresNav.querySelector(".navigationHead").addEventListener("click", () => {
    let featuresDisplay = featuresNav.querySelector(".navigationBody")
    const featuresDisplayValue = getComputedStyle(featuresDisplay).display
    featuresDisplayValue === "flex"
        ? (featuresDisplay.style.display = "none")
        : (featuresDisplay.style.display = "flex")
})
companyNav.querySelector(".navigationHead").addEventListener("click", () => {
    let companyDisplay = companyNav.querySelector(".navigationBody")
    const companyDisplayValue = getComputedStyle(companyDisplay).display
    companyDisplayValue === "flex"
        ? (companyDisplay.style.display = "none")
        : (companyDisplay.style.display = "flex")
})
navOn.addEventListener("click", () => {
    document.querySelector(".navigationDiv").style.display = "flex"
    document.querySelector("#overlay").style.display = "block"
    navOff.addEventListener("click", () => {
        document.querySelector(".navigationDiv").style.display = "none"
        document.querySelector("#overlay").style.display = "none"
    })
})

function changeMainImage() {
    if (mediaSize.matches) {
        mainImage.src = "images/image-hero-mobile.png"
        document.querySelector(".navigationDiv").style.display = "none"
        document.querySelector("#overlay").style.display = "none"
    } else {
        mainImage.src = "images/image-hero-desktop.png"
        document.querySelector(".navigationDiv").style.display = "flex"
        document.querySelector("#overlay").style.display = "block"
    }
}
changeMainImage()
window.addEventListener("resize", changeMainImage)
