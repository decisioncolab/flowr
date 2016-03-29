var Card = React.createClass ({
   getInitialState: function () {
     return {};  
   },
   render: function () {
        return (
            <div>
                <img src="" />
                <h3>Nome Aqui</h3>
                <hr/>
            </div>
        )
   } 
});

var Main = React.createClass ({
   render: function () {
       return (
           <div>
            <Card />
           </div>
       )
   } 
});

ReactDOM.render(<Main />, document.getElementById("card"));