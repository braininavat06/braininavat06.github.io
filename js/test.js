var page;

function write(num) {
    page = num;
}

function check() {
    if (page > 1) {
        console.log("페이지 넘어감");
    } else {
        console.log(page);
    }
}

write(2)
check();