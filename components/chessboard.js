import React from 'react';
import boardStyles from "./chessboard.module.css";

const Chessboard = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
        const row = [];
        for (let j = 0; j < 8; j++) {
            const color = (i + j) % 2 === 0 ? 'white' : 'black';
            row.push(
                <td key={j} style={{ width: '12.5%', height: '65px', backgroundColor: color }} />
            );
        }
        rows.push(
            <tr key={i}>
                {row}
            </tr>
        );
    }
    return (
        <table className={boardStyles.boardTable} style={{ width: '100%', height: '100%' }}>
            <tbody>
            {rows}
            </tbody>
        </table>
    );
};

export default Chessboard;