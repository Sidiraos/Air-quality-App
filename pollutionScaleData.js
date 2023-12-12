const pollutionScale = [
	{
		scale: [0, 50],
		quality: 'Good',
		src: 'happy',
		background: 'linear-gradient(to right, #45B649, #DCE35B)',
	},
	{
		scale: [51, 100],
		quality: 'Moderate',
		src: 'thinking',
		background: 'linear-gradient(to right, #F3F9A7, #CAC531)',
	},
	{
		scale: [101, 150],
		quality: 'Unhealthy',
		src: 'unhealthy',
		background: 'linear-gradient(to right, #F16529, #E44D26)',
	},
	{
		scale: [151, 200],
		quality: 'Bad',
		src: 'bad',
		background: 'linear-gradient(to right, #ef473a, #cb2d3e)',
	},
	{
		scale: [201, 300],
		quality: 'Very bad',
		src: 'mask',
		background: 'linear-gradient(to right, #8E54E9, #4776E6)',
	},
	{
		scale: [301, 500],
		quality: 'Terrible',
		src: 'terrible',
		background: 'linear-gradient(to right, #7a2828, #a73737)',
	},
];

export default pollutionScale;