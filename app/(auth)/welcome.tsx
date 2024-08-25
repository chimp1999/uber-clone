import { onboardingData } from '@/constants'
import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LottieView from 'lottie-react-native'
import { widthPercentageToPx } from '@/utils/SizeConversion'
import CustomButton from '@/components/CustomButton'
import { useEffect, useRef, useState } from 'react'
import { OnboardingData } from '@/types/type'
import Animated, {
	Extrapolation,
	interpolate,
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated'
import ArrowRight from '@/assets/icons/forward-arrow.png'

const Dot = ({ isActive }: { isActive: boolean }) => {
	const width = useSharedValue<number>(0)

	useEffect(() => {
		width.value = isActive ? withSpring(1) : withSpring(0)
	}, [isActive, width])

	const animatedDotStyle = useAnimatedStyle(() => {
		const widthAnimation = interpolate(width.value, [1, 0], [35, 20])
		const opacityAnimation = interpolate(
			width.value,
			[1, 0],
			[1, 0.5],
			Extrapolation.CLAMP
		)
		const backgroundColorAnimation = interpolateColor(
			width.value,
			[1, 0],
			['#1d4e89ff', '#72523B']
		)
		return {
			width: widthAnimation,
			opacity: opacityAnimation,
			backgroundColor: backgroundColorAnimation,
		}
	})

	return <Animated.View style={[styles.dotStyle, animatedDotStyle]} />
}

const AnimatedButton = ({
	currentIndex,
	handleNextButtonClick,
	handleGetStartedButtonClick,
}: {
	currentIndex: number
	handleNextButtonClick: () => void
	handleGetStartedButtonClick: () => void
}) => {
	const width = useSharedValue<number>(0)
	useEffect(() => {
		if (currentIndex === 2) width.value = withSpring(1)
		else width.value = withSpring(0)
	}, [currentIndex, width])

	const animatedButtonStyle = useAnimatedStyle(() => {
		const widthAnimation = interpolate(width.value, [0, 1], [80, 200])
		return {
			width: widthAnimation,
		}
	})

	return (
		<Animated.View style={[styles.buttonStyle, animatedButtonStyle]}>
			<CustomButton
				title={currentIndex === 2 ? 'Get Started' : ''}
				IconLeft={() =>
					currentIndex === 2 ? (
						<></>
					) : (
						<Image
							style={{ tintColor: '#fbd1a2ff' }}
							source={ArrowRight}
						/>
					)
				}
				onPress={
					currentIndex === 2
						? handleGetStartedButtonClick
						: handleNextButtonClick
				}
				className="mt-10 mb-5 h-1/2"
			/>
		</Animated.View>
	)
}

const RenderItem = ({
	item,
	index,
}: {
	item: OnboardingData
	index: number
}) => {
	return (
		<View
			key={index}
			className="flex-1 justify-center items-center w-screen px-[5%] flex-col gap-y-[20%]"
		>
			<LottieView
				source={item.image}
				autoPlay={true}
				loop={false}
				style={styles.animation}
				speed={item.animationSpeed}
			/>
			<View className="flex flex-col">
				<Text className="text-primary-700 text-3xl font-bold  text-center mb-[10%]">
					{item.title}
				</Text>
				<Text className="text-base font-JakartaSemiBold text-center text-secondary-700 mt-3">
					{item.description}
				</Text>
			</View>
		</View>
	)
}

const Welcome = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const scrollRef = useRef<FlatList>(null)

	const handleNextButtonClick = () =>
		scrollRef.current?.scrollToIndex({
			index: currentIndex + 1,
			animated: true,
		})

	const handleGetStartedButtonClick = () => alert('Hello')

	return (
		<SafeAreaView className="flex-1 bg-bgprimary-200">
			<FlatList
				ref={scrollRef}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				snapToAlignment="start"
				decelerationRate={'fast'}
				snapToInterval={widthPercentageToPx(100)}
				data={onboardingData}
				renderItem={({ item, index }) => (
					<RenderItem item={item} index={index} />
				)}
				keyExtractor={(item) => `${item.id}`}
				onScroll={(event) => {
					const totalWidth = event.nativeEvent.layoutMeasurement.width
					const xPosition = event.nativeEvent.contentOffset.x
					const newIndex = Math.round(xPosition / totalWidth)
					if (newIndex !== currentIndex) {
						setCurrentIndex(newIndex)
					}
				}}
			/>
			<View className="h-[20%] justify-center items-center">
				<View className="flex flex-row">
					{Array(3)
						.fill(null)
						.map((_, index) => (
							<Dot
								key={index}
								isActive={currentIndex === index}
							/>
						))}
				</View>
				<AnimatedButton
					currentIndex={currentIndex}
					handleNextButtonClick={handleNextButtonClick}
					handleGetStartedButtonClick={handleGetStartedButtonClick}
				/>
			</View>
		</SafeAreaView>
	)
}

export default Welcome

const styles = StyleSheet.create({
	animation: {
		width: widthPercentageToPx(80),
		aspectRatio: 1.5,
	},
	dotStyle: {
		height: 20,
		marginHorizontal: 4,
		borderRadius: 50,
	},
	buttonStyle: {},
})
