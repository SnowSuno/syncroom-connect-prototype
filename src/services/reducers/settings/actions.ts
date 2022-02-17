const SET = 'settings/SET';

interface SetSetting {
    size?: number;
    quickEnterEnabled?: boolean;
    masonryLayoutEnabled?: boolean;
    animationEnabled?: boolean;
    darkModeEnabled?: boolean;
}

export const set = (settings: SetSetting) => ({
    type: SET,
    payload: settings,
});

type SettingsAction = ReturnType<typeof set>;

interface SettingState {
    size: number;
    quickEnterEnabled: boolean;
    masonryLayoutEnabled: boolean;
    animationEnabled: boolean;
    darkModeEnabled: boolean;
}

const initialState: SettingState = {
    size: 1,
    quickEnterEnabled: true,
    masonryLayoutEnabled: false,
    animationEnabled: true,
    darkModeEnabled: false,
};


const settings = (
    state: SettingState = initialState,
    action: SettingsAction
): SettingState => {
    switch (action.type) {
        case SET:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export default settings;
