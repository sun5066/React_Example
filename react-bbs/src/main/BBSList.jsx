import React, { Component } from "react";
import BbsItem from "./BBSItem";
import "../css/BBSList.css";

class BbsList extends Component {
    render() {
        const { bbsList } = this.props;
        const bbsItemList = bbsList.map((bbs, index) => (
            <BbsItem index={index} bbs={bbs} />
        ));

        return (
            <table className={"bbs-list"}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>작성자</th>
                        <th>작성일시</th>
                        <th>제목</th>
                        <th>&hearts;</th>
                    </tr>
                </thead>
                <tbody>{bbsItemList}</tbody>
            </table>
        );
    }
}

export default BbsList;
