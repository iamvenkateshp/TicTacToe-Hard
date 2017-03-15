function Square(props){
    return (
      <button className="square" onClick={()=>props.onClick()}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {
  renderSquare(i,j) {
    return <Square value={this.props.squares[i].squares[j]} onClick={()=>this.props.onClick(i,j)}/>;
  }
  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0,0)}
          {this.renderSquare(0,1)}
          {this.renderSquare(0,2)}
          {this.renderSquare(1,0)}
          {this.renderSquare(1,1)}
          {this.renderSquare(1,2)}
          {this.renderSquare(2,0)}
          {this.renderSquare(2,1)}
          {this.renderSquare(2,2)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,3)}
          {this.renderSquare(0,4)}
          {this.renderSquare(0,5)}
          {this.renderSquare(1,3)}
          {this.renderSquare(1,4)}
          {this.renderSquare(1,5)}
          {this.renderSquare(2,3)}
          {this.renderSquare(2,4)}
          {this.renderSquare(2,5)}
        </div>
        <div className="board-row">
          {this.renderSquare(0,6)}
          {this.renderSquare(0,7)}
          {this.renderSquare(0,8)}
          {this.renderSquare(1,6)}
          {this.renderSquare(1,7)}
          {this.renderSquare(1,8)}
          {this.renderSquare(2,6)}
          {this.renderSquare(2,7)}
          {this.renderSquare(2,8)}
        </div>
        <div className="board-row">
          {this.renderSquare(3,0)}
          {this.renderSquare(3,1)}
          {this.renderSquare(3,2)}
          {this.renderSquare(4,0)}
          {this.renderSquare(4,1)}
          {this.renderSquare(4,2)}
          {this.renderSquare(5,0)}
          {this.renderSquare(5,1)}
          {this.renderSquare(5,2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3,3)}
          {this.renderSquare(3,4)}
          {this.renderSquare(3,5)}
          {this.renderSquare(4,3)}
          {this.renderSquare(4,4)}
          {this.renderSquare(4,5)}
          {this.renderSquare(5,3)}
          {this.renderSquare(5,4)}
          {this.renderSquare(5,5)}
        </div>
        <div className="board-row">
          {this.renderSquare(3,6)}
          {this.renderSquare(3,7)}
          {this.renderSquare(3,8)}
          {this.renderSquare(4,6)}
          {this.renderSquare(4,7)}
          {this.renderSquare(4,8)}
          {this.renderSquare(5,6)}
          {this.renderSquare(5,7)}
          {this.renderSquare(5,8)}
        </div>
        <div className="board-row">
          {this.renderSquare(6,0)}
          {this.renderSquare(6,1)}
          {this.renderSquare(6,2)}
          {this.renderSquare(7,0)}
          {this.renderSquare(7,1)}
          {this.renderSquare(7,2)}
          {this.renderSquare(8,0)}
          {this.renderSquare(8,1)}
          {this.renderSquare(8,2)}
        </div>
        <div className="board-row">
          {this.renderSquare(6,3)}
          {this.renderSquare(6,4)}
          {this.renderSquare(6,5)}
          {this.renderSquare(7,3)}
          {this.renderSquare(7,4)}
          {this.renderSquare(7,5)}
          {this.renderSquare(8,3)}
          {this.renderSquare(8,4)}
          {this.renderSquare(8,5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6,6)}
          {this.renderSquare(6,7)}
          {this.renderSquare(6,8)}
          {this.renderSquare(7,6)}
          {this.renderSquare(7,7)}
          {this.renderSquare(7,8)}
          {this.renderSquare(8,6)}
          {this.renderSquare(8,7)}
          {this.renderSquare(8,8)}
        </div>
      </div>
    );
  }
}
//
var Game = React.createClass({
  getInitialState(){
    return {
      history:[
                {
                  bigSquare:[
                    {squares:Array(9).fill(null)},{squares:Array(9).fill(null)},{squares:Array(9).fill(null)},
                    {squares:Array(9).fill(null)},{squares:Array(9).fill(null)},{squares:Array(9).fill(null)},
                    {squares:Array(9).fill(null)},{squares:Array(9).fill(null)},{squares:Array(9).fill(null)}
                  ],
                  overallWins : Array(9).fill(null),
                  xIsNext : true,
                }
              ],
    };
  },
  
  
  handleClick(i,j){
    const history = this.state.history;
    const current = history[history.length-1];
    const bigSquare = JSON.parse(JSON.stringify(current.bigSquare));
    const squares = bigSquare[i].squares;
    const winner = calculateWinner(squares);
    const overallWins = current.overallWins.slice();
    const overallWinner = calculateWinner(overallWins);
    if (overallWinner || winner || squares[j]){
      return ;
    }
    
    if (current.xIsNext){
      squares[j] = 'X';
    }
    else{
      squares[j] = 'O';
    }
    
    const winnerAfterChange = calculateWinner(squares);
    if (winnerAfterChange)
    {
      overallWins[i]=winnerAfterChange
    }
    this.setState({history:history.concat([{bigSquare:bigSquare,xIsNext:!current.xIsNext,overallWins:overallWins}])});
  },
  
  handleRetryClick(){
    this.setState(this.getInitialState());
  },
  handleUndoClick(){
    var temphistory = this.state.history;
    var prevState =temphistory.pop();
    this.setState(prevState);
  },//
  
  
  render() {
    const history = this.state.history;
    
    const current = history[history.length-1];
    
    const overallWinner = calculateWinner(current.overallWins);
    
    status = "";
    if (overallWinner){
      status = 'Winner: '+overallWinner
    }
    else{
      status = 'Next player: '+(current.xIsNext?'X':'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <div>{status}</div>
          <Board squares={current.bigSquare} onClick={(i,j)=>this.handleClick(i,j)}/>
        </div>
        <div className="game-info">
          <button onClick={()=>this.handleRetryClick()}>{"retry"}</button>
          <button onClick={()=>this.handleUndoClick()}>{"undo"}</button>
        </div>
      </div>
    );
  }
})

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
