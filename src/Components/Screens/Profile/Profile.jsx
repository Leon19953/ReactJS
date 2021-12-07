import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckboxAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const { name, checked } = useSelector(profileSelector);

  const handleTogglechecked = () => {
    dispatch(toggleCheckboxAction());
  };

  return (
    <>
      <Checkbox onClick={handleTogglechecked}></Checkbox>
      {checked && name}
    </>
  );
};
