import {AppDispatch, RootState} from "../redux/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const useAppSelector:TypedUseSelectorHook<RootState>=useSelector
const useAppDispatch=()=>useDispatch<AppDispatch>()

export {
    useAppDispatch,
    useAppSelector
}