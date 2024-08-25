import check from '@/assets/images/check.png'
import getStarted from '@/assets/images/get-started.png'
import message from '@/assets/images/message.png'
import noResult from '@/assets/images/no-result.png'
// import onboarding1 from '@/assets/images/onboarding1.png'
// import onboarding2 from '@/assets/images/onboarding2.png'
// import onboarding3 from '@/assets/images/onboarding3.png'
import signUpCar from '@/assets/images/signup-car.png'
import onboarding1 from '@/assets/lottie/onboarding1.json'
import onboarding2 from '@/assets/lottie/onboarding2.json'
import onboarding3 from '@/assets/lottie/onboarding3.json'

export const images = {
	onboarding1,
	onboarding2,
	onboarding3,
	getStarted,
	signUpCar,
	check,
	noResult,
	message,
}

export const onboardingData = [
	{
		id: 1,
		title: 'Your next ride is just a click away!',
		description:
			'Start your journey with EasyGo. Effortlessly find the ride that suits you best.',
		image: images.onboarding1,
		animationSpeed: 1,
	},
	{
		id: 2,
		title: 'Top-tier rides at your fingertips with EasyGo!',
		description:
			'Experience the ease of securing your perfect ride with EasyGo.',
		image: images.onboarding2,
		animationSpeed: 1,
	},
	{
		id: 3,
		title: 'Ride your way, anytime, anywhere!',
		description:
			"Add your destination, relax, and we'll handle the rest with EasyGo.",
		image: images.onboarding3,
		animationSpeed: 1.5,
	},
]
