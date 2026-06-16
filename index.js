let homeEl = document.getElementById("home_number")
let guestEl = document.getElementById("guest_number")
let total_guest = 0
let total_home = 0
homeEl.textContent = total_home
guestEl.textContent = total_guest


function home_one(){
    total_home += 1
    homeEl.textContent = total_home
}
function home_two(){
    total_home += 2
    homeEl.textContent = total_home
}
function home_three(){
    total_home += 3
    homeEl.textContent = total_home
}


function guest_one(){
    total_guest += 1
    guestEl.textContent = total_guest
}
function guest_two(){
    total_guest += 2
    guestEl.textContent = total_guest
}
function guest_three(){
    total_guest += 3
    guestEl.textContent = total_guest
}


