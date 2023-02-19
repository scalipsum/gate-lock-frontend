import React, { FC } from 'react';
import OptionalWrapper from '../../../common/components/elements/wrapper/OptionalWrapper';
import AuthContainer from '../auth.container';

type MessagePageProps = {
	title?: string;
	description: string;
};

const MessagePage: FC<MessagePageProps> = ({ title, description }) => {
	return (
		<AuthContainer>
			<div>
				<h3>Message Page</h3>
				<OptionalWrapper data={title}>{title}</OptionalWrapper>
				<OptionalWrapper data={description}>{description}</OptionalWrapper>
			</div>
		</AuthContainer>
	);
};

export default MessagePage;
