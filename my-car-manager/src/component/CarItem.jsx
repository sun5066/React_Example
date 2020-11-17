import React, {Component} from 'react';

class CarItem extends Component {
    handleClick = (e) => {

    };

    render() {
        const {item, index, deleteItem} = this.props;

        return (
            <tr>
                <td>{index}</td>
                <td>연료주유</td>
                <td>{item.start_date}</td>
                <td>{item.end_date}</td>
                <td>{item.present_distance}</td>
                <td>{item.cost}</td>
                <td>{item.place}</td>
                <td className={"delete-item"} onClick={this.handleClick}>&times;</td>
            </tr>
        );
    }
}

export default CarItem;