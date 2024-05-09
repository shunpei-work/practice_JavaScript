// 問題文と選択肢の定義
const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct:'ニンテンドーDS'
    }, {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHERS2',
            'スーパーマリオブラザーズ３',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct:'MOTHERS2'
    }, {
        question: 'FF IVの主人公の名前は？',
        answers: [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct:'セシル'
    }
];

// 変数定義
const quizLengh = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setUpQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;    
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

// 定義したクイズの問題文、選択肢を実行
setUpQuiz();

// 正誤判定処理
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        score++;
    } else {
        window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLengh){
        // 問題数がまだあればこちらを実行
        setUpQuiz();
    } else {
        // 問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLengh + 'です。')
    }
};

// ボタンクリックで正誤判定
let handlerIndex = 0;
while(handlerIndex < 4){
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
