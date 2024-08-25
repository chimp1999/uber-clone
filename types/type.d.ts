import { TouchableOpacityProps } from 'react-native'

declare interface OnboardingData {
	id: number
	title: string
	description: string
	image: string
	animationSpeed: number
}

declare interface ButtonProps extends TouchableOpacityProps {
	title: string
	bgVariant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success'
	textVariant?: 'primary' | 'default' | 'secondary' | 'danger' | 'success'
	IconLeft?: React.ComponentType<any>
	IconRight?: React.ComponentType<any>
	className?: string
	onPress: TouchableOpacityProps['onPress']
}
