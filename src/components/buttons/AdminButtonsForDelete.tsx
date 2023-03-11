import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "app/slices/cartSlice";
import { translate } from "util/translate";
import { useDeleteProductMutation } from "app/services/productsApi";
import { isAnAdmin } from "util/functions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoaderButton from "components/buttons/LoaderButton";
interface Props {
  productId: string | number;
  title: string;
}
export function AdminButtonsForDelete({ productId, title }: Props) {
  const dispatch = useDispatch();
  const isAdmin = useSelector(isAnAdmin);
  const navigate = useNavigate();

  const [deleteProduct, { isLoading, fulfilledTimeStamp, error }] =
    useDeleteProductMutation();
  const handleDelete = () => {
    dispatch(removeFromCart({ productId }));
    deleteProduct(productId);
    toast.error(error ? `${title} deleted successfully` : "", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
  };
  useEffect(() => {
    if (fulfilledTimeStamp && !isLoading) {
      navigate("/", { replace: true });
    }
  }, [deleteProduct, fulfilledTimeStamp, isLoading, navigate]);

  return (
    <>
      {isAdmin && (
        <div>
          <LoaderButton
            size="small"
            color="error"
            handleSubmit={handleDelete}
            buttonText={translate("delete")}
            variant="text"
            loading={isLoading}
          />
        </div>
      )}
    </>
  );
}
