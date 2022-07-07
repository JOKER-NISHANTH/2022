import colorNames from "colornames";

const Input = (
  {
    colorValue, setColorValue,
    hexValue, setHexValue,
    isDarkText, setIsDarkText
  }
  ) => {
  return (
    <form
      onSubmit={e => e.preventDefault()}
    >
      <label>Add Color Name </label>
      <input
        type="text"
        autoFocus
        value={colorValue || hexValue}
        onChange={
          (e) =>
          {
            setColorValue(e.target.value);
            setHexValue(colorNames(e.target.value));
            }
        }
        placeholder="Add Color Name"
        required
      />
      <button
        type="button"
        onClick={()=>setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
      </form>
  )
}

export default Input