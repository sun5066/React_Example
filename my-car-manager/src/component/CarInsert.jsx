import React, {Component} from 'react';
import "../css/CarInsert.css";

class CarInsert extends Component {
    state = {
        id: 0,
        start_date: "",
        end_date: "",
        present_distance: "",
        cost: "",
        place: "",
    }

    componentDidUpdate() {
        if (this.props.carData.id !== this.state.id) {
            this.setState({ ...this.props.carData });
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    render() {
        const {start_date, end_date, present_distance, cost, place, isUpdate} = this.state;
        return (
            <div className={"input-form"}>
                <input name={"start_date"} onChange={this.handleChange} value={start_date} placeholder={"시작일시"}/>
                <input name={"end_date"} onChange={this.handleChange} value={end_date} placeholder={"종료일시"}/>
                <input name={"present_distance"} onChange={this.handleChange} value={present_distance}
                       placeholder={"현재거리"}/>
                <input name={"cost"} onChange={this.handleChange} value={cost} placeholder={"소모비용"}/>
                <input name={"place"} onChange={this.handleChange} value={place} onKeyPress={e => {
                    if (e.key === "Enter") {
                        const {carInsert, carUpdate} = this.props;
                        if (isUpdate) {
                            carUpdate(this.state);
                        } else {
                            carInsert(this.state);
                        }
                    }
                }} placeholder={"장소"}/>
            </div>
        );
    }
}

export default CarInsert;