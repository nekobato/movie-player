import { mode } from '../values';

export const state = {
  settings: localStorage.Settings
    ? JSON.parse(localStorage.Settings)
    : {
        opacity: 100,
        hideOnLauncher: false,
      },
  window: {
    onMouse: false,
  },
  mode: mode.video,
  video: {
    source: '',
    media: {
      index: 0,
      duration: 0,
      currentTime: 0,
    },
    fileList: [],
  },
  web: {
    url: 'https://google.com',
    action: '',
    histories: [],
  },
  views: {
    window: false,
    controller: '',
  },
};

export type State = typeof state;
