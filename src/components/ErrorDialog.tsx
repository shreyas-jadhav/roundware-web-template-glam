import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import React from 'react';

interface ErrorDialogProps {
	error: Error | null;
	set_error: React.Dispatch<React.SetStateAction<Error | null>>;
}
const ErrorDialog = ({ error, set_error }: ErrorDialogProps) => {
	return (
		<Dialog open={error !== null}>
			<DialogContent>
				<DialogContentText>{error ? error.message : `Something went wrong! Please try again.`}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant='contained'
					onClick={() => {
						set_error(null);
					}}
				>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ErrorDialog;
