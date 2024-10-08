import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StateSchema } from "@/app/storeProvider/index";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<StateSchema>();
