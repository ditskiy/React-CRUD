import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "John C.", salary: 800, increase: false, like: true, id: 1},
                {name: "Alex M.", salary: 3000, increase: true, like: false, id: 2},
                {name: "Carl W.", salary: 15000, increase: false, like: false, id: 3},
            ]
        }
        this.maxId = 4;
    }
        
    deliteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        if (name.length < 3) {
            return alert("Имя должно быть длинее 3-х символов")
        }
        if (salary === "") {
            return alert("Введите значение зарплаты")
        }
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, like: !item.like}
                }
                return item;
            })
        }))
    }


    render() {
        const employers = this.state.data.length;
        const incrised = this.state.data.filter(item => item.increase).length
        return (
            <div className="app">
                <AppInfo
                employers={employers}
                incrised={incrised}/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList 
                    data={this.state.data}
                    onDelite={this.deliteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployersAddForm
                    onAdd={this.addItem}/>
            </div>
        );
   }
}

export default App;