import { useSelector } from "react-redux";

import { translate } from "util/translate";
import { isAnAdmin } from "util/functions";

import LoaderButton from "components/buttons/LoaderButton";
interface Props {
  handleAction: () => void;
  loading?: boolean;
  text: string;
  variant?: "contained" | "outlined" | "text";
}
export function AdminButton({
  handleAction,
  loading = false,
  text,
  variant,
}: Props) {
  const isAdmin = useSelector(isAnAdmin);

  return (
    <>
      {isAdmin && (
        <div>
          <LoaderButton
            size="small"
            color="primary"
            handleSubmit={handleAction}
            buttonText={text}
            variant={variant ?? "text"}
            loading={loading}
          />
        </div>
      )}
    </>
  );
}
