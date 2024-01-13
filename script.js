const dateFormEl = document.querySelector("#dateForm");
const dayContainerEl = document.querySelector("#dayImg");

const myDate = new Date();

const res = myDate.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
});

let formetDate = res.replaceAll("/", "");
const formetUrl = `https://www.tamildailycalendar.com/${myDate.getFullYear()}/${formetDate}.jpg`;


dayContainerEl.src = formetUrl;
dayContainerEl.alt = formetDate;

console.log(formetUrl);

