import React, {Component} from 'react';

class CarInsert extends Component {

    state = {
        start_date: "",
        end_date: "",
        present_distance: "",
        cost: "",
        place: ""
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const {insertList} = this.props;
            insertList(this.state);
        }
    }

    render() {
        return (
            <div className={"form"}>
                <input name={"start_date"} onChange={this.onChange} n placeholder={"시작일시"}/>
                <input name={"end_date"} onChange={this.onChange} placeholder={"종료일시"}/>
                <input name={"present_distance"} onChange={this.onChange} placeholder={"현재거리"}/>
                <input name={"cost"} onChange={this.onChange} placeholder={"소모비용"}/>
                <input name={"place"} onChange={this.onChange} onKeyPress={this.handleKeyPress} placeholder={"장소"}/>
            </div>
        );
    }
}

export default CarInsert;