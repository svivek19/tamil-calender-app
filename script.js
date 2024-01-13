const dateEl = document.querySelector("#date");
const dayContainerEl = document.querySelector("#dayImg");


dateEl.addEventListener('change', (e) => {
    e.preventDefault();

    const inputDateEl = e.target.value;
    // console.log(inputEl);

    processDate(inputDateEl)
})

function processDate(date) {

    const myDate = date ? new Date(date) : new Date();
    
    const res = myDate.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "2-digit",
        day: "numeric",
    });

    let formetDate = res.replaceAll("/", "");
    const formetUrl = `https://www.tamildailycalendar.com/${myDate.getFullYear()}/${formetDate}.jpg`;


    dayContainerEl.src = formetUrl;
    dayContainerEl.alt = formetDate;

}

processDate()
