import React, {Component} from 'react';

class BbsItem extends Component {
    render() {
        const {index, bbs} = this.props;

        return (
            <tr>
                <td>{index}</td>
                <td>{bbs.d_writer}</td>
                <td>{bbs.b_date}</td>
                <td>{bbs.b_subject}</td>
                <td>&times;</td>
            </tr>
        );
    }
}

export default BbsItem;