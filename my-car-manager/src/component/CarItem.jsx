import React, {Component} from 'react';

class CarItem extends Component {
    render() {
        const {item, index, deleteItem, updateItem} = this.props;

        const handleDeleteClick = (e, id) => {
            if (e.target.className === "delete-item") {
                if (window.confirm("삭제할까요?")) {
                    deleteItem(id);
                    return false;
                }
            }
        };

        const handleUpdateClick = (e, item) => {
            updateItem(item);
        }

        return (
            <tbody>
            <tr className={"update-item"} onClick={e => handleUpdateClick(e, item)}>
                <td>{index + 1}</td>
                <td>연료주유</td>
                <td>{item.start_date}</td>
                <td>{item.end_date}</td>
                <td>{item.present_distance}</td>
                <td>{item.cost}</td>
                <td>{item.place}</td>
                <td className={"delete-item"} onClick={e => handleDeleteClick(e, item.id)}>&times;</td>
            </tr>
            </tbody>
        );
    }
}

export default CarItem;