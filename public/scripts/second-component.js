var second = React.createClass ({displayName: "second", 
    render: function(){
        return(
            React.createElement ("div", {className: "container"},
            React.createElement ("h1", null, "second output")
            )
        )
    }
});

ReactDOM.render (React.createElement(second, null), document.getElementById('second'));
