import '../styles/vars.css';
import '../styles/main.css';
import '../styles/buttons.css';
import '../styles/forms.css';
// import '../styles/log-sign.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
