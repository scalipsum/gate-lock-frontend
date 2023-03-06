import React, { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../common/components/elements/Loading';
import { showError, showSuccess } from '../../../common/helpers/showToast';
import { useConfirmUserMutation } from '../../../generated/graphql';

const UserConfirmPage: FC = () => {
	const [, confirmUser] = useConfirmUserMutation();
	const params = useParams();
	const navigate = useNavigate();
	console.log(params.id);

	useEffect(() => {
		if (params.id) {
			const confirm = async () => {
				const { data } = await confirmUser({
					input: { token: params.id ?? '' },
				});
				console.log(data?.confirmUser);
				if (data?.confirmUser) {
					showSuccess('User confirmed.');
					navigate('/auth/create-account');
				} else {
					navigate('/auth/login');
					showError('User could not be confirmed.');
				}
			};
			confirm();
		}
		// eslint-disable-next-line
	}, [params.id]);

	return (
		<div className="flex flex-col items-center justify-center mt-40">
			<Loading />
		</div>
	);
};

export default UserConfirmPage;
