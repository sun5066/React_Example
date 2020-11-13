f1();
function f1() {
    console.log("나는 f1 입니다.");
}

const f2 = function () {
    console.log("나는 f2임");
};
f2();

const f3 = function () {
    return 20 + 30;
};
console.log(f3());

const f4 = function (num1, num2) {
    return num1 + num2;
};
console.log(f4(30, 100));

const f5 = () => {
    console.log("나는 f5");
};
f5();

const f6 = () => {
    return 100 + 100;
};
console.log(f6());

const f7 = () => 200 + 300;
console.log(f7());

const f8 = (arg) => arg * arg;
/**
 * 화살표 함수
 * function 키워드를 제외하고 선언
 * 함수이름 = (매개변수) => { 함수본체 }
 *
 * 매개변수가 없을때
 * 함수이름 = () => { 함수본체 }
 *
 * 매개변수가 1개만 있을때
 * 함수이름 = 매개변수 => { 함수본체 }
 *
 * 매개변수가 2개 이상일때
 * 함수이름 = (매개1, 매개2) => { 함수본체 }
 *
 * 함수본체에 단지 return만 필요로 할때
 * 함수이름 = () => value
 * 함수이름 = (매개변수) => value
 *
 * 단, 함수본체에 다른 연산식들이 필요할 경우는 함수본체를 {}로 묶어야 한다.
 * 함수이름 = (매개1, 매개2) => {
 *    const 합계 = 매개1 + 매개2;
 *    return 합계;
 * }
 */
