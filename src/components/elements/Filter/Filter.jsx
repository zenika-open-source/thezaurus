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
      />
    </label>
  );
}

export default Filter;
