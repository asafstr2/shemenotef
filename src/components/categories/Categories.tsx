import { useGetCategoryByIdQuery } from "app/services/categoriesApi";
import { Products, Category } from "app/types/core";
import { CardContainer } from "components/Homepage/homepage.style";
import { AdminButton } from "components/buttons/AdminButtons";
import Card from "components/cards/ProductCardForHomePage";

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function CategoryComponent() {
  const navigate = useNavigate();
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
  return (
    <div>
      <AdminButton
        handleAction={() => navigate(`/admin/addProduct`)}
        text="הוסף מוצר חדש"
      />{" "}
      <CardContainer>
        {categoryData.products?.map((product: Products) => (
          <Card product={product} key={product._id} />
        ))}
      </CardContainer>
    </div>
  );
}

export default CategoryComponent;
