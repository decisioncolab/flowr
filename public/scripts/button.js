var Button = React.createClass({
    localHandleClick: function () {
        this.props.localHandleClick(this.props.incrememt);
    },
    render: function() {
        return (
            <button onClick={this.localHandleClick}>+{this.props.incrememt}</button>
        )
    }
});
var Result = React.createClass({
    render: function() {
        return (
            <div>{this.props.localCounter}</div>
        )
    }
});
var Main = React.createClass({
    getInitialState: function() {
        return { counter: 0 };
    },
    handleClick: function(increment) {
        this.setState({ counter: this.state.counter + increment });
    },
    render: function() {
        return (
            <div>
                <Button localHandleClick={this.handleClick} incrememt={1}/>
                <Button localHandleClick={this.handleClick} incrememt={10}/>
                <Button localHandleClick={this.handleClick} incrememt={1000}/>
                <Button localHandleClick={this.handleClick} incrememt={10000}/>
                <Result localCounter={this.state.counter}/>
            </div>
        )
    }
})

ReactDOM.render(<Main />, document.getElementById("rbut"));