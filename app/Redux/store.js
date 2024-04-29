import noteSlice from './features/noteSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
	reducer: {
		notes: noteSlice,
	},
});

export default store;
