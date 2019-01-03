
import * as React from 'react'
import Header from './components/Header/Header'

export default class Root extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className="container-fluid" id="app">
                <Header />
                <div id="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
