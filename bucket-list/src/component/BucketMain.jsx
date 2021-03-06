import React, {Component} from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
    /**
     * id 변수는 state 가 아닌 일반형 변수이다.
     * 일반형 변수는 코드내에서 자유롭게 값을 변경하여 사용할수 있고
     * 여기에서는 bucketList 의 b_id 값의 PK 값을 만들기 위해 사용한다.
     * */
    id = 1;
    // react 에서는 state 형 변수는 절때 직접 변경하지 않는다.
    state = {
        bucketList: []
    }

    /**
     * Life Cycle Method
     * React 의 Class type Component 에는 여러가지 내장 method 가 있다
     * 데이터의 변화가 발생하면 정해진 순서에 따라 내장 method 가 실행되면서
     * 화면을 rendering 한다.
     * 이러한 Method 들을 Life Cycle Method 라고 한다.
     *
     * 화면이 이미 완성된 상태에서
     * 데이터가 변화 했을때 reRendering 하려고 할때 실행회는 method
     * CUD 되었을때 실행될 메서드
     *
     * 실제 DB와 연동을 하면 이 Method 에서 AJAX 로 서버에 데이터를 전송하고
     * 서버에서는 CRUD 를 수행한다.
     * 이 메서드가 React 에 의해 호출될때
     * state 변수의 변화를 감지할 수 있다
     * state 변수에 변화가 있어서 화면이 렌더링될때
     * 변화 되기 이전 데이터가 pre** 매개변수에 담겨서 전달이 된다.
     * 이 데이터와 현재 데이터를 비교하여 달라졌을 경우
     * DB에 저장하거나 하는 일을 수행하여 효율을 높일 수 있다.
     * */
    componentDidUpdate(prevProps, prevState, snapshot) {
        const preString = JSON.stringify(prevState.bucketList);
        const thisString = JSON.stringify(this.state.bucketList);

        if (prevState !== thisString) {
            localStorage.setItem("bucketList", thisString);
        }
    }

    // 현재 컴포넌트가 모두 마운트되고
    // rendering 이 되기 바로 직전에 호출되는 method
    // 서버로 부터 데이터를 요청하여 가져오는 코드를 추가
    componentDidMount() {
        const loadBucketList = localStorage.getItem("bucketList"); // String
        // JS 특성상 문자열일 경우 null, "" 이 아니면 논리적으로 true 가 됨.
        if (loadBucketList) {
            const jsonBucketList = JSON.parse(loadBucketList);
            this.setState({bucketList: jsonBucketList});
            this.id = jsonBucketList.length;
        }
    }

    bucketInsert = (bucket_title) => {
        const date = new Date();
        const bucket = {
            b_id: ++this.id,
            b_flag: 9,
            b_start_date: date.toString(),
            b_title: bucket_title,
            b_end_date: "",
            b_end_check: false,
            b_cancel: false,
        }

        // 일반적인 JS 코드
        // bucketList.push(bucket)
        // 하지만 react 의 선언적 철학은
        // 절대 state 형 변수는 직접 변형하지 말라!!
        // this.setState({bucketList: this.state.bucketList.concat({...bucket})});

        // 전개 연산자를 사용하는 방법
        this.setState({bucketList: [...this.state.bucketList, bucket]})
    };

    handleFlagClick = (id) => {
        const flagBucketList = this.state.bucketList.map(bucket => {
            if (bucket.b_id === Number(id)) {
                const flag = bucket.b_flag + 1;
                return {
                    ...bucket,
                    b_flag: flag,
                }
            } else {
                return bucket;
            }
        });
        this.setState({bucketList: flagBucketList});
    }

    updateBucket = (id, title) => {
        const updateBucketList = this.state.bucketList.map(bucket => {
            if (bucket.b_id === Number(id)) {
                return {
                    ...bucket,
                    b_title: title,
                }
            } else {
                return bucket;
            }
        })
        this.setState({bucketList: updateBucketList})
    }

    handleCancel = (id) => {
        const cancelBucketList = this.state.bucketList.map(bucket => {
            if (bucket.b_id === Number(id)) {
                return {
                    ...bucket,
                    b_cancel: !bucket.b_cancel
                }
            } else {
                return bucket;
            }
        })
        this.setState({bucketList: cancelBucketList})
    }

    handleComplete = (id) => {
        const date = new Date();
        const compBucketList = this.state.bucketList.map(bucket => {
            if (bucket.b_id === Number(id)) {
                return {
                    ...bucket,
                    b_end_date: date.toString(),
                    b_end_check: !bucket.b_end_check,
                }
            } else {
                return bucket
            }
        })
        this.setState({bucketList: compBucketList})
    }

    /**
     * class Component 에서 child Component 에 state 형 변수를 보낼때는
     * 보낼 변수명={this.state.변수}
     *
     * 함수를 보낼때
     * 보낼 함수명={this.함수명()}
     * */
    render() {
        return (
            <div>
                <p>
                    <BucketInsert bucketInsert={this.bucketInsert}/>
                </p>
                <p>
                    <BucketList bucketList={this.state.bucketList}
                                handleFlagClick={this.handleFlagClick}
                                updateBucket={this.updateBucket}
                                handleCancel={this.handleCancel}
                                handleComplete={this.handleComplete}
                    />
                </p>
            </div>
        );
    }
}

export default BucketMain;
