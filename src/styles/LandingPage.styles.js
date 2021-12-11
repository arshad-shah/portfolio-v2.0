import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	hero: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		color: '#ffffff',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			fontSize: theme.spacing(2),
		},
	},
	landingIntro: {
		padding: '0.7rem',
		[theme.breakpoints.down('xs')]: {
			paddingBottom: '0',
		},
	},
	landingName: {
		padding: '0.7rem',
	},
	landingDesc: {
		padding: '0.7rem',
	},
	socialLinks: {
		padding: '1rem',
		fontSize: '2rem',
	},
	Links: {
		padding: '1rem',
		[theme.breakpoints.down('xs')]: {
			paddingTop: '0',
		},
	},
}));
