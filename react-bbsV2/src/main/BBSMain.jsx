import React, {Component} from "react";
import BbsInsert from "./BBSInsert";
import BbsList from "./BBSList";

const BBS_INSERT_URL = "http://localhost:5000/api/insert";
const BBS_UPDATE_URL = "http://localhost:5000/api/update/";
const BBS_FETCH_URL = "http://localhost:5000/api/bbslist";
const BBS_FIND_BY_ID = "http://localhost:5000/api/view/";

class BbsMain extends Component {
    id = 1;
    state = {
        state1: "",
        state2: "",
        isFetch: false,
        bbsList: [
            {
                id: 0,
                d_writer: "김민석",
                b_date: "없음",
                b_subject: "내용도 없음",
            },
            {
                id: 1,
                d_writer: "김민석",
                b_date: "없음",
                b_subject: "내용도 없음",
            },
            {
                id: 2,
                d_writer: "김민석",
                b_date: "없음",
                b_subject: "내용도 없음",
            },
        ],
        bbsData: {
            isUpdate: false, b_id: 0, b_writer: "", b_subject: "", b_content: ""
        },
    };

    timer = "";

    bbsInsert = (writer, title, context) => {
    };

    componentDidMount() {
        this.fetchBBsList();
        // setInterval(callback, time)
        // 최초에 callback 함수가 실행되고 이후에 time 만큼 경과하면
        // 또 callback 함수를 계속해서 실행하라
        this.timer = setInterval(() => this.fetchBBsList(), 5000);
    }

    // react 에서 setInterval 을 사용하여 어떤 함수를 실행하면
    // 반드시 WillUnmount() 메서드에서
    // react가 종료되기전에 timer를 제거해주어야 한다
    componentWillUnmount() {
        this.timer = null;
    }

    fetchBBsList = () => {
        this.setState({...this.state, isFetch: true});

        fetch(BBS_FETCH_URL)
            .then((res) => {
                // response 객체가 통째로 수신된 상태
                // response 객체 중에서 body 부분만 json 으로 변환하여
                // return
                return res.json();
            })
            .then((result) =>
                // 앞의 then 에서 return 한 데이터를 result 변수에 받고
                // bbsList 에 적용
                this.setState({
                    bbsList: result,
                    isFetch: false,
                })
            )
            .catch((err) => console.log(err));
    };

    handleUpdate = (id) => {
        fetch(BBS_FIND_BY_ID + id)
            .then(res => {
                return res.json();
            }).then(result => {
            console.log(result);
            // 서버로 부터 가져온 게시판 데이터를 bbsData에 풀어놓고
            // isUpdate 컬럼만 true 로 만들어라
            this.setState({bbsData: {...result, isUpdate: true}});
            console.log(this.state.bbsData);
        });
    }

    render() {
        const {bbsList, state1, state2} = this.state;
        return (
            <div>
                <BbsInsert insertURL={BBS_INSERT_URL} updateURL={BBS_UPDATE_URL} bbsData={this.state.bbsData}/>
                <p>{this.state.isFetch ? "데이터 가져오는 중..." : "완료"}</p>
                <BbsList
                    bbsList={bbsList}
                    fetchBBs={this.fetchBBsList}
                    state1={state1}
                    state2={state2}
                    handleUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default BbsMain;
