import * as React from "react";
import PropTypes from "prop-types";

type ProductSearchbarProps = {
  tags: string[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
};

const ProductSearchbar: React.FC<ProductSearchbarProps> = ({
  tags,
  selectedTags,
  setSelectedTags,
}) => {
  React.useEffect(() => {
    //console.log(tags);
  }, []);

  const handleClickTag = (tag: string) => {
    let _selectedTags = [...selectedTags];
    if (_selectedTags.includes(tag)) {
      _selectedTags = _selectedTags.filter((t) => t !== tag);
    } else {
      _selectedTags = [..._selectedTags, tag];
    }
    setSelectedTags([..._selectedTags]);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-start items-center">
        {tags.map((t, i) => {
          return (
            <button
              type="button"
              onClick={() => handleClickTag(t)}
              key={i}
              className={`${
                selectedTags.includes(t)
                  ? "bg-primary-400"
                  : "bg-primary-100 hover:bg-primary-200 text-primary-800"
              } cursor-pointer px-2 py-1 text-xs font-medium rounded-full duration-200 transition-all ease-in-out`}
            >
              #{t}
            </button>
          );
        })}
      </div>
    </>
  );
};

ProductSearchbar.propTypes = {
  //
};

export default ProductSearchbar;
