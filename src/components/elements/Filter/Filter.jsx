import Select from "react-select";

function Filter(props) {
  return (
    <label>
      {props.label} :{" "}
      <Select
        options={props.options}
        isMulti
        isSearchable
        onChange={props.onChange}
        className="my-react-select-container"
        classNamePrefix="my-react-select"
      />
    </label>
  );
}

export default Filter;
