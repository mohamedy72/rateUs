const Rate = ({ children, handleRating, isSelected, selectedRate, index }) => {
  return (
    <div
      className={`rate ${
        isSelected && selectedRate == index + 1 ? "selected" : null
      }`}
      onClick={handleRating}
    >
      {children}
    </div>
  );
};
export default Rate;
