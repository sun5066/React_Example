import React, {Component} from 'react';
import CarItem from "./CarItem";

class CarList extends Component {
    render() {
        const {carList, deleteItem, updateItem} = this.props;
        const carItems = carList.map((item, index) => {
            return (
                <CarItem key={item.id}
                         item={item}
                         index={index}
                         deleteItem={deleteItem}
                         updateItem={updateItem}
                />
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>No.</th>
                    <th>구분</th>
                    <th>시작일시</th>
                    <th>종료일시</th>
                    <th>현재거리</th>
                    <th>소모비용</th>
                    <th>장소</th>
                    <th>&hearts;</th>
                </tr>
                </thead>
                {carItems}
            </table>
        );
    }
}

export default CarList;