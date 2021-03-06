import React ,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import '../index.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'


class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
			}}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots:users}))
		}

	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value})}

	render(){
		const {robots,searchfield}=this.state;
		const filteredRobots = robots.filter((robot) =>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		return !robots.length?
			<h1 className='tc'>LOADING</h1> :
		
		 (
			<div className = 'tc'>
				<h1>Robots sind meine freunde</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>	
				</Scroll>
			</div>
			);
		}}

export default App;