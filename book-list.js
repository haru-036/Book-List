'use-strict';

const bookNameInput = document.getElementById('book-name');
const addBookButton = document.getElementById('add-book');
const readDate = document.getElementById('read-date');
const tableDivided = document.getElementById('day-number');
const bookNameDivided = document.getElementById('book-Name');
const reviewBlockDivided = document.getElementById('review-block');
const textReviewInput = document.getElementById('text-review');

addBookButton.onclick = function(){ //ボタンが押された時の操作
    const bookName = bookNameInput.value;
    if(bookName.length === 0 ){
        //何も入力されなかった場合は処理を終了する
        return;
    }
    const bookReview = textReviewInput.value;
    if(bookReview.length === 0){
        return;
    }
    const date = readDate.value;
    if(date.length === 0){
        return;
    }

    //ボタンが押されたとき、入力された本の名前を表示する
    const booktable = document.createElement('p');
    booktable.innerText = bookName;
    bookNameDivided.appendChild(booktable);

    //ボタンが押された時、日付を表示する
    const day = document.createElement('p');
    day.innerText = date;
    tableDivided.appendChild(day);
    

    //ボタンが押された時、コメントを表示する
    const textReview = document.createElement('p');
    textReview.innerText = bookReview;
    reviewBlockDivided.appendChild(textReview);


    
    //ボタンを押したら入力欄をリセットする
    function clearText(){
        bookNameInput.value = '';
        readDate.value = '';
        textReviewInput.value = '';
    }
    clearText();

}


