import React, {Component} from 'react';
import CarItem from "./CarItem";

class CarList extends Component {
    render() {
        const {carList} = this.props;

        const carItems = carList.map((item, index) => {
            return (
                <CarItem item={item} index={index} />
            );
        });

        return (
            <table>
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
                {carItems}
            </table>
        );
    }
}

export default CarList;