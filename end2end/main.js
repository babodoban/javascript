function getWord (){
    var word = prompt('끝말잇기를 시작할 첫 단어를 입력해주세요.');
    // prompt 를 활용해서 끝말잇기 시작할 첫 단어를 받아서 저장 
    playGame();
}

function playGame (){
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]){
        alert('통과!');
        word = answer;
    } else {
        alert('땡! 끝말잇기입니다!');
    }
}

function init(){
    getWord();
}

init();

// 동영상 강의에서 크롬 콘솔을 이용해서 만든 코드 
// var firstWord = '의자';
// while (true) {
//     var nextAnswer = prompt(firstWord);
//     if (firstWord[firstWord.length - 1] === nextAnswer[0]){
// 		alert('통과!');
//         firstWord = nextAnswer;
//     } else {
//         alert('땡! 끝말잇기입니다!');
//     }
// }