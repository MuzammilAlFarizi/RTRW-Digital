import {StyleSheet, Platform} from 'react-native';

const COLOR_WHITE = '#FFFFFF';
const COLOR_BLACK = '#484848';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	font12: {
		fontFamily: 'brown_regular',
		fontSize: 12,
		textAlign: 'center',
		color: '#FFFFFF',
		marginTop: 6,
	},
	header: {
		fontFamily: 'brown_regular',
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 30,
		marginTop: -3,
		marginBottom: 45,
		color: '#3abbf2',
	},
	kData: {
		
		fontFamily: 'brown_regular',
		color: '#3abbf2',
		fontSize: 20,
		marginTop: -8,
		marginBottom: 10,
		marginHorizontal: 16,
	},
	touchSend: {

	},
	jData: {
		fontFamily: 'brown_regular',
		color: '#3abbf2',
		fontSize: 20,
		marginTop: 10,
		marginBottom: 10,
		marginHorizontal: 16,
	},
	vicon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		marginHorizontal: 16,
	},
	icon: {
		marginHorizontal: 16,
	},
	packetData: {
		width: 362,
		height: 245,
		borderColor: '#CACCCF',
		borderWidth: 1,
		marginHorizontal: 16,
		borderRadius: 5,
	},
	packetData2: {
		borderColor: '#CACCCF',
		borderWidth: 1,
		marginHorizontal: 16,
		borderRadius: 5,
		flexDirection: 'row',
		justifyContent: 'center',
		ailgnItems: 'center',
	},
	inputText: {
		borderColor: '#CACCCF',
		marginHorizontal: 15,
		marginBottom: -18,
		marginTop: -1,
	},
	inputText2: {
		borderColor: '#CACCCF',
		marginTop: -1,
		marginHorizontal: 15,
		marginBottom: -18,
	},
	inputText3: {
		borderColor: '#CACCCF',
		marginTop: 1,
		marginHorizontal: 15,
		marginBottom: -18,

	},
	inputText4: {
		borderColor: '#CACCCF',
		marginTop: 1,
		marginHorizontal: 15,
		marginBottom: -18,
	},
	inputText5: {
		borderColor: '#CACCCF',
		marginTop: 1,
		marginHorizontal: 15,
		marginBottom: -16,
		paddingBottom: 30,
	},
	dNIK: {
		borderColor: '#CACCCF',
		borderBottomWidth: 1,
		marginHorizontal: 18,
	},
	absoluteText: {
		zIndex: 1,
		height: 18,
		width: 15,
		backgroundColor: '#000000',
		paddingHorizontal: 5,
		position: 'absolute',
		top: -5,
		left: 361,
	},
	absoluteText1: {
		height: 18,
		width: 15,
		backgroundColor: '#000000',
		paddingHorizontal: 5,
		position: 'absolute',
		top: -5,
		right: 361,
	},
	number: {
		justifyContent: 'center',
		textAlign: 'center',
		borderColor: '#000000',
		marginHorizontal: 16,
		borderRadius: 5,
		marginVertical: 20,
		
	},
	minus: {
		marginVertical: 20,
	},
	touchSend: {
		width: 80,
		height: 33,
		backgroundColor: '#3abbf2',
		borderRadius: 5,
		marginLeft: 297,
		marginTop: 10,
	},

	textInput: {
		borderColor: '#CACCCF',
		marginLeft: 16,
		marginTop: -20,
		marginBottom: -20,

	},
});
export default styles;
