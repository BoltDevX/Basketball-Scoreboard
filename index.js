let homeScore = 0
let guestScore = 0

let homeStore = document.getElementById("score-1")
let homeScoreOne = document.getElementById("homeScoreOne-1")

let guestScoreEl = document.getElementById("guestScoreEl")

function increaseHomeScoreOne(){
    homeScore += 1
    homeStore.textContent = homeScore
}

function increaseHomeScoreTwo(){
    homeScore += 2
    homeStore.textContent = homeScore
}

function increaseHomeScoreThree(){
    homeScore += 3
    homeStore.textContent = homeScore
}


function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreThree(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}