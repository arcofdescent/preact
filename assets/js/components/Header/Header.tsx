
import * as React from 'react'
import { Row } from 'reactstrap'

export default class Header extends React.Component<{}, {}> {
    constructor(props) {
        super(props)
    }

    public render(): JSX.Element {
        return (
            <div className="header">
                <a href="/">Home</a>
                <a href="/list_exchanges">Exchanges</a>
                <a href="/list_instruments">Instruments</a>
                <a href="/vwap">VWAP</a>
                <a href="/feed/status">Feed</a>
            </div>
        )
    }
}
