import React, {Component} from "react";

class BucketInsert extends Component {
    /**
     * input box 에서 사용자의 입력을 받아 저장할 state 변수 선언하기
     * */
    state = {
        bucket_title: "",
    }

    handleOnChange = (e) => {
        this.setState({bucket_title: e.target.value});

        /**
         * input box 가 여러개 일 경우
         * input box 에 state 변수명을 name 속성으로 지정
         * <input name="bucket_title"/> 로 지정한다는 말임
         *
         * 아래와 같이 변수값을 세팅한다.
         * this.setState({[e.target.name]: e.target.value})
         * */
        this.setState({[e.target.name]: e.target.value})
    }

    /**키보드로 문자열을 입력하는 도중 Enter 키를 누르면
     * @param {*} e
     * */
    handleKeyPress = (e) => {

        if (e.key === "Enter") {
            this.props.bucketInsert(this.state.bucket_title);
        }
    }

    render() {
        return (
            <section className="w3-container-fluid">
                <div className="w3-form-control w3-margin">
                    <input name="bucket_title"
                           value={this.state.bucket_title}
                           onChange={this.handleOnChange}
                           onKeyPress={this.handleKeyPress}
                           className="w3-input w3-border w3-hover-gray w3-round"
                           placeholder="버킷에 추가할 내용을 입력하세요"
                    />
                </div>
            </section>
        );
    }
}

export default BucketInsert;
