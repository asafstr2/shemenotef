import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "app/slices/cartSlice";
import { useGetProductByIdQuery } from "app/services/productsApi";
import { useEffect } from "react";
import Loader from "components/utils/Loader";

function ProductPage() {
  const navigate = useNavigate();

  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading: productLoading } = useGetProductByIdQuery({
    id: productId,
  });
  useEffect(() => {
    if (!productLoading && data) {
      dispatch(addToCart(data));
      navigate("/checkout", { replace: true });
    }
  }, [data, dispatch, navigate, productLoading]);

  return (
    <div>
      <Loader />
    </div>
  );
}

export default ProductPage;
