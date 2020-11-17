import React, {Component} from 'react';
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
    id = 0;
    state = {
        carList: [],
        carData: {
            isUpdate: false,
            id: 0,
            start_date: "",
            end_date: "",
            present_distance: "",
            cost: "",
            place: "",
        },
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

    carInsert = (item) => {
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

    deleteItem = (id) => {
        const deleteList = this.state.carList.filter(item => {
            if (item.id !== Number(id)) return item;
        })
        this.setState({carList: deleteList});
    }

    updateItem = (item) => {
        this.setState({carData: {...item, isUpdate: true}})
    }

    carUpdate = item => {
        const updateCarList = this.state.carList.map(car => {
            if (item.id === car.id) {
                const newItem = [
                    ...this.state.carList,
                    {
                        id: item.id,
                        start_date: item.start_date,
                        end_date: item.end_date,
                        present_distance: item.present_distance,
                        cost: item.cost,
                        place: item.place,
                    }
                ]
            }
        })
        // this.setState({carList: updateCarList});
    }

    render() {
        return (
            <div>
                <div>
                    <CarInsert carInsert={this.carInsert} carData={this.state.carData} carUpdate={this.carUpdate}
                               isUpdate={this.state.carData.isUpdate}/>
                </div>
                <div>
                    <CarList carList={this.state.carList} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
                </div>
            </div>
        );
    }
}

export default CarMain;