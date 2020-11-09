import React, { useState } from "react";
import Message from "./Message";

const InOut = () => {
    /**
     * @param message 변수
     * @param setMessage message 의 값
     */
    const [message, setMessage] = useState("Korea");
    const onClickEnter = () => {
        /**
         * react 에서는 변수(state 변수)는 절대
         * 직접적으로 값을 변경하지 않도록 해야 한다.
         * 값을 변경하려면 반드시 setter method 를 통해서 수행해야한다.
         */
        setMessage("반갑습니다.");
    };
    const onClickLeave = () => {
        setMessage("안반갑습니다.");
    };

    /**
     * 다른 컴포넌트에 변수 전달하기
     * 변수명 = 값 형태로 컴포넌트에 설정한다.
     * Message msg={message} : Message 컴포넌트에
     * msg 라는 이름의 변수를 전달하고 거기에
     * message state 변수 값을 복사하여 전달하라
     */
    return (
        <div>
            <button onClick={onClickEnter}>입장하기</button>
            <button onClick={onClickLeave}>퇴장하기</button>
            <Message msg={message} />
        </div>
    );
};

export default InOut;
