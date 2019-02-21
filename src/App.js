import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
	state = {
		ninjaList: [
			{
				name: 'Rishav R',
				age: Math.floor(Math.random() * 100),
				sex: 'Male',
				id: 1,
			},
			{
				name: 'Sanam',
				age: Math.floor(Math.random() * 100),
				sex: 'Male',
				id: 2,
			},
		],
	};

	addToNinjaList = (x) => {
		// console.log(x);
		x.id = this.state.ninjaList.length + 1;
		var arr = [...this.state.ninjaList, x];
		this.setState({
			ninjaList: arr,
		});
	};

	removeFromNinjaList = (x) => {
		console.log(x);
		var final = this.state.ninjaList.filter((ele) => {
			return ele.id !== x;
		});
		this.setState({ ninjaList: final });
	};

	componentDidMount() {
		console.log('Components mounted');
	}

	componentDidUpdate(prevProv, prevState) {
		console.log('Component updated');
		console.log(prevProv, prevState);
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
				</header>

				<h1>This is my first React App</h1>
				<Ninjas
					ninjaListPass={this.state.ninjaList}
					deleter={this.removeFromNinjaList}
				/>
				<AddNinja adder={this.addToNinjaList} />
			</div>
		);
	}
}

export default App;
