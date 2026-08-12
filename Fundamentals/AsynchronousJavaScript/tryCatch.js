async function loadData() {
    try {
        let data = await downloadFile();
        console.log(data);
    } catch (error){
        console.log(error);
    }
}