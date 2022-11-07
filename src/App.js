import "./App.css";
import { Component } from "react";
import { CardList } from "./components/cardList/cardList.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchFiled = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFiled };
    });
  };

  render() {
    const { onSearchChange } = this;
    const { monsters, searchFiled } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFiled);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monster-search-box"
          onSearchChangeHandler={onSearchChange}
          placeholder="search monsters"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
