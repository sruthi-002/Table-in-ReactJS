import React from 'react';
import header from './index.css';
import style from './index.css';
function Table(){
    return <div background-color="black">
        <h1 className='style' align="center">Student Information</h1>
        <table  className='header' cellPadding={8} cellSpacing={2} border={4} align="center" >
            <thead>
                <th>
                    ID
                </th>
                <th>
                    Register Number
                </th>
                <th>
                    Name
                </th>
                <th>
                   Course Applied
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>913119106111</td>
                    <td>Sruthi</td>
                    <td>JAVA</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>913119106112</td>
                    <td>Sree Dhanya</td>
                    <td>React JS</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>913119106113</td>
                    <td>Harsidh Krishna</td>
                    <td>Python</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>913119106114</td>
                    <td>Hemalatha</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>913119106115</td>
                    <td>Ramesh</td>
                    <td>SQL</td>
                </tr>
            </tbody>
        </table>
    </div>
}
export default Table;