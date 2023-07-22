function birthDays() {


    let day = 0;
    let month = 0;
    let year = 0;

    getData().map(x => {
        day = parseInt(x[2]);
        month = parseInt(x[1]) - 1;
        year = parseInt(x[0]);

    });
    if (year >= 1945 && year <= new Date(Date.now()).getFullYear()) {
        let myday = new Date();
        let storedate = [];
        myday.setFullYear(year, month, day);

        const mybirthday = myday.getDay();


        const para1 = document.body.appendChild(document.createElement('p'));
        para1.setAttribute('id', 'para1');
        para1.className = "para1-class";
        document.getElementById('para1').innerHTML = `Your Birthday fell on<strong style="color:red"> ${getDayofWeek(mybirthday)}</strong> in <strong style="color:yellow"> ${year} </strong>`;

        const para2 = document.body.appendChild(document.createElement('p'));
        para2.setAttribute('id', 'para2');
        para2.className = "para2-class"
        document.getElementById('para2').innerHTML = `Below Years will have  <strong style="color:red"> "${getDayofWeek(mybirthday)}"</strong> that is your day of birth👍💖`;
        let one = new Date(year, month, day);
        let two = new Date(Date.now());
        //const age = `${(two-one).toFixed(1).split('.')[0]} years and ${(two-one).toFixed(1).split('.')[1] } months`;
        const age = (((two - one) / 86400000) / 365).toFixed(2);
        const ageyears = age.split('.')[0];
        const temp = age.split('.')[1] / 100;
        const agemonth = ((temp * 365) / 30).toFixed(0);
        const para3 = document.body.appendChild(document.createElement('p'));
        para3.setAttribute('id', 'para3');
        para3.className = "para3-class"
        document.getElementById('para3').innerHTML = `Your age is approx. <strong style="color:yellow">${ageyears} years and ${agemonth} months</strong>  😎`;



        let y = new Date(Date.now()).getFullYear();
        let newy = y + 80;
        for (; y <= newy; y++) {
            myday.setFullYear(y, month, day);

            if (myday.getDay() == mybirthday) {
                storedate.push(`${day}/${month+1}/${myday.getFullYear()} falls on <strong style="color:red">${getDayofWeek(mybirthday)}</strong>`);


            }

        }
        const isLi = document.querySelector('li');
        if (isLi !== null) {
            document.body.removeChild(isLi.parentNode);
        }
        const olist = document.body.appendChild(document.createElement('ol'));
        olist.setAttribute('id', 'oll');

        let el = document.getElementById('oll');





        for (let s of storedate) {

            const li = el.appendChild(document.createElement('li'));
            li.innerHTML = s;

        }

    } else {
        alert(`Invalid Year Selected!!\n Select 1945-${new Date(Date.now()).getFullYear()}`);
        window.location.reload();
    }



}

function getDayofWeek(days) {
    switch (days) {

        case 0:
            return 'Sunday';
            break;
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';;
            break;
        case 4:
            return 'Thursday';;
            break;
        case 5:
            return 'Friday';;
            break;
        case 6:
            return 'Saturday';;
            break;
        default:
            return 'OOPSIE';
            break;


    }

}

function getYears() {

    let dt = new Date(Date.now()).toLocaleDateString('en-us');
    let inp = document.getElementById("in");
    const datearray = dt.split('/');
    yr = datearray[2].toString();
    mn = datearray[0].toString().length == 1 ? `0${datearray[0].toString()}` : datearray[0].toString();
    dat = datearray[1].toString().length == 1 ? `0${datearray[1].toString()}` : datearray[1].toString();
    inp.value = `${yr}-${mn}-${dat}`;


}

function getData() {
    let dtarray = [];
    dtarray.push(document.getElementById("in").value.split('-'));
    return dtarray;
}
