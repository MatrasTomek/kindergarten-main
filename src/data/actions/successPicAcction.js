export const SET_SUCCESS_PIC_ITEM = "SET_SUCCESS_PIC_ITEM";
export const DELET_SUCCESS_PIC_ITEM = "DELET_SUCCESS_PIC_ITEM";

export const setPicItem = (itemData) => ({
	type: SET_SUCCESS_PIC_ITEM,
	payload: itemData,
});
export const delPicItem = () => ({
	type: DELET_SUCCESS_PIC_ITEM,
	payload: false,
});
