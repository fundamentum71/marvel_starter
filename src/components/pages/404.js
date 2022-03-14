import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
	return (
		<div>
			<ErrorMessage />
			<p style={{ fontWeight: 'bold', fontSize: '28px', textAlign: 'center' }}>Page doesn't exist</p>
			<Link
				style={{
					fontWeight: 'bold',
					fontSize: '28px',
					textAlign: 'center',
					display: 'block',
					marginTop: '40px',
				}}
				to="/"
			>
				Back to main Page
			</Link>
		</div>
	);
};

export default Page404;
