import { useGetCategoryByIdQuery } from "app/services/categoriesApi";
import { Products, Category } from "app/types/core";
import { CardContainer } from "components/Homepage/homepage.style";
import Card from "components/cards/ProductCardForHomePage";

import React from "react";
import { useParams } from "react-router-dom";

function CategoryComponent() {
  const { categoryid } = useParams<{ categoryid: string }>();
  const {
    data: categoryData,
    isLoading: CategoryLoading,
    refetch: categoryRefetch,
  } = useGetCategoryByIdQuery({ id: categoryid }) as {
    data: Category;
    isLoading: boolean;
    refetch: () => void;
  };

  if (CategoryLoading) return <h1>loading</h1>;
  console.log({ categoryData });
  return (
    <div>
      <CardContainer>
        {categoryData.products?.map((product: Products) => (
          <Card product={product} key={product._id} />
        ))}
      </CardContainer>
    </div>
  );
}

export default CategoryComponent;
