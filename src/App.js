import React from "react";
import { ClickCounter } from "./ClickCounter";
import { CLickTracker } from "./ClickTracker ";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
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

    render() {
        return (
                <Container title="My Awesome Application">
                    <LanguageContext.Provider value="">
                        <DisplayLanguage />
                    </LanguageContext.Provider>
                    <HelloWorld />
                    <Welcome age='23' />
                    <Counter />
                    <ClickCounter />
                    <CLickTracker />
                    <InteractiveWelcome />
                    <Login />
                    <UncontrolledLogin />
                    <Colors todos={todos} />
                    <TodoList items={items}>
                        {(item) => {
                            return (
                                <div>{item}</div>
                            )
                        }}
                    </TodoList>
                    <Sum />
                    <GithubUser username='maxuel99' />
                    <GithubUserList />
                    <HookCounter />
                    <HookForm />
                </Container>  
        )
    }
}