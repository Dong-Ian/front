import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../Style/home.module.css";

import LoadCategoryFunction from "../../Posting/Function/LoadCategoryFunction";

function CategoryRender({ categoryList }) {
  const navigate = useNavigate();

  return (
    <div>
      {categoryList.map((category) => (
        <p
          key={category}
          onClick={() =>
            navigate(`/postlist/category/${category}`, {
              state: { category: category },
            })
          }
        >
          {category}
        </p>
      ))}
    </div>
  );
}

function Category() {
  const [categoryList, setCatgoryList] = useState(null);

  async function LoadCategory() {
    const result = await LoadCategoryFunction();

    if (result.result) {
      setCatgoryList(result.categoryList);
    }
  }
  useEffect(() => {
    LoadCategory();
  }, []);

  if (categoryList) {
    return (
      <div className={styles.category}>
        <p>카테고리</p>
        <CategoryRender categoryList={categoryList} />
      </div>
    );
  }
}

export default Category;
