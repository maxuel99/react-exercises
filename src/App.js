import React from "react";
import CarDetails from "./CarDetails";
import { ClickCounter } from "./ClickCounter";
import { CLickTracker } from "./ClickTracker ";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { CurrentPosition } from "./CurrentPosition";
import { DisplayLanguage } from "./DisplayLanguage";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import { HelloWorld } from "./HelloWorld";
import { HookCounter } from "./HookCounter";
import { HookForm } from "./HookForm";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { LanguageContext } from "./LanguageContext";
import { Login } from "./Login";
import { Sum } from "./Sum";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin ";
import { Welcome } from "./Welcome";

const todos = [
    { id: 1, name: 'Red'},
    { id: 2, name: 'Green'},
    { id: 3, name: 'Blue'}
]

const items = [
    { id: 1, name: 'Fare la spesa'},
    { id: 2, name: 'Fare i compiti'},
    { id: 3, name: 'Lavare la macchina'},
    { id: 4, name: 'Lavarsi i denti'}
]

export class App extends React.Component {
    state = {
        language: ""
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
          <Container title="My Awesome Application">
            <select value={this.state.language} onChange={this.handleLanguageChange} className={"mx-3 mb-2"}>
              <option value="">--select-lang--</option>
              <option value="en">English</option>
              <option value="it">Italian</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>
              <DisplayLanguage />
            </LanguageContext.Provider>
            <HelloWorld />
            <Welcome age="23" />
            <Counter />
            <ClickCounter />
            <CLickTracker />
            <InteractiveWelcome />
            <Login />
            <UncontrolledLogin />
            <Colors todos={todos} />
            <TodoList items={items}>
              {(item) => {
                return <div>{item}</div>;
              }}
            </TodoList>
            <Sum />
            <GithubUser username="maxuel99" />
            <GithubUserList />
            <HookCounter />
            <HookForm />
            <CurrentPosition />
            <CarDetails />
          </Container>
        );
    }
}