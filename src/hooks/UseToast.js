import toastr from 'toastr';
import { useCallback, useEffect, useState } from 'react';
import { Messages } from '../utils/Messages';

export const ToastType = {
	INFO: 'INFO',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR'
};

const useToast = (toastType) => {
	const [message, setMessage] = useState('');
	toastr.options = {
		positionClass: 'toast-bottom-right',
		closeButton: true,
		progressBar: toastType === ToastType.INFO,
		preventDuplicates: true,
		duration: 4000,
		newestOnTop: true,
		showEasing: 'swing',
		hideMethod: 'fadeOut'
	};


	const show = useCallback(() => {
		if (message) {

			switch (toastType) {
				case ToastType.INFO:
					toastr.info(message);
					break;
				case ToastType.ERROR:
					const translatedError = Messages.error[message];
					toastr.error(translatedError ? translatedError: message);
					break;
				case ToastType.SUCCESS:
					const translatedSuccess = Messages.success[message];
					toastr.success(translatedSuccess);
					break;
				default:
					toastr.error(message);
					break;
			}
		}
		setMessage('');

	}, [message, toastType]);


	useEffect(() => {
		if (message) {
			show();
		}
	}, [message, show]);

	function clearToast() {
		toastr.clear();
	}
	return { clearToast, setMessage };

};
export default useToast;
