
import * as React from 'react'
import axios from 'axios'

interface HomeState {
    loading: boolean
}

export default class Home extends React.Component<{}, HomeState> {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
        }
    }

    render(): JSX.Element {
        const content = this.state.loading
            ? <p><em>Loading...</em></p>
            : <h2>Preact - A Phoenix setup using React</h2>

        return (
            <div>
                {content}
            </div >
        )
    }
}
