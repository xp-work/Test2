import { MenuItem, Menus } from "@project-self/assets/consts/menus";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ILayoutSliceState {
	menus: Nullable<MenuItem[]>;
	/**
	 * @description 样式配置抽屉打开状态
	 */
	settingDrawer: boolean;
	breadcrumb?: {
		replace?: boolean;
		title?: string;
		url?: string;
	};
}

const initialState: ILayoutSliceState = {
	menus: Menus,
	settingDrawer: false,
	breadcrumb: undefined,
};

export const layoutSlice = createSlice({
	name: "layout-slice",
	initialState,
	reducers: {
		setMenus: (state, action: PayloadAction<Nullable<MenuItem[]>>) => {
			state.menus = action.payload;
		},
		setSettingDrawer: (state, action: PayloadAction<boolean>) => {
			if (import.meta.env.NSP_THEME_CONFIG == "true") {
				state.settingDrawer = action.payload;
			} else {
				state.settingDrawer = false;
			}
		},
		setLastBreadcrumb: (
			state,
			action: PayloadAction<
				| {
						replace?: boolean;
						title?: string;
						url?: string;
				  }
				| undefined
			>
		) => {
			state.breadcrumb = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setMenus, setSettingDrawer, setLastBreadcrumb } = layoutSlice.actions;

export default layoutSlice.reducer;
