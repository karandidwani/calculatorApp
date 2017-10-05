import React from 'react';
import "./App.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 0
        };
        this.inputNumber = this.inputNumber.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
    }

    inputNumber(e) {

        const display = this.state.display.toString();

        if (display === '0') {
            this.setState({
                display: e.target.value
            });
            console.log("if else 1");
        } else if (e.target.value === ".") {
            if (!(/\./).test(display)) {
                this.setState({
                    display: this.state.display + e.target.value
                });
            }
            console.log("if else 2");
        } else if ((/\+/).test(display)) {
            if (e.target.value === "+" || e.target.value === "=") {
                this.add();
            } else {
                this.setState({
                    display: this.state.display + e.target.value
                });
            }
            console.log("if else 3");
        } else if ((/\-/).test(display)) {
            if (e.target.value === "-" || e.target.value === "=") {
                this.subtract();
            } else {
                this.setState({
                    display: this.state.display + e.target.value
                });
            }
            console.log("if else 4");
        } else if ((/\*/).test(display)) {
            if (e.target.value === "*" || e.target.value === "=") {
                this.multiply();
            } else {
                this.setState({
                    display: this.state.display + e.target.value
                });
            }
            console.log("if else 5");
        } else if ((/\//).test(display)) {
            if ((e.target.value === "/") || (e.target.value === "=")) {
                console.log("call divide function");
                this.divide();
            } else {
                console.log("can pass thru \ test");
                this.setState({
                    display: this.state.display + e.target.value
                });
            }
            console.log("if else 6");
        } else if (e.target.value === "%") {
            if (!(/\%/).test(display)) {
                this.setState({
                    display: parseFloat(this.state.display) / 100
                })
            }
            console.log("if else 7");
        } else {
            this.setState({
                display: this.state.display + e.target.value
            });
        }
    }

    clearAll() {
        this.setState({
            display: 0
        });
    }

    add() {

        const input = this.state.display;
        console.log("input is  " + input);
        console.log("splitting the input " + input.split('+'));
        const ip = input.split('+');
        const operand1 = ip[0];
        console.log("ip1 " + ip[0]);
        const operand2 = ip[1];

        fetch('http://localhost:3001/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"op1": operand1, "op2": operand2})
        }).then((response) => response.json()).then((responseJson) => {
            console.log("result" + responseJson.result);
            this.setState({
                display: responseJson.result
            });
            return responseJson;
        })
            .catch(error => {
                console.log("This is error : " + error);
                return error;
            });
    }

    subtract() {

        const input = this.state.display;
        console.log("input is  " + input);
        console.log("splitting the input " + input.split('-'));
        const ip = input.split('-');
        const operand1 = ip[0];
        console.log("ip1 " + ip[0]);
        const operand2 = ip[1];

        fetch('http://localhost:3001/sub', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"op1": operand1, "op2": operand2})
        }).then((response) => response.json()).then((responseJson) => {
            console.log("result" + responseJson.result);
            this.setState({
                display: responseJson.result
            });
            return responseJson;
        })
            .catch(error => {
                console.log("This is error : " + error);
                return error;
            });
    }

    multiply() {

        const input = this.state.display;
        console.log("input is  " + input);
        console.log("splitting the input " + input.split('*'));
        const ip = input.split('*');
        const operand1 = ip[0];
        console.log("ip1 " + ip[0]);
        const operand2 = ip[1];

        fetch('http://localhost:3001/mult', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"op1": operand1, "op2": operand2})
        }).then((response) => response.json()).then((responseJson) => {
            console.log("result" + responseJson.result);
            this.setState({
                display: responseJson.result
            });
            return responseJson;
        })
            .catch(error => {
                console.log("This is error : " + error);
                return error;
            });
    }

    divide() {

        const input = this.state.display;
        console.log("input is  " + input);
        console.log("splitting the input " + input.split('/'));
        const ip = input.split('/');
        const operand1 = ip[0];
        console.log("ip1 " + ip[0]);
        const operand2 = ip[1];
        console.log("inside divide func");
        if (operand2 == 0) {
            this.setState({display: "Divide by 0 Error"});
            console.log("inside divide func if divide by 0 condition");
        }
        else {
            console.log("inside divide func calling API");
            fetch('http://localhost:3001/div', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"op1": operand1, "op2": operand2})
            }).then((response) => response.json()).then((responseJson) => {
                console.log("result" + responseJson.result);
                this.setState({
                    display: responseJson.result
                });
                return responseJson;
            })
                .catch(error => {
                    console.log("This is error : " + error);
                    return error;
                });
        }

    }


    render() {
        return (
            <div align="center" style={{verticalAlign: "middle"}}>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Orbitron');
                </style>
                <h1 className="p">React Calculator App</h1>
                <table className="table">
                    <th className="th" colSpan={4}>
                        <p className="p">{this.state.display}</p>
                    </th>
                    <tbody>
                    <tr className="tr">
                        <td className="td">
                            <button className="button" onClick={this.clearAll}>C</button>
                        </td>
                        <td className="td">
                            <button className="button" value='%' onClick={this.inputNumber}>%</button>
                        </td>
                        <td className="td">
                            <button className="button" value='/' onClick={this.inputNumber}>/</button>
                        </td>
                        <td className="td">
                            <button className="button" value='*' onClick={this.inputNumber}>*</button>
                        </td>
                    </tr>
                    <tr className="tr">
                        <td className="td">
                            <button className="button" value={7} onClick={this.inputNumber}>7</button>
                        </td>
                        <td className="td">
                            <button className="button" value={8} onClick={this.inputNumber}>8</button>
                        </td>
                        <td className="td">
                            <button className="button" value={9} onClick={this.inputNumber}>9</button>
                        </td>
                        <td className="td">
                            <button className="button" value='-' onClick={this.inputNumber}>-</button>
                        </td>
                    </tr>
                    <tr className="tr">
                        <td className="td">
                            <button className="button" value={4} onClick={this.inputNumber}>4</button>
                        </td>
                        <td className="td">
                            <button className="button" value={5} onClick={this.inputNumber}>5</button>
                        </td>
                        <td className="td">
                            <button className="button" value={6} onClick={this.inputNumber}>6</button>
                        </td>
                        <td className="td">
                            <button className="button" value='+' onClick={this.inputNumber}>+</button>
                        </td>

                    </tr>
                    <tr className="tr">
                        <td className="td">
                            <button className="button" value={1} onClick={this.inputNumber}>1</button>
                        </td>
                        <td className="td">
                            <button className="button" value={2} onClick={this.inputNumber}>2</button>
                        </td>
                        <td className="td">
                            <button className="button" value={3} onClick={this.inputNumber}>3</button>
                        </td>
                        <td className="td" rowSpan={2}>
                            <button className="button" value="=" onClick={this.inputNumber} style={{height: "120px"}}>
                                =
                            </button>
                        </td>
                    </tr>
                    <tr className="tr">
                        <td className="td" colSpan={2}>
                            <button className="button" value={0} onClick={this.inputNumber} style={{width: "85%"}}>0
                            </button>
                        </td>
                        <td className="td">
                            <button className="button" value="." onClick={this.inputNumber}>.</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;