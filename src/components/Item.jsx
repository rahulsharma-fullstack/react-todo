/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Item = ({ handleOnClick, todoItem }) => {
  const todoDate = "04/03/2013";

  return (
    <div>
      {todoItem.map((item, idx) => (
        <div key={idx} className="row kg-row">
          <div className="col-6">
            <p>{item}</p>
          </div>
          <div className="col-4">
            <p>{todoDate}</p>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button" onClick={(e) => handleOnClick(e, item)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
