import * as React from 'react';

export interface AppState {
    count: number;
}
export interface AppProps {
}

export class App extends React.Component<AppProps, AppState> {
    state = {
        count: 0
    }

    private onAddButtonClick = () => this.setState((s)=> ({ count: s.count + 1}));
    private onDecrementButtonClick = () => this.setState((s)=> ({ count: s.count -1}));

    public render() {
        return (
            <div>
                <div>Hello World!!</div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.onAddButtonClick}>+</button>
                <button onClick={this.onDecrementButtonClick}>-</button>
            </div>
        )
    }
}
