import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart } from "app/slices/cartSlice";
interface Props {
  cartQuantity: number;
}
function PlusMinusButton(props: Props) {
  const { cartQuantity } = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props));
  };
  const handleDecreaseCart = () => {
    dispatch(decreaseCart(props));
  };

  const handleIncrement = () => {
    handleAddToCart();
  };
  const handleDecrement = () => {
    handleDecreaseCart();
  };
  return (
    <ButtonGroup
      size="small"
      aria-label="small outlined button group"
      variant="text"
    >
      <Button
        onClick={handleIncrement}
        color="primary"
        style={{ borderRight: "none" }}
      >
        +
      </Button>
      {cartQuantity > 0 && (
        <Button disabled variant="outlined">
          {cartQuantity}
        </Button>
      )}
      {cartQuantity > 0 && (
        <Button onClick={handleDecrement} color="primary">
          -
        </Button>
      )}
    </ButtonGroup>
  );
}

export default PlusMinusButton;
