import React, {Component} from 'react';
import BbsInsert from "./BBSInsert";
import BbsList from "./BBSList";

class BbsMain extends Component {
    id = 1;
    state = {
        state1: "",
        state2: "",
        bbsList: [
            {id: 0, d_writer: "김민석", b_date: "없음", b_subject: "내용도 없음"},
            {id: 1, d_writer: "김민석", b_date: "없음", b_subject: "내용도 없음"},
            {id: 2, d_writer: "김민석", b_date: "없음", b_subject: "내용도 없음"},
        ]
    }

    bbsInsert = (writer, title, context) => {

    }

    render() {
        const {bbsList, state1, state2} = this.state;
        return (
            <div>
                <BbsInsert bbsInsert={this.bbsInsert}/>
                <BbsList bbsList={bbsList} state1={state1} state2={state2}/>
            </div>
        );
    }
}

export default BbsMain;