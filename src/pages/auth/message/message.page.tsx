import React, { FC, useEffect, useState } from 'react';
import OptionalWrapper from '../../../common/components/elements/wrapper/OptionalWrapper';
import SymbolLogo from '../../../assets/svg/gl-logo-symbol.svg';
import Button from '../../../common/components/elements/button';
import { useLocation, useNavigate } from 'react-router-dom';
import TextButton from '../../../common/components/elements/button/TextButton';
import { TokenType, useResendTokenMutation } from '../../../generated/graphql';
import { showError, showSuccess } from '../../../common/helpers/showToast';

type MessagePageProps = {
	title?: string;
	description: string;
};

const MessagePage: FC<MessagePageProps> = ({ title, description }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const emailSentRoute = location.pathname === '/auth/email-sent';
	const email = location.state.email;

	/**
	 * Handle Token Resend
	 */
	const [, resendToken] = useResendTokenMutation();
	const [mailResent, setMailResent] = useState<boolean>(false);

	useEffect(() => {
		if (emailSentRoute && !email) navigate('/auth/login');
		// eslint-disable-next-line
	}, [emailSentRoute, email]);

	const handleResendToken = async () => {
		if (!location) return;
		const { data } = await resendToken({
			input: { email, type: TokenType.ConfirmUser },
		});
		if (data?.resendToken) {
			setMailResent(true);
			return showSuccess('Confirmation email resent.');
		}
		return showError('An error has occurred.');
	};

	return (
		<div className="flex flex-col items-center justify-center h-full pb-32">
			<img src={SymbolLogo} alt="Gate Lock Logo" className="w-80 mb-16" />
			<OptionalWrapper data={title}>
				<h3 className="mb-8 w-88">{title}</h3>
			</OptionalWrapper>
			<OptionalWrapper data={description}>
				<h3 className="mb-16 w-128 text-center">{description}</h3>
			</OptionalWrapper>
			<Button onClick={() => navigate('/auth/login')}>Back</Button>

			{/* Email Sent Route - Resend Button */}
			<OptionalWrapper data={emailSentRoute && !mailResent}>
				<TextButton className="mt-4" onClick={handleResendToken}>
					Didn't receive? Resend.
				</TextButton>
			</OptionalWrapper>
		</div>
	);
};

export default MessagePage;
