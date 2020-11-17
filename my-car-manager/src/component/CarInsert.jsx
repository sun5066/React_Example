import React, {Component} from 'react';

class CarInsert extends Component {

    state = {
        id: 0,
        start_date: "",
        end_date: "",
        present_distance: "",
        cost: "",
        place: "",
        isUpdate: false,
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const {carInsert} = this.props;
            carInsert(this.state);
        }
    }

    render() {
        if (this.props.carData.isUpdate) {
            this.state = this.props.carData;
        }

        const {start_date, end_date, present_distance, cost, place} = this.state;
        return (
            <div className={"form"}>
                <input name={"start_date"} onChange={this.onChange} value={start_date} placeholder={"시작일시"}/>
                <input name={"end_date"} onChange={this.onChange} value={end_date} placeholder={"종료일시"}/>
                <input name={"present_distance"} onChange={this.onChange} value={present_distance}
                       placeholder={"현재거리"}/>
                <input name={"cost"} onChange={this.onChange} value={cost} placeholder={"소모비용"}/>
                <input name={"place"} onChange={this.onChange} value={place} onKeyPress={this.handleKeyPress}
                       placeholder={"장소"}/>
            </div>
        );
    }
}

export default CarInsert;