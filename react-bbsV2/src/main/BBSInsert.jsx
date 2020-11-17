import React, { Component } from "react";
import "../css/BBSInsert.css";

class BbsInsert extends Component {
    state = {
        b_writer: "",
        b_subject: "",
        b_content: "",
        isUpdate: false,
        b_id: 0,
    };

    componentDidUpdate() {
        if (this.props.bbsData.b_id !== this.state.b_id) {
            this.setState({ ...this.props.bbsData });
        }
        // this.fetchBBsList();
        // setInterval(callback, time)
        // 최초에 callback 함수가 실행되고 이후에 time 만큼 경과하면
        // 또 callback 함수를 계속해서 실행하라
        // this.timer = setInterval(() => this.fetchBBsList(), 5000);
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        // if (this.props.bbsData.isUpdate) {
        //     this.state = this.props.bbsData;
        // }

        const { state, handleOnChange } = this;
        const { b_writer, b_subject, b_content } = state;
        const { bbsSave } = this.props;
        return (
            <div className={"input-form"}>
                <input
                    name={"b_writer"}
                    value={b_writer}
                    onChange={handleOnChange}
                    placeholder={"작성자"}
                />
                <input
                    name={"b_subject"}
                    value={b_subject}
                    onChange={handleOnChange}
                    placeholder={"제목"}
                />
                <input
                    name={"b_content"}
                    value={b_content}
                    onChange={handleOnChange}
                    placeholder={"내용"}
                />
                <button onClick={() => bbsSave(this.state)}>저장</button>
            </div>
        );
    }
}

export default BbsInsert;
