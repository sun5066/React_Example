import React, {Component} from 'react';
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
    id = 2;
    state = {
        carList: [
            {
                id: 0,
                start_date: "2020-11-10",
                end_date: "2020-11-17",
                present_distance: "180000",
                cost: "50000",
                place: "광주"
            },
            {
                id: 1,
                start_date: "2020-11-10",
                end_date: "2020-11-17",
                present_distance: "180000",
                cost: "50000",
                place: "광주"
            },
        ]
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const prevString = JSON.stringify(prevState.carList);
        const thisString = JSON.stringify(this.state.carList);

        if (prevState !== thisString) {
            localStorage.setItem("carList", thisString);
        }
    }

    componentDidMount() {
        const loadCarList = localStorage.getItem("carList");

        if (loadCarList) {
            const jsonCarList = JSON.parse(loadCarList);
            this.setState({carList: jsonCarList});
            this.id = jsonCarList.length;
        }
    }

    insertList = (item) => {
        const newList = [
            ...this.state.carList,
            {
                id: this.id++,
                start_date: item.start_date,
                end_date: item.end_date,
                present_distance: item.present_distance,
                cost: item.cost,
                place: item.place,
            },
        ];
        this.setState({carList: newList});
    }

    render() {
        return (
            <div>
                <div>
                    <CarInsert insertList={this.insertList}/>
                </div>
                <div>
                    <CarList carList={this.state.carList}/>
                </div>
            </div>
        );
    }
}

export default CarMain;