import toastr from 'toastr';

export const ToastType = {
	INFO: 'INFO',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR'
};

const useToast = ({ toastType, message }) => {
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

	function clearToast() {
		toastr.clear();
	}

	function show() {
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
	}

	return { clearToast, show };
};

export default useToast;
