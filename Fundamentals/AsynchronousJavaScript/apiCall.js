function getUser() {

    return new Promise(function (resolve) {

        setTimeout(function () {

            resolve({
                name: "Luigi",
                age: 20
            });

        }, 2000);

    });

}
async function showUser() {
    const user = await getUser();

    console.log(user.name);
    console.log(user.age);
}

showUser();