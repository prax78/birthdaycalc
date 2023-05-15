function getflags() {
    const mytable = document.getElementById("flags");
    var counter = 1;
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
        .then(res => res.json())
        .then(json => {
            for (let x of json) {
                console.log(x.flags.png);
                console.log(x.name.official);
                let tr = mytable.appendChild(document.createElement("tr"));
                let tdone = tr.appendChild(document.createElement("td"));
                tdone.innerText = counter;
                let tdtwo = tr.appendChild(document.createElement("td"));
                tdtwo.innerText = x.name.official;
                let tdthree = tr.appendChild(document.createElement("td"));
                let imgg = tdthree.appendChild(document.createElement("img"));
                imgg.setAttribute("src", x.flags.png);
                imgg.setAttribute("width", 50);
                imgg.setAttribute("height", 30);
                counter++;

            }



        })
        .catch(r => document.getElementById("error").innerHTML = "Internet Error");

}