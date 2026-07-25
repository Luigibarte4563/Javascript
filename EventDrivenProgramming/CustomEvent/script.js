const event = new CustomEvent("studentAdded", {

    detail: {
        name: "Luigi",
        program: "BSIT"
    }
});

document.getElementById("studentAdded", function(event) {
    console.log(event.detail.name);
    console.log(event.detail.name);
})