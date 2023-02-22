import { toast } from 'react-toastify';

const TOAST_TIME = 2750;
const toastProps = {
	autoClose: TOAST_TIME,
	draggable: true,
	pauseOnFocusLoss: false,
	className: 'rounded-lg bg-white font-sans pb-1.5',
	hideProgressBar: true,
};

export const showError = (gqlErrorMessage: string | undefined) => {
	if (!gqlErrorMessage) return;
	const formatError = gqlErrorMessage.replace('[GraphQL] ', '');
	return toast.error(formatError, toastProps);
};

export const showSuccess = (message: string) => {
	return toast.success(message, toastProps);
};
