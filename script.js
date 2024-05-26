document.getElementById("opros").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const data = new FormData(e.target);
    let count = 0;

    let array = [data.get("Paris"), data.get("India"), data.get("Korea"),data.get("Turkey"),data.get("UAR"),data.get("Syria")]

    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      count += parseInt(element);
    }
    alert(count)
});