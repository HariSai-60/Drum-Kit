let m = document.getElementById("m")
let u = document.getElementById("u")
let s = document.getElementById("s")
let i = document.getElementById("i")
let c = document.getElementById("c")

let audio1 = document.getElementById("audio1")
let audio2 = document.getElementById("audio2")
let audio3 = document.getElementById("audio3")
let audio4 = document.getElementById("audio4")
let audio5 = document.getElementById("audio5")

audio1.setAttribute("src", "./asserts/m11.mp3")
audio2.setAttribute("src", "./asserts/u11.mp3")
audio3.setAttribute("src", "./asserts/s11.mp3")
audio4.setAttribute("src", "./asserts/i11.mp3")
audio5.setAttribute("src", "./asserts/c11.mp3")

// click events
m.addEventListener("click", () => {
    audio1.play()
    console.log("m is playing");
})

u.addEventListener("click", () => {
    audio2.play()
    console.log("u is playing");
})

s.addEventListener("click", () => {
    audio3.play()
    console.log("s is playing");
})

i.addEventListener("click", () => {
    audio4.play()
    console.log("i is playing");

})

c.addEventListener("click", () => {
    audio5.play()
    console.log("c is playing");

})

//mouseover events
m.addEventListener("mouseover", () => {
    audio1.play()
    console.log("m is playing");
})

u.addEventListener("mouseover", () => {
    audio2.play()
    console.log("u is playing");
})

s.addEventListener("mouseover", () => {
    audio3.play()
    console.log("s is playing");
})

i.addEventListener("mouseover", () => {
    audio4.play()
    console.log("i is playing");
})

c.addEventListener("mouseover", () => {
    audio5.play()
    console.log("c is playing");
})

// keypress events
document.addEventListener("keypress", (event) => {
  let key = event.key.toLowerCase();

  if (key === "m") {
    audio1.play();
    console.log("m is playing");
  } else if (key === "u") {
    audio2.play();
    console.log("u is playing");
  } else if (key === "s") {
    audio3.play();
    console.log("s is playing");
  } else if (key === "i") {
    audio4.play();
    console.log("i is playing");
  } else if (key === "c") {
    audio5.play();
    console.log("c is playing");
  }
});


//mouseout events
m.addEventListener("mouseout", () => {
    audio1.pause()
    console.log("m is paused");
})

u.addEventListener("mouseout", () => {
    audio2.pause()
    console.log("u is paused");
})

s.addEventListener("mouseout", () => {
    audio3.pause()
    console.log("s is paused");
})

i.addEventListener("mouseout", () => {
    audio4.pause()
    console.log("i is paused");
})

c.addEventListener("mouseout", () => {
    audio5.pause()
    console.log("c is paused");
})

