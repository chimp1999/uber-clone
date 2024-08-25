import { Dimensions, PixelRatio } from 'react-native'

let screenHeight = Dimensions.get('window').height
let screenWidth = Dimensions.get('window').width

const widthPercentageToPx = (percentValue: number | string): number => {
	const elemWidth =
		typeof percentValue === 'number'
			? percentValue
			: parseFloat(percentValue)

	return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100)
}

const heightPercentageToPx = (percentValue: number | string): number => {
	const elemHeight =
		typeof percentValue === 'number'
			? percentValue
			: parseFloat(percentValue)

	return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100)
}

/* TODO - relplace all fontsize uses with this function, based on usage update the sizeMap values */
type fontSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

const relativeFontSize = (value: fontSizeType): number => {
	const sizeMap: Record<fontSizeType, number> = {
		xs: 3.5,
		sm: 4,
		md: 5,
		lg: 6,
		xl: 7,
		xxl: 10,
	}
	const baseRef =
		screenWidth < screenHeight ? widthPercentageToPx : heightPercentageToPx

	return baseRef(sizeMap[value])
}

/* TODO - relplace all iconsize uses with this function, based on usage update the sizeMap values */
type iconSizeType = 'sm' | 'md' | 'lg'

const relativeIconSize = (value: iconSizeType): number => {
	const sizeMap: Record<iconSizeType, number> = {
		sm: 4, //18
		md: 6, //24
		lg: 8,
	}
	const baseRef =
		screenWidth < screenHeight ? widthPercentageToPx : heightPercentageToPx

	return baseRef(sizeMap[value])
}

export {
	widthPercentageToPx,
	heightPercentageToPx,
	relativeFontSize,
	relativeIconSize,
}
