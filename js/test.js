async function readList(){
    const response = await fetch("https://www.medimory.com/api/v1/list", {
        method: "POST"
    });

    const table = await response.json();
    const items = table.Items;

    return items;
}


function calcList(items){
    const numbers = items.length;
    const itemsPerPage = 10;
    const pages = Math.ceil(numbers/itemsPerPage);
    
    console.log(pages);
}

function calcMain(items){
    ul.innerHTML = "";

    const numbers = items.length;
    const itemsPerPage = 10;

    for (
        let i = 0;
        i < (itemsPerPage - 1) && i < items.length;
        i++
    ) {
        const li = document.createElement('li');
        li.className = "post-li";

        const postContainer = document.createElement('div');
        postContainer.className = "post-container";

        const postNumber = document.createElement('p');
        postNumber.className = "post-number";

        const postTitle = document.createElement('p');
        postTitle.className = "post-title";

        const postTime = document.createElement('p');
        postTime.className = "post-time";

        postNumber.textContent = (i + 1);
        postTitle.textContent = items[i].Title;
        postTime.textContent = items[i].Time;

        postContainer.append(postNumber, postTitle, postTime);
        li.append(postContainer);
        document.getElementsByClassName("post-ul").append(li);
    }
}

async function readAndCalc(){
    const items = await readList();
    calcList(items);
}

const setPageOf = (pageNumber) => {
    ul.innerHTML = ''; // ul 리스트 내부를 비워줌
  
    for (
      let i = 0;
      i <= COUNT_PER_PAGE * (pageNumber - 1) + 6 && i <= data.length;
      i++
    ) {
      const li = document.createElement('li');
  
      // 컨테이너
      const postContainer = document.createElement('div');
      postContainer.className = 'post-container';
  
      // 글 번호
      const postNumber = document.createElement('p');
      postNumber.className = 'post-number';
  
      // 글 제목
      const postTitle = document.createElement('p');
      postTitle.className = 'post-title';
  
      postNumber.textContent = data[i - 1].postNumber;
      postTitle.textContent = data[i - 1].title; // 페이지 번호는 1부터 시작하지만 배열 인덱스는 0부터 시작하므로 -1 해 준다.
  
      postContainer.append(postNumber, postTitle); // 컨테이너 구성
      li.append(postContainer); // li 구성
      ul.append(li); // ul에 li 자식 요소로 넣어주기
    }
  };

