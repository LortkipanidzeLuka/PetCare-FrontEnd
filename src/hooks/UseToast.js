import toastr from 'toastr';
import { useCallback, useEffect, useState } from 'react';

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
					toastr.error(message);
					break;
				case ToastType.SUCCESS:
					toastr.success(message);
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
