
// Grab Elements
const navBtns = document.querySelectorAll(".nav-btn")
const tabs = document.querySelectorAll('.container section')
const homeTab = document.getElementById("home")
// console.log(homeTab)
// console.log(homeTab.id)

function switchTabs(key) {
    console.log(key)
    tabs.forEach(
        (tab)=>{
            const tabID = tab.id
            if (key === tabID) {
                tab.classList.add('visible')
            } else {
                tab.classList.remove('visible')
            }
            // console.log(tabID)
        }
    )
}
switchTabs(homeTab.id)
navBtns.forEach(
    (navBtn)=>{
        navBtn.addEventListener("click", ()=>{
            navBtns.forEach(btn => {
                btn.classList.remove('active')
            });

            navBtn.classList.add('active')
            const key = navBtn.dataset.id
            // console.log(key)

            switchTabs(key)
        })
    }
)


