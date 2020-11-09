import React from "react";

// 일반적인 형태의 함수를 만들기
function myfunc() {
    return <div></div>;
}

// 함수이면서 마치 객체처럼 함수를 만들기
const myfunc1 = function () {
    return <div></div>;
};

// 객체처럼 함수를 만드는데 화살표 함수를 사용
const myfunc2 = () => {
    return <div></div>;
};

// react 에서 기본적으로 제공하는
// 여러 컴포넌트와 충돌을 방지하기 위하여
// 사용자가 정의하는 컴포넌트는 첫글자를 대문자로 작성할것.
const RSC = () => {
    return <div></div>;
};

export default RSC;
