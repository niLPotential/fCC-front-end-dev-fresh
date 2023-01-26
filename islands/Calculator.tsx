import { useReducer } from "preact/hooks";

type StateType = {
  currentInput: string;
  inputList: string[];
};

type ActionType = {
  type: "operand" | "operator" | "decimal" | "equals" | "clear";
  input: string;
};

// const initialState: StateType = { currentInput: "0", inputList: [] };

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "operand":
      state.inputList.push(state.currentInput);
      return { ...state, currentInput: action.input };
    case "operator":
      state.inputList.push(action.input);
      return state;
    case "decimal":
      return state;
    case "equals": {
      state.inputList.push(state.currentInput);

      const firstOperand = parseInt(state.inputList[1]);
      const secondOperand = parseInt(state.inputList[3]);

      let result = 0;

      switch (state.inputList[2]) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
      }

      return { currentInput: result.toString(), inputList: [] };
    }
    case "clear":
      return { currentInput: "0", inputList: [] };
    default:
      return state;
  }
}

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, {
    currentInput: "0",
    inputList: [],
  });

  const handleClear = () => {
    dispatch({ type: "clear", input: "" });
  };

  const handleOperandClick = (e: Event) => {
    dispatch({ type: "operand", input: (e.target as HTMLButtonElement).value });
  };

  const handleOperatorClick = (e: Event) => {
    dispatch({
      type: "operator",
      input: (e.target as HTMLButtonElement).value,
    });
  };

  const handleDecimalClick = () => {
    dispatch({
      type: "decimal",
      input: ".",
    });
  };

  const handleEquals = () => {
    dispatch({ type: "equals", input: "" });
  };

  return (
    <div id="calculator">
      <button id="equals" onClick={handleEquals}>=</button>
      <button id="zero" value={0} onClick={handleOperandClick}>0</button>
      <button id="one" value={1} onClick={handleOperandClick}>1</button>
      <button id="two" value={2} onClick={handleOperandClick}>2</button>
      <button id="three" value={3} onClick={handleOperandClick}>3</button>
      <button id="four" value={4} onClick={handleOperandClick}>4</button>
      <button id="five" value={5} onClick={handleOperandClick}>5</button>
      <button id="six" value={6} onClick={handleOperandClick}>6</button>
      <button id="seven" value={7} onClick={handleOperandClick}>7</button>
      <button id="eight" value={8} onClick={handleOperandClick}>8</button>
      <button id="nine" value={9} onClick={handleOperandClick}>9</button>
      <button id="add" value="+" onClick={handleOperatorClick}>+</button>
      <button id="subtract" value="-" onClick={handleOperatorClick}>-</button>
      <button id="multiply" value="*" onClick={handleOperatorClick}>*</button>
      <button id="divide" value="/" onClick={handleOperatorClick}>/</button>
      <button id="decimal" value="." onClick={handleDecimalClick}>.</button>
      <button id="clear" onClick={handleClear}>Clear</button>
      <div id="display">
        {state.currentInput}
        <br />
        {state.inputList}
      </div>
    </div>
  );
}
